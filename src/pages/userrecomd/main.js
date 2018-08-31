import Vue from 'vue'
import App from './indexPage'

const app = new Vue(App)
app.$mount()
export default {
  config: {
    usingComponents: {
      'i-icon': '../../iview/icon/index',
      "i-tabs": "../../iview/tabs/index",
      "i-tab": "../../iview/tab/index"
    },
  }
}
