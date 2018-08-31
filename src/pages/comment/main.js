import Vue from 'vue'
import App from './comment'

const app = new Vue(App)
app.$mount()
export default {
  config: {
    usingComponents: {
      "i-cell-group": "../../iview/cell-group/index",
      "i-cell": "../../iview/cell/index",
      'i-icon': '../../iview/icon/index',
      "i-avatar": "../../iview/avatar/index"
    },
  }
}
