const CACHE_NAME = 'megashlic-v2-compact-reviews';
const urlsToCache = [
  '/',
  '/favicon.svg',
  '/manifest.json'
];

self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        const fetchPromise = fetch(event.request).then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200 && networkResponse.type === 'basic') {
            const responseToCache = networkResponse.clone();
            caches.open(CACHE_NAME)
              .then((cache) => {
                cache.put(event.request, responseToCache);
              });
          }
          return networkResponse;
        }).catch(() => response);

        return response || fetchPromise;
      })
  );
});

self.addEventListener('activate', (event) => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

self.addEventListener('push', (event) => {
  const data = event.data ? event.data.json() : {};
  const title = data.title || 'Мега Шлиц';
  const options = {
    body: data.body || 'Новое предложение!',
    icon: '/favicon.svg',
    badge: '/favicon.svg',
    vibrate: [200, 100, 200],
    data: {
      url: data.url || '/',
      campaign: data.campaign || 'default'
    },
    actions: [
      { action: 'open', title: 'Открыть' },
      { action: 'close', title: 'Закрыть' }
    ]
  };
  
  event.waitUntil(
    self.registration.showNotification(title, options).then(() => {
      return self.clients.matchAll({ type: 'window' }).then(clients => {
        clients.forEach(client => {
          client.postMessage({
            type: 'NOTIFICATION_RECEIVED',
            campaign: data.campaign || 'default'
          });
        });
      });
    })
  );
});

self.addEventListener('notificationclick', (event) => {
  const campaign = event.notification.data.campaign || 'default';
  event.notification.close();
  
  if (event.action === 'close') {
    event.waitUntil(
      self.clients.matchAll({ type: 'window' }).then(clients => {
        clients.forEach(client => {
          client.postMessage({
            type: 'NOTIFICATION_CLOSED',
            campaign: campaign
          });
        });
      })
    );
  } else {
    const urlToOpen = event.notification.data.url || '/';
    event.waitUntil(
      clients.openWindow(urlToOpen).then(() => {
        return self.clients.matchAll({ type: 'window' }).then(clients => {
          clients.forEach(client => {
            client.postMessage({
              type: 'NOTIFICATION_CLICKED',
              campaign: campaign,
              url: urlToOpen
            });
          });
        });
      })
    );
  }
});