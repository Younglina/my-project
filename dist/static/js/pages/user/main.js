global.webpackJsonp([1],{

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user__ = __webpack_require__(121);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__user__["a" /* default */]);
app.$mount();
/* harmony default export */ __webpack_exports__["default"] = ({
  config: {
    usingComponents: {
      "i-tabs": "../../iview/tabs/index",
      "i-tab": "../../iview/tab/index",
      "i-cell-group": "../../iview/cell-group/index",
      "i-cell": "../../iview/cell/index"
    }
  }
});

/***/ }),

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_user_vue__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_5f924850_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_user_vue__ = __webpack_require__(132);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(122)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-5f924850"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_user_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_5f924850_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_user_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/user/user.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] user.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5f924850", Component.options)
  } else {
    hotAPI.reload("data-v-5f924850", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 122:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_UserMusic__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_UserMesg__ = __webpack_require__(128);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["a"] = ({
  name: "user",
  components: { UserMusic: __WEBPACK_IMPORTED_MODULE_0__pages_UserMusic__["a" /* default */], UserMesg: __WEBPACK_IMPORTED_MODULE_1__pages_UserMesg__["a" /* default */] },
  data: function data() {
    return {
      backgroundUrl: "",
      avatarUrl: "",
      nickname: "",
      signature: "",
      showTable: "userMusic"
    };
  },
  onShow: function onShow() {
    this.backgroundUrl = this.$store.state.userBaseInfo.backgroundUrl;
    this.avatarUrl = this.$store.state.userBaseInfo.avatarUrl;
    this.nickname = this.$store.state.userBaseInfo.nickname;
    this.signature = this.$store.state.userBaseInfo.signature;
  },

  methods: {
    handleChange: function handleChange(e) {
      this.showTable = e.mp.detail.key;
    }
  }
});

/***/ }),

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_UserMusic_vue__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_ebdbe40c_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_UserMusic_vue__ = __webpack_require__(127);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(125)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-ebdbe40c"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_UserMusic_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_ebdbe40c_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_UserMusic_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/user/pages/UserMusic.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] UserMusic.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-ebdbe40c", Component.options)
  } else {
    hotAPI.reload("data-v-ebdbe40c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 125:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
    name: "userMusic",
    data: function data() {
        return {
            "playlist": [{
                "subscribers": [],
                "subscribed": false,
                "creator": {
                    "defaultAvatar": false,
                    "province": 360000,
                    "authStatus": 0,
                    "followed": false,
                    "avatarUrl": "http://p1.music.126.net/ElqljSFQEePTo_WuWhdDMg==/1365593465472278.jpg",
                    "accountStatus": 0,
                    "gender": 1,
                    "city": 360200,
                    "birthday": 819388800000,
                    "userId": 111736605,
                    "userType": 0,
                    "nickname": "往复随安2",
                    "signature": "你好，再见。",
                    "description": "",
                    "detailDescription": "",
                    "avatarImgId": 1365593465472278,
                    "backgroundImgId": 3275445145304100,
                    "backgroundUrl": "http://p1.music.126.net/N8uPfii-dB-NAJuEW63Dlw==/3275445145304100.jpg",
                    "authority": 0,
                    "mutual": false,
                    "expertTags": null,
                    "experts": null,
                    "djStatus": 0,
                    "vipType": 0,
                    "remarkName": null,
                    "avatarImgIdStr": "1365593465472278",
                    "backgroundImgIdStr": "3275445145304100"
                },
                "artists": null,
                "tracks": null,
                "tags": [],
                "trackNumberUpdateTime": 1537515847799,
                "adType": 0,
                "status": 0,
                "subscribedCount": 0,
                "cloudTrackCount": 0,
                "specialType": 5,
                "userId": 111736605,
                "trackUpdateTime": 1537521171255,
                "trackCount": 53,
                "coverImgId": 528865094188722,
                "privacy": 0,
                "newImported": false,
                "updateTime": 1537515847799,
                "anonimous": false,
                "totalDuration": 0,
                "commentThreadId": "A_PL_0_137136854",
                "coverImgUrl": "http://p1.music.126.net/rO33HrMCxQNHVSzgYLE9nA==/528865094188722.jpg",
                "playCount": 1363,
                "ordered": true,
                "description": null,
                "createTime": 1449642098605,
                "highQuality": false,
                "name": "往复随安2喜欢的音乐",
                "id": 137136854
            }, {
                "subscribers": [],
                "subscribed": true,
                "creator": {
                    "defaultAvatar": false,
                    "province": 410000,
                    "authStatus": 0,
                    "followed": false,
                    "avatarUrl": "http://p1.music.126.net/Eet-whlol-TfgNvpT0YaSQ==/109951163558281528.jpg",
                    "accountStatus": 0,
                    "gender": 0,
                    "city": 411300,
                    "birthday": -2209017600000,
                    "userId": 129377889,
                    "userType": 200,
                    "nickname": "莉犬",
                    "signature": "那个夏日已然饱和。/一切真的会好起来吗",
                    "description": "",
                    "detailDescription": "",
                    "avatarImgId": 109951163558281540,
                    "backgroundImgId": 109951163567843570,
                    "backgroundUrl": "http://p1.music.126.net/vv-RKeXSpg3ly_GHS2T-FQ==/109951163567843561.jpg",
                    "authority": 0,
                    "mutual": false,
                    "expertTags": ["ACG", "日语"],
                    "experts": null,
                    "djStatus": 10,
                    "vipType": 0,
                    "remarkName": null,
                    "avatarImgIdStr": "109951163558281528",
                    "backgroundImgIdStr": "109951163567843561",
                    "avatarImgId_str": "109951163558281528"
                },
                "artists": null,
                "tracks": null,
                "tags": ["日语", "ACG", "流行"],
                "trackNumberUpdateTime": 1537803002315,
                "adType": 0,
                "status": 0,
                "subscribedCount": 287409,
                "cloudTrackCount": 0,
                "specialType": 0,
                "userId": 129377889,
                "trackUpdateTime": 1537803137386,
                "trackCount": 125,
                "coverImgId": 19126004765742416,
                "privacy": 0,
                "newImported": false,
                "updateTime": 1537803002315,
                "anonimous": false,
                "totalDuration": 0,
                "commentThreadId": "A_PL_0_2105681544",
                "coverImgUrl": "http://p1.music.126.net/Bdr5DuGf-ZzZywHRR6DKLA==/19126004765742414.jpg",
                "playCount": 7290323,
                "ordered": true,
                "description": "喜欢无需铺垫，只需一秒便沦陷。\n无前奏日语歌，开口直接秒杀你。\n\n歌单里精选了100首无前奏日语歌，\n相信你们听完这些歌的第一句后，你们就会喜欢这些歌的~感谢大家的收听w\n\n封面p站id：58893318 画师：おくたこす",
                "createTime": 1518832598692,
                "highQuality": false,
                "name": "日系/无前奏：开口即跪 一秒沦陷",
                "id": 2105681544,
                "coverImgId_str": "19126004765742414"
            }, {
                "subscribers": [],
                "subscribed": true,
                "creator": {
                    "defaultAvatar": false,
                    "province": 360000,
                    "authStatus": 0,
                    "followed": false,
                    "avatarUrl": "http://p1.music.126.net/tdAmHoNh9s8ezJySUJnnQw==/109951163414375254.jpg",
                    "accountStatus": 0,
                    "gender": 0,
                    "city": 360400,
                    "birthday": -2209017600000,
                    "userId": 260023764,
                    "userType": 0,
                    "nickname": "要会撒娇哦",
                    "signature": "认清",
                    "description": "",
                    "detailDescription": "",
                    "avatarImgId": 109951163414375250,
                    "backgroundImgId": 3433774815230246,
                    "backgroundUrl": "http://p1.music.126.net/TFCF5V4zpOuJFz-s8K-Alw==/3433774815230246.jpg",
                    "authority": 0,
                    "mutual": false,
                    "expertTags": null,
                    "experts": null,
                    "djStatus": 0,
                    "vipType": 0,
                    "remarkName": null,
                    "avatarImgIdStr": "109951163414375254",
                    "backgroundImgIdStr": "3433774815230246",
                    "avatarImgId_str": "109951163414375254"
                },
                "artists": null,
                "tracks": null,
                "tags": [],
                "trackNumberUpdateTime": 1537236218498,
                "adType": 0,
                "status": 0,
                "subscribedCount": 1,
                "cloudTrackCount": 0,
                "specialType": 0,
                "userId": 260023764,
                "trackUpdateTime": 1537236218498,
                "trackCount": 68,
                "coverImgId": 109951163093043680,
                "privacy": 0,
                "newImported": false,
                "updateTime": 1537236218498,
                "anonimous": false,
                "totalDuration": 0,
                "commentThreadId": "A_PL_0_941262247",
                "coverImgUrl": "http://p1.music.126.net/yTU-bvoh2mWqg7RPmEs1bg==/109951163093043682.jpg",
                "playCount": 229,
                "ordered": false,
                "description": "",
                "createTime": 1506901848298,
                "highQuality": false,
                "name": "少女情怀总是诗",
                "id": 941262247,
                "coverImgId_str": "109951163093043682"
            }, {
                "subscribers": [],
                "subscribed": true,
                "creator": {
                    "defaultAvatar": false,
                    "province": 360000,
                    "authStatus": 0,
                    "followed": false,
                    "avatarUrl": "http://p1.music.126.net/tdAmHoNh9s8ezJySUJnnQw==/109951163414375254.jpg",
                    "accountStatus": 0,
                    "gender": 0,
                    "city": 360400,
                    "birthday": -2209017600000,
                    "userId": 260023764,
                    "userType": 0,
                    "nickname": "要会撒娇哦",
                    "signature": "认清",
                    "description": "",
                    "detailDescription": "",
                    "avatarImgId": 109951163414375250,
                    "backgroundImgId": 3433774815230246,
                    "backgroundUrl": "http://p1.music.126.net/TFCF5V4zpOuJFz-s8K-Alw==/3433774815230246.jpg",
                    "authority": 0,
                    "mutual": false,
                    "expertTags": null,
                    "experts": null,
                    "djStatus": 0,
                    "vipType": 0,
                    "remarkName": null,
                    "avatarImgIdStr": "109951163414375254",
                    "backgroundImgIdStr": "3433774815230246",
                    "avatarImgId_str": "109951163414375254"
                },
                "artists": null,
                "tracks": null,
                "tags": [],
                "trackNumberUpdateTime": 1536994151927,
                "adType": 0,
                "status": 0,
                "subscribedCount": 1,
                "cloudTrackCount": 0,
                "specialType": 0,
                "userId": 260023764,
                "trackUpdateTime": 1537227966860,
                "trackCount": 33,
                "coverImgId": 109951163093037980,
                "privacy": 0,
                "newImported": false,
                "updateTime": 1536994151927,
                "anonimous": false,
                "totalDuration": 0,
                "commentThreadId": "A_PL_0_930330172",
                "coverImgUrl": "http://p1.music.126.net/rqANa-8UC_9RToWu9o8ftA==/109951163093037979.jpg",
                "playCount": 49,
                "ordered": false,
                "description": null,
                "createTime": 1506172291992,
                "highQuality": false,
                "name": "一日看尽长安花",
                "id": 930330172,
                "coverImgId_str": "109951163093037979"
            }, {
                "subscribers": [],
                "subscribed": true,
                "creator": {
                    "defaultAvatar": false,
                    "province": 360000,
                    "authStatus": 0,
                    "followed": false,
                    "avatarUrl": "http://p1.music.126.net/tdAmHoNh9s8ezJySUJnnQw==/109951163414375254.jpg",
                    "accountStatus": 0,
                    "gender": 0,
                    "city": 360400,
                    "birthday": -2209017600000,
                    "userId": 260023764,
                    "userType": 0,
                    "nickname": "要会撒娇哦",
                    "signature": "认清",
                    "description": "",
                    "detailDescription": "",
                    "avatarImgId": 109951163414375250,
                    "backgroundImgId": 3433774815230246,
                    "backgroundUrl": "http://p1.music.126.net/TFCF5V4zpOuJFz-s8K-Alw==/3433774815230246.jpg",
                    "authority": 0,
                    "mutual": false,
                    "expertTags": null,
                    "experts": null,
                    "djStatus": 0,
                    "vipType": 0,
                    "remarkName": null,
                    "avatarImgIdStr": "109951163414375254",
                    "backgroundImgIdStr": "3433774815230246",
                    "avatarImgId_str": "109951163414375254"
                },
                "artists": null,
                "tracks": null,
                "tags": [],
                "trackNumberUpdateTime": 1530790490401,
                "adType": 0,
                "status": 0,
                "subscribedCount": 1,
                "cloudTrackCount": 0,
                "specialType": 0,
                "userId": 260023764,
                "trackUpdateTime": 1537177306693,
                "trackCount": 38,
                "coverImgId": 109951163093041380,
                "privacy": 0,
                "newImported": false,
                "updateTime": 1531122282733,
                "anonimous": false,
                "totalDuration": 0,
                "commentThreadId": "A_PL_0_874507221",
                "coverImgUrl": "http://p1.music.126.net/FJquprx1qJEkSWt33v3T5g==/109951163093041372.jpg",
                "playCount": 200,
                "ordered": false,
                "description": null,
                "createTime": 1502327688635,
                "highQuality": false,
                "name": "梨花院落溶溶夜",
                "id": 874507221,
                "coverImgId_str": "109951163093041372"
            }]
        };
    },

    methods: {
        toPlayListDetail: function toPlayListDetail(id) {
            wx.navigateTo({
                url: '../songList/main?id=' + id
            });
        }
    }
});

