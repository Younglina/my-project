import Vue from 'vue'
import App from './user'

const app = new Vue(App)
app.$mount()
export default {
  config: {
    usingComponents: {
      "i-tabs": "../../iview/tabs/index",
      "i-tab": "../../iview/tab/index",
      "i-cell-group": "../../iview/cell-group/index",
      "i-cell": "../../iview/cell/index"
    },
  }
}
