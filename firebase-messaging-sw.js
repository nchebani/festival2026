// Importation des scripts Firebase (Version Compat pour SW)
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js');

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
 * Gère l'affichage des notifications quand l'application est fermée ou en arrière-plan.
 */
messaging.onBackgroundMessage((payload) => {
    console.log('Message reçu en arrière-plan:', payload);

    const notificationTitle = payload.notification.title || "Nouveau message !";
    const notificationOptions = {
        body: payload.notification.body || "Nouveau message sur Live Hub.",
        icon: './favicon.ico', // Assure-toi d'avoir une icône ou change ce lien
        badge: './favicon.ico'
    };

    return self.registration.showNotification(notificationTitle, notificationOptions);
});
