function initMaps() {
  const maps = [

   {
     id: 'map-hotel',
     center: [44.4938, 11.3427], // Coordinate approssimative dell'Hotel Accademia
     zoom: 16,
     markers: [
       {
         position: [44.4938, 11.3427],
         title: 'Hotel Accademia'
       }
     ]
   },
   {
      id: 'map-giorno1',
      center: [44.4949, 11.3426],
      zoom: 14,
      markers: [
        {
          position: [44.4949, 11.3426],
          title: 'Università di Bologna'
        },
        {
          position: [44.4964, 11.3525],
          title: 'Palazzo Poggi'
        },
        {
          position: [44.4928, 11.3472],
          title: 'Casa Carducci'
        }
      ]
    },
    {
      id: 'map-giorno2',
      center: [44.4949, 11.3426],
      zoom: 13,
      markers: [
        {
          position: [44.4949, 11.3426],
          title: 'Museo Memoriale della Libertà'
        },
        {
          position: [44.3422, 11.2047],
          title: 'Memoriale delle vittime della strage di Marzabotto'
        },
        {
          position: [44.5022, 11.3103],
          title: 'Cimitero Monumentale della Certosa'
        },
        {
          position: [44.5061, 11.3417],
          title: 'Memoriale della Stazione'
        }
      ]
    },
    {
      id: 'map-giorno3',
      center: [44.4949, 11.3426],
      zoom: 14,
      markers: [
        {
          position: [44.4946, 11.3422],
          title: 'Biblioteca Salaborsa'
        },
        {
          position: [44.4965, 11.3408],
          title: 'Palazzina Majani'
        },
        {
          position: [44.4935, 11.3428],
          title: 'Ristorante Diana'
        }
      ]
    }
  ];

  maps.forEach(mapConfig => {
    const mapElement = document.getElementById(mapConfig.id);
    if (mapElement && !mapElement._map) {
      const map = L.map(mapElement).setView(mapConfig.center, mapConfig.zoom);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
      }).addTo(map);

      if (mapConfig.markers) {
        mapConfig.markers.forEach(markerConfig => {
          L.marker(markerConfig.position).addTo(map)
            .bindPopup(markerConfig.title);
        });
      } else {
        L.marker(mapConfig.marker.position).addTo(map)
          .bindPopup(mapConfig.marker.title);
      }

      mapElement._map = map;
    }
  });
}

// Funzione per cambiare lingua
function changeLanguage(lang) {
  // Salva la preferenza dell'utente
  localStorage.setItem('preferredLanguage', lang);
  
  // Nascondi il popup se visibile
  const langPopup = document.getElementById('language-popup');
  if (langPopup) langPopup.style.display = 'none';
  
  // Aggiorna il selettore lingua nel banner (non serve footer)
  const langSelect = document.getElementById('language-select');
  if (langSelect) langSelect.value = lang;

  // Traduci tutti gli elementi con l'attributo data-translate
  const elements = document.querySelectorAll('[data-translate]');
  elements.forEach(element => {
    const key = element.getAttribute('data-translate');
    const translation = translations[lang] && translations[lang][key];

    if (translation) {
      if (element.tagName === 'INPUT' && element.hasAttribute('placeholder')) {
        element.setAttribute('placeholder', translation);
      } else {
        element.innerHTML = translation;
      }
    }
  });
}
document.addEventListener('DOMContentLoaded', function() {
  initMaps();
  
  // Verifica se c'è una preferenza di lingua salvata
  const savedLang = localStorage.getItem('preferredLanguage');
  const userLang = navigator.language || navigator.userLanguage;
  
  // Imposta la lingua salvata o predefinita
  const langToSet = savedLang || 'it';
  changeLanguage(langToSet);
  
  // Mostra popup lingua solo al primo accesso se non italiano
  if (!savedLang && !userLang.startsWith('it')) {
    const langPopup = document.getElementById('language-popup');
    if (langPopup) langPopup.style.display = 'flex';
  }

  // Chiudi popup quando si clicca fuori
  const langPopup = document.getElementById('language-popup');
  if (langPopup) {
    langPopup.addEventListener('click', function(e) {
      if (e.target === this) {
        this.style.display = 'none';
      }
    });
  }

  // Loader per Instagram
  const instagramLink = document.getElementById('instagram-link');
  if (instagramLink) {
    instagramLink.addEventListener('click', function(e) {
      e.preventDefault();
      const loader = document.createElement('div');
      loader.className = 'instagram-loader';
      loader.innerHTML = `
        <div class="instagram-loader-content">
          <div class="instagram-loader-spinner"></div>
          <p>Caricamento in corso...</p>
        </div>
      `;
      document.body.appendChild(loader);
      setTimeout(() => {
        window.location.href = this.href;
      }, 1500);
    });
  }

  // Torna su
  const backToTopButton = document.querySelector('.back-to-top');
  if (backToTopButton) {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 300) {
        backToTopButton.classList.add('show');
      } else {
        backToTopButton.classList.remove('show');
      }
    });

    backToTopButton.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
});

// Nasconde il banner dopo il click
document.getElementById('loginBtn')?.addEventListener('click', function() {
  localStorage.setItem('userLoggedIn', 'true');
});

// Controlla se l'utente ha cliccato il pulsante
document.addEventListener('DOMContentLoaded', function() {
  if(localStorage.getItem('userLoggedIn')) {
    const banner = document.getElementById('supportBanner');
    if(banner) {
      banner.innerHTML = `
        <div class="support-banner-content">
          <a href="index.html" class="support-button"><i class="fas fa-arrow-left"></i> Torna alla Home</a>
        </div>
      `;
    }
  }
});