<template>
  <div>
    <i-cell-group>
      <i-cell v-for="item in musicList" :key="item.key" :title="item.words" @click="item.func">
        <img class="iconImg" :src="item.url" slot="icon" />
      </i-cell>
    </i-cell-group>
  </div>
</template>

<script>
  export default {
    name: "UserMesg",
    data() {
      return {
        musicList: [{
            url: "../../resource/img/xx.png",
            words: "我的消息"
          },
          {
            url: "../../resource/img/vip.png",
            words: "会员中心"
          },
          {
            url: "../../resource/img/gwc.png",
            words: "商城"
          },
          {
            url: "../../resource/img/zhanghao.png",
            words: "我的好友"
          },
          {
            url: "../../resource/img/fj.png",
            words: "附近的人",
            func: this.toAround
          },
          {
            url: "../../resource/img/sb.png",
            words: "游戏推荐"
          },
          {
            url: "../../resource/img/sys.png",
            words: "扫一扫",
            func: this.scan
          },
          {
            url: "../../resource/img/yf.png",
            words: "个性换肤"
          }
        ]
      };
    },
    methods:{
        scan() {
        wx.scanCode({
          success: res => {
            wx.showToast({
              title: res.result,
              icon: "success",
              duration: 2000
            });
          }
        });
      },
       toAround() {
        wx.navigateTo({
          url: "../../around/main"
        });
      }
    }
  };
</script>

<style scoped>
  .iconImg{
    width: 20px;
    height: 20px;
    margin-right: 10px;
  }
</style>
