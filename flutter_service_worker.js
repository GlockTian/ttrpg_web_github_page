'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "568b4671a9db81e565b1eb44664ef356",
".git/config": "425b30e03e7dc5048d9a039537bcd699",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "5c9274416a8c22380b38fe6ee9d98f07",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "107896e6894d5310627cf2be8cac9815",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "6ccfab3877f07beb9f08f225c3e04ecb",
".git/logs/refs/heads/main": "16a3c618a6062226a5722c77f090ceea",
".git/logs/refs/remotes/origin/main": "79d99436f23330c38515205c1df43bf8",
".git/objects/13/86c29a723aa629de4ed10054652ee9514962e9": "56a456bcd517eab294823f26bf956b6c",
".git/objects/1b/9a2722086778c19970443297dca70f00757e8d": "6dc3cde56b929dc53fc49edf7aabc52a",
".git/objects/1f/86ce67726392a70b5435a18bc18f8aa1d0b6e8": "bc45eb798572696bb95f431d3c596ed7",
".git/objects/27/16d7ef756c736f489c4900b633bf6105c4a494": "4a11c513046fd9d5a036b420c88471c9",
".git/objects/2e/4d82540103e586a3ca7f6e874bbc3411823fee": "b34b4de82365e94d19279b432b564107",
".git/objects/2e/bc6cbae967f36c004d0e88243c8878ccc3f551": "573a921d29a4db041f1c36f7e5ccfa14",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/33/55dc6cdb289204c0aa931bb91dc05555211ac0": "1fc6a1437c39c78ec550b30e0b638569",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/51/4dae3a0469e526cf109f312c2b636daf9b7062": "aedd04db658afe737d6e5897bbe67e80",
".git/objects/52/f2a5ddc8afe1efd1f9096246c3fa5314be6e8b": "560122310cee6853c582d8ff216c9651",
".git/objects/57/99bed1e89f0015e1e9287248e742130ee06411": "6e86df4bfe4645ee4d1b4b6e0b4d6649",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7a/32342a2629a0d3d4cd104176b8bb101cff3280": "6fbfa4bd47b5797a2aa48affab8769d6",
".git/objects/7d/e85afba7800066211d7c7e5da2c395fb53d442": "88796f19dfec65d9ce97994c78f1b60f",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/2dfcb3c4f86008ef200d8f67c4ad0cdc8a77a0": "d89377a56f33ff1af7bfe6bf18a3a9b2",
".git/objects/8c/531ffd1164c47c759f612d988b6ef6b72af187": "ae2be0d58afbce5c0d55c3f5b6ee2fcc",
".git/objects/91/4e7e07ff69258a745da4b3f69ef15771b858be": "84c1190b58b7c0d60f8ca90b58432afe",
".git/objects/97/c6ee2194bdbd62fd6f845bfa5fedd12d7b0032": "c2ed7695d4c94caea9b62be20aa12d7d",
".git/objects/9e/597540d172dfd723c6bd15618c2351cba2c300": "6c2d51b3ea579f6b29ab76a0628941e4",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a4/6c4af815d907c176d91e6c97d03de547d40562": "471bcc60d881a4270e69bde941d7cdd3",
".git/objects/a7/640a44452440b64fc629ebafce594cc8f0c120": "427398d4c9dd7224ad90d6515d21f2ec",
".git/objects/a8/59d53d6c57f84e903894ea7a72a5ca98401124": "af9d25e2e59a40722397e067f4645fae",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/a9/89544e36ea68cee4bb942651a741ebd3acabe2": "829a56a5c1533e5f8c2c13e2c6416e2f",
".git/objects/a9/a256951a24f9e96290e14dc9b90feeab83c571": "59f5790dda4fabc4341521a591b78d1d",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bc/a8ecd5c60469a43b0614c56682215fdb38d3e3": "bf6bd9d3248911af0066417458a246a9",
".git/objects/bd/a7185c8ea84556d56d838c374cfbfc3e781a0b": "ee7558b7fe3572ca0e61cc5b1ef4c4fa",
".git/objects/c4/1845f3815b534b93a31920000f0812f6a42682": "001030c4ae7733fc6c469dfddfec15ed",
".git/objects/c6/cc42efd61a2026b214db206ba69493800eb3d1": "9779969c09876471efa776b089b8fbc9",
".git/objects/c9/bf628d3817e5df9a8d69f1733de4145bafca3f": "a5ab6a4644ec7db86ab3269cdcfa3ffd",
".git/objects/d4/cb1950ac20c29e21ef108790bbfc6ffaede9ae": "9959c64305682aab65dd73855475a5a1",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/dc/c9d9fbeebe5da76a3471a01dfefdc34c942649": "2fac6629f207a99ee9ebef5097bfde16",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/fb/16581ce2fdce087dc7ceddd24b327661318516": "3dd879dd0c059103f80fbc7a5143ab2f",
".git/objects/fe/2a9dc77db3bab082440ff2b54db666e5f1b151": "da81bd396b5298b986b6b1dfe6103291",
".git/refs/heads/main": "8d73934d1a0dae43abd35566778fd84f",
".git/refs/remotes/origin/main": "8d73934d1a0dae43abd35566778fd84f",
"assets/AssetManifest.json": "08810f8e01082da9602bb0deb175912d",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/images/dice.png": "b336836bea5ebaccf602c8186841416f",
"assets/images/hutao.png": "565140acc93d18605f0dd32ea410f237",
"assets/images/hutao_big.jpg": "a7c3f8bfd809a4697a55abf29639497f",
"assets/images/loading.gif": "1af813b09b27a3bbc222a79026687234",
"assets/images/skill_icon.png": "00756fa05d5e1918ab4d827648a35979",
"assets/json/characterexample.json": "60adc425a273ea94f9c2092448a34eec",
"assets/json/occupation.json": "41cb224c98b4080ec4b6d49513167198",
"assets/json/skills.json": "da8081b1c54718b0dd1861d89d09b7a1",
"assets/json/status.json": "6ebe6d836a4920f0d79cab1e1749ff9e",
"assets/NOTICES": "26af36f0636561f262491e75e7dc6fd3",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "94b5a87677d943318e071282daec2053",
"/": "94b5a87677d943318e071282daec2053",
"main.dart.js": "8a665e63cfdc7d13304e5fe56b62a524",
"manifest.json": "0f11335ecb6654d8da7c519d914b06e6",
"version.json": "fafab4aa9495faf6100ae7d47ff98295"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
