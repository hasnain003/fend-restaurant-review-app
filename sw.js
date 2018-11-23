const staticCacheName='Restaurant-static-v1';

self.addEventListener('install',function(event) {

	event.waitUntil(
		caches.open(staticCacheName).then(function(cache) {
			return cache.addAll([
				'./'
				'./skelton',
				'./js/main.js',
				'./js/dbhelper.js',
				'./js/restaurant_info.js',
				'./css/style.css',
				'./index.html',
				'./restaurant.html',
				'./data/restaurants.json',
				'./img/1.jpg',
				'./img/2.jpg',
				'./img/3.jpg',
				'./img/4.jpg',
				'./img/5.jpg',
				'./img/6.jpg',
				'./img/7.jpg',
				'./img/8.jpg',
				'./img/9.jpg',
				'./img/10.jpg',
				'https://unpkg.com/leaflet@1.3.1/dist/leaflet.css',
				'https://maps.googleapis.com/maps/api/js?key=AIzaSyAr7_bhm_T4gTYGPYYsdYzdkmnak283zpI&libraries=places',
				'https://unpkg.com/leaflet@1.3.1/dist/leaflet.js',
				'//normalize-css.googlecode.com/svn/trunk/normalize.css'
				]);
			})
		);
	});

self.addEventListener('activate',function(event) {
	event.waitUntil(
		caches.key().then(function(cacheNames) {
			return Promise.all(
				cacheNames.filter(function(cacheName) {
					cacheName != staticCacheName;
				}).map(function(cacheName) {
					return caches.delete(cacheName);
				})
			);
		})
	);
});

self.addEventListener('fetch',function(event) {
	event.respondWith(
		caches.match(event.request).then(function(response) {
			if(response.status == 404) {
				return new Response("Whoops, not found");
			}
			return response;
		}).catch(function() {
			return new Response("Uhh, no thattotally failed");
		})
	);	
});

