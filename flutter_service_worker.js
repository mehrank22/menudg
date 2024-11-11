'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "46f49eb456a697fb9b9967617c6f66fe",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "6e4df9a9deee6292b0febceafd3c4691",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "f40b832decb5ccb654a1ddac7a58f7de",
".git/logs/refs/heads/main": "0a1e2e085ec72dab32b192f6345b28ea",
".git/logs/refs/remotes/origin/main": "53bf73c67f70a98a3a4cbdca222d1292",
".git/objects/01/4998a6d04520d3f97d8905f196134e2dfdafc3": "4686996647c721e0309bcf061b05ad0a",
".git/objects/02/628c816f8d79c9a73c95fb8c1b20aea5e54b47": "2af2e303ff06850f9419e14037c56e6b",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/09/8d2fb5851c92236b72f68263cd91886db729b6": "7605759c2a5f639931d24fdc64171045",
".git/objects/0b/4553002012a9842c83012722f752160c9b938e": "1867548ef1e0040c6406428d7bf44956",
".git/objects/1b/d0c2ec3eb11426be9a4ea779ee88cbe738ecc9": "d2dd13467f0431bb3f1961a0e1a31e94",
".git/objects/1d/bf003586317d1134fde12303ad6c9c783c8594": "e416832f7392daaefc0307cdf5f71c14",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/27/c18c0f6cacd56e865754f02c7e57e7ba8b7739": "62119710f4e9e48a9220fadbb648d1e7",
".git/objects/2b/b16da846ee2e638c19a384f909297a553ba155": "602a4231148a15371f64d7e93a1e20fa",
".git/objects/2f/3dd10f30b4048336ff3ea0c79f3a8efaa910ef": "860ff7b40060e73090dab0422da2521a",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/3a/50bcf246953eac45889af16d2b3677deda2eba": "8088ab04e577ee09b6b83d07fe7586ee",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/3a/bc2c8ca5eb1c399f6757d94dcda696234f9ef0": "286836e7b941f29b9e09a2a70d4fa840",
".git/objects/3d/3f96854d00027e3cd76fc38d276cfb5bb170b0": "ea5b9add0ecae8ee9b1e87c95c627305",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
".git/objects/42/cb1802642f557fa5cd1d8a88a7a51565c00770": "85f72d3eb103a5bfd6abf32286ac9fc9",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/46/3ea7084bfa24d15b08256f5f57c9bea567b3ca": "89ff2703bc5b03c355ebd1a80492a42a",
".git/objects/56/90cf7831d36d231db77d62f862b253d66aabab": "7fd61cc79c24344555b68eff7a2f58c3",
".git/objects/59/9dca21ba0b6645e310e364ecc5c169b6339011": "fceafd37f80c0e264719945996f76f51",
".git/objects/59/bb4bc1af8e243d4f8acd1e2e581c53e8700f03": "6e2c25f1ce9e573b88f967b6eed024e6",
".git/objects/61/1192111cacc4c7716f2278dbf2605ac3437336": "c0eda2f4877a1832ad0cc69457207ce3",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/7a/484bf2fdaf2acac821c76fe58819143874d9fb": "6ce5d70ed0ee0958e9334a65132f2e8a",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/93/4943a2b1d2dbdca118bd982d2050a0c9e8219d": "9dd0706ce1904f912a2a9458ff0a1f71",
".git/objects/93/52df2c1502f1ea19d8131a4f6e71d61f522d6c": "e0429e49ab4f99ce426b3b955c949e8e",
".git/objects/96/6a8787faf0c872165c1d05eb83183d02a90629": "57c8ce2113e07bd54b499ac8fd528f4b",
".git/objects/96/c920c7bfb6de55baa597f91de4143e901f9107": "e2b4d9013b5d6a218ab72b1595d3dd88",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/a4/15cfa230b499ab8c169fbea88e0d96d5f7bec9": "29fba71e49befa2d1c3ca97af4c59bd6",
".git/objects/a5/0df8c77ff55f645b7245252675f05cd444255c": "fbccd71c1494b90299411f328fd72932",
".git/objects/a6/4dbd851f841708b3d31ad511e9daf07e6a74ce": "a7f51a23919372be62e47b46fe090e60",
".git/objects/a6/ecea8faf168714a298978a57a363eefcfbbfde": "fd82c25fb95344b9aade9db2b0d8c824",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b6/2cd245709c81c0088e463291e0a79ab8af6837": "a4446d132b25795b22501ac3b36f3567",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/70bae4c20c1cdb1f9425e573938080c3ba4b36": "563e27fb7ab1c1551ff00ab6f5d4af67",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/c5/7c9adcda06630414a9593dfe675166323cbe8e": "316e68fab37d848d89150a19a034ef35",
".git/objects/c5/cb82e93dda3a97081e0abc1a5a369b8a0ce4d5": "ecf8b89bdda53d87fb7b69dccb1f6b43",
".git/objects/c9/ecb12b558818b8c83a62881d0525488a71297a": "f500ecf3e9f2ba6e666d9907144aea17",
".git/objects/cc/6f61bd1cca6ab600c40bcbd94b93cb06bbd1ba": "c07b1824117653842306fefed63546e5",
".git/objects/cc/eb678b4bc04ea2b0e1440989ac6e06c6371c67": "cdad56b62da4eebff402f1ddb0d60758",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d2/23ea0fa8733698719d6ccb305574a9590a6c4c": "56dd82facb290c53ae633724bec4ec75",
".git/objects/d2/efb8f82c4f253f6381e9df0c898eea4663c430": "55f4582a039115386daf7387954132e2",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/da/645b75fa1f56e67d1b4198fed7e386d5779b1d": "5564328865984c744b020ff8d8cf3f06",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/e3/88f7d3e20d02ba19a265e7e35b7568ce9a55e2": "028066ea5ef6354e7e900a2219346611",
".git/objects/e8/164fba874f617889bfaf8228716a2210970956": "5cefbddc66304c89eab5baec3454d0c6",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/fb/9e6cc6ba56b5af11c5360d62d5557eb245ae61": "38f6f997814965211bad605acb8e54e8",
".git/objects/fe/eee3a8ffecae4b1f6d519238fa61936c0d6b26": "ae06003d7a4627f783ea798bb33c7596",
".git/refs/heads/main": "8e76330c1c44cbc5ad193e83ac02f2b6",
".git/refs/remotes/origin/main": "8e76330c1c44cbc5ad193e83ac02f2b6",
"assets/AssetManifest.bin": "a62918e01d79a529003782b950ff4503",
"assets/AssetManifest.bin.json": "6f63ffceffd52928d4d406009f760673",
"assets/AssetManifest.json": "239aaaf0be61e6e8c08b53edbc676ea3",
"assets/assets/fonts/Cairo-Bold.ttf": "ad486798eb3ea4fda12b90464dd0cfcd",
"assets/assets/fonts/Cairo-Regular.ttf": "5ccd08939f634db387c40d6b4b0979c3",
"assets/assets/icons/breakfast.webp": "452332d67697e1887b20f4f944bacd35",
"assets/assets/icons/coffee.webp": "b8eda9bddd2d97f4a9344e30b4c2da62",
"assets/assets/icons/instagram.png": "4a8c23476a7c20c5bee2a752a6f96e9e",
"assets/assets/icons/pasta.webp": "549e7299c6fc1651c4de06033befa164",
"assets/assets/icons/pishghaza.webp": "6c00a730b2fd6953c8b4b2374227fb12",
"assets/assets/icons/pitza.webp": "bfb18a5b9cb58dcc357cc3af0bbfa915",
"assets/assets/icons/salad.webp": "f7ee459df08257f53594a7f0516b0267",
"assets/assets/icons/whatsapp.png": "a59e768eebc730446e35f676487b8815",
"assets/assets/images/berger.jpg": "055d5930a38df4a4238cb6a4aa2982d2",
"assets/assets/images/cake.jpg": "cf9ff8f0d8db97b48e20a4d2876bdee7",
"assets/assets/images/eggfry.webp": "bdeb9cf3e2943b54b0bc1f006905bd2d",
"assets/assets/images/french_toast.webp": "619b395772afd2b2550b8b174af59153",
"assets/assets/images/loadimage.jpg": "3ea2a01a830e0ec1dd9c6755befc0910",
"assets/assets/images/logo.png": "77f21db9851d4f756588e74aaf9e2578",
"assets/assets/images/taco.webp": "854d958f8eb538f59ceb4a1d996e85ad",
"assets/assets/images/top_signin.png": "9fccef96f5381d20838db5b9997dbfd0",
"assets/FontManifest.json": "9309a407d912badc3b17a314ce37dc0e",
"assets/fonts/MaterialIcons-Regular.otf": "a0386452fd32857f0718d043e0d535cd",
"assets/NOTICES": "103a14a75d288253468162a8f7eabaf1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "1ca2f387ae755ee1007a6d2f4644372f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "e86c6dac2fd96ed641313ba2826af9ea",
"/": "e86c6dac2fd96ed641313ba2826af9ea",
"main.dart.js": "d94af8ac313c51abeea90e88a4511a62",
"manifest.json": "1a67054f15e4cfbebcc648b2711a55d6",
"version.json": "e23e1c74e8d978a731a5d6933252762c",
"web.zip": "028900c422961ad1aa1e0597cd0cfc71"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
