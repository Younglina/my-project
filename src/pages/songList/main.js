import Vue from 'vue'
import App from './songlist'

const app = new Vue(App)
app.$mount()
export default {
  config: {
    navigationBarTitleText: '歌单详情',
    usingComponents: {
      "i-cell-group": "../../iview/cell-group/index",
      "i-cell": "../../iview/cell/index",
      'i-icon': '../../iview/icon/index',
      "i-action-sheet": "../../iview/action-sheet/index",
      "i-load-more": "../../iview/load-more/index",
    },
  }
}
