<!-- 
  FICHIER PRINCIPAL DE L'APPLICATION NUXTJS
  =========================================
  
  Ce fichier est le point d'entrée de l'application.
  Il contient la structure HTML de base qui sera présente sur toutes les pages.
  
  Dans NuxtJS, on utilise la syntaxe Vue.js avec des composants spéciaux :
  - <NuxtPage /> : Affiche le contenu de la page actuelle
  - <NuxtLayout /> : Applique le layout (mise en page) choisi
  - <NuxtWelcome /> : Page d'accueil par défaut de NuxtJS
  - <NuxtRouteAnnouncer /> : Composant d'accessibilité pour les lecteurs d'écran
-->

<template>
  <!-- 
    <div> : Conteneur principal de l'application
    Tout le contenu de l'app sera à l'intérieur de cette div
  -->
  <div>
    <!-- 
      <NuxtRouteAnnouncer /> : Composant d'accessibilité
      Annonce les changements de page aux lecteurs d'écran
      Important pour l'accessibilité du site
    -->
    <NuxtRouteAnnouncer />
    
    <!-- 
      <NuxtWelcome /> : Page d'accueil par défaut de NuxtJS
      C'est une page de démonstration qui sera remplacée par notre contenu
      Plus tard, on utilisera <NuxtPage /> pour afficher nos propres pages
    -->
    <NuxtWelcome />
  </div>
</template>

<!-- 
  SECTION SCRIPT (optionnelle en Vue.js)
  =======================================
  
  Ici on peut ajouter :
  - Des variables réactives (data)
  - Des méthodes (methods)
  - Des propriétés calculées (computed)
  - Des watchers
  - Des hooks de cycle de vie
  - etc.
  
  Pour l'instant, on n'en a pas besoin car on utilise juste le template
-->
