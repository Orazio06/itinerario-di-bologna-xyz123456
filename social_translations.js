// social_translations.js
const translations = {
  it: {
    facebook_post_text: "Scopri la magia dell'Art Nouveau a Bologna! 🎨✨ Il nostro nuovo itinerario ti porterà alla scoperta dei più bei palazzi Liberty della città, con visite guidate e laboratori creativi. #Bologna #ArtNouveau #TurismoCulturale",
    instagram_post_text: "NUOVO LABORATORIO! �✨ Scopri la bellezza dell'Art Nouveau a Bologna con visite guidate e laboratori creativi.",
    x_post_text: "Scopri la magia dell'Art Nouveau a Bologna! 🎨✨ Il nostro nuovo itinerario ti porterà alla scoperta dei più bei palazzi Liberty della città, con visite guidate e laboratori creativi. #Bologna #ArtNouveau #TurismoCulturale",
    youtube_post_text: "🎨 Scopri la magia dell'Art Nouveau a Bologna con il nostro nuovo itinerario! ✨<br><br>Abbiamo creato un percorso speciale per mostrarti i più bei palazzi Liberty della città, con visite guidate e laboratori creativi dove potrai imparare a riconoscere gli elementi caratteristici di questo stile.<br><br>Ecco un'antepima di quello che potrai scoprire!<br><br>#Bologna #ArtNouveau #TurismoCulturale"
  },
  en: {
    facebook_post_text: "Discover the magic of Art Nouveau in Bologna! 🎨✨ Our new itinerary will take you to discover the most beautiful Liberty-style buildings in the city, with guided tours and creative workshops. #Bologna #ArtNouveau #CulturalTourism",
    instagram_post_text: "NEW WORKSHOP! 🎨✨ Discover the beauty of Art Nouveau in Bologna with guided tours and creative workshops.",
    x_post_text: "Discover the magic of Art Nouveau in Bologna! 🎨✨ Our new itinerary will take you to discover the most beautiful Liberty-style buildings in the city, with guided tours and creative workshops. #Bologna #ArtNouveau #CulturalTourism",
    youtube_post_text: "🎨 Discover the magic of Art Nouveau in Bologna with our new itinerary! ✨<br><br>We've created a special route to show you the most beautiful Liberty-style buildings in the city, with guided tours and creative workshops where you can learn to recognize the characteristic elements of this style.<br><br>Here's a preview of what you'll discover!<br><br>#Bologna #ArtNouveau #CulturalTourism"
  },
  fr: {
    facebook_post_text: "Découvrez la magie de l'Art Nouveau à Bologne ! 🎨✨ Notre nouvel itinéraire vous emmènera à la découverte des plus beaux bâtiments Liberty de la ville, avec des visites guidées et des ateliers créatifs. #Bologne #ArtNouveau #TourismeCulturel",
    instagram_post_text: "NOUVEL ATELIER ! 🎨✨ Découvrez la beauté de l'Art Nouveau à Bologne avec des visites guidées et des ateliers créatifs.",
    x_post_text: "Découvrez la magie de l'Art Nouveau à Bologne ! 🎨✨ Notre nouvel itinéraire vous emmènera à la découverte des plus beaux bâtiments Liberty de la ville, avec des visites guidées et des ateliers créatifs. #Bologne #ArtNouveau #TourismeCulturel",
    youtube_post_text: "🎨 Découvrez la magie de l'Art Nouveau à Bologne avec notre nouvel itinéraire ! ✨<br><br>Nous avons créé un parcours spécial pour vous montrer les plus beaux bâtiments Liberty de la ville, avec des visites guidées et des ateliers créatifs où vous pourrez apprendre à reconnaître les éléments caractéristiques de ce style.<br><br>Voici un aperçu de ce que vous découvrirez !<br><br>#Bologne #ArtNouveau #TourismeCulturel"
  },
  de: {
    facebook_post_text: "Entdecken Sie die Magie des Art Nouveau in Bologna! 🎨✨ Unsere neue Route führt Sie zu den schönsten Liberty-Gebäuden der Stadt, mit Führungen und kreativen Workshops. #Bologna #ArtNouveau #Kulturtourismus",
    instagram_post_text: "NEUER WORKSHOP! 🎨✨ Entdecken Sie die Schönheit des Art Nouveau in Bologna mit Führungen und kreativen Workshops.",
    x_post_text: "Entdecken Sie die Magie des Art Nouveau in Bologna! 🎨✨ Unsere neue Route führt Sie zu den schönsten Liberty-Gebäuden der Stadt, mit Führungen und kreativen Workshops. #Bologna #ArtNouveau #Kulturtourismus",
    youtube_post_text: "🎨 Entdecken Sie die Magie des Art Nouveau in Bologna mit unserer neuen Route! ✨<br><br>Wir haben eine spezielle Route erstellt, um Ihnen die schönsten Liberty-Gebäude der Stadt zu zeigen, mit Führungen und kreativen Workshops, in denen Sie die charakteristischen Elemente dieses Stils kennenlernen können.<br><br>Hier ist eine Vorschau auf das, was Sie entdecken werden!<br><br>#Bologna #ArtNouveau #Kulturtourismus"
  }
};

function updateSocialContent() {
  const lang = localStorage.getItem('preferredLanguage') || 'it';
  
  // Aggiorna tutte le pagine social con le traduzioni
  if (document.querySelector('.facebook-text')) {
    document.querySelector('.facebook-text').textContent = translations[lang].facebook_post_text;
  }
  
  if (document.querySelector('.instagram-caption')) {
    document.querySelector('.instagram-caption').innerHTML = 
      `<strong>bolognaturismo</strong> ${translations[lang].instagram_post_text} <a href="#">#Bologna</a> <a href="#">#ArtNouveau</a> <a href="#">#Cultura</a>`;
  }
  
  if (document.querySelector('.x-text')) {
    document.querySelector('.x-text').textContent = translations[lang].x_post_text;
  }
  
  if (document.querySelector('.youtube-text')) {
    document.querySelector('.youtube-text').innerHTML = translations[lang].youtube_post_text;
  }
  
  // Aggiorna immagini
  const imageNames = {
    it: 'Post.jpeg',
    en: 'Post2.jpeg',
    fr: 'Post3.jpeg',
    de: 'Post4.jpeg'
  };
  
  const images = document.querySelectorAll('.facebook-image, .instagram-image, .x-image, .youtube-image');
  images.forEach(img => {
    if (img) {
      img.src = imageNames[lang];
    }
  });
}