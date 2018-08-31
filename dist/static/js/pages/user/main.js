global.webpackJsonp([3],{

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user__ = __webpack_require__(131);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__user__["a" /* default */]);
app.$mount();
/* harmony default export */ __webpack_exports__["default"] = ({
  config: {
    usingComponents: {}
  }
});

/***/ }),

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_user_vue__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_5f924850_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_user_vue__ = __webpack_require__(134);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(132)
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
Component.options.__file = "src\\pages\\user\\user.vue"
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

/***/ 132:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 133:
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

/* harmony default export */ __webpack_exports__["a"] = ({
  name: "user",
  data: function data() {
    return {
      backgroundUrl: "",
      avatarUrl: "",
      nickname: "",
      signature: "",
      musicList: [{
        'url': '../../resource/img/xx.png',
        'words': '我的消息'
      }, {
        'url': '../../resource/img/vip.png',
        'words': '会员中心'
      }, {
        'url': '../../resource/img/gwc.png',
        'words': '商城'
      }, {
        'url': '../../resource/img/zhanghao.png',
        'words': '我的好友'
      }, {
        'url': '../../resource/img/fj.png',
        'words': '附近的人',
        'func': this.toAround
      }, {
        'url': '../../resource/img/sb.png',
        'words': '游戏推荐'
      }, {
        'url': '../../resource/img/sys.png',
        'words': '扫一扫',
        'func': this.scan
      }, {
        'url': '../../resource/img/yf.png',
        'words': '个性换肤'
      }]
    };
  },
  onShow: function onShow() {
    this.backgroundUrl = this.$store.state.userBaseInfo.backgroundUrl;
    this.avatarUrl = this.$store.state.userBaseInfo.avatarUrl;
    this.nickname = this.$store.state.userBaseInfo.nickname;
    this.signature = this.$store.state.userBaseInfo.signature;
  },

  methods: {
    scan: function scan() {
      wx.scanCode({
        success: function success(res) {
          wx.showToast({
            title: res.result,
            icon: 'success',
            duration: 2000
          });
        }
      });
    },
    toAround: function toAround() {
      wx.navigateTo({ url: '../around/main' });
    }
  }
});

/***/ }),

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('view', {
    staticClass: "userView",
    style: ({
      backgroundImage: 'url(' + _vm.backgroundUrl + ')'
    })
  }, [_c('view', {
    staticClass: "user"
  }, [_c('image', {
    staticClass: "avatar",
    attrs: {
      "src": _vm.avatarUrl
    }
  }), _vm._v(" "), _c('text', {
    staticClass: "nickname"
  }, [_vm._v(_vm._s(_vm.nickname))])])]), _vm._v(" "), _c('view', {
    staticClass: "mid"
  }, _vm._l((_vm.musicList), function(item, index) {
    return _c('block', {
      key: item.id
    }, [_c('view', {
      staticClass: "page__bd-mid",
      attrs: {
        "eventid": '0-' + index
      },
      on: {
        "click": item.func
      }
    }, [_c('view', {
      staticClass: "page__bd-midImage center"
    }, [_c('image', {
      attrs: {
        "src": item.url
      }
    })]), _vm._v(" "), _c('view', {
      staticClass: "page__bd-midContent"
    }, [_c('text', {
      staticClass: "page__bd-contenWords"
    }, [_vm._v(_vm._s(item.words))])])])])
  }))])
}
var staticRenderFns = []
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

},[130]);
//# sourceMappingURL=main.js.map