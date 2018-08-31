import Vue from 'vue'
import App from './serachPage'

const app = new Vue(App)
app.$mount()
export default {
  config: {
    usingComponents: {
      "i-cell-group": "../../iview/cell-group/index",
      "i-cell": "../../iview/cell/index",
      "i-spin": "../../iview/spin/index",
      'i-icon': '../../iview/icon/index',
      "i-action-sheet": "../../iview/action-sheet/index"
    },
  }
}
