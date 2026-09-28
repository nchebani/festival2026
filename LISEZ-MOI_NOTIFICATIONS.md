# ELIYAH Hub — activer les vraies notifications push

Les notifications arrivent alors même quand l'app est fermée (ordinateur, Android, et iPhone si l'app est installée sur l'écran d'accueil).

## Ce que tu vas recevoir
- un message dans le chat (sauf les tiens)
- un nouveau chantier ou un nouvel événement créé par quelqu'un d'autre
- un rappel chaque jour à 9h (heure de Paris) : chantiers urgents, à échéance dans 3 jours ou en retard

## Étape 1 — Mettre les fichiers sur GitHub
Dans le dépôt qui contient ton fichier HTML, ajoute à côté de lui (même dossier) :
`firebase-messaging-sw.js`, `manifest.json`, `icon-192.png`, `icon-512.png`
et remplace ton HTML par le nouveau `ELIYAH_Hub.html`.

## Étape 2 — Générer la clé Web Push
1. Firebase Console > roue dentée > **Paramètres du projet** > onglet **Cloud Messaging**
2. Section **Configuration Web** > **Certificats Web Push** > **Générer une paire de clés**
3. Copie la clé (commence par « B… »), ouvre le HTML et remplace `COLLE_ICI_VOTRE_CLE_VAPID` par cette clé (ligne `const VAPID_KEY = '...'`).

## Étape 3 — Déployer les fonctions (une seule fois)
Dans un terminal, depuis ce dossier :

    npm install -g firebase-tools
    firebase login
    cd functions && npm install && cd ..
    firebase deploy --only functions

(Le forfait Blaze est déjà actif. Si Firebase demande d'activer des API — Cloud Scheduler, Cloud Build, Artifact Registry — réponds oui.)
Le coût attendu pour un groupe est nul ou de quelques centimes par mois.

## Étape 4 — Activer sur chaque appareil
Dans l'app, onglet **Chat** > bouton **Activer les notifications** (ou le bandeau qui s'affiche à la connexion), puis **Autoriser**.
- **iPhone** : ouvre l'app dans Safari > Partager > **Sur l'écran d'accueil**, puis lance l'app depuis l'icône et active les notifications.
- Chaque membre doit le faire une fois sur chacun de ses appareils.

## Remarques
- Sans la clé VAPID (étape 2) ou sans le déploiement (étape 3), l'app fonctionne normalement, mais seules les alertes dans l'app (bandeaux et récap de connexion) sont actives.
- Pour recevoir les rappels par échéance, renseigne la **date d'échéance** dans le formulaire de chantier.
- Le rappel « Pour vous » compare le nom saisi dans **Responsables** avec le nom du membre (ex. « Wilson » dans Responsables reconnaît le membre Wilson).
