global.webpackJsonp([6],{

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__songlist__ = __webpack_require__(111);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__songlist__["a" /* default */]);
app.$mount();
/* harmony default export */ __webpack_exports__["default"] = ({
  config: {
    navigationBarTitleText: '歌单详情',
    usingComponents: {
      "i-cell-group": "../../iview/cell-group/index",
      "i-cell": "../../iview/cell/index",
      'i-icon': '../../iview/icon/index',
      "i-action-sheet": "../../iview/action-sheet/index",
      "i-load-more": "../../iview/load-more/index"
    }
  }
});

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_songlist_vue__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_7e93a230_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_songlist_vue__ = __webpack_require__(114);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(112)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-7e93a230"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_songlist_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_7e93a230_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_songlist_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/songList/songlist.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] songlist.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7e93a230", Component.options)
  } else {
    hotAPI.reload("data-v-7e93a230", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 112:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 113:
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

// import {mapGetters} from 'vuex'
/* harmony default export */ __webpack_exports__["a"] = ({
  name: "songlist",
  data: function data() {
    return {
      songList: '',
      open: false,
      songName: '',
      loading: true,
      visible: false,
      lazyLen: 10,
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

  //
  // computed:{
  //   ...mapGetters([
  //     'currentSongList'
  //   ])
  // },
  methods: {
    openBottomSheet: function openBottomSheet(name) {
      this.open = true;
      this.songName = name;
    },
    toComment: function toComment() {
      // this.$store.commit('setCurrentSongList', this.songList);
      wx.navigateTo({ url: '../comment/main?id=' + this.songList.id + '&type=playlist' });
    },
    toPlaying: function toPlaying(el) {
      var id = el.mp.target.dataset.id;
      var index = el.mp.target.dataset.index;
      this.$store.commit('setPlaying', this.songList.tracks[index]);
      wx.navigateTo({ url: '../playing/main?id=' + id });
      this.$store.commit('setCurrentSongList', this.songList);
    }
  },
  mounted: function mounted() {
    var that = this;
    var Fly = __webpack_require__(3);
    var fly = new Fly();
    var id = this.$root.$mp.query.id;
    fly.get(that.$api + '/playlist/detail?id=' + id).then(function (res) {
      that.songList = res.data.playlist;
      that.loading = false;
      return;
    });
  }
});

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [(_vm.loading) ? _c('i-load-more', {
    attrs: {
      "loading": _vm.loading,
      "mpcomid": '11'
    }
  }) : _c('div', {
    staticClass: "songlist"
  }, [_c('img', {
    staticClass: "background",
    attrs: {
      "src": _vm.songList.coverImgUrl
    }
  }), _vm._v(" "), _c('div', [_c('div', {
    staticClass: "creatorMain"
  }, [_c('div', [_c('img', {
    staticClass: "songImg",
    attrs: {
      "src": _vm.songList.coverImgUrl
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "creatorRight"
  }, [_c('div', [_c('span', {
    staticClass: "songName"
  }, [_vm._v(_vm._s(_vm.songList.name))])]), _vm._v(" "), _c('div', {
    staticClass: "songCreator"
  }, [_c('img', {
    staticClass: "avatar",
    attrs: {
      "src": _vm.songList.creator.avatarUrl
    }
  }), _vm._v(" "), _c('span', {
    staticStyle: {
      "font-size": "12px",
      "color": "azure",
      "margin-left": "5px"
    }
  }, [_vm._v(_vm._s(_vm.songList.creator.nickname))]), _vm._v(" "), _c('i-icon', {
    attrs: {
      "type": "enter",
      "size": "14",
      "color": "azure",
      "mpcomid": '0'
    }
  })], 1)])]), _vm._v(" "), _c('div', {
    staticClass: "iconList"
  }, [_c('div', {
    staticClass: "iconItem"
  }, [_c('i-icon', {
    attrs: {
      "type": "message",
      "color": "white",
      "size": "24",
      "eventid": '0',
      "mpcomid": '1'
    },
    on: {
      "click": _vm.toComment
    }
  }), _c('span', [_vm._v(_vm._s(_vm.songList.commentCount))])], 1), _vm._v(" "), _c('div', {
    staticClass: "iconItem"
  }, [_c('i-icon', {
    attrs: {
      "type": "share",
      "color": "white",
      "size": "24",
      "mpcomid": '2'
    }
  }), _c('span', [_vm._v(_vm._s(_vm.songList.shareCount))])], 1), _vm._v(" "), _c('div', {
    staticClass: "iconItem"
  }, [_c('i-icon', {
    attrs: {
      "type": "success",
      "color": "white",
      "size": "24",
      "mpcomid": '3'
    }
  }), _c('span', [_vm._v("下载")])], 1), _vm._v(" "), _c('div', {
    staticClass: "iconItem"
  }, [_c('i-icon', {
    attrs: {
      "type": "editor",
      "color": "white",
      "size": "24",
      "mpcomid": '4'
    }
  }), _c('span', [_vm._v("多选")])], 1)])]), _vm._v(" "), _c('div', {
    staticClass: "songlistContain"
  }, [_c('div', {
    staticClass: "firstList",
    staticStyle: {
      "height": "100%",
      "padding": "0px"
    }
  }, [_c('div', {
    staticClass: "firstListL"
  }, [_c('i-icon', {
    attrs: {
      "type": "playon",
      "size": "26",
      "mpcomid": '5'
    }
  }), _vm._v(" "), _c('span', {
    staticStyle: {
      "font-size": "14px"
    }
  }, [_vm._v("播放全部(共" + _vm._s(_vm.songList.trackCount) + "首)")])], 1), _vm._v(" "), _c('div', {
    staticClass: "firstListR"
  }, [_c('i-icon', {
    attrs: {
      "type": "add",
      "size": "26",
      "mpcomid": '6'
    }
  }), _vm._v(" "), _c('span', {
    staticStyle: {
      "font-size": "14px"
    }
  }, [_vm._v("收藏(" + _vm._s(_vm.songList.subscribedCount) + ")")])], 1)]), _vm._v(" "), _c('div', [_c('i-cell-group', {
    attrs: {
      "eventid": '2',
      "mpcomid": '9'
    },
    on: {
      "tap": _vm.toPlaying
    }
  }, _vm._l((_vm.songList.tracks), function(item, index) {
    return _c('i-cell', {
      key: item.id,
      attrs: {
        "title": item.name,
        "label": item.ar[0].name + '-' + item.al.name,
        "data-id": item.id,
        "data-index": index,
        "mpcomid": '8-' + index
      }
    }, [_c('span', {
      slot: "icon"
    }, [_vm._v(_vm._s(index + 1))]), _vm._v(" "), _c('i-icon', {
      attrs: {
        "type": "switch",
        "data-id": item.id,
        "eventid": '1-' + index,
        "mpcomid": '7-' + index
      },
      on: {
        "click": function($event) {
          _vm.visible = !_vm.visible
        }
      },
      slot: "footer"
    })], 1)
  }))], 1)]), _vm._v(" "), _c('i-action-sheet', {
    attrs: {
      "visible": _vm.visible,
      "actions": _vm.actions,
      "eventid": '3',
      "mpcomid": '10'
    },
    on: {
      "click": function($event) {
        _vm.visible = !_vm.visible
      }
    }
  })], 1)], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-7e93a230", esExports)
  }
}

/***/ })

},[110]);
//# sourceMappingURL=main.js.map