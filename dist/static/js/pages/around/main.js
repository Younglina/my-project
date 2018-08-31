global.webpackJsonp([10],{

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__around__ = __webpack_require__(38);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__around__["a" /* default */]);
app.$mount();
/* harmony default export */ __webpack_exports__["default"] = ({
  config: {}
});

/***/ }),

/***/ 38:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_around_vue__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_2bd42490_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_around_vue__ = __webpack_require__(49);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(39)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-2bd42490"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_around_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_2bd42490_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_around_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\around\\around.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] around.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2bd42490", Component.options)
  } else {
    hotAPI.reload("data-v-2bd42490", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 39:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__);


//
//
//
//
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
  name: "around",
  data: function data() {
    return {
      markers: [],
      latitude: '',
      longitude: '',
      placeData: {},
      wxMarkerData: []
    };
  },

  methods: {
    makertap: function makertap(e) {
      var that = this;
      var id = e.mp.markerId;
      console.log(e);
      that.showSearchInfo(that.wxMarkerData, id);
    },
    showSearchInfo: function showSearchInfo(data, i) {
      var that = this;
      that.$set(that.placeData, 'title', '名称：' + data[i].title);
      that.$set(that.placeData, 'address', '地址：' + data[i].address);
      that.$set(that.placeData, 'telephone', '电话：' + data[i].telephone);
    },
    callPhone: function callPhone(num) {
      wx.makePhoneCall({
        phoneNumber: num
      });
    }
  },
  onLoad: function onLoad() {
    /**
     * 百度地图微信小程序API类
     *
     * @class
     */
    var BMapWX = function () {

      /**
       * 百度地图微信小程序API类
       *
       * @constructor
       */
      function BMapWX(param) {
        __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, BMapWX);

        this.ak = param["ak"];
      }

      /**
       * 使用微信接口进行定位
       *
       * @param {string} type 坐标类型
       * @param {Function} success 成功执行
       * @param {Function} fail 失败执行
       * @param {Function} complete 完成后执行
       */


      __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(BMapWX, [{
        key: 'getWXLocation',
        value: function getWXLocation(type, success, fail, complete) {
          type = type || 'gcj02', success = success || function () {};
          fail = fail || function () {};
          complete = complete || function () {};
          wx.getLocation({
            type: type,
            success: success,
            fail: fail,
            complete: complete
          });
        }

        /**
         * POI周边检索
         *
         * @param {Object} param 检索配置
         * 参数对象结构可以参考
         * http://lbsyun.baidu.com/index.php?title=webapi/guide/webservice-placeapi
         */

      }, {
        key: 'search',
        value: function search(param) {
          var that = this;
          param = param || {};
          var searchparam = {
            query: param["query"] || '生活服务$美食&酒店',
            scope: param["scope"] || 1,
            filter: param["filter"] || '',
            coord_type: param["coord_type"] || 2,
            page_size: param["page_size"] || 10,
            page_num: param["page_num"] || 0,
            output: param["output"] || 'json',
            ak: that.ak,
            sn: param["sn"] || '',
            timestamp: param["timestamp"] || '',
            radius: param["radius"] || 2000,
            ret_coordtype: 'gcj02ll'
          };
          var otherparam = {
            iconPath: param["iconPath"],
            iconTapPath: param["iconTapPath"],
            width: param["width"],
            height: param["height"],
            alpha: param["alpha"] || 1,
            success: param["success"] || function () {},
            fail: param["fail"] || function () {}
          };
          var type = 'gcj02';
          var locationsuccess = function locationsuccess(result) {
            searchparam["location"] = result["latitude"] + ',' + result["longitude"];
            wx.request({
              url: 'https://api.map.baidu.com/place/v2/search',
              data: searchparam,
              header: {
                "content-type": "application/json"
              },
              method: 'GET',
              success: function success(data) {
                var res = data["data"];
                if (res["status"] === 0) {
                  var poiArr = res["results"];
                  // outputRes 包含两个对象，
                  // originalData为百度接口返回的原始数据
                  // wxMarkerData为小程序规范的marker格式
                  var outputRes = {};
                  outputRes["originalData"] = res;
                  outputRes["wxMarkerData"] = [];
                  for (var i = 0; i < poiArr.length; i++) {
                    outputRes["wxMarkerData"][i] = {
                      id: i,
                      latitude: poiArr[i]["location"]["lat"],
                      longitude: poiArr[i]["location"]["lng"],
                      title: poiArr[i]["name"],
                      iconPath: otherparam["iconPath"],
                      iconTapPath: otherparam["iconTapPath"],
                      address: poiArr[i]["address"],
                      telephone: poiArr[i]["telephone"],
                      alpha: otherparam["alpha"],
                      width: otherparam["width"],
                      height: otherparam["height"]
                    };
                  }
                  otherparam.success(outputRes);
                } else {
                  otherparam.fail({
                    errMsg: res["message"],
                    statusCode: res["status"]
                  });
                }
              },
              fail: function fail(data) {
                otherparam.fail(data);
              }
            });
          };
          var locationfail = function locationfail(result) {
            otherparam.fail(result);
          };
          var locationcomplete = function locationcomplete(result) {};
          if (!param["location"]) {
            that.getWXLocation(type, locationsuccess, locationfail, locationcomplete);
          } else {
            var longitude = param.location.split(',')[1];
            var latitude = param.location.split(',')[0];
            var errMsg = 'input location';
            var res = {
              errMsg: errMsg,
              latitude: latitude,
              longitude: longitude
            };
            locationsuccess(res);
          }
        }

        /**
         * sug模糊检索
         *
         * @param {Object} param 检索配置
         * 参数对象结构可以参考
         * http://lbsyun.baidu.com/index.php?title=webapi/place-suggestion-api
         */

      }, {
        key: 'suggestion',
        value: function suggestion(param) {
          var that = this;
          param = param || {};
          var suggestionparam = {
            query: param["query"] || '',
            region: param["region"] || '全国',
            city_limit: param["city_limit"] || false,
            output: param["output"] || 'json',
            ak: that.ak,
            sn: param["sn"] || '',
            timestamp: param["timestamp"] || '',
            ret_coordtype: 'gcj02ll'
          };
          var otherparam = {
            success: param["success"] || function () {},
            fail: param["fail"] || function () {}
          };
          wx.request({
            url: 'https://api.map.baidu.com/place/v2/suggestion',
            data: suggestionparam,
            header: {
              "content-type": "application/json"
            },
            method: 'GET',
            success: function success(data) {
              var res = data["data"];
              if (res["status"] === 0) {
                otherparam.success(res);
              } else {
                otherparam.fail({
                  errMsg: res["message"],
                  statusCode: res["status"]
                });
              }
            },
            fail: function fail(data) {
              otherparam.fail(data);
            }
          });
        }

        /**
         * rgc检索（坐标->地点描述）
         *
         * @param {Object} param 检索配置
         * 参数对象结构可以参考
         * http://lbsyun.baidu.com/index.php?title=webapi/guide/webservice-geocoding
         */

      }, {
        key: 'regeocoding',
        value: function regeocoding(param) {
          var that = this;
          param = param || {};
          var regeocodingparam = {
            coordtype: param["coordtype"] || 'gcj02ll',
            pois: param["pois"] || 0,
            output: param["output"] || 'json',
            ak: that.ak,
            sn: param["sn"] || '',
            timestamp: param["timestamp"] || '',
            ret_coordtype: 'gcj02ll'
          };
          var otherparam = {
            iconPath: param["iconPath"],
            iconTapPath: param["iconTapPath"],
            width: param["width"],
            height: param["height"],
            alpha: param["alpha"] || 1,
            success: param["success"] || function () {},
            fail: param["fail"] || function () {}
          };
          var type = 'gcj02';
          var locationsuccess = function locationsuccess(result) {
            regeocodingparam["location"] = result["latitude"] + ',' + result["longitude"];
            wx.request({
              url: 'https://api.map.baidu.com/geocoder/v2/',
              data: regeocodingparam,
              header: {
                "content-type": "application/json"
              },
              method: 'GET',
              success: function success(data) {
                var res = data["data"];
                if (res["status"] === 0) {
                  var poiObj = res["result"];
                  // outputRes 包含两个对象，
                  // originalData为百度接口返回的原始数据
                  // wxMarkerData为小程序规范的marker格式
                  var outputRes = {};
                  outputRes["originalData"] = res;
                  outputRes["wxMarkerData"] = [];
                  outputRes["wxMarkerData"][0] = {
                    id: 0,
                    latitude: result["latitude"],
                    longitude: result["longitude"],
                    address: poiObj["formatted_address"],
                    iconPath: otherparam["iconPath"],
                    iconTapPath: otherparam["iconTapPath"],
                    desc: poiObj["sematic_description"],
                    business: poiObj["business"],
                    alpha: otherparam["alpha"],
                    width: otherparam["width"],
                    height: otherparam["height"]
                  };
                  otherparam.success(outputRes);
                } else {
                  otherparam.fail({
                    errMsg: res["message"],
                    statusCode: res["status"]
                  });
                }
              },
              fail: function fail(data) {
                otherparam.fail(data);
              }
            });
          };
          var locationfail = function locationfail(result) {
            otherparam.fail(result);
          };
          var locationcomplete = function locationcomplete(result) {};
          if (!param["location"]) {
            that.getWXLocation(type, locationsuccess, locationfail, locationcomplete);
          } else {
            var longitude = param.location.split(',')[1];
            var latitude = param.location.split(',')[0];
            var errMsg = 'input location';
            var res = {
              errMsg: errMsg,
              latitude: latitude,
              longitude: longitude
            };
            locationsuccess(res);
          }
        }
      }]);

      return BMapWX;
    }();

    var that = this;
    // 新建百度地图对象
    var BMap = new BMapWX({
      ak: 'v8NzHvccct7VPDVRq0lUZmGjAfEKBIEh'
    });
    var fail = function fail(data) {
      console.log(data);
    };
    var success = function success(data) {
      that.wxMarkerData = data.wxMarkerData;
      that.markers = data.wxMarkerData;
      that.latitude = data.wxMarkerData[0].latitude;
      that.longitude = data.wxMarkerData[0].longitude;
    };
    // 发起POI检索请求
    BMap.search({
      "query": '酒店',
      fail: fail,
      success: success,
      // 此处需要在相应路径放置图片文件
      iconPath: '../../resource/img/marker_red.png',
      // 此处需要在相应路径放置图片文件
      iconTapPath: '../../resource/img/marker_red.png'
    });
  }
});

/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "map_container"
  }, [_c('map', {
    staticClass: "map",
    attrs: {
      "id": "map",
      "longitude": _vm.longitude,
      "latitude": _vm.latitude,
      "scale": "14",
      "show-location": "true",
      "markers": _vm.markers,
      "eventid": '0'
    },
    on: {
      "markertap": _vm.makertap
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "place_info"
  }, [_c('p', [_vm._v(_vm._s(_vm.placeData.title))]), _vm._v(" "), _c('p', [_vm._v(_vm._s(_vm.placeData.address))]), _vm._v(" "), _c('p', {
    attrs: {
      "eventid": '1'
    },
    on: {
      "click": function($event) {
        _vm.callPhone(_vm.placeData.telephone)
      }
    }
  }, [_vm._v(_vm._s(_vm.placeData.telephone))])], 1)])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-2bd42490", esExports)
  }
}

/***/ })

},[37]);
//# sourceMappingURL=main.js.map