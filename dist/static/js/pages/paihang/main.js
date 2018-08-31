global.webpackJsonp([2],{

/***/ 100:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 101:
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

/* harmony default export */ __webpack_exports__["a"] = ({
  name: "rank-comp",
  props: ['img', 'items']
});

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "item"
  }, [_c('image', {
    staticClass: "rankImg",
    attrs: {
      "src": _vm.img
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "songs"
  }, _vm._l((_vm.items), function(item, index) {
    return _c('span', {
      staticClass: "songItem"
    }, [_vm._v(_vm._s(index + 1) + "." + _vm._s(item.name) + "-" + _vm._s(item.ar[0].name))])
  }))])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-5d5d333b", esExports)
  }
}

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [(_vm.loading) ? _c('i-load-more', {
    attrs: {
      "loading": _vm.loading,
      "mpcomid": '4'
    }
  }) : _c('div', {
    staticClass: "rank"
  }, [_c('div', {
    staticClass: "rankMain"
  }, [_c('span', [_vm._v("官方榜")]), _vm._v(" "), _c('div', [_c('rank-comp', {
    attrs: {
      "img": _vm.imgs.bs,
      "items": _vm.bs,
      "mpcomid": '0'
    }
  }), _vm._v(" "), _c('rank-comp', {
    attrs: {
      "img": _vm.imgs.xg,
      "items": _vm.xg,
      "mpcomid": '1'
    }
  }), _vm._v(" "), _c('rank-comp', {
    attrs: {
      "img": _vm.imgs.yc,
      "items": _vm.yc,
      "mpcomid": '2'
    }
  }), _vm._v(" "), _c('rank-comp', {
    attrs: {
      "img": _vm.imgs.rg,
      "items": _vm.rg,
      "mpcomid": '3'
    }
  })], 1)]), _vm._v(" "), _c('div', [_c('span', [_vm._v("全球榜")]), _vm._v(" "), _c('div', {
    staticClass: "rankDiv"
  }, [_c('div', {
    staticClass: "rankInner"
  }, [_c('div', [_c('img', {
    attrs: {
      "src": _vm.imgs.sc
    }
  }), _c('span', [_vm._v("说唱TOP榜")])]), _vm._v(" "), _c('div', [_c('img', {
    attrs: {
      "src": _vm.imgs.dy
    }
  }), _c('span', [_vm._v("云音乐电音榜")])]), _vm._v(" "), _c('div', [_c('img', {
    attrs: {
      "src": _vm.imgs.xh
    }
  }), _c('span', [_vm._v("云音乐嘻哈榜")])])]), _vm._v(" "), _c('div', {
    staticClass: "rankInner"
  }, [_c('div', [_c('img', {
    attrs: {
      "src": _vm.imgs.douy
    }
  }), _c('span', [_vm._v("抖音排行榜")])]), _vm._v(" "), _c('div', [_c('img', {
    attrs: {
      "src": _vm.imgs.acg
    }
  }), _c('span', [_vm._v("云音乐ACG榜")])]), _vm._v(" "), _c('div', [_c('img', {
    attrs: {
      "src": _vm.imgs.gd
    }
  }), _c('span', [_vm._v("云音乐国电榜")])])]), _vm._v(" "), _c('div', {
    staticClass: "rankInner"
  }, [_c('div', [_c('img', {
    attrs: {
      "src": _vm.imgs.dj
    }
  }), _c('span', [_vm._v("电竞音乐榜")])]), _vm._v(" "), _c('div', [_c('img', {
    attrs: {
      "src": _vm.imgs.mg
    }
  }), _c('span', [_vm._v("美国Billboard周榜")])]), _vm._v(" "), _c('div', [_c('img', {
    attrs: {
      "src": _vm.imgs.ituns
    }
  }), _vm._v("iTunes榜")])])])])])], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-02086006", esExports)
  }
}

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__paihang__ = __webpack_require__(96);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__paihang__["a" /* default */]);
app.$mount();
/* harmony default export */ __webpack_exports__["default"] = ({
  config: {
    navigationBarTitleText: '排行榜',
    usingComponents: {
      "i-load-more": "../../iview/load-more/index"
    }
  }
});

/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_paihang_vue__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_02086006_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_paihang_vue__ = __webpack_require__(103);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(97)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-02086006"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_paihang_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_02086006_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_paihang_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\paihang\\paihang.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] paihang.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-02086006", Component.options)
  } else {
    hotAPI.reload("data-v-02086006", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 97:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_rank_comp__ = __webpack_require__(99);
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
//


/* harmony default export */ __webpack_exports__["a"] = ({
  name: "paihang",
  data: function data() {
    return {
      loading: true,
      bs: '',
      sg: '',
      yc: '',
      rg: '',
      imgs: {
        bs: '../../resource/img/bs.jpg',
        xg: '../../resource/img/xg.jpg',
        yc: '../../resource/img/yc.jpg',
        rg: '../../resource/img/rg.jpg',
        sc: "../../resource/img/sc.jpg",
        dy: "../../resource/img/dy.jpg",
        xh: "../../resource/img/xh.jpg",
        douy: "../../resource/img/douy.jpg",
        acg: "../../resource/img/acg.jpg",
        gd: "../../resource/img/gd.jpg",
        dj: "../../resource/img/dj.jpg",
        mg: "../../resource/img/mg.jpg",
        ituns: "../../resource/img/ituns.jpg",
        uk: "../../resource/img/uk.jpg"
      }
    };
  },

  components: {
    RankComp: __WEBPACK_IMPORTED_MODULE_0__components_rank_comp__["a" /* default */]
  },
  methods: {
    goback: function goback() {
      this.$router.go(-1);
    }
  },
  mounted: function mounted() {
    var _this = this;

    this.$fly.all([this.$fly.get(this.$api + "/top/list?idx=3"), this.$fly.get(this.$api + "/top/list?idx=0"), this.$fly.get(this.$api + "/top/list?idx=2"), this.$fly.get(this.$api + "/top/list?idx=1")]).then(this.$fly.spread(function (bs, xg, yc, rg) {
      _this.bs = bs.data.playlist.tracks.slice(0, 3);
      _this.xg = xg.data.playlist.tracks.slice(0, 3);
      _this.yc = yc.data.playlist.tracks.slice(0, 3);
      _this.rg = rg.data.playlist.tracks.slice(0, 3);
      _this.loading = false;
    }));
  }
});

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_rank_comp_vue__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_5d5d333b_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_rank_comp_vue__ = __webpack_require__(102);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(100)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-5d5d333b"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_rank_comp_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_5d5d333b_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_rank_comp_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\components\\rank-comp.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] rank-comp.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5d5d333b", Component.options)
  } else {
    hotAPI.reload("data-v-5d5d333b", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ })

},[95]);
//# sourceMappingURL=main.js.map