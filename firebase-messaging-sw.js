importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js');

firebase.initializeApp({
    apiKey: "AIzaSyAbcgDTWjOjog1pRDU9N5tnevD1MvfAG5Q",
    projectId: "live-hub-2026",
    messagingSenderId: "56918867184",
    appId: "1:56918867184:web:7667d75288d14a565e9635"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log('Push reçu en arrière-plan:', payload);
  const notificationTitle = payload.notification.title || "Nouveau message !";
  const notificationOptions = {
    body: payload.notification.body,
    icon: 'https://cdn-icons-png.flaticon.com/512/3119/3119338.png',
    badge: 'https://cdn-icons-png.flaticon.com/512/3119/3119338.png'
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
