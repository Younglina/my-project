import Vue from 'vue'
import App from './newsong'

const app = new Vue(App)
app.$mount()
export default {
  config: {
    navigationBarTitleText: '每日推荐',
    usingComponents: {
      "i-load-more": "../../iview/load-more/index",
      "i-cell-group": "../../iview/cell-group/index",
      "i-cell": "../../iview/cell/index",
      'i-icon': '../../iview/icon/index',
      "i-action-sheet": "../../iview/action-sheet/index",
    },
  }
}
