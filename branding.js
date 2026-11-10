(function () {
  'use strict';

  const BRANDING_API = 'https://zonguru-admin.onrender.com/api/public/branding';
  const DEFAULT_NAME = 'Zonguru';
  const DEFAULT_LOGO = './zonguru-icon.svg';
  const originalText = new WeakMap();
  const originalAttributes = new WeakMap();
  const originalImageSources = new WeakMap();
  const originalSvgDisplay = new WeakMap();
  const originalBrandNameMarkup = new WeakMap();
  const originalTitle = document.title;

  let currentName = DEFAULT_NAME;
  let currentLogo = '';
  let observer = null;

  function validLogo(value) {
    return typeof value === 'string' &&
      value.length <= 3000000 &&
      /^data:image\/(png|jpeg|webp|gif);base64,[A-Za-z0-9+/]+={0,2}$/i.test(value);
  }

  function brandText(value) {
    if (currentName === DEFAULT_NAME) return value;
    return String(value).replace(/Zonguru/gi, currentName);
  }

  function updateTextNode(node) {
    if (!node || !node.parentElement) return;
    const parent = node.parentElement;
    if (parent.closest('script,style,textarea,input,noscript')) return;
    if (parent.isContentEditable) return;
    if (!originalText.has(node)) originalText.set(node, node.nodeValue || '');
    const source = originalText.get(node);
    const next = brandText(source);
    if (node.nodeValue !== next) node.nodeValue = next;
  }

  function updateAttributes(root) {
    const elements = [];
    if (root && root.nodeType === 1) elements.push(root);
    if (root && root.querySelectorAll) elements.push(...root.querySelectorAll('[alt],[aria-label],[title]'));
    elements.forEach((element) => {
      ['alt', 'aria-label', 'title'].forEach((attribute) => {
        if (!element.hasAttribute(attribute)) return;
        let values = originalAttributes.get(element);
        if (!values) {
          values = {};
          originalAttributes.set(element, values);
        }
        if (!(attribute in values)) values[attribute] = element.getAttribute(attribute);
        const source = values[attribute];
        const next = brandText(source);
        if (element.getAttribute(attribute) !== next) element.setAttribute(attribute, next);
      });
    });
  }

  function updateText(root) {
    const start = root && root.nodeType === 1 ? root : document.body;
    if (!start) return;
    const walker = document.createTreeWalker(start, NodeFilter.SHOW_TEXT);
    let node;
    while ((node = walker.nextNode())) updateTextNode(node);
    if (start.nodeType === 1 && start.childNodes.length === 0 && start.textContent) {
      // Empty-element text is handled by the normal text walker when it is added.
    }
    updateAttributes(start);
  }

  function updateBrandNameElements(root) {
    const elements = [];
    if (root && root.nodeType === 1 && root.matches('.brand-name')) elements.push(root);
    if (root && root.querySelectorAll) elements.push(...root.querySelectorAll('.brand-name'));
    elements.forEach((element) => {
      if (!originalBrandNameMarkup.has(element)) originalBrandNameMarkup.set(element, element.innerHTML);
      const original = originalBrandNameMarkup.get(element);
      if (currentName === DEFAULT_NAME) {
        if (element.innerHTML !== original) element.innerHTML = original;
      } else if (element.textContent !== currentName || element.children.length) {
        element.textContent = currentName;
      }
    });
  }

  function updateLogos(root) {
    const start = root && root.nodeType === 1 ? root : document;
    if (!start.querySelectorAll) return;

    const inlineLogos = [];
    if (start.matches && start.matches('svg.z-logo-mark, svg.brand-mark')) inlineLogos.push(start);
    inlineLogos.push(...start.querySelectorAll('svg.z-logo-mark, svg.brand-mark'));

    inlineLogos.forEach((svg) => {
      if (!originalSvgDisplay.has(svg)) originalSvgDisplay.set(svg, svg.style.display || '');
      let custom = svg.parentElement && svg.parentElement.querySelector('img[data-platform-custom-logo]');
      if (currentLogo) {
        if (!custom) {
          custom = document.createElement('img');
          custom.setAttribute('data-platform-custom-logo', 'true');
          custom.className = svg.getAttribute('class') || '';
          custom.style.objectFit = 'contain';
          svg.insertAdjacentElement('afterend', custom);
        }
        custom.src = currentLogo;
        custom.alt = currentName + ' logo';
        svg.style.display = 'none';
      } else {
        svg.style.display = originalSvgDisplay.get(svg);
        if (custom) custom.remove();
      }
    });

    const iconImages = [];
    if (start.matches && start.matches('img[src*="zonguru-icon.svg"]')) iconImages.push(start);
    iconImages.push(...start.querySelectorAll('img[src*="zonguru-icon.svg"]'));
    iconImages.forEach((img) => {
      if (!originalImageSources.has(img)) originalImageSources.set(img, img.getAttribute('src') || DEFAULT_LOGO);
      img.src = currentLogo || originalImageSources.get(img);
      img.alt = currentName + ' logo';
      img.style.objectFit = 'contain';
    });
  }

  function updateBrowserBranding() {
    document.title = currentName === DEFAULT_NAME
      ? originalTitle
      : originalTitle.replace(/Zonguru/gi, currentName);

    let icon = document.querySelector('link[rel~="icon"]');
    if (!icon) {
      icon = document.createElement('link');
      icon.rel = 'icon';
      document.head.appendChild(icon);
    }
    if (!icon.dataset.platformOriginalHref) {
      icon.dataset.platformOriginalHref = icon.getAttribute('href') || DEFAULT_LOGO;
    }
    icon.href = currentLogo || icon.dataset.platformOriginalHref || DEFAULT_LOGO;

    let appName = document.querySelector('meta[name="application-name"]');
    if (!appName) {
      appName = document.createElement('meta');
      appName.name = 'application-name';
      document.head.appendChild(appName);
    }
    appName.content = currentName;

    let appleName = document.querySelector('meta[name="apple-mobile-web-app-title"]');
    if (!appleName) {
      appleName = document.createElement('meta');
      appleName.name = 'apple-mobile-web-app-title';
      document.head.appendChild(appleName);
    }
    appleName.content = currentName;
  }

  function applyBranding() {
    updateText(document.body);
    updateBrandNameElements(document);
    updateLogos(document);
    updateBrowserBranding();
  }

  async function loadBranding() {
    try {
      const response = await fetch(BRANDING_API, {
        method: 'GET',
        cache: 'no-store',
        headers: { Accept: 'application/json' }
      });
      if (!response.ok) return;
      const data = await response.json();
      if (!data || data.success !== true || !data.branding) return;

      const name = String(data.branding.name || DEFAULT_NAME).trim();
      if (name.length >= 2 && name.length <= 40) currentName = name;
      currentLogo = validLogo(data.branding.logoDataUrl) ? data.branding.logoDataUrl : '';
      applyBranding();
    } catch (error) {
      // Branding is optional: a failed request must never block login or page use.
    }
  }

  function start() {
    applyBranding();
    if (document.body && window.MutationObserver) {
      observer = new MutationObserver((records) => {
        records.forEach((record) => {
          if (record.type === 'characterData') updateTextNode(record.target);
          if (record.type === 'childList') {
            record.addedNodes.forEach((node) => {
              if (node.nodeType === 3) updateTextNode(node);
              else if (node.nodeType === 1) {
                updateText(node);
                updateBrandNameElements(node);
                updateLogos(node);
              }
            });
          }
        });
      });
      observer.observe(document.body, { childList: true, subtree: true, characterData: true });
    }
    loadBranding();
  }

  window.refreshPlatformBranding = loadBranding;
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start, { once: true });
  } else {
    start();
  }
})();
