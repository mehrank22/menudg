'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "6c4950dcf51d6343b1c83fc6322a1660",
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
".git/index": "d50bb140811183de2e2edfe97d9e765f",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "98b22d3fdee3f590d679fd3f8b356f49",
".git/logs/refs/heads/main": "e179e3e3da569da3c1b4d62d71f9ad1b",
".git/logs/refs/remotes/origin/main": "c53ed0fe2202a872cbdae0ea30e63d35",
".git/objects/00/95a01b8c526e61e8f49ec280558355eb53e559": "0d32b07ab0893cfc966b41d934a3ab06",
".git/objects/01/4998a6d04520d3f97d8905f196134e2dfdafc3": "4686996647c721e0309bcf061b05ad0a",
".git/objects/02/628c816f8d79c9a73c95fb8c1b20aea5e54b47": "2af2e303ff06850f9419e14037c56e6b",
".git/objects/02/b271e46cd831fb2939eb1a18201b50e6f89de9": "fb465a06be00bd2b0080ebdc386fff12",
".git/objects/04/39b338ebd01142166c6621a4b0d1fdd2a75605": "2cebd6b8aaee6d55dcbc88aa5c2435fc",
".git/objects/04/d8314606723907e12b113341f26fca0b7bf866": "213adcb4fda2931c2db1f363edf1ee0d",
".git/objects/05/86c467bc4e7660130819bb08b0096b8e7a072d": "1baae8a771ff5a18e5d39d55f5696a54",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/08/6dd0a5d1919cd164de0babd1651ee0080eaab4": "f7a5377e6e1d84ad33285562d4a49a03",
".git/objects/09/8d2fb5851c92236b72f68263cd91886db729b6": "7605759c2a5f639931d24fdc64171045",
".git/objects/0a/5a436df8bdb4c4a176eb799e2baaf14a216f2b": "b6586039b5c051e86a846d835d8f7838",
".git/objects/0b/4553002012a9842c83012722f752160c9b938e": "1867548ef1e0040c6406428d7bf44956",
".git/objects/0b/52375491a0fcdd12372e6dbe50b04ea29e0aa8": "3232d58ef96d35064d0516b5f9ffee2d",
".git/objects/11/9abff3b613c13076d7d1478c5b460deed57c57": "e47ddc652433b77a287ad950a898d59c",
".git/objects/12/5c10a6ce8bb67e1ea6d104cc7bdada2bfc75b2": "3037fc17e6479afde4cd3ea715283a9f",
".git/objects/17/bf11d9aef7abc732a22929b5f1d50fc053ae27": "4bbbd88e69030bed39e3c35cd4d2f57f",
".git/objects/17/f6928c0df2b6e578bf752f3efa9772623e525d": "7b527938e4931e175bbbad4740bc16e5",
".git/objects/1b/d0c2ec3eb11426be9a4ea779ee88cbe738ecc9": "d2dd13467f0431bb3f1961a0e1a31e94",
".git/objects/1d/18d318df14e444d44221da6ff40a3223717ee7": "8dbefee487eabdf4737c22fd4b71e2c7",
".git/objects/1d/bf003586317d1134fde12303ad6c9c783c8594": "e416832f7392daaefc0307cdf5f71c14",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/a8d5bf490148bcba2706a3e5d6efae15a49e4a": "6cbe040db05c84779c21b7f23afac7b4",
".git/objects/22/3edd5e59a977ec27d52f01e20bbb38f691eb27": "7726090ea903049740b40e94602ef1fd",
".git/objects/23/a7218c3ac6cdb5a4e6ca0049ded4b71a302957": "2f265b28bd11935977b406044ec9de06",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/25/e79614b3a620324d475510aecf152b348f7af1": "0ee21c909569ea817b764809d56537c7",
".git/objects/27/955dc3d18a8fca12f7da0268dd3c0ab346f9cc": "5a2ce7fd9cb23e89cd017b7cec99fb97",
".git/objects/27/c18c0f6cacd56e865754f02c7e57e7ba8b7739": "62119710f4e9e48a9220fadbb648d1e7",
".git/objects/28/6fe52632f03f72156418e2c86f327887616164": "cd80c2257fef4ba3ce13c4f581e01fe3",
".git/objects/29/06541341f3e64d684a6548fee06a508f453778": "ad2e52ef08fc3dd29c67624fc2a44f8d",
".git/objects/29/b50adbe1f9382c4e1dacb166cc157156d5dc7d": "891e26bec726273b4bae01f71560a87a",
".git/objects/2a/833405da2e8a6629ffdb1d318e57ff651ea2dd": "edc60428ded7358ce88ede592c27c912",
".git/objects/2a/c15f2d8a80276a57bff04b2d2e48aaedf77f8d": "598fb259955d4f84078fd44cd3f00673",
".git/objects/2b/2d99a155f580984a124a2d421576da9d40b52c": "32c1625eaf61a921c091243eeecb0021",
".git/objects/2b/b16da846ee2e638c19a384f909297a553ba155": "602a4231148a15371f64d7e93a1e20fa",
".git/objects/2b/f1e1e56247011c939dd2a92b569a5e3d245b2b": "3c2fb73ff08bdfa597aba375b69fc5f5",
".git/objects/2c/b08346e5a963ab67e31f5853b5f664396266cb": "1fc1b0c46125831a19f3ac7063bc57ca",
".git/objects/2e/f4e782ed2147089b0db9fb05527961263769be": "c97621ff9e6d06392e6352e09c8de1cf",
".git/objects/2f/3dd10f30b4048336ff3ea0c79f3a8efaa910ef": "860ff7b40060e73090dab0422da2521a",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/33/3c9349cda43518fd692986256904bd015b08cb": "db5cac277908974698158f67ef081f69",
".git/objects/36/46a51ed7043a3a3590b7a6ea8fe2d8f82f3a1c": "7bdfaccf19d8f8e8785e395c3134f620",
".git/objects/36/61ef87de069607d977702f74b1f9e7e8183b07": "1ca8a6dc4843992d06dddd146f07eb5e",
".git/objects/39/7d9bf645e0d7c3334be8f30eacad145d0021cd": "4e3f6647288da39c74867693c08d33de",
".git/objects/39/dae49ce85ee3d504cc249860c9b60b6f85d173": "fb190d06798b2f2a1bb1de5cc303bce9",
".git/objects/3a/50bcf246953eac45889af16d2b3677deda2eba": "8088ab04e577ee09b6b83d07fe7586ee",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/3a/bc2c8ca5eb1c399f6757d94dcda696234f9ef0": "286836e7b941f29b9e09a2a70d4fa840",
".git/objects/3c/5c63909de7327278ca8c537ab2f3bfa0357a6d": "33e7acd0bde62218e1f48d439b2ed950",
".git/objects/3d/23a91b96975b8ecc3682c346f71890d31e1158": "f7148a6b290bcb81b5053ff45f8f17c1",
".git/objects/3d/3f96854d00027e3cd76fc38d276cfb5bb170b0": "ea5b9add0ecae8ee9b1e87c95c627305",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
".git/objects/42/cb1802642f557fa5cd1d8a88a7a51565c00770": "85f72d3eb103a5bfd6abf32286ac9fc9",
".git/objects/42/ea35bbe25aa66e1fc01e01fa47f20cce505893": "2114ad70f0ecbe5db484eecd78492f81",
".git/objects/43/f6b6f6ddd85d1d83a1f1b49eb64af1e1453198": "367920374462b3db166b8ebaa57d6a07",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/46/3ea7084bfa24d15b08256f5f57c9bea567b3ca": "89ff2703bc5b03c355ebd1a80492a42a",
".git/objects/4a/2c1b9fa180fb0f41bd67ed38fec6f2d88f880b": "bb8eddca6b54e9e9b7e07dad49b7f121",
".git/objects/4a/a1dfa6ff7047e8f0b2acdc09b3e0497fe88a94": "9d2bc286abaee68eba823ef7b60a8d0b",
".git/objects/4d/e5eff7e9a5ad9cdff86946d03c568f46dab21a": "7bd6e9db0b3432729dfe736973293f36",
".git/objects/50/3e09feee4ca9a2b3363d288140f4d30b915d42": "9c85782434f2a3c4a7c9d397deb492dc",
".git/objects/50/5c3b0f88b48988f0031cdfa2b840ab43707a8a": "ac361c7c890d4a24e9a56729285f7f51",
".git/objects/52/05fdd372dc91f9cdd3f33f4691ac5ad353af48": "086223faf567af0fb99d4ca68671b11f",
".git/objects/54/43e916af4e938a86f94a167b5581be25559883": "42fcc01422a443ddbc0457c861633d23",
".git/objects/54/edc520df62f0d97f26f66cc594a2448dc4cd80": "ecb954a85e770173872e90d97a839723",
".git/objects/56/90cf7831d36d231db77d62f862b253d66aabab": "7fd61cc79c24344555b68eff7a2f58c3",
".git/objects/58/5706b51252023a06a45550fa100c94856ed791": "e898a2dcff0d5f6a3d4d58635cefc35f",
".git/objects/59/9dca21ba0b6645e310e364ecc5c169b6339011": "fceafd37f80c0e264719945996f76f51",
".git/objects/59/bb4bc1af8e243d4f8acd1e2e581c53e8700f03": "6e2c25f1ce9e573b88f967b6eed024e6",
".git/objects/5d/0b80c40e092d2a0320136a2f04db7ca40aa62e": "0bc6571b9fcddc8a687a1fe47c8938eb",
".git/objects/5f/3c2e0d172554a3cea0f3027ef1f4a5e4d53099": "3158ab32345a8af27c1331580960b266",
".git/objects/61/1192111cacc4c7716f2278dbf2605ac3437336": "c0eda2f4877a1832ad0cc69457207ce3",
".git/objects/61/78b73aba2017e21007996ab259c459e6856e17": "b66ed4ccc21fcb9e024251e8b199a926",
".git/objects/62/4f1ca80bcf957ade98b4e716f910f9476e4c0a": "a46dcc1d6e4c4137ff2ada96faee09c2",
".git/objects/62/e1385cbe09acf27994422c397a29d260f354ff": "6f053a1c3499894335b6a7cba870ce4f",
".git/objects/64/3a3f84389e34fa26038ffe124fbfecfaef0c1b": "bab99158d7070a1d140113b4f9d5f3ce",
".git/objects/64/9e322d834c8ff2f15c818489faecdb1b70374c": "38f7442dab2d51c39567e21f89b83703",
".git/objects/66/4f6b7c30ce718cd5d1e878502aa8cf6121b211": "557145f0dda9189bde4c8f63ec607aae",
".git/objects/6b/1b6cf070a1b42f45ee2bf1f2852dc6b53860c4": "67ffeb9834f3517ce009243298ce14ef",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/6c/01fae606edbd96babe62e601216f6c5d147783": "ae51d493f8079f3dcf9d8503cd3d7a0d",
".git/objects/6c/24f625b485af567e9ee6f386fd096fdd26f2b2": "8e5c94fbca9154eb13add4373ecfcf14",
".git/objects/70/b02ae46ab8afa77271e56d351c1b73e009e475": "e3d8b6d6fab5200500c38b7c378d371f",
".git/objects/72/807c8abee0fc0aee5dee70c280f3b8c85de73b": "7be601c7955f47792f337872cfc8ded2",
".git/objects/74/3db746ced536b93b5cde016127ea9c825477c7": "c072fe6b1e850c242aa47fa9102f5a80",
".git/objects/74/57ac78b71f70ca1579eddcd900691b73b8854a": "2b0c196dc94d18cec742122e7b95e9c6",
".git/objects/76/da3e17867b61a4f5b5ad0896757c75579329d6": "30e4b66f320586cf10d44f646c3f7e5b",
".git/objects/7a/484bf2fdaf2acac821c76fe58819143874d9fb": "6ce5d70ed0ee0958e9334a65132f2e8a",
".git/objects/7f/d2b05f80910c2173b065d96be98b945378725e": "609665deccf9a5fe1e8cb559a1ba0fee",
".git/objects/81/708a86127947613fbe2633a2d9fecd59fe4b5c": "56c9e66ea106ea578bd10b44650efd3e",
".git/objects/82/787d24e95755c4acb282456224dcb3000b587d": "85a030aac367dff4a7150c5b874787ec",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/84/dfcda5a12dc40721bca717ea7e2932f350122c": "0ff733578d3b2f7acbeb10b0526dd6b2",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/bfe8b8a54899631472b7b3f5ff78cef785d049": "473aedf4eb14354fec66eb09cad6e640",
".git/objects/8c/4c7de6ea4e6fb077b53c96e85b44143ba62f99": "7758f4a21fd13794d94a412067957bfc",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/93/4943a2b1d2dbdca118bd982d2050a0c9e8219d": "9dd0706ce1904f912a2a9458ff0a1f71",
".git/objects/93/52df2c1502f1ea19d8131a4f6e71d61f522d6c": "e0429e49ab4f99ce426b3b955c949e8e",
".git/objects/95/aba77971150b3b56430d29c9b889bb7c96a808": "c7918fa663dfe02c1587d74ea4330a2b",
".git/objects/96/6a8787faf0c872165c1d05eb83183d02a90629": "57c8ce2113e07bd54b499ac8fd528f4b",
".git/objects/96/c920c7bfb6de55baa597f91de4143e901f9107": "e2b4d9013b5d6a218ab72b1595d3dd88",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/9a/d367e617dfdcc01729f625ae5634f49f74be55": "ff027c139f792567481e3128a31acf14",
".git/objects/9b/5008388bc789877afc1d1f1d36b87c391d9e83": "c09f706341518e51efbf77aaae32d0eb",
".git/objects/a2/f24023c0cd650385308e2986404af70711f621": "77704ca529b5b025cfb120e3590c32a8",
".git/objects/a3/088a8b85de73f7f0a275acb2adb26b1e943d89": "81d9088ad91b6b06dad90f2524a21475",
".git/objects/a3/35b6d926b1d6fc6c5c5e1ec8e7fdd899828369": "0af04fd63f703ef82c800840736a100f",
".git/objects/a3/7a467534fd7ffdf55bb393b554683ce0f54918": "ec70e8af2a72040b45d63ab6ca8ec7ab",
".git/objects/a4/15cfa230b499ab8c169fbea88e0d96d5f7bec9": "29fba71e49befa2d1c3ca97af4c59bd6",
".git/objects/a5/0df8c77ff55f645b7245252675f05cd444255c": "fbccd71c1494b90299411f328fd72932",
".git/objects/a6/4dbd851f841708b3d31ad511e9daf07e6a74ce": "a7f51a23919372be62e47b46fe090e60",
".git/objects/a6/a4c58dbdd98e11a621a43f1758254b3dbfc332": "83eaab9926cba6a3c871641723e4e965",
".git/objects/a6/ecea8faf168714a298978a57a363eefcfbbfde": "fd82c25fb95344b9aade9db2b0d8c824",
".git/objects/a9/150664a51c0be770f5b8b0039171beeedd7f72": "c2d1621426d08c9a9f1a960d55a10e09",
".git/objects/ab/429b0b45b84468a1e196d8461ee0edad99bc8a": "07f47c5511506a9879fa2b2b343ade3e",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b4/7faac199d3855ef797b50bdff809a64d55b6ed": "64b1c38460361298e6e8062136a23b6d",
".git/objects/b5/71602a5e6518395d90f83ff84d5f9624a44fa5": "87d82bdf3b7e7785b79765c8e7703e71",
".git/objects/b6/2cd245709c81c0088e463291e0a79ab8af6837": "a4446d132b25795b22501ac3b36f3567",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/da54646aad5707bdf54511584688cabd6576ee": "959d9d88f9ebd66bbe6f0ea2e95080d9",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/70bae4c20c1cdb1f9425e573938080c3ba4b36": "563e27fb7ab1c1551ff00ab6f5d4af67",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/ba/644867b85a515301e0c91940cc45a93da46d62": "b362d83c4a21f9c960533ad31a22cc47",
".git/objects/bc/8f698d8c73b13f8cc054f3d8dbe9ba32bc0986": "5b16ee94a827e9569a7ba9b7c36f7aae",
".git/objects/be/20aa92604ad62cc34489e935b148a1a7f0e7f2": "7909f8bbf80baecfb03ae1b5585854e7",
".git/objects/be/88f0244b42e26c2b40c94d9d2d3dee708fd46a": "f4fbc96fa77c3aed220fdeb472ce9525",
".git/objects/c5/2f21826047689c154fd2fe2324cfe4b03ffb91": "82e0364ab39d1add3e498471e7d0737d",
".git/objects/c5/7c9adcda06630414a9593dfe675166323cbe8e": "316e68fab37d848d89150a19a034ef35",
".git/objects/c5/be3d1b33e1c1f55a24cb6db18d90cdf348ad67": "4cfb671a19a96a67c03a64a151b1b2d4",
".git/objects/c5/cb82e93dda3a97081e0abc1a5a369b8a0ce4d5": "ecf8b89bdda53d87fb7b69dccb1f6b43",
".git/objects/c9/ecb12b558818b8c83a62881d0525488a71297a": "f500ecf3e9f2ba6e666d9907144aea17",
".git/objects/ca/0c1f242bd83193294541fc7cd08791caa36e2a": "d742c9887053da9aa4cbd4f0417379bc",
".git/objects/cb/c6b4805dacb696a13902e8fae41662cc4ad376": "93bd44c68170e6b06ceb34efc17e3166",
".git/objects/cc/00515d155a328c4244c5299c17450073a5e3ec": "db90faa84a9ce35ef176aaf535a71b3e",
".git/objects/cc/6f61bd1cca6ab600c40bcbd94b93cb06bbd1ba": "c07b1824117653842306fefed63546e5",
".git/objects/cc/cba737d953b782040e78e6e924fce399c02f2c": "c39093aaabdd725e0be3fd3778abf493",
".git/objects/cc/eb678b4bc04ea2b0e1440989ac6e06c6371c67": "cdad56b62da4eebff402f1ddb0d60758",
".git/objects/cd/361ce45cb313b0906d1818da5d6417a4d0b688": "8981cc2d88335bfaa80e7195a5b8d029",
".git/objects/cd/86cb4fcdc75ec3d767098ef23439f6bc14c32f": "b45bec963cfecfd45d3bdabd194fe39b",
".git/objects/cd/9797e92e9ed3e282809fb3c680585800bb51de": "984b719cf73b66dde2155917daabc063",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d0/73a5d08ab0a42b35287c5e1c361f128ea0dded": "334f156622c3adaa22cfe03ca5aae6c5",
".git/objects/d0/73cc23ebc53cdf93298d92f880abb17daf2744": "baac894395926e342fab6b9de8f1423d",
".git/objects/d2/23ea0fa8733698719d6ccb305574a9590a6c4c": "56dd82facb290c53ae633724bec4ec75",
".git/objects/d2/efb8f82c4f253f6381e9df0c898eea4663c430": "55f4582a039115386daf7387954132e2",
".git/objects/d3/8c740afee26282b3855521f819f10e18e24e3a": "dd60709bb8e602a4e9f70047278562bc",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/fc7b199461d135186d70bb72f1543182172651": "3879d37d10f0633ccbddc7f9a84e2b91",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/da/645b75fa1f56e67d1b4198fed7e386d5779b1d": "5564328865984c744b020ff8d8cf3f06",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/db/534d21deee5e8e66b9aaff52980021499eec69": "896517b3c185c256e0a155dc2b2c7c07",
".git/objects/dd/1c91889956805d7dfdbb97fae3595ce85cf510": "ab70bf76e2f8123dae07b2292e02f078",
".git/objects/de/0d50d1c3934d5d29455d123b5645226bdb5b29": "a22d3e6c3afb0e2f418c177de1e7bbaf",
".git/objects/de/0e0eb1c452cbbb6a77d9cd352cc19062b1a823": "504fe39660161badff1b9fd7dc68f1e7",
".git/objects/e1/6905acf441bc7f577c9e673bbbfa2e038dea07": "afa724234b869a550e2c50448247b524",
".git/objects/e3/88f7d3e20d02ba19a265e7e35b7568ce9a55e2": "028066ea5ef6354e7e900a2219346611",
".git/objects/e8/164fba874f617889bfaf8228716a2210970956": "5cefbddc66304c89eab5baec3454d0c6",
".git/objects/e8/8a248c817befff5a742e10e254742423ade9f9": "48c7c37017926596e4fd0e2d4132ec53",
".git/objects/e9/ac6eebf8d413c5ceafc44f305c81a0f1010205": "bd5dd03655d97ef1466044830df0c5be",
".git/objects/ea/041a1d33a6b9d3fe7dda0a24fd4297648b8bda": "b9f4c8da7a566659b5d86d6dc95f292e",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/4e05cbf5a5756daab15e443b080aec51ae5fc2": "27ec1f5e09b270de3f2abec491c52f27",
".git/objects/ef/c8a768377849b04054401018f2f8b3a2a06463": "10ea1bd01f31fbcc2d69a6bc57dbbf83",
".git/objects/f0/cfe4c2e0eeae41257a82d7281ead2fd6ed2930": "c6917c245f4058ddb1ca6f925d17d9cf",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/644b7824cd20f50a489b47dcdc8ae4f3ef6bfc": "cc1731036b06a85cd8c0260a8f578d44",
".git/objects/f3/6beffd802d7475bf9f4224333ca61cfd294b73": "97a76b3e3e6803821bdc0fdb2ea28ef6",
".git/objects/f3/ce8915fba9d6d6d63b66ce57cafc8be5f137e7": "920debe05931418476241c785d925d33",
".git/objects/fa/d14e6c852f011b633b69e22ecd4cbdc4244d60": "e54513b96578f15dc20c987d5b1a2305",
".git/objects/fb/9e6cc6ba56b5af11c5360d62d5557eb245ae61": "38f6f997814965211bad605acb8e54e8",
".git/objects/fd/1398778d912c672045b874998458d9cb6d37d6": "80caa70ac284a8ed045c6fd8e9e4e897",
".git/objects/fe/0da428143a0bb613069830c4b38ce6dd824bc6": "b4e2d2924d2fbeef5185334892333132",
".git/objects/fe/eee3a8ffecae4b1f6d519238fa61936c0d6b26": "ae06003d7a4627f783ea798bb33c7596",
".git/objects/ff/0fe82c48ae5d1b82dd72fdde69362100cf205f": "09bd2c3ddd16175ae8a3bf49fa84247b",
".git/refs/heads/main": "08132a0e0a7361377dc2184509c9efaa",
".git/refs/remotes/origin/main": "08132a0e0a7361377dc2184509c9efaa",
"assets/AssetManifest.bin": "a6f95684f1285c930ff062d6a8e6fdaa",
"assets/AssetManifest.bin.json": "7dc69e13bcc310cd8d9e32ebf58aab29",
"assets/AssetManifest.json": "d674b5a3b2162611be51903611497951",
"assets/assets/fav_icon1.ico": "50495eb0424fe718a946695ebff7ddd8",
"assets/assets/fav_icon2.ico": "08757c26884449676e61be4b4c32626f",
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
"assets/fonts/MaterialIcons-Regular.otf": "428aea2f0cb96b49f46ef3d1ed01902a",
"assets/NOTICES": "8fd9e5837f21e69b84f9dc410af2f220",
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
"flutter_bootstrap.js": "cae2648e2481871021fc81c79b970a88",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "9395afdbde1eb4f72ae8f77e65d76670",
"/": "9395afdbde1eb4f72ae8f77e65d76670",
"main.dart.js": "338c3538c37321954932af34d97d71a7",
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
