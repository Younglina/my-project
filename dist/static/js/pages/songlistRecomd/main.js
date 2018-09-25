global.webpackJsonp([5],{

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__songlistRecomd__ = __webpack_require__(116);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__songlistRecomd__["a" /* default */]);
app.$mount();
/* harmony default export */ __webpack_exports__["default"] = ({
  config: {
    navigationBarTitleText: '推荐歌单',
    usingComponents: {
      "i-load-more": "../../iview/load-more/index"
    }
  }
});

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_songlistRecomd_vue__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_9f3c0de0_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_songlistRecomd_vue__ = __webpack_require__(119);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(117)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-9f3c0de0"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_songlistRecomd_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_9f3c0de0_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_songlistRecomd_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/songlistRecomd/songlistRecomd.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] songlistRecomd.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-9f3c0de0", Component.options)
  } else {
    hotAPI.reload("data-v-9f3c0de0", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 117:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 118:
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
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  name: "songlistPage",
  data: function data() {
    return {
      playlists: '',
      highquality: '',
      loading: false
    };
  },
  onLoad: function onLoad() {
    wx.setNavigationBarTitle({
      title: '推荐歌单'
    });
  },

  filters: {
    formatData: function formatData(value) {
      return parseInt(value / 10000) + '万';
    }
  },
  methods: {
    goback: function goback() {
      wx.navigateBack();
    },
    toPlayListDetail: function toPlayListDetail(e) {
      var id = e.target.dataset.id;
      wx.navigateTo({
        url: '../songList/main?id=' + id
      });
    }
  },
  mounted: function mounted() {
    var _this = this;

    var that = this;
    this.$fly.get(this.$api + '/top/playlist').then(function (res) {
      that.playlists = res.data.playlists;
    });
    setTimeout(function () {
      _this.$fly.get(_this.$api + '/top/playlist/highquality?limit=1').then(function (res) {
        that.highquality = res.data.playlists[0];
        that.loading = false;
      });
    }, 500);
  }
});

/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticStyle: {
      "height": "100%"
    }
  }, [_c('div', {
    staticStyle: {
      "z-index": "101",
      "background-color": "white",
      "display": "flex",
      "align-items": "center",
      "padding-left": "10px"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "top"
  }, [_c('div', {
    staticClass: "background"
  }, [_c('div', {
    staticClass: "filter"
  }), _vm._v(" "), _c('img', {
    attrs: {
      "src": _vm.highquality.coverImgUrl,
      "width": "100%",
      "height": "100%"
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "topImg"
  }, [_c('img', {
    attrs: {
      "src": _vm.highquality.coverImgUrl,
      "alt": ""
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "topR"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "innerTopR"
  }, [_c('span', {
    staticStyle: {
      "color": "white",
      "font-size": "14px"
    }
  }, [_vm._v(_vm._s(_vm.highquality.name))]), _vm._v(" "), _c('span', {
    staticStyle: {
      "color": "darkgray",
      "font-size": "12px"
    }
  }, [_vm._v(_vm._s(_vm.highquality.copywriter))])])])]), _vm._v(" "), (_vm.loading) ? _c('i-load-more', {
    attrs: {
      "loading": _vm.loading,
      "mpcomid": '1'
    }
  }) : _c('div', {
    staticClass: "personalized"
  }, [_c('div', {
    staticClass: "gdView",
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": _vm.toPlayListDetail
    }
  }, _vm._l((_vm.playlists), function(item, index) {
    return _c('div', {
      key: item.id,
      staticClass: "gdInnerView"
    }, [_c('div', {
      staticClass: "playCountMain"
    }, [_c('div', {
      staticClass: "playCount"
    }, [_c('mu-icon', {
      attrs: {
        "value": "headset",
        "mpcomid": '0-' + index
      }
    }), _c('span', [_vm._v(_vm._s(_vm._f("formatData")(item.playCount)))])], 1), _vm._v(" "), _c('img', {
      staticClass: "innerImg",
      attrs: {
        "src": item.coverImgUrl,
        "data-id": item.id
      }
    })]), _vm._v(" "), _c('span', {
      staticClass: "innerText"
    }, [_vm._v(_vm._s(item.name))])])
  }))])], 1)
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "innerTopT"
  }, [_c('span', {
    staticStyle: {
      "color": "white",
      "font-size": "16px"
    }
  }, [_vm._v("精品歌单")])])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-9f3c0de0", esExports)
  }
}

/***/ })

},[115]);
//# sourceMappingURL=main.js.map