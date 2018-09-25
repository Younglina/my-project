import Vue from 'vue'
import App from './App'
import store from './stores/stores'
Vue.config.productionTip = false
App.mpType = 'app'
const apiUrl = 'http://47.100.49.193:3000'
Vue.prototype.$api = apiUrl;
const Fly = require('flyio/dist/npm/wx');
let fly = new Fly();
Vue.prototype.$fly = fly;
Vue.prototype.$store = store;
const app = new Vue(App)
app.$mount()

export default {
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    pages: ['pages/userrecomd/main','pages/searchPage/main','pages/around/main','^pages/user/main'],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: '我的音乐',
      navigationBarTextStyle: 'black'
    },
    tabBar:{
      "selectedColor":"red",
      "color":"black",
      "list": [
        {
          "pagePath": "pages/userrecomd/main",
          "text": "发现",
          "iconPath": "/resource/img/wyy2.png",
          "selectedIconPath": "/resource/img/wyys2.png"
        },
        {
          "pagePath": "pages/searchPage/main",
          "text": "搜索",
          "iconPath": "/resource/img/music.png",
          "selectedIconPath": "/resource/img/musics.png"
        },
        {
          "pagePath": "pages/user/main",
          "text": "账号",
          "iconPath": "/resource/img/zhanghao.png",
          "selectedIconPath": "/resource/img/zhanghaos.png"
        }
      ]
    }
  }
}
