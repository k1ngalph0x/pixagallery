'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "8657feb48dd552bb4b83003e34502bb1",
".git/config": "f2dd0963bba81d45c9c9f1a646024376",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "e40412d9c696056f3fca0943d85b1d45",
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
".git/index": "35f1ba0e2addf877a3199d5c4011a564",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "cf6d04c8f031c90331568a1b536e5fb1",
".git/logs/refs/heads/main": "e4fea031e8470273fbd2b8069de89c55",
".git/logs/refs/remotes/origin/main": "c3b66cc21be29ed99b62434fc08b1e26",
".git/objects/06/7c789f89a2b70314ddee1a1152d9cdaafda4c4": "9f9da7d6d18a0ac2afab8092a541a07c",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "cd62ee54b7ceea7b2a7804e69b1d9134",
".git/objects/08/9fe9f1ab790a9c43dd5403edeefedf310616de": "1b774cf1c087babfd9dc695f5379397f",
".git/objects/0d/d23ad7e34351ed3341d2589f379c00c67a9ff3": "38ff77c387bad032c2e3c41fda949974",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
".git/objects/1c/0455106d80562530d2c77158028f0ce815461c": "bd586933f69c7787e98d84bf62008b4b",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/4df151617bfa065a715520de39b1809b66d082": "c704bea04f5cd8c60b8e91b26e1b95dc",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/27/f3de0f51e53f48d08c019b985627d64191d9ea": "1b113a5bced2a7b7288ec95cc255f150",
".git/objects/30/e1cefba5c3f42791b8ed403e459e9a2864df1a": "3dcd6fef444e53123d4cf0f2936ca86a",
".git/objects/34/5cf4feb1259c9929b3e5490d7b8f04e1e4ec21": "4b444c9c6a681b9eecee265bd6f0ae2a",
".git/objects/37/69e1979c8088423a4911753fa496a050f62fb3": "4a396f7d109e887fff5c40e095692bef",
".git/objects/3c/f2c0eb9cfcc24f77703eedaca7e0942376e2fd": "99001c5bb38c42b736ba45b2d9706d5f",
".git/objects/3d/99b052c92015fb17c303120617607e8262e198": "9023367327af595741a4e2977dc9eb73",
".git/objects/3e/d6d161d40f7c01d395ca361a0962c0221c4b64": "f5a2d6b1a41027519a58f710b7152214",
".git/objects/3e/e0ed7a24f36da342d468dbfdb674144cfa925a": "8fcaf8ea11225efa8273ca3a5bd5d2c2",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/51/7fb772167306d3e6eab7a128df23cb97f7b75f": "179579055f6a8aaebe2db2aecbe824e0",
".git/objects/55/a0acb249d8ac5e3389ec805f7500d2de5021cb": "f34304dec079b07078e8a1a2f7b1b097",
".git/objects/5a/7b05e1be311772247124911182fda78fde2cec": "d38bfbb93663df272dc4920186bd1040",
".git/objects/5c/383760f9c19f5195eee4aeccb84c3edec2f0e4": "4aa4399fd6fff74bc833b778bd081c6c",
".git/objects/5c/4dd10f0ea3a7062a4c9adb02bcf3cba69e7b6e": "518a31eb6fbda28eb08d3005d0c383a8",
".git/objects/5c/5b92b829e47de6546f1280152a9f82abe10559": "ec3ca9115e8f478332a427168d5aa673",
".git/objects/5c/f10808c9f96fa5c3ceecb2c8c7e48b3cbc829f": "d1c4376e0ff81875da24db14105e1f6b",
".git/objects/64/ee8aeeb23fa5165504dc7c14c4eccca62bc001": "75d164de6d748dc0f9948f7a281397c0",
".git/objects/6c/307fd5462d00c895525e0ba61a37a8a727a0da": "6aa84560f13acbc424541acb0dc33c9d",
".git/objects/6c/5b7a9da81e3ab7964b2e69a9c1b05788931020": "83592dbc0f37874dcc1a375776bb78af",
".git/objects/6e/397272889c71cd97e440f07b3b7c214d14a439": "01adab3277860049924994313f3ac2b8",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
".git/objects/6f/bd3fca728294ffe50f5184416860f1ea451101": "3bf8d1e482c76c4f75d786502cb41c82",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/71/7809363ed19bdd7e1d78f6e421e40a96bc29e3": "9414a3044cb191cc3f57340f57c3dc93",
".git/objects/72/ed306c7274875fe8782035c8fb49a66ee48273": "87bb42e2642eac9d294e9e3ebe912ea8",
".git/objects/7c/9192e4aebdfd88006876b3e349da28427f3a1b": "b10420a4aee39a64f59443f5e7296215",
".git/objects/7c/bfe50af9a972fb76e0caad79cafa424b66bb0c": "ef224d71e56db3ff66f21669cca5ac61",
".git/objects/80/318e3ff10314f750e2a56f29fd4c29fedbfd4b": "4e8e520ea8cda6d78c364c4ee143a88a",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8f/24d27677e8204b3af6ca75e192149ac7954bff": "4c0dc4d69ea83e6785a6051176ba2943",
".git/objects/8f/4a6816f19f7a381f58179e84b1a1bc2383402a": "c410c8300a47c3d3488daada33ad67b7",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fd2d8c0d844b234856b36b93f652048f",
".git/objects/9a/17e2ac29b3d6bbf242d5ae3e31b50337bad8ad": "e8edbbb7d21993d917e3922f8b69f249",
".git/objects/9b/904ffb55244a2c659d17496e739e6d331a2431": "36707e46d7a610bcc5c924d58aaabb8c",
".git/objects/9e/9e1078f2d9320fc1ae1410a1d1af4e92710a0f": "d73ba32ed82136f7b1a30a0831a83aba",
".git/objects/a1/2856be5ade597c89b1bc414bc17f6a96c368a0": "c6a3217b136ddfa1edeab68f9a879912",
".git/objects/a1/d2afa918a99c74f84243d3ac606dbb03da8763": "b1f9af73898af5b0acd19e62d4a19507",
".git/objects/aa/f9b9e34fec8ecbb7c2f15ceb3118e36cb18a08": "e68886f092340cea810e6eac6ebf5cd2",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
".git/objects/b1/79ed55d00938a4ded71c53466a8a33a4b8f4f0": "98091b4c8aded8a8b9cdf9b535d0a47a",
".git/objects/b4/7f71fb1ab89fa1d24c56d90e8c515b7a9177ed": "b40ff7370624416c4178ddb8cd1462f7",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "468a6506934a07c970a4739eae75eedd",
".git/objects/b5/284abb8aec3a8e3ed5d7e4b69f53fc9a57c4fa": "8ea3330818cf79573315ec69a0aedf3b",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/a8ec58c281d3c23050d8ee51567a9ee873fc71": "d3e4c7ba27b3225b64da8c266e95e910",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bb/31867178bfd11cf87a648b57f652959386fb82": "5da96c7bd0ad28423163c5bd4c6daf4b",
".git/objects/bb/cdbc96775cb6b343fbd1fd3c45ef63d4404c95": "bcb13615a93d9bf33ffd493b2649dde1",
".git/objects/bc/17ac165ac6e46a6d46e186bb6098d6a93a9c3f": "ae6632b90160669e4a4781c320fe598d",
".git/objects/bf/b0bc94883ddc994f9752432362effa47dd9528": "b8c4ac2180527203141b67afa3b6bd58",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
".git/objects/c7/735e526a7e82c82e5c00c619f7d304cde9e1b2": "b57932e0aebc296b84cce00a220ac62f",
".git/objects/c7/d4f879fb8b7f177c3c3e1903981018bb196d90": "5d16056fb114d3f931c85a21f9e85099",
".git/objects/ce/176941653456694ded12ec380d14837cab30cd": "2762ec1cd21c975d6015235d070ad4ab",
".git/objects/d2/5749b7e3d9b7852fe4cdf2d5ebfc0c0f6eb8b3": "a3d2bede6e699ab3f5e70991a39cca5a",
".git/objects/d4/2b180ca1f0c48ead3c2cb5f2f96f7d1ae48cc6": "252a35bfd24b3e783a4cadbad3676e5e",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/bf58fe9cd0688b312aaab73736d171121af10b": "ddf7f0432e189b1d4f31493aa90eadd9",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/da/42966b080bac84c13f7c49f8f9338aee839cff": "ead6170b0987f3e0e5dfaa5d94949a3b",
".git/objects/dd/696bd8162446ec83430f425ea0c14ad23ff483": "8cc3b985040894960665c77cb1d97b93",
".git/objects/df/c018dce33b942768c65c334d2915a0476c407d": "e1d87bab3c9d4cea55024b5b5da06066",
".git/objects/e5/d0ccb71bcf0137a31003f9f574dbd913621efb": "4ae2404df54413d545a554f1a94698a4",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
".git/objects/e9/3fbeb574468003c331f8836f0a36a25d6b15c1": "ddbb56c3f8ab65e665e8cc7dfee8bcf8",
".git/objects/ea/644298b14798dcd61f6382c82e37df240d49c6": "deae0cc79bc78c090817ff6b071c7128",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f0/2f52cf459329d3812b662e5f91dbda6110e6e6": "755f4cea985d11705480cefcdb4cbeed",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f4/bd878f907c69384ab4697d1f5610ea69824cc2": "671f7f7e4ddc473517a275e4169d143d",
".git/objects/f4/e1a78f3268bb1f9b906f91cea7df573b0ac0e0": "b9524c5ba4ac40ab0c9c4b57b28bfad7",
".git/objects/f6/05cff0fa4605910f32c352bcd4b0f585722eeb": "4704a8f6fc9db6630e07ba5de210c312",
".git/objects/f6/1ee593154df4617571d79a0743b6937deee91a": "399df08e4767ee0374b9ba7a667d46c9",
".git/objects/fd/a0299e0e28c4958165d97ef2f96e3d91869db2": "cccbc87c01ab73ab6c0c9115ff565746",
".git/objects/pack/pack-65d7d347947c5f41fd4fceba4d17e720e09974e5.idx": "f765723fe76f62554e727cd9995ff2c6",
".git/objects/pack/pack-65d7d347947c5f41fd4fceba4d17e720e09974e5.pack": "52b53c19cbc43408ca3c3d4cfc3c64df",
".git/ORIG_HEAD": "cea706041176e9fb4671778f7b739ac7",
".git/refs/heads/main": "9d9601fae4b9e9a8add04e9ebc8dcef2",
".git/refs/remotes/origin/main": "f38fbd0e0934b0b5a18954b0c68ca62e",
"assets/AssetManifest.bin": "e22653ede92eaa0b547b48b0c8b2bc0c",
"assets/AssetManifest.bin.json": "99a97df8255cc1642883bc1b4df3e618",
"assets/AssetManifest.json": "e21f0de3e9ae975381dc3c047df17ba2",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "7e8d2f3f03b55fdff7a207bf867a7261",
"assets/NOTICES": "944cb479dc4bb562051df865e39c530d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter-web-deploy.yml": "13aa716116a12b1749d51856fd9c4625",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "c7d3f917489371a4bf6249183d3a783d",
"/": "c7d3f917489371a4bf6249183d3a783d",
"main.dart.js": "15b145969a06642fb251d1dcdc48f9a8",
"manifest.json": "0aa3f5e2d192dd09c5d0594ea94b403a",
"version.json": "f6395d7f32adfd465161ddacdbf1b350"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
