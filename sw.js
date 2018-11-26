let staticCacheName = 'restaurant-static-v2';

self.addEventListener('install',function(event) {
	event.waitUntil(
		caches.open(staticCacheName).then(function(cache) {
			console.log("Installing");
			return cache.addAll([
				'./',
				'./index.html',
				'./restaurant.html',
				'./css/styles.css',
				'./data/restaurants.json',
				'./js/dbhelper.js',
				'./js/main.js',
				'./js/restaurant_info.js',
				'./js/sw_register.js',
				'./img/1.jpg',
				'./img/2.jpg',
				'./img/3.jpg',
				'./img/4.jpg',
				'./img/5.jpg',
				'./img/6.jpg',
				'./img/7.jpg',
				'./img/8.jpg',
				'./img/9.jpg',
				'./img/10.jpg'
			]);
		})
	);
});

//console.log('restaurant-static-v1');
self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.filter(function(cacheName) {
          return cacheName.startsWith('restaurant-') &&
                 cacheName != staticCacheName;
        }).map(function(cacheName) {
          return caches.delete(cacheName);
        })
      );
    })
  );
});

self.addEventListener('fetch', function(event) {
	event.respondWith(
		caches.match(event.request)
		.then(function(response) {
			// Cache hit - return response
       		 if (response) {
          		return response;
        	}
        	// Clone the request.

        	var fetchRequest = event.request.clone();

        	return fetch(fetchRequest).then(
          		function(response) {
            	// Check if we received a valid response
            	if(!response || response.status !== 200 || response.type !== 'basic') {
              	return response;
            	}

            	// Clone the response.
           		 var responseToCache = response.clone();

            	caches.open(staticCacheName)
              		.then(function(cache) {
                		cache.put(event.request, responseToCache);
              		});

            	return response;
          		}
       		 );
		})
	);
});

//console.log(cache.status);