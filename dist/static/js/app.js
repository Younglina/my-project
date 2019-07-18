global.webpackJsonp([11],{

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__stores_stores__ = __webpack_require__(36);



__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.productionTip = false;
__WEBPACK_IMPORTED_MODULE_1__App__["a" /* default */].mpType = 'app';
var apiUrl = 'http://134.175.224.127:7003';
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.prototype.$api = apiUrl;
var Fly = __webpack_require__(3);
var fly = new Fly();
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.prototype.$fly = fly;
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.prototype.$store = __WEBPACK_IMPORTED_MODULE_2__stores_stores__["a" /* default */];
var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__App__["a" /* default */]);
app.$mount();

/* harmony default export */ __webpack_exports__["default"] = ({
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    pages: ['^pages/userrecomd/main', 'pages/searchPage/main', 'pages/user/main'],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: '我的音乐',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      "selectedColor": "red",
      "color": "black",
      "list": [{
        "pagePath": "pages/userrecomd/main",
        "text": "发现",
        "iconPath": "/resource/img/wyy2.png",
        "selectedIconPath": "/resource/img/wyys2.png"
      }, {
        "pagePath": "pages/searchPage/main",
        "text": "搜索",
        "iconPath": "/resource/img/music.png",
        "selectedIconPath": "/resource/img/musics.png"
      }, {
        "pagePath": "pages/user/main",
        "text": "账号",
        "iconPath": "/resource/img/zhanghao.png",
        "selectedIconPath": "/resource/img/zhanghaos.png"
      }]
    },
    "cloud": true
  }
});

/***/ }),

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_App_vue__ = __webpack_require__(35);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(33)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */
var __vue_template__ = null
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_App_vue__["a" /* default */],
  __vue_template__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/App.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7ca92acd", Component.options)
  } else {
    hotAPI.reload("data-v-7ca92acd", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 33:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

/* harmony default export */ __webpack_exports__["a"] = ({
  created: function created() {
    // 调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || [];
    logs.unshift(Date.now());
    wx.setStorageSync('logs', logs);

    console.log('app created and cache logs by setStorageSync');
  }
});

/***/ }),

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(37);



__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* default */].Store({
  state: {
    count: 0,
    currentPlaying: {},
    currentSongList: {},
    songId: 0,
    songListId: 0,
    userBaseInfo: {
      "backgroundUrl": "http://p1.music.126.net/N8uPfii-dB-NAJuEW63Dlw==/3275445145304100.jpg",
      "city": 360200,
      "defaultAvatar": false,
      "avatarUrl": "http://p2.music.126.net/ElqljSFQEePTo_WuWhdDMg==/1365593465472278.jpg",
      "birthday": 819388800000,
      "province": 360000,
      "remarkName": null,
      "mutual": false,
      "nickname": "往复随安2",
      "avatarImgId": 1365593465472278,
      "experts": {},
      "backgroundImgId": 3275445145304100,
      "userType": 0,
      "expertTags": null,
      "authStatus": 0,
      "description": "",
      "backgroundImgIdStr": "3275445145304100",
      "userId": 111736605,
      "vipType": 0,
      "gender": 1,
      "accountStatus": 0,
      "avatarImgIdStr": "1365593465472278",
      "detailDescription": "",
      "djStatus": 0,
      "followed": false,
      "signature": "你好，再见。",
      "authority": 0
    },
    rank: ['bs', 'xg', 'yc', 'rg']
  },
  mutations: {
    setPlaying: function setPlaying(state, data) {
      state.currentPlaying = data;
    },
    setSongId: function setSongId(state, data) {
      state.songId = data;
    },
    setSongListId: function setSongListId(state, data) {
      state.songListId = data;
    },
    setCurrentSongList: function setCurrentSongList(state, data) {
      state.currentSongList = data;
    },
    setRank: function setRank(state, data) {
      state.rank = data;
    }
  }
}));

/***/ })

},[30]);
//# sourceMappingURL=app.js.map