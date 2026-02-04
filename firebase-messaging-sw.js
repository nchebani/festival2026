importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js');

// On initialise Firebase à l'intérieur du Worker
firebase.initializeApp({
    apiKey: "AIzaSyAbcgDTWjOjog1pRDU9N5tnevD1MvfAG5Q",
    projectId: "live-hub-2026",
    messagingSenderId: "56918867184",
    appId: "1:56918867184:web:7667d75288d14a565e9635"
});

const messaging = firebase.messaging();

// Cette partie gère l'affichage quand le téléphone reçoit le signal
messaging.onBackgroundMessage((payload) => {
  console.log('Message reçu en arrière-plan:', payload);
  
  const notificationTitle = payload.notification.title || "Live Hub 2026";
  const notificationOptions = {
    body: payload.notification.body || "Nouvelle mise à jour dans le groupe !",
    icon: 'https://cdn-icons-png.flaticon.com/512/3616/3616230.png',
    badge: 'https://cdn-icons-png.flaticon.com/512/3616/3616230.png'
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
