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
        	// IMPORTANT: Clone the request. A request is a stream and
        	// can only be consumed once. Since we are consuming this
        	// once by cache and once by the browser for fetch, we need
        	// to clone the response.
        	var fetchRequest = event.request.clone();

        	return fetch(fetchRequest).then(
          		function(response) {
            	// Check if we received a valid response
            	if(!response || response.status !== 200 || response.type !== 'basic') {
              	return response;
            	}

            	// IMPORTANT: Clone the response. A response is a stream
         	    // and because we want the browser to consume the response
                // as well as the cache consuming the response, we need
            	// to clone it so we have two streams.
           		 var responseToCache = response.clone();

            	caches.open(CACHE_NAME)
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