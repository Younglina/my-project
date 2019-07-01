global.webpackJsonp([4],{

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__indexPage__ = __webpack_require__(134);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__indexPage__["a" /* default */]);
app.$mount();
/* harmony default export */ __webpack_exports__["default"] = ({
  config: {
    usingComponents: {
      'i-icon': '../../iview/icon/index',
      "i-tabs": "../../iview/tabs/index",
      "i-tab": "../../iview/tab/index"
    }
  }
});

/***/ }),

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_indexPage_vue__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_5c489dfc_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_indexPage_vue__ = __webpack_require__(137);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(135)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-5c489dfc"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_indexPage_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_5c489dfc_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_indexPage_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/userrecomd/indexPage.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] indexPage.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5c489dfc", Component.options)
  } else {
    hotAPI.reload("data-v-5c489dfc", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 135:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 136:
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
  name: "music-recommed",
  data: function data() {
    return {
      recommendResource: [],
      personalizedNewsong: '',
      personalizedDJprogram: '',
      mvFirst: '',
      current: 0
    };
  },

  methods: {
    toPlayListDetail: function toPlayListDetail(id) {
      // this.$store.commit('setSongListId',id);
      var url = '../songList/main?id=' + id;
      wx.navigateTo({
        url: url
      });
    },
    toSonglistPage: function toSonglistPage() {
      wx.navigateTo({
        url: '../songlistRecomd/main'
      });
    },
    toNewSong: function toNewSong() {
      wx.navigateTo({
        url: '../newsong/main'
      });
    },
    toPlay: function toPlay(el) {
      var id = el.mp.target.dataset.id;
      var index = el.mp.target.dataset.index;
      if (id) {
        this.$store.commit('setPlaying', this.personalizedNewsong[index]);
        wx.navigateTo({
          url: '../playing/main?id=' + id
        });
      }
    },
    toRank: function toRank() {
      wx.navigateTo({
        url: '../paihang/main'
      });
    },
    goListPage: function goListPage() {
      this.$router.push({
        name: 'songListPage'
      });
    },
    handleChange: function handleChange(detail) {
      this.current = detail.key;
    }
  },
  onLoad: function onLoad() {
    wx.cloud.init({
      traceUser: true // 用户信息会显示在云开发控制台的用户面板中
    });
    console.log(111);
    wx.cloud.callFunction({
      name: 'test' // 云函数名称
    }).then(function (res) {
      console.log(res);
    }).catch(function (err) {
      console.error(err);
    });
  },
  created: function created() {
    var Fly = __webpack_require__(3);
    var fly = new Fly();
    var that = this;

    function getMvFist() {
      return fly.get(that.$api + '/mv/first');
    }

    function getNewSong() {
      return fly.get(that.$api + '/personalized/newsong');
    }

    function getRecomRes() {
      return fly.get(that.$api + '/personalized');
    }

    function getPersDj() {
      return fly.get(that.$api + '/personalized/djprogram');
    }
    this.$nextTick(function () {
      return (
        // fly.get(that.$api+'/personalized').then((res)=>{
        //   that.recommendResource = res.data.result.slice(0, 6).map(item=>{item.playCount=parseInt(item.playCount/10000) + '万';return item;});
        // })
        fly.all([getMvFist(), getNewSong(), getRecomRes(), getPersDj()]).then(fly.spread(function (mvF, NewS, RecomRes, PresDj) {
          that.mvFirst = mvF.data.data.slice(0, 6);
          that.personalizedNewsong = NewS.data.result.slice(0, 6);
          that.recommendResource = RecomRes.data.result.slice(0, 6).map(function (item) {
            item.playCount = parseInt(item.playCount / 10000) + '万';
            return item;
          });
          that.personalizedDJprogram = PresDj.data.result.slice(0, 6);
        }))
      );
    });
  }
});

