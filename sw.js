// Nothing actually present at the moment
// self.addEventListener('install', function(event) {
//     event.waitUntil(
//       caches.open('mygame-core-v1').then(function(cache) {
//         cache.addAll(
//             '/css/index.css',
//             '/css/loginDetail.css',
//             '/css/loginDetailsMobile.css',
//             '/css/timeProgress.css',
//             '/css/design.css',
//             '/css/swipeMenu.css',
//             '/manifest.json',
//             '/scripts/timeProgress.js',
//             '/scripts/CRUDlS.js',
//             '/scripts/firebase.js',
//             '/scripts/loginDetails.js',
//             '/scripts/timeProgress.js',
//             '/scripts/notification.js',
//             '/scripts/design.js',
//             '/scripts/swipeMenu.js'
//         );
//         return cache.addAll(
//             '/css/index.css',
//             '/css/loginDetail.css',
//             '/css/loginDetailsMobile.css',
//             '/css/timeProgress.css',
//             '/css/design.css',
//             '/css/swipeMenu.css',
//             '/manifest.json',
//             '/scripts/timeProgress.js',
//             '/scripts/CRUDlS.js',
//             '/scripts/firebase.js',
//             '/scripts/loginDetails.js',
//             '/scripts/timeProgress.js',
//             '/scripts/notification.js',
//             '/scripts/design.js',
//             '/scripts/swipeMenu.js'
//         );
//       })
//     );
//   });
//   self.addEventListener('activate', function(event) {
//     event.waitUntil(
//       caches.keys().then(function(cacheNames) {
//         return Promise.all(
//           cacheNames.filter(function(cacheName) {
//             // Return true if you want to remove this cache,
//             // but remember that caches are shared across
//             // the whole origin
//           }).map(function(cacheName) {
//             return caches.delete(cacheName);
//           })
//         );
//       })
//     );
//   });

  self.addEventListener('fetch', function(event) {
    // event.respondWith(
    //   caches.open('mysite-dynamic').then(function(cache) {
    //     return cache.match(event.request).then(function (response) {
    //       return response || fetch(event.request).then(function(response) {
    //         cache.put(event.request, response.clone());
    //         return response;
    //       });
    //     });
    //   })
    // );
  });