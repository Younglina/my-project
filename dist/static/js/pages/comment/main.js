global.webpackJsonp([9],{

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__comment__ = __webpack_require__(52);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__comment__["a" /* default */]);
app.$mount();
/* harmony default export */ __webpack_exports__["default"] = ({
  config: {
    usingComponents: {
      "i-cell-group": "../../iview/cell-group/index",
      "i-cell": "../../iview/cell/index",
      'i-icon': '../../iview/icon/index',
      "i-avatar": "../../iview/avatar/index"
    }
  }
});

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_comment_vue__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_782068b0_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_comment_vue__ = __webpack_require__(79);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(53)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-782068b0"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_comment_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_782068b0_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_comment_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/comment/comment.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] comment.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-782068b0", Component.options)
  } else {
    hotAPI.reload("data-v-782068b0", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 53:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray__);

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
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  name: "comment",
  data: function data() {
    return {
      comment: [],
      comments: [],
      screenHeight: ''
    };
  },

  methods: {},
  onLoad: function onLoad() {
    var that = this;
    wx.getSystemInfo({
      success: function success(res) {
        that.screenHeight = res.screenHeight;
      }
    });
  },
  onPageScroll: function onPageScroll(e) {
    console.log(e);
    if (e.scrollTop > 50) {
      var _comments;

      (_comments = this.comments).push.apply(_comments, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray___default()(this.comment.comments.slice(this.comments.length, this.comments.length + 10)));
    }
  },
  onShow: function onShow() {
    var _this = this;

    //通过option参数获取
    var res = this.$fly.get(this.$api + '/comment/' + this.$root.$mp.query.type + '?id=' + this.$root.$mp.query.id);
    res.then(function (res) {
      _this.comment = res.data;
      _this.comments = res.data.comments.slice(0, 10);
    });
  }
});

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('scroll-view', {
    staticClass: "comment",
    attrs: {
      "scroll-y": true
    }
  }, [_c('span', {
    staticStyle: {
      "font-size": "14px"
    }
  }, [_vm._v("精彩评论")]), _vm._v(" "), _c('div', [_c('i-cell-group', {
    attrs: {
      "mpcomid": '3'
    }
  }, _vm._l((_vm.comment.hotComments), function(item, index) {
    return _c('i-cell', {
      key: item.id,
      staticClass: "list",
      attrs: {
        "ripple": "",
        "mpcomid": '2-' + index
      }
    }, [_c('div', {
      staticClass: "listMain",
      attrs: {
        "button": ""
      }
    }, [_c('div', [_c('i-avatar', {
      attrs: {
        "src": item.user.avatarUrl,
        "mpcomid": '0-' + index
      }
    })], 1), _vm._v(" "), _c('div', {
      staticClass: "listR"
    }, [_c('div', {
      staticClass: "listT"
    }, [_c('span', [_vm._v(_vm._s(item.user.nickname))]), _vm._v(" "), _c('div', [_vm._v(_vm._s(item.likedCount)), _c('i-icon', {
      attrs: {
        "type": "like",
        "mpcomid": '1-' + index
      }
    })], 1)]), _vm._v(" "), _c('span', [_vm._v(_vm._s(item.content))])])])])
  }))], 1), _vm._v(" "), _c('span', {
    staticStyle: {
      "font-size": "14px"
    }
  }, [_vm._v("最新评论")]), _vm._v(" "), _c('div', [_c('i-cell-group', {
    attrs: {
      "mpcomid": '7'
    }
  }, _vm._l((_vm.comments), function(item, index) {
    return _c('i-cell', {
      key: item.id,
      staticClass: "list",
      attrs: {
        "mpcomid": '6-' + index
      }
    }, [_c('div', {
      staticClass: "listMain"
    }, [_c('div', [_c('i-avatar', {
      attrs: {
        "src": item.user.avatarUrl,
        "mpcomid": '4-' + index
      }
    })], 1), _vm._v(" "), _c('div', {
      staticClass: "listR"
    }, [_c('div', {
      staticClass: "listT"
    }, [_c('span', [_vm._v(_vm._s(item.user.nickname))]), _vm._v(" "), _c('div', [_vm._v(_vm._s(item.likedCount)), _c('i-icon', {
      attrs: {
        "type": "like",
        "mpcomid": '5-' + index
      }
    })], 1)]), _vm._v(" "), _c('span', [_vm._v(_vm._s(item.content))])])])])
  }))], 1)])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-782068b0", esExports)
  }
}

/***/ })

},[51]);
//# sourceMappingURL=main.js.map