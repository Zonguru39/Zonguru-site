(function () {

  const LANG_KEY = "zonguru_lang";

  const languages = {
    en: "English",
    es: "Español",
    ar: "العربية",
    pt: "Português",
    my: "မြန်မာ",
    fr: "Français",
    de: "Deutsch",
    zh: "中文",
    ja: "日本語",
    ko: "한국어",
    ru: "Русский",
    tr: "Türkçe",
    hi: "हिन्दी"
  };


  const translations = {

    en: {
      "Welcome back": "Welcome back",
      "Create your account": "Create your account",
      "Username": "Username",
      "Password": "Password",
      "Confirm Password": "Confirm Password",
      "Enter your username": "Enter your username",
      "Enter your password": "Enter your password",
      "Create password": "Create password",
      "Confirm password": "Confirm password",
      "Forgot password?": "Forgot password?",
      "Login": "Login",
      "Create Account": "Create Account",
      "Already have an account?": "Already have an account?",
      "Don't have an account?": "Don't have an account?",
      "Your account information is securely protected.": "Your account information is securely protected.",
      "Customer Service": "Customer Service",
      "Language": "Language",
      "Close": "Close",
      "Send": "Send",
      "Type your message...": "Type your message...",
      "Please contact Customer Service to reset your password.": "Please contact Customer Service to reset your password.",
      "Home": "Home",
      "Deposit": "Deposit",
      "Withdraw": "Withdraw",
      "Products": "Products",
      "Transactions": "Transactions",
      "Messages": "Messages",
      "Team": "Team",
      "Account": "Account",
      "Available Balance": "Available Balance",
      "Total Profit": "Total Profit",
      "Recent Transactions": "Recent Transactions",
      "Submit Deposit": "Submit Deposit",
      "Submit Withdrawal": "Submit Withdrawal",
      "Change Password": "Change Password",
      "Logout": "Logout",
      "Loading...": "Loading..."
    },


    es: {
      "Welcome back": "Bienvenido de nuevo",
      "Create your account": "Crea tu cuenta",
      "Username": "Nombre de usuario",
      "Password": "Contraseña",
      "Confirm Password": "Confirmar contraseña",
      "Enter your username": "Introduce tu nombre de usuario",
      "Enter your password": "Introduce tu contraseña",
      "Create password": "Crear contraseña",
      "Confirm password": "Confirmar contraseña",
      "Forgot password?": "¿Olvidaste tu contraseña?",
      "Login": "Iniciar sesión",
      "Create Account": "Crear cuenta",
      "Already have an account?": "¿Ya tienes una cuenta?",
      "Don't have an account?": "¿No tienes una cuenta?",
      "Your account information is securely protected.": "Tu información está protegida de forma segura.",
      "Customer Service": "Atención al cliente",
      "Language": "Idioma",
      "Close": "Cerrar",
      "Send": "Enviar",
      "Type your message...": "Escribe tu mensaje...",
      "Please contact Customer Service to reset your password.": "Contacta con Atención al cliente para restablecer tu contraseña.",
      "Home": "Inicio",
      "Deposit": "Depósito",
      "Withdraw": "Retirar",
      "Products": "Productos",
      "Transactions": "Transacciones",
      "Messages": "Mensajes",
      "Team": "Equipo",
      "Account": "Cuenta",
      "Available Balance": "Saldo disponible",
      "Total Profit": "Beneficio total",
      "Recent Transactions": "Transacciones recientes",
      "Submit Deposit": "Enviar depósito",
      "Submit Withdrawal": "Enviar retiro",
      "Change Password": "Cambiar contraseña",
      "Logout": "Cerrar sesión",
      "Loading...": "Cargando..."
    },


    pt: {
      "Welcome back": "Bem-vindo de volta",
      "Create your account": "Crie sua conta",
      "Username": "Nome de usuário",
      "Password": "Senha",
      "Confirm Password": "Confirmar senha",
      "Enter your username": "Digite seu nome de usuário",
      "Enter your password": "Digite sua senha",
      "Create password": "Crie uma senha",
      "Confirm password": "Confirme sua senha",
      "Forgot password?": "Esqueceu sua senha?",
      "Login": "Entrar",
      "Create Account": "Criar conta",
      "Already have an account?": "Já possui uma conta?",
      "Don't have an account?": "Ainda não possui uma conta?",
      "Your account information is securely protected.": "As informações da sua conta estão protegidas com segurança.",
      "Customer Service": "Atendimento ao cliente",
      "Language": "Idioma",
      "Close": "Fechar",
      "Send": "Enviar",
      "Type your message...": "Digite sua mensagem...",
      "Please contact Customer Service to reset your password.": "Entre em contato com o Atendimento ao cliente para redefinir sua senha.",
      "Home": "Início",
      "Deposit": "Depósito",
      "Withdraw": "Sacar",
      "Products": "Produtos",
      "Transactions": "Transações",
      "Messages": "Mensagens",
      "Team": "Equipe",
      "Account": "Conta",
      "Available Balance": "Saldo disponível",
      "Total Profit": "Lucro total",
      "Recent Transactions": "Transações recentes",
      "Submit Deposit": "Enviar depósito",
      "Submit Withdrawal": "Enviar saque",
      "Change Password": "Alterar senha",
      "Logout": "Sair",
      "Loading...": "Carregando..."
    },


    my: {
      "Welcome back": "ပြန်လည်ကြိုဆိုပါတယ်",
      "Create your account": "အကောင့်ဖန်တီးပါ",
      "Username": "အသုံးပြုသူအမည်",
      "Password": "စကားဝှက်",
      "Confirm Password": "စကားဝှက်အတည်ပြုပါ",
      "Enter your username": "အသုံးပြုသူအမည်ထည့်ပါ",
      "Enter your password": "စကားဝှက်ထည့်ပါ",
      "Create password": "စကားဝှက်ဖန်တီးပါ",
      "Confirm password": "စကားဝှက်အတည်ပြုပါ",
      "Forgot password?": "စကားဝှက်မေ့နေပါသလား?",
      "Login": "ဝင်ရောက်ရန်",
      "Create Account": "အကောင့်ဖန်တီးရန်",
      "Already have an account?": "အကောင့်ရှိပြီးသားလား?",
      "Don't have an account?": "အကောင့်မရှိသေးဘူးလား?",
      "Your account information is securely protected.": "သင့်အကောင့်အချက်အလက်များကို လုံခြုံစွာကာကွယ်ထားပါသည်။",
      "Customer Service": "Customer Service",
      "Language": "ဘာသာစကား",
      "Close": "ပိတ်ရန်",
      "Send": "ပို့ရန်",
      "Type your message...": "စာရေးပါ...",
      "Please contact Customer Service to reset your password.": "စကားဝှက်ပြန်လည်သတ်မှတ်ရန် Customer Service ကိုဆက်သွယ်ပါ။",
      "Home": "ပင်မ",
      "Deposit": "ငွေသွင်းရန်",
      "Withdraw": "ငွေထုတ်ရန်",
      "Products": "ထုတ်ကုန်များ",
      "Transactions": "ငွေလွှဲမှတ်တမ်း",
      "Messages": "စာများ",
      "Team": "အဖွဲ့",
      "Account": "အကောင့်",
      "Available Balance": "လက်ကျန်ငွေ",
      "Total Profit": "စုစုပေါင်းအမြတ်",
      "Recent Transactions": "နောက်ဆုံးငွေလွှဲမှတ်တမ်းများ",
      "Submit Deposit": "ငွေသွင်းရန်တင်ပြပါ",
      "Submit Withdrawal": "ငွေထုတ်ရန်တင်ပြပါ",
      "Change Password": "စကားဝှက်ပြောင်းရန်",
      "Logout": "ထွက်ရန်",
      "Loading...": "တင်နေပါသည်..."
    },


    fr: {
      "Welcome back": "Bon retour",
      "Create your account": "Créez votre compte",
      "Username": "Nom d'utilisateur",
      "Password": "Mot de passe",
      "Confirm Password": "Confirmer le mot de passe",
      "Enter your username": "Entrez votre nom d'utilisateur",
      "Enter your password": "Entrez votre mot de passe",
      "Forgot password?": "Mot de passe oublié ?",
      "Login": "Connexion",
      "Create Account": "Créer un compte",
      "Customer Service": "Service client",
      "Language": "Langue",
      "Close": "Fermer",
      "Send": "Envoyer",
      "Home": "Accueil",
      "Deposit": "Dépôt",
      "Withdraw": "Retirer",
      "Products": "Produits",
      "Transactions": "Transactions",
      "Messages": "Messages",
      "Team": "Équipe",
      "Account": "Compte",
      "Available Balance": "Solde disponible",
      "Total Profit": "Bénéfice total",
      "Logout": "Déconnexion",
      "Loading...": "Chargement..."
    },


    de: {
      "Welcome back": "Willkommen zurück",
      "Create your account": "Konto erstellen",
      "Username": "Benutzername",
      "Password": "Passwort",
      "Confirm Password": "Passwort bestätigen",
      "Enter your username": "Benutzernamen eingeben",
      "Enter your password": "Passwort eingeben",
      "Forgot password?": "Passwort vergessen?",
      "Login": "Anmelden",
      "Create Account": "Konto erstellen",
      "Customer Service": "Kundenservice",
      "Language": "Sprache",
      "Close": "Schließen",
      "Send": "Senden",
      "Home": "Startseite",
      "Deposit": "Einzahlung",
      "Withdraw": "Auszahlung",
      "Products": "Produkte",
      "Transactions": "Transaktionen",
      "Messages": "Nachrichten",
      "Team": "Team",
      "Account": "Konto",
      "Available Balance": "Verfügbares Guthaben",
      "Total Profit": "Gesamtgewinn",
      "Logout": "Abmelden",
      "Loading...": "Wird geladen..."
    },


    zh: {
      "Welcome back": "欢迎回来",
      "Create your account": "创建您的账户",
      "Username": "用户名",
      "Password": "密码",
      "Confirm Password": "确认密码",
      "Enter your username": "请输入用户名",
      "Enter your password": "请输入密码",
      "Forgot password?": "忘记密码？",
      "Login": "登录",
      "Create Account": "创建账户",
      "Customer Service": "客户服务",
      "Language": "语言",
      "Close": "关闭",
      "Send": "发送",
      "Home": "首页",
      "Deposit": "充值",
      "Withdraw": "提现",
      "Products": "产品",
      "Transactions": "交易记录",
      "Messages": "消息",
      "Team": "团队",
      "Account": "账户",
      "Available Balance": "可用余额",
      "Total Profit": "总利润",
      "Logout": "退出登录",
      "Loading...": "加载中..."
    },


    ja: {
      "Welcome back": "おかえりなさい",
      "Create your account": "アカウントを作成",
      "Username": "ユーザー名",
      "Password": "パスワード",
      "Confirm Password": "パスワード確認",
      "Enter your username": "ユーザー名を入力",
      "Enter your password": "パスワードを入力",
      "Forgot password?": "パスワードを忘れましたか？",
      "Login": "ログイン",
      "Create Account": "アカウント作成",
      "Customer Service": "カスタマーサービス",
      "Language": "言語",
      "Close": "閉じる",
      "Send": "送信",
      "Home": "ホーム",
      "Deposit": "入金",
      "Withdraw": "出金",
      "Products": "商品",
      "Transactions": "取引",
      "Messages": "メッセージ",
      "Team": "チーム",
      "Account": "アカウント",
      "Available Balance": "利用可能残高",
      "Total Profit": "総利益",
      "Logout": "ログアウト",
      "Loading...": "読み込み中..."
    },


    ko: {
      "Welcome back": "다시 오신 것을 환영합니다",
      "Create your account": "계정 만들기",
      "Username": "사용자 이름",
      "Password": "비밀번호",
      "Confirm Password": "비밀번호 확인",
      "Enter your username": "사용자 이름 입력",
      "Enter your password": "비밀번호 입력",
      "Forgot password?": "비밀번호를 잊으셨나요?",
      "Login": "로그인",
      "Create Account": "계정 만들기",
      "Customer Service": "고객 서비스",
      "Language": "언어",
      "Close": "닫기",
      "Send": "보내기",
      "Home": "홈",
      "Deposit": "입금",
      "Withdraw": "출금",
      "Products": "상품",
      "Transactions": "거래",
      "Messages": "메시지",
      "Team": "팀",
      "Account": "계정",
      "Available Balance": "사용 가능 잔액",
      "Total Profit": "총 수익",
      "Logout": "로그아웃",
      "Loading...": "로드 중..."
    },


    ru: {
      "Welcome back": "С возвращением",
      "Create your account": "Создать аккаунт",
      "Username": "Имя пользователя",
      "Password": "Пароль",
      "Confirm Password": "Подтвердите пароль",
      "Enter your username": "Введите имя пользователя",
      "Enter your password": "Введите пароль",
      "Forgot password?": "Забыли пароль?",
      "Login": "Войти",
      "Create Account": "Создать аккаунт",
      "Customer Service": "Служба поддержки",
      "Language": "Язык",
      "Close": "Закрыть",
      "Send": "Отправить",
      "Home": "Главная",
      "Deposit": "Пополнение",
      "Withdraw": "Вывод",
      "Products": "Продукты",
      "Transactions": "Транзакции",
      "Messages": "Сообщения",
      "Team": "Команда",
      "Account": "Аккаунт",
      "Available Balance": "Доступный баланс",
      "Total Profit": "Общая прибыль",
      "Logout": "Выйти",
      "Loading...": "Загрузка..."
    },


    tr: {
      "Welcome back": "Tekrar hoş geldiniz",
      "Create your account": "Hesabınızı oluşturun",
      "Username": "Kullanıcı adı",
      "Password": "Şifre",
      "Confirm Password": "Şifreyi onayla",
      "Enter your username": "Kullanıcı adınızı girin",
      "Enter your password": "Şifrenizi girin",
      "Forgot password?": "Şifrenizi mi unuttunuz?",
      "Login": "Giriş yap",
      "Create Account": "Hesap oluştur",
      "Customer Service": "Müşteri hizmetleri",
      "Language": "Dil",
      "Close": "Kapat",
      "Send": "Gönder",
      "Home": "Ana Sayfa",
      "Deposit": "Para yatır",
      "Withdraw": "Para çek",
      "Products": "Ürünler",
      "Transactions": "İşlemler",
      "Messages": "Mesajlar",
      "Team": "Ekip",
      "Account": "Hesap",
      "Available Balance": "Kullanılabilir bakiye",
      "Total Profit": "Toplam kâr",
      "Logout": "Çıkış yap",
      "Loading...": "Yükleniyor..."
    },


    hi: {
      "Welcome back": "वापसी पर स्वागत है",
      "Create your account": "अपना खाता बनाएं",
      "Username": "उपयोगकर्ता नाम",
      "Password": "पासवर्ड",
      "Confirm Password": "पासवर्ड की पुष्टि करें",
      "Enter your username": "उपयोगकर्ता नाम दर्ज करें",
      "Enter your password": "पासवर्ड दर्ज करें",
      "Forgot password?": "पासवर्ड भूल गए?",
      "Login": "लॉगिन",
      "Create Account": "खाता बनाएं",
      "Customer Service": "ग्राहक सेवा",
      "Language": "भाषा",
      "Close": "बंद करें",
      "Send": "भेजें",
      "Home": "होम",
      "Deposit": "जमा",
      "Withdraw": "निकासी",
      "Products": "उत्पाद",
      "Transactions": "लेनदेन",
      "Messages": "संदेश",
      "Team": "टीम",
      "Account": "खाता",
      "Available Balance": "उपलब्ध शेष राशि",
      "Total Profit": "कुल लाभ",
      "Logout": "लॉगआउट",
      "Loading...": "लोड हो रहा है..."
    },


    ar: {
      "Welcome back": "مرحباً بعودتك",
      "Create your account": "إنشاء حسابك",
      "Username": "اسم المستخدم",
      "Password": "كلمة المرور",
      "Confirm Password": "تأكيد كلمة المرور",
      "Enter your username": "أدخل اسم المستخدم",
      "Enter your password": "أدخل كلمة المرور",
      "Forgot password?": "هل نسيت كلمة المرور؟",
      "Login": "تسجيل الدخول",
      "Create Account": "إنشاء حساب",
      "Customer Service": "خدمة العملاء",
      "Language": "اللغة",
      "Close": "إغلاق",
      "Send": "إرسال",
      "Home": "الرئيسية",
      "Deposit": "إيداع",
      "Withdraw": "سحب",
      "Products": "المنتجات",
      "Transactions": "المعاملات",
      "Messages": "الرسائل",
      "Team": "الفريق",
      "Account": "الحساب",
      "Available Balance": "الرصيد المتاح",
      "Total Profit": "إجمالي الأرباح",
      "Logout": "تسجيل الخروج",
      "Loading...": "جار التحميل..."
    }

  };


  function getLanguage() {
    return localStorage.getItem(LANG_KEY) || "en";
  }


  function translatePage() {

    const lang = getLanguage();

    const dictionary =
      translations[lang] || translations.en;


    document.documentElement.lang = lang;


    if (lang === "ar") {
      document.documentElement.dir = "rtl";
    } else {
      document.documentElement.dir = "ltr";
    }


    const elements =
      document.querySelectorAll(
        "body *"
      );


    elements.forEach(function (element) {

      if (
        element.children.length === 0
      ) {

        const text =
          element.textContent.trim();

        if (
          text &&
          dictionary[text]
        ) {

          element.textContent =
            dictionary[text];
        }
      }


      if (
        element.placeholder &&
        dictionary[element.placeholder]
      ) {

        element.placeholder =
          dictionary[element.placeholder];
      }


      if (
        element.title &&
        dictionary[element.title]
      ) {

        element.title =
          dictionary[element.title];
      }

    });


    document.title =
      dictionary[document.title] ||
      document.title;
  }


  function createLanguageButton() {

    if (
      document.getElementById(
        "zg-language-button"
      )
    ) {
      return;
    }


    const wrapper =
      document.createElement("div");

    wrapper.id = "zg-language-wrapper";


    wrapper.innerHTML = `
      <button id="zg-language-button">
        🌐
      </button>

      <div id="zg-language-menu">
        ${Object.entries(languages)
          .map(function ([code, name]) {
            return `
              <button
                class="zg-lang-option"
                data-lang="${code}">
                ${name}
              </button>
            `;
          })
          .join("")}
      </div>
    `;


    document.body.appendChild(wrapper);


    document
      .getElementById("zg-language-button")
      .addEventListener(
        "click",
        function () {

          const menu =
            document.getElementById(
              "zg-language-menu"
            );

          menu.classList.toggle("show");
        }
      );


    document
      .querySelectorAll(
        ".zg-lang-option"
      )
      .forEach(function (button) {

        button.addEventListener(
          "click",
          function () {

            const lang =
              button.dataset.lang;

            localStorage.setItem(
              LANG_KEY,
              lang
            );

            document
              .getElementById(
                "zg-language-menu"
              )
              .classList.remove("show");

            location.reload();

          }
        );

      });

  }


  function createSupportButton() {

    if (
      document.getElementById(
        "zg-support-button"
      )
    ) {
      return;
    }


    const button =
      document.createElement("button");

    button.id =
      "zg-support-button";

    button.innerHTML =
      "💬 Customer Service";


    button.addEventListener(
      "click",
      function () {

        alert(
          "Customer Service live chat will open here."
        );

      }
    );


    document.body.appendChild(button);
  }


  function addStyles() {

    if (
      document.getElementById(
        "zg-support-styles"
      )
    ) {
      return;
    }


    const style =
      document.createElement("style");

    style.id =
      "zg-support-styles";


    style.textContent = `

      #zg-language-wrapper {
        position: fixed;
        top: 72px;
        right: 14px;
        z-index: 99999;
      }

      #zg-language-button {
        width: 52px;
        height: 52px;
        border: none;
        border-radius: 50%;
        background: white;
        box-shadow: 0 5px 18px rgba(0,0,0,.20);
        font-size: 24px;
        cursor: pointer;
      }

      #zg-language-menu {
        display: none;
        position: absolute;
        top: 58px;
        right: 0;
        width: 190px;
        max-height: 420px;
        overflow-y: auto;
        background: white;
        border-radius: 14px;
        padding: 8px;
        box-shadow: 0 10px 30px rgba(0,0,0,.25);
      }

      #zg-language-menu.show {
        display: block;
      }

      .zg-lang-option {
        width: 100%;
        border: none;
        background: white;
        padding: 11px 12px;
        text-align: left;
        border-radius: 9px;
        cursor: pointer;
        font-size: 14px;
      }

      .zg-lang-option:hover {
        background: #f3f4f6;
      }

      #zg-support-button {
        position: fixed;
        top: 72px;
        right: 76px;
        z-index: 99998;
        border: none;
        border-radius: 30px;
        padding: 13px 18px;
        background: white;
        color: #6d28d9;
        font-size: 15px;
        font-weight: bold;
        box-shadow: 0 5px 18px rgba(0,0,0,.20);
        cursor: pointer;
      }

      @media (max-width: 600px) {

        #zg-support-b    document.documentElement.lang =
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