/***/ }),

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticStyle: {
      "padding": "0 5px"
    }
  }, [_c('div', {
    staticClass: "carouselDiv"
  }, [_c('swiper', {
    attrs: {
      "indicator-dots": "",
      "indicator-color": "glay",
      "indicator-active-color": "red",
      "autoplay": "2000",
      "circular": ""
    }
  }, _vm._l((_vm.mvFirst), function(item, index) {
    return _c('block', {
      key: item.id
    }, [_c('swiper-item', {
      attrs: {
        "mpcomid": '0-' + index
      }
    }, [_c('img', {
      attrs: {
        "src": item.cover
      }
    })])], 1)
  }))], 1), _vm._v(" "), _c('div', {
    staticClass: "centerView"
  }, [_c('div', {
    staticClass: "innerView"
  }, [_c('div', [_c('i-icon', {
    staticClass: "micon",
    attrs: {
      "type": "activity",
      "size": "28",
      "color": "red",
      "eventid": '0',
      "mpcomid": '1'
    },
    on: {
      "click": _vm.toNewSong
    }
  })], 1), _vm._v(" "), _c('span', {
    staticClass: "iconSpan"
  }, [_vm._v("每日推荐")])]), _vm._v(" "), _c('div', {
    staticClass: "innerView"
  }, [_c('div', [_c('i-icon', {
    staticClass: "micon",
    attrs: {
      "type": "createtask",
      "size": "28",
      "color": "red",
      "eventid": '1',
      "mpcomid": '2'
    },
    on: {
      "click": _vm.toSonglistPage
    }
  })], 1), _vm._v(" "), _c('span', {
    staticClass: "iconSpan"
  }, [_vm._v("歌单")])]), _vm._v(" "), _c('div', {
    staticClass: "innerView"
  }, [_c('div', [_c('i-icon', {
    staticClass: "micon",
    attrs: {
      "type": "barrage",
      "size": "28",
      "color": "red",
      "eventid": '2',
      "mpcomid": '3'
    },
    on: {
      "click": _vm.toRank
    }
  })], 1), _vm._v(" "), _c('span', {
    staticClass: "iconSpan"
  }, [_vm._v("排行榜")])])]), _vm._v(" "), _c('div', {
    staticClass: "personalized"
  }, [_c('span', {
    staticClass: "perSpan"
  }, [_vm._v("推荐歌单>")]), _vm._v(" "), _c('div', {
    staticClass: "gdView"
  }, _vm._l((_vm.recommendResource), function(item, index) {
    return _c('div', {
      key: item.id,
      staticClass: "gdInnerView",
      attrs: {
        "id": item.id,
        "eventid": '3-' + index
      },
      on: {
        "click": function($event) {
          _vm.toPlayListDetail(item.id)
        }
      }
    }, [_c('div', {
      staticClass: "playCountMain"
    }, [_c('div', {
      staticClass: "playCount"
    }, [_c('i-icon', {
      attrs: {
        "type": "customerservice",
        "mpcomid": '4-' + index
      }
    }), _c('span', [_vm._v(_vm._s(item.playCount))])], 1), _vm._v(" "), _c('img', {
      staticClass: "innerImg",
      attrs: {
        "src": item.picUrl
      }
    })]), _vm._v(" "), _c('span', {
      staticClass: "innerText"
    }, [_vm._v(_vm._s(item.name))])])
  }))]), _vm._v(" "), _c('div', {
    staticClass: "personalized"
  }, [_c('span', {
    staticClass: "perSpan"
  }, [_vm._v("推荐新音乐 >")]), _vm._v(" "), _c('div', {
    staticClass: "gdView",
    attrs: {
      "eventid": '4'
    },
    on: {
      "click": _vm.toPlay
    }
  }, _vm._l((_vm.personalizedNewsong), function(item, index) {
    return _c('div', {
      key: item.id,
      staticClass: "gdInnerView"
    }, [_c('img', {
      staticClass: "innerImg",
      attrs: {
        "src": item.song.album.blurPicUrl,
        "data-id": item.id,
        "data-index": index
      }
    }), _vm._v(" "), _c('span', {
      staticClass: "innerText"
    }, [_vm._v(_vm._s(item.name))])])
  }))]), _vm._v(" "), _c('div', {
    staticClass: "personalized"
  }, [_c('span', {
    staticClass: "perSpan"
  }, [_vm._v("推荐节目>")]), _vm._v(" "), _c('div', {
    staticClass: "gdView"
  }, _vm._l((_vm.personalizedDJprogram), function(item, index) {
    return _c('div', {
      key: item.id,
      staticClass: "gdInnerView"
    }, [_c('div', [_c('img', {
      staticClass: "innerImg",
      attrs: {
        "src": item.picUrl
      }
    })]), _vm._v(" "), _c('span', {
      staticClass: "innerText"
    }, [_vm._v(_vm._s(item.name))])])
  }))])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-5c489dfc", esExports)
  }
}

/***/ })

},[133]);
//# sourceMappingURL=main.js.map