/***/ }),

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "userMusic"
  }, [_vm._m(0), _vm._v(" "), _vm._m(1), _vm._v(" "), _c('div', {
    staticClass: "myList"
  }, [_c('img', {
    staticClass: "musicImg",
    attrs: {
      "src": "/resource/img/like.jpeg",
      "alt": ""
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "innerMusic"
  }, [_c('span', {
    staticClass: "title"
  }, [_vm._v("我喜欢的音乐")]), _vm._v(" "), _c('span', {
    staticClass: "sub"
  }, [_vm._v(_vm._s(_vm.playlist[0].trackCount) + "首,播放" + _vm._s(_vm.playlist[0].playCount) + "次")])])]), _vm._v(" "), _c('div', {
    staticClass: "myMusic"
  }, [_c('span', [_vm._v("收藏的歌单(" + _vm._s(_vm.playlist.length - 1) + ")")]), _vm._v(" "), _c('span')]), _vm._v(" "), _vm._l((_vm.playlist), function(item, index) {
    return (index !== 0) ? _c('div', {
      key: item.id,
      staticClass: "myList",
      attrs: {
        "eventid": '0-' + index
      },
      on: {
        "tap": function($event) {
          _vm.toPlayListDetail(item.id)
        }
      }
    }, [_c('img', {
      staticClass: "musicImg",
      attrs: {
        "src": item.coverImgUrl,
        "alt": ""
      }
    }), _vm._v(" "), _c('div', {
      staticClass: "innerMusic"
    }, [_c('span', {
      staticClass: "title"
    }, [_vm._v(_vm._s(item.name))]), _vm._v(" "), _c('span', {
      staticClass: "sub"
    }, [_vm._v(_vm._s(item.trackCount) + "首,播放" + _vm._s(item.playCount) + "次")])])]) : _vm._e()
  })], 2)
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "myMusic"
  }, [_c('span', [_vm._v("歌单")]), _vm._v(" "), _c('span', [_vm._v("共被收藏0次")])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "myList"
  }, [_c('div', {
    staticClass: "musicImg my"
  }, [_c('img', {
    staticStyle: {
      "width": "40px",
      "height": "40px"
    },
    attrs: {
      "src": "/resource/img/paihan.png",
      "alt": ""
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "innerMusic"
  }, [_c('span', {
    staticClass: "title"
  }, [_vm._v("我的听歌排行榜")]), _vm._v(" "), _c('span', {
    staticClass: "sub"
  }, [_vm._v("累计听歌7831首")])])])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-ebdbe40c", esExports)
  }
}

