/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "b9dc9ed63e70b581dad3fdfe09172185"
  },
  {
    "url": "assets/css/0.styles.5bac9d13.css",
    "revision": "82d730bc45ce5de9394a0090f7d833c6"
  },
  {
    "url": "assets/fonts/element-icons.535877f5.woff",
    "revision": "535877f50039c0cb49a6196a5b7517cd"
  },
  {
    "url": "assets/fonts/element-icons.732389de.ttf",
    "revision": "732389ded34cb9c52dd88271f1345af9"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.4fff84d4.js",
    "revision": "f3f28c7c6d39c3ddd110d1a9d059a8ab"
  },
  {
    "url": "assets/js/11.0140d144.js",
    "revision": "32c7b082bb3c160f9265a4f5874ce36f"
  },
  {
    "url": "assets/js/12.f36b5599.js",
    "revision": "fedd2eb15bd4b6f8233a0a0e69b2bd56"
  },
  {
    "url": "assets/js/13.711dcbce.js",
    "revision": "9fdba8dbad7bc74f89e5172f63790228"
  },
  {
    "url": "assets/js/14.7abc5910.js",
    "revision": "603e483024e9abecf5d1dcd7247efdb7"
  },
  {
    "url": "assets/js/15.feacf51c.js",
    "revision": "1ea9358dd8c79e57bf0679c98517f972"
  },
  {
    "url": "assets/js/16.a361ae70.js",
    "revision": "13dfe286cfb196c558a3a2714b736e67"
  },
  {
    "url": "assets/js/17.7d08db17.js",
    "revision": "6af3bded444b09c1d8f80989ba26fac7"
  },
  {
    "url": "assets/js/18.597e49ba.js",
    "revision": "39156ba0289ffaed451d13fc34c7d0a6"
  },
  {
    "url": "assets/js/19.ef71b79d.js",
    "revision": "c8c4d7e52b189d246256527720f40585"
  },
  {
    "url": "assets/js/20.c3a594fe.js",
    "revision": "bdce6e619d772f1cdbb5760657c96a86"
  },
  {
    "url": "assets/js/21.58f3331d.js",
    "revision": "500077cb9fd18332e74b3acbe7398b99"
  },
  {
    "url": "assets/js/22.148236b8.js",
    "revision": "adfa113b2be3db81c93a87f99696c50b"
  },
  {
    "url": "assets/js/23.fe32b42f.js",
    "revision": "8596dfa4d2f8dbc80482c7ccd267df47"
  },
  {
    "url": "assets/js/24.97f38db8.js",
    "revision": "aa4cadbf886a79daa5f78d3abdae7a12"
  },
  {
    "url": "assets/js/25.aafbdc73.js",
    "revision": "6c48d25746e867c23e4832b7821a98ee"
  },
  {
    "url": "assets/js/26.b1e4c84c.js",
    "revision": "584030d4446bc60831bd31b2b56f0d83"
  },
  {
    "url": "assets/js/27.41cdf4ae.js",
    "revision": "3b03f0b729e7ffef895e6ba353991059"
  },
  {
    "url": "assets/js/3.5431caa5.js",
    "revision": "ff78f5ac518e1ea924b339393b89e18b"
  },
  {
    "url": "assets/js/4.ae528797.js",
    "revision": "b1930a3b89ce0a7f3b4734465641522d"
  },
  {
    "url": "assets/js/5.57f40886.js",
    "revision": "ea87963bdcfc4ef050fca80f6d972332"
  },
  {
    "url": "assets/js/6.756380d3.js",
    "revision": "c0488d6d506b37e2e1f468750604e8ea"
  },
  {
    "url": "assets/js/7.5d1cba85.js",
    "revision": "0b23ab11673d26f9c410003d0ec2fae0"
  },
  {
    "url": "assets/js/8.a01775cc.js",
    "revision": "841ad576cb72058b9344d52ead4da3bd"
  },
  {
    "url": "assets/js/9.0537906a.js",
    "revision": "7b794710b57f9befdda5cc2d9823276f"
  },
  {
    "url": "assets/js/app.5ec3d809.js",
    "revision": "fd7e86c090acaff73e3f8733d736e032"
  },
  {
    "url": "assets/js/vendors~notification.241402c3.js",
    "revision": "805674791258660334e65e8dacf35a0f"
  },
  {
    "url": "guide/alipay/index.html",
    "revision": "d5330cb89f699d2276c0154e8062c472"
  },
  {
    "url": "guide/alipay/init.html",
    "revision": "0a5adaac48a46d6b141979e4ae1f3f6d"
  },
  {
    "url": "guide/client/ios.html",
    "revision": "b15afe74291b9424b2aa50d9b0c73c64"
  },
  {
    "url": "guide/client/jpay.html",
    "revision": "6db709f29f46ffc6d8c9ec7adfdfdbb2"
  },
  {
    "url": "guide/config/alipay_config.html",
    "revision": "775a744d3a2cbac4b10a1dd8cd2c919c"
  },
  {
    "url": "guide/config/weixinpay_config.html",
    "revision": "7bd687ab6847f6bb8874a81810f7321c"
  },
  {
    "url": "guide/donate/index.html",
    "revision": "35bf432b1f20855a7c5656875f7aff04"
  },
  {
    "url": "guide/http.html",
    "revision": "42aa9d91a291e9d862b91525173ec625"
  },
  {
    "url": "guide/index.html",
    "revision": "e20803f9a913a5ba035a967199a49c9f"
  },
  {
    "url": "guide/jdpay/index.html",
    "revision": "097fc7081cc2266414f5b49f36db725c"
  },
  {
    "url": "guide/maven.html",
    "revision": "2e3a5fe1c98d07fcdccd77071b74ab22"
  },
  {
    "url": "guide/qqpay/index.html",
    "revision": "581427081aecce4712b90958992a32b5"
  },
  {
    "url": "guide/resource.html",
    "revision": "b2e9f0d1d91c189edc1f4fcc04f75078"
  },
  {
    "url": "guide/unionpay/index.html",
    "revision": "5b864c9014ce5fa2fb8bea48e0b1458a"
  },
  {
    "url": "guide/weixin/tnw.html",
    "revision": "cf35eb5cdb9950424442ad17c4df1c7f"
  },
  {
    "url": "guide/weixin/weixin_guide.html",
    "revision": "c8143af2a651e2ea00664a70d05e346e"
  },
  {
    "url": "guide/wxpay/external.html",
    "revision": "4c4905013651b81dc565d597158efcbd"
  },
  {
    "url": "guide/wxpay/index.html",
    "revision": "9d9af9b00b32cc686f69085075a8cab0"
  },
  {
    "url": "guide/wxpay/question.html",
    "revision": "3b2f98feffbc0d96af7b3b1403036472"
  },
  {
    "url": "index.html",
    "revision": "c11c67d73138e0714fc6d355f9c3a65d"
  },
  {
    "url": "wxpay.jpeg",
    "revision": "519a6443adb0110d19e3bf9f273d5f62"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
