// Import du plugin TailwindCSS pour Vite
// Vite est le bundler utilisé par NuxtJS pour optimiser le code
import tailwindcss from '@tailwindcss/vite'

// Configuration principale de NuxtJS
// Ce fichier définit tous les paramètres du projet
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // Date de compatibilité pour s'assurer que le code fonctionne
  // avec la version spécifiée de NuxtJS
  compatibilityDate: '2025-05-15',
  
  // Active les outils de développement NuxtJS
  // Permet d'avoir un panneau de debug dans le navigateur
  devtools: { enabled: true },

  // Liste des modules NuxtJS à utiliser
  // Chaque module ajoute des fonctionnalités au projet
  modules: [
    '@nuxt/content',    // Gestion de contenu (markdown, JSON, etc.)
    '@nuxt/eslint',     // Linting du code (détection d'erreurs)
    '@nuxt/fonts',      // Optimisation des polices
    '@nuxt/icon',       // Gestion des icônes
    '@nuxt/image',      // Optimisation des images
    '@nuxt/scripts',    // Gestion des scripts
    '@nuxt/ui',         // Kit de composants UI (boutons, formulaires, etc.)
    '@nuxt/test-utils'  // Outils pour les tests
  ],
  
  // Configuration de Vite (le bundler)
  vite: {
    plugins: [
      // Plugin TailwindCSS pour compiler les styles CSS
      tailwindcss(),
    ],
  },
})