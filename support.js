(function () {

  const API =
    "https://zonguru-jack-api.onrender.com";

  const languages = [

    ["en", "🇬🇧 English"],
    ["es", "🇪🇸 Español"],
    ["ar", "🇸🇦 العربية"],
    ["pt", "🇵🇹 Português"],
    ["my", "🇲🇲 မြန်မာ"],
    ["fr", "🇫🇷 Français"],
    ["de", "🇩🇪 Deutsch"],
    ["zh", "🇨🇳 中文"],
    ["ja", "🇯🇵 日本語"],
    ["ko", "🇰🇷 한국어"],
    ["ru", "🇷🇺 Русский"],
    ["tr", "🇹🇷 Türkçe"],
    ["hi", "🇮🇳 हिन्दी"]

  ];


  const translations = {

    en: {
      cs: "Customer Service",
      title: "Customer Service",
      placeholder: "Type your message...",
      send: "Send",
      guest:
        "Please register or login to continue chatting with customer service."
    },

    es: {
      cs: "Atención al cliente",
      title: "Atención al cliente",
      placeholder: "Escribe tu mensaje...",
      send: "Enviar",
      guest:
        "Regístrate o inicia sesión para continuar chateando con atención al cliente."
    },

    ar: {
      cs: "خدمة العملاء",
      title: "خدمة العملاء",
      placeholder: "اكتب رسالتك...",
      send: "إرسال",
      guest:
        "يرجى التسجيل أو تسجيل الدخول لمتابعة الدردشة مع خدمة العملاء."
    },

    pt: {
      cs: "Atendimento ao cliente",
      title: "Atendimento ao cliente",
      placeholder: "Digite sua mensagem...",
      send: "Enviar",
      guest:
        "Registre-se ou faça login para continuar o chat com o atendimento."
    },

    my: {
      cs: "Customer Service",
      title: "Customer Service",
      placeholder: "စာရေးပါ...",
      send: "ပို့မည်",
      guest:
        "Customer Service နှင့် Chat ဆက်လုပ်ရန် Register သို့မဟုတ် Login ဝင်ပါ။"
    },

    fr: {
      cs: "Service client",
      title: "Service client",
      placeholder: "Écrivez votre message...",
      send: "Envoyer",
      guest:
        "Veuillez vous inscrire ou vous connecter pour continuer."
    },

    de: {
      cs: "Kundenservice",
      title: "Kundenservice",
      placeholder: "Nachricht schreiben...",
      send: "Senden",
      guest:
        "Bitte registrieren oder anmelden, um weiter zu chatten."
    },

    zh: {
      cs: "客服",
      title: "客户服务",
      placeholder: "输入您的消息...",
      send: "发送",
      guest:
        "请注册或登录后继续与客服聊天。"
    },

    ja: {
      cs: "カスタマーサービス",
      title: "カスタマーサービス",
      placeholder: "メッセージを入力...",
      send: "送信",
      guest:
        "チャットを続けるには登録またはログインしてください。"
    },

    ko: {
      cs: "고객센터",
      title: "고객센터",
      placeholder: "메시지를 입력하세요...",
      send: "보내기",
      guest:
        "계속 채팅하려면 가입하거나 로그인하세요."
    },

    ru: {
      cs: "Поддержка",
      title: "Служба поддержки",
      placeholder: "Введите сообщение...",
      send: "Отправить",
      guest:
        "Зарегистрируйтесь или войдите, чтобы продолжить чат."
    },

    tr: {
      cs: "Müşteri Hizmetleri",
      title: "Müşteri Hizmetleri",
      placeholder: "Mesajınızı yazın...",
      send: "Gönder",
      guest:
        "Sohbete devam etmek için kayıt olun veya giriş yapın."
    },

    hi: {
      cs: "ग्राहक सेवा",
      title: "ग्राहक सेवा",
      placeholder: "अपना संदेश लिखें...",
      send: "भेजें",
      guest:
        "चैट जारी रखने के लिए पंजीकरण या लॉगिन करें।"
    }

  };


  let lang =
    localStorage.getItem(
      "zonguru_lang"
    ) || "en";


  let timer = null;


  function getToken() {

    return (
      localStorage.getItem(
        "zonguru_token"
      ) || ""
    );

  }


  function escapeHtml(value) {

    return String(
      value ?? ""
    )
      .replace(
        /&/g,
        "&amp;"
      )
      .replace(
        /</g,
        "&lt;"
      )
      .replace(
        />/g,
        "&gt;"
      )
      .replace(
        /"/g,
        "&quot;"
      )
      .replace(
        /'/g,
        "&#039;"
      );

  }


  function text(key) {

    return (
      translations[lang] ||
      translations.en
    )[key];

  }


  function createUI() {

    if (
      document.getElementById(
        "zonguruSupport"
      )
    ) {

      return;

    }


    const style =
      document.createElement(
        "style"
      );


    style.textContent = `

      .zg-tools {

        position: fixed;

        top: 12px;

        right: 12px;

        z-index: 99999;

        display: flex;

        gap: 7px;

      }


      .zg-button {

        border: 0;

        border-radius: 999px;

        padding: 9px 12px;

        background: #ffffff;

        color: #6242c5;

        box-shadow:
          0 3px 14px
          rgba(0,0,0,.18);

        font-weight: 700;

        cursor: pointer;

      }


      .zg-language {

        position: fixed;

        top: 56px;

        right: 12px;

        z-index: 100000;

        width: 190px;

        max-height: 70vh;

        overflow-y: auto;

        padding: 8px;

        background: #ffffff;

        border-radius: 14px;

        box-shadow:
          0 8px 28px
          rgba(0,0,0,.20);

        display: none;

      }


      .zg-language button {

        display: block;

        width: 100%;

        padding: 10px;

        border: 0;

        background: #ffffff;

        text-align: left;

        border-radius: 9px;

        cursor: pointer;

        font-size: 14px;

      }


      .zg-language button:hover {

        background: #f1efff;

      }


      .zg-chat {

        position: fixed;

        right: 12px;

        bottom: 82px;

        z-index: 99998;

        width:
          min(360px,
          calc(100vw - 24px));

        height: 500px;

        background: #ffffff;

        border-radius: 18px;

        box-shadow:
          0 10px 35px
          rgba(0,0,0,.25);

        overflow: hidden;

        display: none;

      }


      .zg-chat-header {

        height: 58px;

        padding: 0 15px;

        display: flex;

        align-items: center;

        justify-content:
          space-between;

        background:
          linear-gradient(
            135deg,
            #7657d9,
            #6242c5
          );

        color: white;

      }


      .zg-close {

        border: 0;

        background: transparent;

        color: white;

        font-size: 25px;

        cursor: pointer;

      }


      .zg-messages {

        height: 370px;

        overflow-y: auto;

        padding: 12px;

        background: #f7f7fb;

      }


      .zg-message {

        max-width: 82%;

        padding: 9px 11px;

        margin: 7px 0;

        border-radius: 12px;

        word-break: break-word;

      }


      .zg-user {

        margin-left: auto;

        background: #7657d9;

        color: white;

      }


      .zg-admin {

        background: white;

        border: 1px solid #e5e5e5;

      }


      .zg-system {

        background: #eeeeff;

        color: #555;

      }


      .zg-chat-footer {

        padding: 10px;

        display: flex;

        gap: 7px;

        border-top: 1px solid #eeeeee;

      }


      .zg-chat-footer input {

        flex: 1;

        min-width: 0;

        border: 1px solid #dddddd;

        border-radius: 10px;

        padding: 10px;

        outline: none;

      }


      .zg-chat-footer button {

        border: 0;

        border-radius: 10px;

        padding: 0 14px;

        background: #7657d9;

        color: white;

        font-weight: 700;

      }


      @media (max-width: 450px) {

        .zg-button {

          padding: 8px 9px;

        }


        .zg-chat {

          height: 470px;

        }


        .zg-messages {

          height: 340px;

        }

      }

    `;


    document.head.appendChild(
      style
    );


    const tools =
      document.createElement(
        "div"
      );


    tools.id =
      "zonguruSupport";

    tools.className =
      "zg-tools";


    tools.innerHTML = `

      <button
        class="zg-button"
        id="zgCustomerService">

        💬
        <span id="zgCustomerText"></span>

      </button>


      <button
        class="zg-button"
        id="zgLanguageButton">

        🌐

      </button>

    `;


    document.body.appendChild(
      tools
    );


    const languageBox =
      document.createElement(
        "div"
      );


    languageBox.id =
      "zgLanguageBox";

    languageBox.className =
      "zg-language";


    languageBox.innerHTML =
      languages
        .map(
          item => `

            <button
              data-lang="${item[0]}">

              ${item[1]}

            </button>

          `
        )
        .join("");


    document.body.appendChild(
      languageBox
    );


    const chat =
      document.createElement(
        "div"
      );


    chat.id =
      "zgChat";

    chat.className =
      "zg-chat";


    chat.innerHTML = `

      <div class="zg-chat-header">

        <strong
          id="zgChatTitle">
        </strong>


        <button
          class="zg-close"
          id="zgClose">

          ×

        </button>

      </div>


      <div
        class="zg-messages"
        id="zgMessages">

      </div>


      <div
        class="zg-chat-footer">

        <input
          id="zgChatInput"
          type="text"
        />


        <button
          id="zgChatSend">

        </button>

      </div>

    `;


    document.body.appendChild(
      chat
    );


    render();


    bindEvents();


    loadMessages();

  }


  function render() {

    const cs =
      document.getElementById(
        "zgCustomerText"
      );


    const title =
      document.getElementById(
        "zgChatTitle"
      );


    const input =
      document.getElementById(
        "zgChatInput"
      );


    const send =
      document.getElementById(
        "zgChatSend"
      );


    if(cs) {

      cs.textContent =
        text("cs");

    }


    if(title) {

      title.textContent =
        text("title");

    }


    if(input) {

      input.placeholder =
        text("placeholder");

    }


    if(send) {

      send.textContent =
        text("send");

    }


    document.documentElement.lang =
      lang;

  }


  function bindEvents() {

    const cs =
      document.getElementById(
        "zgCustomerService"
      );


    const language =
      document.getElementById(
        "zgLanguageButton"
      );


    const languageBox =
      document.getElementById(
        "zgLanguageBox"
      );


    const close =
      document.getElementById(
        "zgClose"
      );


    const send =
      document.getElementById(
        "zgChatSend"
      );


    const input =
      document.getElementById(
        "zgChatInput"
      );


    cs.onclick =
      function () {

        const chat =
          document.getElementById(
            "zgChat"
          );


        chat.style.display =
          chat.style.display ===
          "block"
            ? "none"
            : "block";


        if(
          chat.style.display ===
          "block"
        ) {

          loadMessages();

        }

      };


    close.onclick =
      function () {

        document.getElementById(
          "zgChat"
        ).style.display =
          "none";

      };


    language.onclick =
      function () {

        languageBox.style.display =
          languageBox.style.display ===
          "block"
            ? "none"
            : "block";

      };


    languageBox
      .querySelectorAll(
        "button"
      )
      .forEach(
        button => {

          button.onclick =
            function () {

              lang =
                button.dataset.lang;


              localStorage.setItem(
                "zonguru_lang",
                lang
              );


              languageBox.style.display =
                "none";


              render();

            };

        }
      );


    send.onclick =
      sendMessage;


    input.onkeydown =
      function (event) {

        if(
          event.key ===
          "Enter"
        ) {

          sendMessage();

        }

      };

  }


  async function loadMessages() {

    const box =
      document.getElementById(
        "zgMessages"
      );


    if(!box) {

      return;

    }


    const token =
      getToken();


    if(!token) {

      box.innerHTML = `

        <div
          style="
            padding:30px;
            text-align:center;
            color:#666;
          ">

          ${escapeHtml(
            text("guest")
          )}

        </div>

      `;

      return;

    }


    try {

      const response =
        await fetch(
          API +
          "/api/messages",
          {
            headers: {
              Authorization:
                "Bearer " +
                token
            }
          }
        );


      const data =
        await response.json();


      if(!response.ok) {

        throw new Error(
          data.message ||
          "Unable to load messages."
        );

      }


      const messages =
        data.messages || [];


      if(!messages.length) {

        box.innerHTML = `

          <div
            style="
              text-align:center;
              color:#999;
              padding:30px;
            ">

            No messages yet.

          </div>

        `;

        return;

      }


      box.innerHTML =
        messages
          .slice()
          .reverse()
          .map(
            message => {

              const sender =
                message.sender ===
                "user"
                  ? "user"
                  : message.sender ===
                    "admin"
                    ? "admin"
                    : "system";


              return `

                <div
                  class="
                    zg-message
                    zg-${sender}
                  ">

                  ${escapeHtml(
                    message.text ||
                    ""
                  )}

                </div>

              `;

            }
          )
          .join("");


      box.scrollTop =
        box.scrollHeight;


    } catch(error) {

      box.innerHTML = `

        <div
          style="
            color:#c00;
            padding:15px;
          ">

          ${escapeHtml(
            error.message
          )}

        </div>

      `;

    }

  }


  async function sendMessage() {

    const input =
      document.getElementById(
        "zgChatInput"
      );


    const message =
      input.value.trim();


    if(!message) {

      return;

    }


    const token =
      getToken();


    if(!token) {

      alert(
        text("guest")
      );

      return;

    }


    input.disabled =
      true;


    try {

      const response =
        await fetch(
          API +
          "/api/chat/send",
          {
            method: "POST",

            headers: {
              "Content-Type":
                "application/json",

              Authorization:
                "Bearer " +
                token
            },

            body:
              JSON.stringify({
                text: message
              })
          }
        );


      const data =
        await response.json();


      if(!response.ok) {

        throw new Error(
          data.message ||
          "Message could not be sent."
        );

      }


      input.value =
        "";


      await loadMessages();


    } catch(error) {

      alert(
        error.message
      );

    } finally {

      input.disabled =
        false;


      input.focus();

    }

  }


  function start() {

    createUI();


    if(timer) {

      clearInterval(
        timer
      );

    }


    timer =
      setInterval(
        function () {

          const chat =
            document.getElementById(
              "zgChat"
            );


          if(
            chat &&
            chat.style.display ===
            "block"
          ) {

            loadMessages();

          }

        },
        3000
      );

  }


  if(
    document.readyState ===
    "loading"
  ) {

    document.addEventListener(
      "DOMContentLoaded",
      start
    );

  } else {

    start();

  }

})();
