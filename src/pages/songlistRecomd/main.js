import Vue from 'vue'
import App from './songlistRecomd'

const app = new Vue(App)
app.$mount()
export default {
  config: {
    navigationBarTitleText: '推荐歌单',
    usingComponents: {
      "i-load-more": "../../iview/load-more/index",
    },
  }
}
