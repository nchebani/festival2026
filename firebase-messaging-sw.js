importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-app-sw.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-sw.js');

firebase.initializeApp({
    apiKey: "AIzaSyAbcgDTWjOjog1pRDU9N5tnevD1MvfAG5Q",
    projectId: "live-hub-2026",
    messagingSenderId: "56918867184",
    appId: "1:56918867184:web:7667d75288d14a565e9635"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    const notificationTitle = payload.notification.title || "Live Hub 2026";
    const notificationOptions = {
        body: payload.notification.body,
        icon: 'https://festival2026.github.io/icon.png' // Remplace par ton icône si tu en as une
    };
    self.registration.showNotification(notificationTitle, notificationOptions);
});
