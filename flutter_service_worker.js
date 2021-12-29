'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "e5c6ac95b6a1b71ddffb30ad1d638d87",
".git/config": "425b30e03e7dc5048d9a039537bcd699",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "7dc0bee80838ba125d8dff94484a5055",
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
".git/index": "c56daf06e18ae0f5772e3288ffcb2736",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "76216b0044323a32cd826d85d302aacf",
".git/logs/refs/heads/main": "de3a05c4b94dfc9b860b8549b9e19fec",
".git/logs/refs/remotes/origin/main": "9e9f3dc54fa3e92f3eb6101e80c62834",
".git/objects/00/8b160b64d93e619134142e18b1fb6b7dfc9173": "e84a081e7ba877e406301fde562b84dd",
".git/objects/0f/c2ca6fc3a4600a39b6adac99c18d6dce7ee286": "a7e271c1def1df977617f063d7e5d633",
".git/objects/10/ac1329df791f63310244cb4ae05506967eeb9c": "60fe569e7ecc155244f4f5d555e5d416",
".git/objects/13/86c29a723aa629de4ed10054652ee9514962e9": "56a456bcd517eab294823f26bf956b6c",
".git/objects/17/799dfc8eb9aec97273c7305541259bf61f0670": "2240cdef3c89335a5fcfccfefc35a4fa",
".git/objects/1b/9a2722086778c19970443297dca70f00757e8d": "6dc3cde56b929dc53fc49edf7aabc52a",
".git/objects/1f/86ce67726392a70b5435a18bc18f8aa1d0b6e8": "bc45eb798572696bb95f431d3c596ed7",
".git/objects/23/6b132d3a21aa9758394b46ab81e74c2df11d59": "e8b4160bfbd2a1acdde2636ee9e472eb",
".git/objects/25/594e2045cddaa51423686988de7906ee6ecc45": "b96bc4c25cb7b9e740c8fb46eb71462d",
".git/objects/27/16d7ef756c736f489c4900b633bf6105c4a494": "4a11c513046fd9d5a036b420c88471c9",
".git/objects/29/c1ac3663baf940fd0e9658cf40da9b241a0821": "9d9f2d2c5ee231078c460e676b68141d",
".git/objects/2e/4d82540103e586a3ca7f6e874bbc3411823fee": "b34b4de82365e94d19279b432b564107",
".git/objects/2e/bc6cbae967f36c004d0e88243c8878ccc3f551": "573a921d29a4db041f1c36f7e5ccfa14",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/33/55dc6cdb289204c0aa931bb91dc05555211ac0": "1fc6a1437c39c78ec550b30e0b638569",
".git/objects/3b/7e9381e6d8633e3991d0a8a4e8740d430834b9": "aca8130cac51953783c959d0f76ba070",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4f/ecd99166b650343ba03cf271e67b8b69af64f6": "65637d6b7556764ecc0f143fba2027aa",
".git/objects/51/4dae3a0469e526cf109f312c2b636daf9b7062": "aedd04db658afe737d6e5897bbe67e80",
".git/objects/51/6aa4d957e7bf4f38127911ee9f667014859ad9": "e2cb6204fd46cf7c7994ea3325b74014",
".git/objects/52/f2a5ddc8afe1efd1f9096246c3fa5314be6e8b": "560122310cee6853c582d8ff216c9651",
".git/objects/57/99bed1e89f0015e1e9287248e742130ee06411": "6e86df4bfe4645ee4d1b4b6e0b4d6649",
".git/objects/5c/484719246fd1338d3f103b761d865727e30bd8": "ac5ad5beca77e1badf41403b10804fc3",
".git/objects/5e/ad0d68cb902b3ed9c5b239bd8ffe138281c52e": "ead31f32c1f1bbc7d0827084ae8734de",
".git/objects/67/c60e486a771a6e64005c642e1baebcfa4f237e": "fb32a25407c5641327ffcc27d92a3648",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7a/32342a2629a0d3d4cd104176b8bb101cff3280": "6fbfa4bd47b5797a2aa48affab8769d6",
".git/objects/7d/e85afba7800066211d7c7e5da2c395fb53d442": "88796f19dfec65d9ce97994c78f1b60f",
".git/objects/80/94876ffd3015fecce31c4c8d448a3ef4b9e0ce": "085f2d22d75e2ff41408efd5b2d4cf7a",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/2dfcb3c4f86008ef200d8f67c4ad0cdc8a77a0": "d89377a56f33ff1af7bfe6bf18a3a9b2",
".git/objects/8c/531ffd1164c47c759f612d988b6ef6b72af187": "ae2be0d58afbce5c0d55c3f5b6ee2fcc",
".git/objects/91/4e7e07ff69258a745da4b3f69ef15771b858be": "84c1190b58b7c0d60f8ca90b58432afe",
".git/objects/96/66bf816a82e64b2150cd39267a73b7e96e4fc7": "6b7eb34266cfb801a851d8bf56218a28",
".git/objects/97/c6ee2194bdbd62fd6f845bfa5fedd12d7b0032": "c2ed7695d4c94caea9b62be20aa12d7d",
".git/objects/9a/8c38e8fd2da52505898598d78b1a117f5a65c0": "20bfe36fc1b0c43a8bf9db6625d65f9d",
".git/objects/9e/597540d172dfd723c6bd15618c2351cba2c300": "6c2d51b3ea579f6b29ab76a0628941e4",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a4/6c4af815d907c176d91e6c97d03de547d40562": "471bcc60d881a4270e69bde941d7cdd3",
".git/objects/a7/640a44452440b64fc629ebafce594cc8f0c120": "427398d4c9dd7224ad90d6515d21f2ec",
".git/objects/a8/59d53d6c57f84e903894ea7a72a5ca98401124": "af9d25e2e59a40722397e067f4645fae",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/a9/89544e36ea68cee4bb942651a741ebd3acabe2": "829a56a5c1533e5f8c2c13e2c6416e2f",
".git/objects/a9/a256951a24f9e96290e14dc9b90feeab83c571": "59f5790dda4fabc4341521a591b78d1d",
".git/objects/a9/bc415b2ea9248cfa462d67f6b1e9f372911baf": "58cf19022c4f3f08b8a80d135ff06f51",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/b2/43698703dc468225eafb742544fa08c2b1a320": "c78b0599e26309bd713b322b091426e1",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bc/a8ecd5c60469a43b0614c56682215fdb38d3e3": "bf6bd9d3248911af0066417458a246a9",
".git/objects/bd/a7185c8ea84556d56d838c374cfbfc3e781a0b": "ee7558b7fe3572ca0e61cc5b1ef4c4fa",
".git/objects/c4/1845f3815b534b93a31920000f0812f6a42682": "001030c4ae7733fc6c469dfddfec15ed",
".git/objects/c6/cc42efd61a2026b214db206ba69493800eb3d1": "9779969c09876471efa776b089b8fbc9",
".git/objects/c9/bf628d3817e5df9a8d69f1733de4145bafca3f": "a5ab6a4644ec7db86ab3269cdcfa3ffd",
".git/objects/d3/2cc6b3102e6c657eee82d1efefd60064b9d969": "77508eeba0d9b7c3346cabef8d1cacbb",
".git/objects/d4/cb1950ac20c29e21ef108790bbfc6ffaede9ae": "9959c64305682aab65dd73855475a5a1",
".git/objects/d5/28f7a137b68d82f1dff8c6d05d89b30c4bdbed": "105a3ded1422b71c063f78d1ddf1e5c1",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/d32c00feca374fb48cef3102c89d24398d8662": "3a8d03e67a9877813f37f3a579ea00cb",
".git/objects/dc/c9d9fbeebe5da76a3471a01dfefdc34c942649": "2fac6629f207a99ee9ebef5097bfde16",
".git/objects/e1/ac2273779729add295a2abdc8336c3ff5575ad": "7a2dbc29de0bf266911f8ef91ee8be80",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e6/5dc385e69c758c725e88346eb1e9bb7acfc71e": "3fc6a5544c971ac5abf58be18d2f2c10",
".git/objects/e6/972eb67ea71e9af7894158759acff0fca7b244": "540afd83301e4c51a711cbf0ca5a393b",
".git/objects/e9/d7c14805d933f06ff62ec63bddd7363b9b3004": "a673d0bc5d36b970b05fdc46c16d20b6",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ef/9a91caf33ab06372b5ce3c516407711260b9c9": "f61c68e456602bf1f82e757cd76b2a97",
".git/objects/f3/d738eba192e3f08b1b09278b842a4f023fec82": "59f5e2777127a44ffb63de28e897f1cb",
".git/objects/f4/82a4de37f45bd8ec67edfe8fd36a4e06605d74": "1a0ef26cd14a436b09e46dc905a93abc",
".git/objects/fb/16581ce2fdce087dc7ceddd24b327661318516": "3dd879dd0c059103f80fbc7a5143ab2f",
".git/objects/fb/74c2bd5c33bce2800d870891d0e99f96aa06d1": "f4fa56d257b2db1c9953108aa41a9121",
".git/objects/fe/2a9dc77db3bab082440ff2b54db666e5f1b151": "da81bd396b5298b986b6b1dfe6103291",
".git/refs/heads/main": "08b33e027695f18e0b7e75843fb15627",
".git/refs/remotes/origin/main": "08b33e027695f18e0b7e75843fb15627",
"assets/AssetManifest.json": "e2685020297f4c9288a37e564a184bf8",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/images/dice.png": "b336836bea5ebaccf602c8186841416f",
"assets/images/hutao.png": "565140acc93d18605f0dd32ea410f237",
"assets/images/hutao_big.jpg": "a7c3f8bfd809a4697a55abf29639497f",
"assets/images/loading.gif": "1af813b09b27a3bbc222a79026687234",
"assets/images/skill_icon.png": "00756fa05d5e1918ab4d827648a35979",
"assets/json/characterexample.json": "d59c680d81f81ca63d31340d82e773c6",
"assets/json/occupation.json": "41cb224c98b4080ec4b6d49513167198",
"assets/json/skills.json": "585585ad2e1f9e84fa0e765f294959ba",
"assets/json/status.json": "d54c358da82461713c83ed07eaebdcc1",
"assets/NOTICES": "a53215a917c2a44a8c892616f650cb4b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_login/assets/images/ecorp.png": "24e80e9441acf073076893cebbe60ac0",
"assets/packages/flutter_signin_button/assets/logos/2.0x/facebook_new.png": "83bf0093719b2db2b16e2839aee1069f",
"assets/packages/flutter_signin_button/assets/logos/2.0x/google_dark.png": "937022ea241c167c8ce463d2ef7ed105",
"assets/packages/flutter_signin_button/assets/logos/2.0x/google_light.png": "8f10eb93525f0c0259c5e97271796b3c",
"assets/packages/flutter_signin_button/assets/logos/3.0x/facebook_new.png": "12531aa3541312b7e5ddd41223fc60cb",
"assets/packages/flutter_signin_button/assets/logos/3.0x/google_dark.png": "ac553491f0002941159b405c2d37e8c6",
"assets/packages/flutter_signin_button/assets/logos/3.0x/google_light.png": "fe46d37e7d6a16ecd15d5908a795b4ee",
"assets/packages/flutter_signin_button/assets/logos/facebook_new.png": "e1dff5c319a9d7898aee817f624336e3",
"assets/packages/flutter_signin_button/assets/logos/google_dark.png": "c32e2778b1d6552b7b4055e49407036f",
"assets/packages/flutter_signin_button/assets/logos/google_light.png": "f71e2d0b0a2bc7d1d8ab757194a02cac",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b37ae0f14cbc958316fac4635383b6e8",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5178af1d278432bec8fc830d50996d6f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "aa1ec80f1b30a51d64c72f669c1326a7",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "35fc5a5452cb8fca3710cfe58ffa3abe",
"/": "35fc5a5452cb8fca3710cfe58ffa3abe",
"main.dart.js": "0c1276fab297083e03e955e57fd4a744",
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
