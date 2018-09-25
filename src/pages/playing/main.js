import Vue from 'vue'
import App from './playing'

const app = new Vue(App)
app.$mount()
export default {
  config: {
    usingComponents: {
      "i-progress": "../../iview/progress/index",
      "i-icon": "../../iview/icon/index",
      "i-action-sheet": "../../iview/action-sheet/index"
    },
  }
}
