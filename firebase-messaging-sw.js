// firebase-messaging-sw.js

// Importation des scripts Firebase (Version Compat pour SW)
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-app-sw.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-sw.js');

// Initialisation de Firebase dans le Service Worker
firebase.initializeApp({
    apiKey: "AIzaSyAbcgDTWjOjog1pRDU9N5tnevD1MvfAG5Q",
    authDomain: "live-hub-2026.firebaseapp.com",
    projectId: "live-hub-2026",
    storageBucket: "live-hub-2026.firebasestorage.app",
    messagingSenderId: "56918867184",
    appId: "1:56918867184:web:7667d75288d14a565e9635"
});

const messaging = firebase.messaging();

/**
 * Gère l'affichage des notifications quand l'application est en arrière-plan
 * ou que l'onglet est fermé.
 */
messaging.onBackgroundMessage((payload) => {
    console.log('Message reçu en arrière-plan:', payload);

    const notificationTitle = payload.notification.title || "Nouveau message !";
    const notificationOptions = {
        body: payload.notification.body || "Vous avez reçu un nouveau message sur Live Hub.",
        icon: './icon.png', // Le '.' est crucial pour GitHub Pages
        badge: './icon.png' // Petit icône dans la barre de notification Android
    };

    return self.registration.showNotification(notificationTitle, notificationOptions);
});
