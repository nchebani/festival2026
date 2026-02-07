importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-app-sw.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-sw.js');

firebase.initializeApp({
    apiKey: "AIzaSyAbcgDTWjOjog1pRDU9N5tnevD1MvfAG5Q",
    authDomain: "live-hub-2026.firebaseapp.com",
    projectId: "live-hub-2026",
    storageBucket: "live-hub-2026.firebasestorage.app",
    messagingSenderId: "56918867184",
    appId: "1:56918867184:web:7667d75288d14a565e9635"
});

const messaging = firebase.messaging();

// Gère l'affichage quand l'app est en arrière-plan
messaging.onBackgroundMessage((payload) => {
    console.log('Message reçu en arrière-plan:', payload);
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: '/icon.png' // Optionnel : ajoute un logo à la racine
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});