/***/ }),

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_UserMesg_vue__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_52c47f27_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_UserMesg_vue__ = __webpack_require__(131);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(129)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-52c47f27"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_UserMesg_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_52c47f27_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_UserMesg_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/user/pages/UserMesg.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] UserMesg.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-52c47f27", Component.options)
  } else {
    hotAPI.reload("data-v-52c47f27", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 129:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  name: "UserMesg",
  data: function data() {
    return {
      musicList: [{
        url: "../../resource/img/xx.png",
        words: "我的消息"
      }, {
        url: "../../resource/img/vip.png",
        words: "会员中心"
      }, {
        url: "../../resource/img/gwc.png",
        words: "商城"
      }, {
        url: "../../resource/img/zhanghao.png",
        words: "我的好友"
      }, {
        url: "../../resource/img/fj.png",
        words: "附近的人",
        func: this.toAround
      }, {
        url: "../../resource/img/sb.png",
        words: "游戏推荐"
      }, {
        url: "../../resource/img/sys.png",
        words: "扫一扫",
        func: this.scan
      }, {
        url: "../../resource/img/yf.png",
        words: "个性换肤"
      }]
    };
  },

  methods: {
    scan: function scan() {
      wx.scanCode({
        success: function success(res) {
          wx.showToast({
            title: res.result,
            icon: "success",
            duration: 2000
          });
        }
      });
    },
    toAround: function toAround() {
      wx.navigateTo({
        url: "/pages/around/main"
      });
    }
  }
});

