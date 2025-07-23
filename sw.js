// Service Worker for Progressive Web App functionality
// Provides offline support and performance optimization

const CACHE_NAME = 'letisia-portfolio-v1.0.0';
const urlsToCache = [
  '/',
  '/about/',
  '/portfolio/',
  '/experience/',
  '/contact/',
  '/posts/',
  '/assets/css/main.css',
  '/assets/js/modern-framework.js',
  'https://res.cloudinary.com/louiy9obu/image/upload/v1628419918/B84D1E9F-0C77-4FE3-9AEE-A7EAC0BCB8D9_evlxba.jpg',
  'https://res.cloudinary.com/louiy9obu/image/upload/v1626002590/letisias_projects_fjlv67.png'
];

// Install event - cache resources
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

// Fetch event - serve cached content when offline
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Return cached version or fetch from network
        if (response) {
          return response;
        }
        
        return fetch(event.request).then((response) => {
          // Check if valid response
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }

          // Clone the response
          const responseToCache = response.clone();

          caches.open(CACHE_NAME)
            .then((cache) => {
              cache.put(event.request, responseToCache);
            });

          return response;
        });
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Background sync for form submissions
self.addEventListener('sync', (event) => {
  if (event.tag === 'background-sync') {
    event.waitUntil(doBackgroundSync());
  }
});

function doBackgroundSync() {
  // Handle background synchronization
  return new Promise((resolve) => {
    // Sync logic here
    resolve();
  });
}

// Push notification handling
self.addEventListener('push', (event) => {
  const options = {
    body: event.data ? event.data.text() : 'New update available!',
    icon: 'https://res.cloudinary.com/louiy9obu/image/upload/v1628419918/B84D1E9F-0C77-4FE3-9AEE-A7EAC0BCB8D9_evlxba.jpg',
    badge: 'https://res.cloudinary.com/louiy9obu/image/upload/v1628419918/B84D1E9F-0C77-4FE3-9AEE-A7EAC0BCB8D9_evlxba.jpg',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    },
    actions: [
      {
        action: 'explore',
        title: 'Explore',
        icon: 'https://res.cloudinary.com/louiy9obu/image/upload/v1626003528/500x300projects_dbt5xc.png'
      },
      {
        action: 'close',
        title: 'Close',
        icon: 'https://res.cloudinary.com/louiy9obu/image/upload/v1626003528/500x300projects_dbt5xc.png'
      }
    ]
  };

  event.waitUntil(
    self.registration.showNotification('Letisia\'s Portfolio', options)
  );
});

// Notification click handling
self.addEventListener('notificationclick', (event) => {
  event.notification.close();

  if (event.action === 'explore') {
    event.waitUntil(
      clients.openWindow('/')
    );
  }
});
