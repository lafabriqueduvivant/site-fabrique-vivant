# Site La Fabrique du Vivant

Ce dossier contient le site statique et ses maquettes de référence.

## Ouvrir l'aperçu

Double-cliquer sur `ouvrir-apercu.cmd`. Le site est fabriqué, contrôlé, puis ouvert dans le navigateur. La fenêtre noire doit rester ouverte pendant la consultation. `Ctrl+C` l'arrête.

## Commandes utiles

- `npm run build` fabrique l'aperçu local dans `dist/`.
- `npm run check` contrôle les pages et les liens.
- `npm run preview` fabrique, contrôle et ouvre le site local.
- `npm run release` fabrique la version publiable et signale les points encore en attente (formulaire, téléphone).

## Mise en ligne

Le site est publié sur GitHub Pages : chaque envoi sur la branche `main` déclenche automatiquement la fabrication et la mise en ligne (voir `.github/workflows/deploy.yml`). Le domaine `lafabriqueduvivant.fr` est branché depuis les réglages GitHub Pages du dépôt.

## Organisation

- `maquettes/` conserve les prototypes validés comme références visuelles (gardé en local, non publié sur GitHub).
- `src/` contient le moule commun, les textes et les médias du site.
- `scripts/` contient la petite fabrique locale et ses contrôles.
- `dist/` est généré automatiquement. Ne rien modifier directement dedans.