/***/ }),

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('i-cell-group', {
    attrs: {
      "mpcomid": '1'
    }
  }, _vm._l((_vm.musicList), function(item, index) {
    return _c('i-cell', {
      key: item.key,
      attrs: {
        "title": item.words,
        "eventid": '0-' + index,
        "mpcomid": '0-' + index
      },
      on: {
        "click": item.func
      }
    }, [_c('img', {
      staticClass: "iconImg",
      attrs: {
        "src": item.url
      },
      slot: "icon"
    })])
  }))], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-52c47f27", esExports)
  }
}

/***/ }),

/***/ 132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "userdiv",
    style: ({
      backgroundImage: 'url(' + _vm.backgroundUrl + ')'
    })
  }, [_c('div', {
    staticClass: "user"
  }, [_c('image', {
    staticClass: "avatar",
    attrs: {
      "src": _vm.avatarUrl
    }
  }), _vm._v(" "), _c('text', {
    staticClass: "nickname"
  }, [_vm._v(_vm._s(_vm.nickname))]), _vm._v(" "), _vm._m(0)])]), _vm._v(" "), _c('div', [_c('i-tabs', {
    attrs: {
      "current": _vm.showTable,
      "eventid": '0',
      "mpcomid": '2'
    },
    on: {
      "change": _vm.handleChange
    }
  }, [_c('i-tab', {
    key: "userMusic",
    attrs: {
      "title": "音乐",
      "mpcomid": '0'
    }
  }), _vm._v(" "), _c('i-tab', {
    key: "userMesg",
    attrs: {
      "title": "消息",
      "mpcomid": '1'
    }
  })], 1)], 1), _vm._v(" "), _c('div', [(_vm.showTable === 'userMusic') ? _c('UserMusic', {
    attrs: {
      "mpcomid": '4'
    }
  }) : (_vm.showTable === 'userMesg') ? _c('UserMesg', {
    attrs: {
      "mpcomid": '3'
    }
  }) : _vm._e()], 1)])
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "fensi"
  }, [_c('span', {
    staticClass: "flow"
  }, [_vm._v("关注 17")]), _vm._v(" "), _c('span', [_vm._v("粉丝 12")])])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-5f924850", esExports)
  }
}

/***/ })

},[120]);
//# sourceMappingURL=main.js.map