// Oggetto con tutte le traduzioni per login.html
const loginTranslations = {
  it: {
    login_title: "Accesso - Bologna Turismo",
    register_title: "Registrati",
    register_subtitle: "Crea il tuo account per accedere a contenuti esclusivi",
    name_label: "Nome completo",
    name_placeholder: "Mario Rossi",
    email_label: "Email",
    email_placeholder: "tua@email.com",
    password_label: "Password",
    password_placeholder: "Almeno 8 caratteri",
    register_button: "Registrati",
    login_prompt: "Hai già un account?",
    login_link: "Accedi qui",
    login_title_main: "Ben tornato",
    login_subtitle: "Accedi al tuo account personale",
    remember_me: "Ricordami",
    forgot_password: "Password dimenticata?",
    login_button: "Accedi",
    register_prompt: "Non hai un account?",
    register_link: "Registrati qui",
    footer_text: "© 2025 Bologna Turismo. Tutti i diritti riservati.",
    back_button: "Torna alla Home",
    form_error: "Per favore compila tutti i campi",
    password_error: "La password deve contenere almeno 8 caratteri",
    register_success: "Registrazione completata per {name}",
    login_success: "Accesso effettuato come {email}"
  },
  en: {
    login_title: "Login - Bologna Tourism",
    register_title: "Register",
    register_subtitle: "Create your account to access exclusive content",
    name_label: "Full name",
    name_placeholder: "John Doe",
    email_label: "Email",
    email_placeholder: "your@email.com",
    password_label: "Password",
    password_placeholder: "At least 8 characters",
    register_button: "Register",
    login_prompt: "Already have an account?",
    login_link: "Login here",
    login_title_main: "Welcome back",
    login_subtitle: "Login to your personal account",
    remember_me: "Remember me",
    forgot_password: "Forgot password?",
    login_button: "Login",
    register_prompt: "Don't have an account?",
    register_link: "Register here",
    footer_text: "© 2025 Bologna Tourism. All rights reserved.",
    back_button: "Back to Home",
    form_error: "Please fill in all fields",
    password_error: "Password must be at least 8 characters",
    register_success: "Registration completed for {name}",
    login_success: "Logged in as {email}"
  },
  fr: {
    login_title: "Connexion - Bologne Tourisme",
    register_title: "S'inscrire",
    register_subtitle: "Créez votre compte pour accéder à du contenu exclusif",
    name_label: "Nom complet",
    name_placeholder: "Jean Dupont",
    email_label: "Email",
    email_placeholder: "votre@email.com",
    password_label: "Mot de passe",
    password_placeholder: "Au moins 8 caractères",
    register_button: "S'inscrire",
    login_prompt: "Vous avez déjà un compte?",
    login_link: "Connectez-vous ici",
    login_title_main: "Bon retour",
    login_subtitle: "Connectez-vous à votre compte personnel",
    remember_me: "Se souvenir de moi",
    forgot_password: "Mot de passe oublié?",
    login_button: "Se connecter",
    register_prompt: "Vous n'avez pas de compte?",
    register_link: "Inscrivez-vous ici",
    footer_text: "© 2025 Bologne Tourisme. Tous droits réservés.",
    back_button: "Retour à l'accueil",
    form_error: "Veuillez remplir tous les champs",
    password_error: "Le mot de passe doit contenir au moins 8 caractères",
    register_success: "Inscription terminée pour {name}",
    login_success: "Connecté en tant que {email}"
  },
  de: {
    login_title: "Anmeldung - Bologna Tourismus",
    register_title: "Registrieren",
    register_subtitle: "Erstellen Sie Ihr Konto, um auf exklusive Inhalte zuzugreifen",
    name_label: "Vollständiger Name",
    name_placeholder: "Max Mustermann",
    email_label: "Email",
    email_placeholder: "ihre@email.com",
    password_label: "Passwort",
    password_placeholder: "Mindestens 8 Zeichen",
    register_button: "Registrieren",
    login_prompt: "Haben Sie bereits ein Konto?",
    login_link: "Hier anmelden",
    login_title_main: "Willkommen zurück",
    login_subtitle: "Melden Sie sich bei Ihrem persönlichen Konto an",
    remember_me: "Angemeldet bleiben",
    forgot_password: "Passwort vergessen?",
    login_button: "Anmelden",
    register_prompt: "Sie haben kein Konto?",
    register_link: "Hier registrieren",
    footer_text: "© 2025 Bologna Tourismus. Alle Rechte vorbehalten.",
    back_button: "Zurück zur Startseite",
    form_error: "Bitte füllen Sie alle Felder aus",
    password_error: "Passwort muss mindestens 8 Zeichen lang sein",
    register_success: "Registrierung abgeschlossen für {name}",
    login_success: "Eingeloggt als {email}"
  }
};

// Funzione per cambiare lingua nella pagina di login
function changeLoginLanguage(lang) {
  // Aggiorna il titolo della pagina
  document.title = loginTranslations[lang].login_title;
  
  // Traduci tutti gli elementi con l'attributo data-translate
  const elements = document.querySelectorAll('[data-translate]');
  elements.forEach(element => {
    const key = element.getAttribute('data-translate');
    const translation = loginTranslations[lang] && loginTranslations[lang][key];

    if (translation) {
      if (element.tagName === 'INPUT' && element.hasAttribute('placeholder')) {
        element.setAttribute('placeholder', translation);
      } else {
        element.textContent = translation;
      }
    }
  });
}

// Carica la lingua salvata al caricamento della pagina
document.addEventListener('DOMContentLoaded', function() {
  const savedLang = localStorage.getItem('preferredLanguage') || 'it';
  changeLoginLanguage(savedLang);
});

// Esponiamo le funzioni e l'oggetto globalmente
window.loginTranslations = loginTranslations;
window.changeLoginLanguage = changeLoginLanguage;