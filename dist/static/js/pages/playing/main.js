global.webpackJsonp([2],{

/***/ 100:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_better_scroll__ = __webpack_require__(102);
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["a"] = ({
  props: {
    probeType: {
      type: Number,
      default: 1
    },
    click: {
      type: Boolean,
      default: true
    },
    data: {
      type: Array,
      default: null
    },
    listenScroll: {
      type: Boolean,
      default: false
    },
    pullup: {
      type: Boolean,
      default: false
    },
    refreshDelay: {
      type: Number,
      default: 20
    }
  },
  mounted: function mounted() {
    var _this2 = this;

    setTimeout(function () {
      _this2._initScroll();
    });
  },

  methods: {
    _initScroll: function _initScroll() {
      var _this3 = this;

      if (!this.$refs.wrapper) {
        return;
      }
      this.scroll = new __WEBPACK_IMPORTED_MODULE_0_better_scroll__["a" /* default */](this.$refs.wrapper, {
        probeType: this.probeType,
        click: this.click
      });

      if (this.listenScroll) {
        var _this = this;
        this.scroll.on('scroll', function (pos) {
          _this.$emit('scroll', pos);
        });
      }
      if (this.pullup) {
        this.scroll.on('scrollEnd', function () {
          if (_this3.scroll.y <= _this3.scroll.maxScrollY + 50) {
            _this3.$emit('scrollToEnd');
          }
        });
      }
    },
    enable: function enable() {
      this.scroll && this.scroll.enable();
    },
    disable: function disable() {
      this.scroll && this.scroll.disable();
    },
    refresh: function refresh() {
      this.scroll && this.scroll.refresh();
    },
    scrollTo: function scrollTo() {
      this.scroll && this.scroll.scrollTo.apply(this.scroll, arguments);
    },
    scrollToElement: function scrollToElement() {
      this.scroll && this.scroll.scrollToElement.apply(this.scroll, arguments);
    }
  },
  watch: {
    data: function data() {
      var _this4 = this;

      setTimeout(function () {
        _this4.refresh();
      }, this.refreshDelay);
    }
  }
});

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    ref: "wrapper"
  }, [_vm._t("default", null, {
    mpcomid: '0'
  })], 2)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-2e0da332", esExports)
  }
}

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "main"
  }, [_c('div', {
    staticClass: "lrcMain"
  }, [_c('div', {
    staticClass: "background"
  }, [_c('div', {
    staticClass: "filter"
  }), _vm._v(" "), (_vm.currentPlaying.al) ? _c('img', {
    attrs: {
      "src": _vm.currentPlaying.al.picUrl,
      "width": "100%",
      "height": "100%"
    }
  }) : _c('img', {
    attrs: {
      "src": _vm.currentPlaying.song.album.blurPicUrl,
      "width": "100%",
      "height": "100%"
    }
  })])]), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (!_vm.showImg),
      expression: "!showImg"
    }],
    staticClass: "rotateImg",
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": function($event) {
        _vm.showImg = !_vm.showImg
      }
    }
  }, [(_vm.currentPlaying.al) ? _c('image', {
    staticClass: "musicImg",
    attrs: {
      "src": _vm.currentPlaying.al.picUrl
    }
  }) : _c('image', {
    staticClass: "musicImg",
    attrs: {
      "src": _vm.currentPlaying.song.album.blurPicUrl
    }
  })]), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.showImg),
      expression: "showImg"
    }],
    staticClass: "playMain",
    attrs: {
      "eventid": '1'
    },
    on: {
      "click": function($event) {
        $event.stopPropagation();
        _vm.showImg = !_vm.showImg
      }
    }
  }, [_c('div', {
    ref: "lyricList",
    staticClass: "lyric-wrapper"
  }, [_c('div', {
    staticClass: "lyric"
  }, _vm._l((_vm.currentLyric.lines), function(line, index) {
    return _c('p', {
      key: index,
      ref: "lyricLine",
      refInFor: true,
      staticClass: "text",
      class: {
        'current': _vm.currentLineNum === index
      }
    }, [_vm._v(_vm._s(line.txt))])
  }))]), _vm._v(" "), _c('audio', {
    ref: "audio",
    attrs: {
      "autoplay": "",
      "loop": ""
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "lrcDiv"
  }, [_c('i-progress', {
    attrs: {
      "percent": "25",
      "hide-info": "",
      "mpcomid": '0'
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "playControl"
  }, [_c('i-icon', {
    attrs: {
      "type": "message",
      "color": "white",
      "size": "24",
      "eventid": '2',
      "mpcomid": '1'
    },
    on: {
      "click": _vm.toComment
    }
  }), _vm._v(" "), _c('i-icon', {
    attrs: {
      "type": "return",
      "size": "24",
      "mpcomid": '2'
    }
  }), _vm._v(" "), _c('i-icon', {
    attrs: {
      "type": "playon",
      "size": "24",
      "mpcomid": '3'
    }
  }), _vm._v(" "), _c('i-icon', {
    attrs: {
      "type": "enter",
      "size": "24",
      "mpcomid": '4'
    }
  }), _vm._v(" "), _c('i-icon', {
    attrs: {
      "type": "other",
      "size": "24",
      "eventid": '3',
      "mpcomid": '5'
    },
    on: {
      "click": function($event) {
        $event.stopPropagation();
        _vm.openBottomSheet($event)
      }
    }
  })], 1)], 1)])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-22b36e4e", esExports)
  }
}

