# Structure du Projet NuxtJS - Site Vitrine Architecte

## 📁 Organisation des dossiers et fichiers

### 🗂️ Dossiers principaux

#### `.nuxt/`
- **Rôle** : Dossier généré automatiquement par NuxtJS
- **Contenu** : Fichiers de build, cache, configuration compilée
- **Important** : Ne jamais modifier manuellement, se régénère à chaque build

#### `node_modules/`
- **Rôle** : Dossier contenant toutes les dépendances npm
- **Contenu** : Bibliothèques installées (NuxtJS, Vue.js, TailwindCSS, etc.)
- **Important** : Ne jamais commiter dans Git, se régénère avec `npm install`

#### `public/`
- **Rôle** : Fichiers statiques accessibles directement
- **Contenu** : Images, favicon, robots.txt, fichiers de téléchargement
- **Exemple** : `public/logo.png` sera accessible via `http://localhost:3000/logo.png`

#### `server/`
- **Rôle** : Code côté serveur (API routes, middleware)
- **Contenu** : Endpoints API, logique métier, base de données
- **Exemple** : `server/api/contact.post.ts` pour traiter le formulaire de contact

### 📄 Fichiers de configuration

#### `nuxt.config.ts`
- **Rôle** : Configuration principale de NuxtJS
- **Contenu** : Modules, plugins, paramètres de build, variables d'environnement
- **Important** : C'est le cerveau du projet, tout y est configuré

#### `package.json`
- **Rôle** : Manifeste du projet npm
- **Contenu** : Nom, version, dépendances, scripts de commande
- **Scripts utiles** :
  - `npm run dev` : Lance le serveur de développement
  - `npm run build` : Compile le projet pour la production
  - `npm run generate` : Génère un site statique

#### `tsconfig.json`
- **Rôle** : Configuration TypeScript
- **Contenu** : Règles de typage, chemins d'import, options de compilation
- **Avantage** : Détection d'erreurs en temps réel, autocomplétion

#### `eslint.config.mjs`
- **Rôle** : Configuration ESLint (linter de code)
- **Contenu** : Règles de style, détection d'erreurs, formatage
- **Avantage** : Code propre et cohérent

### 🎨 Fichiers de l'application

#### `app.vue`
- **Rôle** : Point d'entrée principal de l'application
- **Contenu** : Structure HTML de base, composants globaux
- **Important** : C'est le template racine, tout passe par là

### 📚 Fichiers de documentation

#### `specification.md`
- **Rôle** : Spécifications fonctionnelles du projet
- **Contenu** : Objectifs, fonctionnalités, architecture, planning

#### `README.md`
- **Rôle** : Documentation principale du projet
- **Contenu** : Présentation, installation, utilisation

## 🔄 Workflow de développement

### 1. Développement local
```bash
npm run dev
```
- Lance le serveur de développement sur `http://localhost:3000`
- Rechargement automatique à chaque modification
- Outils de debug intégrés

### 2. Build de production
```bash
npm run build
```
- Compile et optimise le code
- Génère les fichiers dans `.output/`
- Prêt pour le déploiement

### 3. Génération statique
```bash
npm run generate
```
- Crée un site statique dans `.output/public/`
- Peut être déployé sur n'importe quel hébergeur statique

## 🎯 Prochaines étapes

1. **Créer les pages** dans le dossier `pages/`
2. **Créer les composants** dans le dossier `components/`
3. **Créer les layouts** dans le dossier `layouts/`
4. **Ajouter le contenu** dans le dossier `content/`
5. **Configurer l'API** dans le dossier `server/api/`

## 💡 Concepts NuxtJS importants

### Auto-imports
NuxtJS importe automatiquement :
- Les composants du dossier `components/`
- Les fonctions utilitaires du dossier `utils/`
- Les composables du dossier `composables/`

### File-based routing
Les fichiers dans `pages/` deviennent automatiquement des routes :
- `pages/index.vue` → `/`
- `pages/about.vue` → `/about`
- `pages/projects/[id].vue` → `/projects/123`

### Layouts
Les layouts définissent la structure commune des pages :
- `layouts/default.vue` : Layout par défaut
- `layouts/admin.vue` : Layout pour la section admin 