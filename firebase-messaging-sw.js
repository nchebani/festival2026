/* Service worker des notifications push ELIYAH.
   À placer au même endroit que le fichier HTML de l'app (même dossier sur GitHub Pages). */
importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyAbcgDTWjOjog1pRDU9N5tnevD1MvfAG5Q",
  authDomain: "live-hub-2026.firebaseapp.com",
  projectId: "live-hub-2026",
  storageBucket: "live-hub-2026.firebasestorage.app",
  messagingSenderId: "56918867184",
  appId: "1:56918867184:web:7667d75288d14a565e9635"
});

const messaging = firebase.messaging();

// Messages « data » : on affiche nous-mêmes la notification.
messaging.onBackgroundMessage((payload) => {
  const d = payload.data || {};
  self.registration.showNotification(d.title || 'ELIYAH', {
    body: d.body || '',
    tag: d.tag || 'eliyah',
    icon: 'icon-192.png',
    badge: 'icon-192.png',
    data: { view: d.view || '' }
  });
});

self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  const view = (event.notification.data && event.notification.data.view) || '';
  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then((list) => {
      for (const c of list) {
        if ('focus' in c) { c.postMessage({ view }); return c.focus(); }
      }
      return clients.openWindow(self.registration.scope + (view ? '#' + view : ''));
    })
  );
});