/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__playing__ = __webpack_require__(95);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__playing__["a" /* default */]);
app.$mount();
/* harmony default export */ __webpack_exports__["default"] = ({
  config: {
    usingComponents: {
      "i-progress": "../../iview/progress/index",
      "i-icon": "../../iview/icon/index",
      "i-action-sheet": "../../iview/action-sheet/index"
    }
  }
});

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_playing_vue__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_22b36e4e_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_playing_vue__ = __webpack_require__(104);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(96)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-22b36e4e"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_playing_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_22b36e4e_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_playing_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/playing/playing.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] playing.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-22b36e4e", Component.options)
  } else {
    hotAPI.reload("data-v-22b36e4e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 96:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lyric_parser__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lyric_parser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lyric_parser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_scroll__ = __webpack_require__(99);
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
  name: "playing",
  data: function data() {
    return {
      currentLyric: [],
      currentLineNum: 0,
      currentPlaying: '',
      playing: true,
      showImg: true,
      playIcon: 'play_circle_outline',
      open: false
    };
  },

  components: {
    Scroll: __WEBPACK_IMPORTED_MODULE_1__components_scroll__["a" /* default */]
  },
  onLoad: function onLoad() {
    var that = this;
    that.currentPlaying = this.$store.state.currentPlaying;
    var id = this.$root.$mp.query.id;
    this.$fly.all([this.$fly.get(this.$api + '/music/url?id=' + id), this.$fly.get(this.$api + '/lyric?id=' + id)]).then(this.$fly.spread(function (urlRes, lyricRes) {
      if (urlRes.data.msg != "Cheating") {
        that.$refs.audio.src = urlRes.data.data[0].url;
      }
      that.currentLyric = new __WEBPACK_IMPORTED_MODULE_0_lyric_parser___default.a(lyricRes.data.lrc.lyric, that.handleLyric);
      // that.currentLyric.play();
      // that.currentLineNum = 0;
      // that.$refs.lyricList.scrollTo(0, 0, 1000);
    }));
  },

  methods: {
    toComment: function toComment() {
      var that = this;
      // this.$store.commit('setCurrentSongList', this.songList);
      wx.navigateTo({ url: '../comment/main?id=' + that.currentPlaying.id + '&type=music' });
    },
    togglePlay: function togglePlay() {
      this.playIcon = this.playing ? 'pause_circle_outline' : 'play_circle_outline';
      this.playing = !this.playing;
      this.$refs.audio.onpause = true;
    },
    openBottomSheet: function openBottomSheet() {
      this.open = true;
    },
    closeBottomSheet: function closeBottomSheet() {
      this.open = false;
    },
    handleLyric: function handleLyric(_ref) {
      var lineNum = _ref.lineNum,
          txt = _ref.txt;

      this.currentLineNum = lineNum;
      // 若当前行大于5,开始滚动,以保歌词显示于中间位置
      if (lineNum > 5) {
        var lineEl = this.$refs.lyricLine[lineNum - 5];
        // 结合better-scroll，滚动歌词
        this.$refs.lyricList.scrollToElement(lineEl, 1000);
      } else {
        this.$refs.lyricList.scrollToElement(0, 0, 1000);
      }
    }
  }
});

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_scroll_vue__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_2e0da332_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_scroll_vue__ = __webpack_require__(103);
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
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_scroll_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_2e0da332_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_scroll_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/scroll.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] scroll.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2e0da332", Component.options)
  } else {
    hotAPI.reload("data-v-2e0da332", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ })

},[94]);
//# sourceMappingURL=main.js.map