global.webpackJsonp([6],{

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__serachPage__ = __webpack_require__(116);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__serachPage__["a" /* default */]);
app.$mount();
/* harmony default export */ __webpack_exports__["default"] = ({
  config: {
    usingComponents: {
      "i-cell-group": "../../iview/cell-group/index",
      "i-cell": "../../iview/cell/index",
      "i-spin": "../../iview/spin/index",
      'i-icon': '../../iview/icon/index',
      "i-action-sheet": "../../iview/action-sheet/index"
    }
  }
});

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_serachPage_vue__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_a85d0664_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_serachPage_vue__ = __webpack_require__(119);
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
var __vue_scopeId__ = "data-v-a85d0664"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_serachPage_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_a85d0664_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_serachPage_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\searchPage\\serachPage.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] serachPage.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-a85d0664", Component.options)
  } else {
    hotAPI.reload("data-v-a85d0664", Component.options)
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

/* harmony default export */ __webpack_exports__["a"] = ({
  name: "search",
  onLoad: function onLoad() {
    wx.setNavigationBarTitle({
      title: '搜索'
    });
  },
  data: function data() {
    return {
      searchValue: '',
      hotSearch: '',
      isSearch: true,
      searchList: [],
      visible: false,
      actions: [{
        name: '下载',
        icon: 'success'
      }, {
        name: '分享',
        icon: 'share',
        openType: 'share'
      }, {
        name: '删除',
        icon: 'trash'
      }]
    };
  },

  methods: {
    goback: function goback() {
      this.$router.go(-1);
    },

    // toPlay(index,id){
    //   this.$router.push({name:'playing',params:{id:id}});
    //   this.$store.dispatch('setCurrentSongList', this.songList);
    // },
    doSearch: function doSearch(value) {
      var that = this;
      var Fly = __webpack_require__(3);
      var fly = new Fly();
      if (this.searchValue || value) {
        fly.get(this.$api + '/search?keywords=' + value || this.searchValue).then(function (res) {
          that.searchList = res.data.result.songs;
          that.isSearch = false;
        });
      }
    }
  },
  onShow: function onShow() {
    this.isSearch = true;
    this.searchList = [];
    this.searchValue = '';
    var Fly = __webpack_require__(3);
    var fly = new Fly();
    var that = this;
    fly.get(this.$api + '/search/hot').then(function (res) {
      that.hotSearch = res.data.result.hots;
    });
  }
});

/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticStyle: {
      "display": "flex",
      "padding": "5px 10px"
    }
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.searchValue),
      expression: "searchValue"
    }],
    staticStyle: {
      "width": "100%",
      "border-bottom": "1px solid"
    },
    attrs: {
      "auto-focus": "",
      "eventid": '0'
    },
    domProps: {
      "value": (_vm.searchValue)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.searchValue = $event.target.value
      }
    }
  }), _vm._v(" "), _c('i-icon', {
    attrs: {
      "type": "search",
      "size": "16",
      "eventid": '1',
      "mpcomid": '0'
    },
    on: {
      "click": function($event) {
        _vm.doSearch(_vm.searchValue)
      }
    }
  })], 1), _vm._v(" "), (_vm.isSearch) ? _c('div', {
    staticStyle: {
      "height": "100%"
    }
  }, [_c('span', {
    staticStyle: {
      "font-size": "14px"
    }
  }, [_vm._v("热门搜索")]), _vm._v(" "), _c('br'), _vm._v(" "), _vm._l((_vm.hotSearch), function(item, index) {
    return _c('span', {
      key: index,
      staticClass: "hotSearch",
      attrs: {
        "eventid": '2-' + index
      },
      on: {
        "click": function($event) {
          _vm.doSearch(item.first)
        }
      }
    }, [_vm._v(_vm._s(item.first))])
  })], 2) : _vm._e(), _vm._v(" "), (_vm.searchList) ? _c('div', {
    staticClass: "searchList"
  }, [_c('i-cell-group', {
    attrs: {
      "mpcomid": '3'
    }
  }, _vm._l((_vm.searchList), function(item, index) {
    return _c('i-cell', {
      key: item.id,
      attrs: {
        "title": item.name,
        "label": item.artists[0].name + '-' + item.album.name,
        "mpcomid": '2-' + index
      }
    }, [_c('span', {
      slot: "icon"
    }, [_vm._v(_vm._s(index + 1))]), _vm._v(" "), _c('i-icon', {
      attrs: {
        "type": "switch",
        "eventid": '3-' + index,
        "mpcomid": '1-' + index
      },
      on: {
        "click": function($event) {
          _vm.visible = !_vm.visible
        }
      },
      slot: "footer"
    })], 1)
  })), _vm._v(" "), _c('i-action-sheet', {
    attrs: {
      "visible": _vm.visible,
      "actions": _vm.actions,
      "eventid": '4',
      "mpcomid": '4'
    },
    on: {
      "click": function($event) {
        _vm.visible = !_vm.visible
      }
    }
  })], 1) : _vm._e()])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-a85d0664", esExports)
  }
}

/***/ })

},[115]);
//# sourceMappingURL=main.js.map