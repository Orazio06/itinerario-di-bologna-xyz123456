document.addEventListener('DOMContentLoaded', function() {
  // Carica la lingua salvata
  const savedLang = localStorage.getItem('preferredLanguage') || 'it';
  
  // Elementi del DOM
  const registerForm = document.getElementById('register-form');
  const loginForm = document.getElementById('login-form');
  const showLoginLink = document.getElementById('show-login');
  const showRegisterLink = document.getElementById('show-register');
  const registerContainer = document.getElementById('register-container');
  const loginContainer = document.getElementById('login-container');

  // Mostra form di login
  if(showLoginLink) {
    showLoginLink.addEventListener('click', function(e) {
      e.preventDefault();
      registerContainer.classList.remove('active');
      loginContainer.classList.add('active');
    });
  }

  // Mostra form di registrazione
  if(showRegisterLink) {
    showRegisterLink.addEventListener('click', function(e) {
      e.preventDefault();
      loginContainer.classList.remove('active');
      registerContainer.classList.add('active');
    });
  }

  // Gestione registrazione
  if(registerForm) {
    registerForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const name = document.getElementById('register-name').value;
      const email = document.getElementById('register-email').value;
      const password = document.getElementById('register-password').value;
      
      // Validazione
      if(!name || !email || !password) {
        showMessage('register-message', loginTranslations[savedLang].form_error, 'error');
        return;
      }
      
      if(password.length < 8) {
        showMessage('register-message', loginTranslations[savedLang].password_error, 'error');
        return;
      }
      
      // Simulazione registrazione
      showMessage('register-message', loginTranslations[savedLang].register_success.replace('{name}', name), 'success');
      
      setTimeout(() => {
        window.location.href = 'index.html';
      }, 2000);
    });
  }

  // Gestione login
  if(loginForm) {
    loginForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const email = document.getElementById('login-email').value;
      const password = document.getElementById('login-password').value;
      
      // Validazione
      if(!email || !password) {
        showMessage('login-message', loginTranslations[savedLang].form_error, 'error');
        return;
      }
      
      // Simulazione login
      showMessage('login-message', loginTranslations[savedLang].login_success.replace('{email}', email), 'success');
      
      setTimeout(() => {
        window.location.href = 'index.html';
      }, 2000);
    });
  }

  // Funzione per mostrare messaggi
  function showMessage(elementId, text, type) {
    const element = document.getElementById(elementId);
    if(element) {
      element.textContent = text;
      element.className = `message ${type}`;
      element.style.display = 'block';
      
      // Nascondi il messaggio dopo 5 secondi
      setTimeout(() => {
        element.style.display = 'none';
      }, 5000);
    }
  }
});