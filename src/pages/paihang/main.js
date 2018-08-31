import Vue from 'vue'
import App from './paihang'

const app = new Vue(App)
app.$mount()
export default {
  config: {
    navigationBarTitleText: '排行榜',
    usingComponents: {
      "i-load-more": "../../iview/load-more/index",
    },
  }
}
