// Install serviceWorker and the desired files
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open('mws-restaurant-stage-1').then(cache => {
            return cache.addAll([
                '/',
                '/index.html',
                '/restaurant.html',
                '/css/styles.css',
                '/js/dbhelper.js',
                '/js/main.js',
                '/js/restaurant_info.js',
                '/data/restaurants.json',
                '/img/1.jpg',
                '/img/2.jpg',
                '/img/3.jpg',
                '/img/4.jpg',
                '/img/5.jpg',
                '/img/6.jpg',
                '/img/7.jpg',
                '/img/8.jpg',
                '/img/9.jpg',
                '/img/10.jpg'
            ]);
        }));
});

// Search of files in cache
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});

// Update files
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys(event.request).then(currentVersion => {
            return currentVersion || fetch(event.request);
        }));
});