# Site La Fabrique du Vivant

Ce dossier contient le site statique et ses maquettes de référence.

## Ouvrir l'aperçu

Double-cliquer sur `ouvrir-apercu.cmd`. Le site est fabriqué, contrôlé, puis ouvert dans le navigateur. La fenêtre noire doit rester ouverte pendant la consultation. `Ctrl+C` l'arrête.

## Commandes utiles

- `npm run build` fabrique l'aperçu local dans `dist/`.
- `npm run check` contrôle les pages et les liens.
- `npm run preview` fabrique, contrôle et ouvre le site local.
- `npm run release` fabrique la version publiable. Cette commande échoue volontairement tant que les validations, mentions légales, photos ou le formulaire manquent.

## Organisation

- `maquettes/` conserve les prototypes validés comme références visuelles.
- `src/` contient le moule commun, les textes et les médias du site.
- `scripts/` contient la petite fabrique locale et ses contrôles.
- `dist/` est généré automatiquement. Ne rien modifier directement dedans.
