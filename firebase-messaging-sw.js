importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-app-sw.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-sw.js');

firebase.initializeApp({
    apiKey: "AIzaSyAbcgDTWjOjog1pRDU9N5tnevD1MvfAG5Q",
    projectId: "live-hub-2026",
    messagingSenderId: "56918867184",
    appId: "1:56918867184:web:7667d75288d14a565e9635"
});

const messaging = firebase.messaging();

// Gère l'affichage de la notification quand l'app est fermée
messaging.onBackgroundMessage((payload) => {
    console.log('Message reçu en arrière-plan:', payload);
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968705.png' // Tu pourras changer l'icône
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});
