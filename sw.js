let cacheName = 'restaurants-reviews-v1'

self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(cacheName).then((cache) => {
            return cache.addAll([
                '/',
                'css/styles.css',
                'data/restaurants.json',
                'img/1.jpg',
                'img/2.jpg',
                'img/3.jpg',
                'img/4.jpg',
                'img/5.jpg',
                'img/6.jpg',
                'img/7.jpg',
                'img/8.jpg',
                'img/9.jpg',
                'img/10.jpg',
                'js/dbhelper.js',
                'js/main.js',
                'js/reg_sw.js',
                'js/restaurant_info.js',
                'index.html',
                'restaurant.html'
            ]);
        })
    );
});

self.addEventListener('activate', function(event) {
    event.waitUntil(
      caches.keys().then((cacheNames) => {
        return Promise.all(
          cacheNames.filter((name) => {
            return name.startsWith('restaurants-') &&
            name != cacheName;
          }).map((name) => {
            return caches.delete(name);
          })
        );
      })
    );
  });

  self.addEventListener('fetch', function(event) {  
    event.respondWith(
      caches.match(event.request).then((response) => {
        return response || fetch(event.request);
      })
    );
  });