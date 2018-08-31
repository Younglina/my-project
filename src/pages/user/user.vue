<template>
<div>
    <view class="userView" :style="{backgroundImage:'url('+backgroundUrl+')'}">
      <view class="user">
        <image class="avatar" :src="avatarUrl"></image>
        <text class="nickname">{{nickname}}</text>
      </view>
    </view>
    <view class='mid'>
      <block v-for="item in musicList" :key="item.id">
        <view class="page__bd-mid" @click='item.func'>
          <view class="page__bd-midImage center">
            <image :src='item.url' />
          </view>
          <view class="page__bd-midContent">
            <text class="page__bd-contenWords">{{item.words}}</text>
          </view>
        </view>
      </block>
    </view>
</div>
</template>

<script>
  export default {
    name: "user",
    data(){
      return {
        backgroundUrl:"",
        avatarUrl:"",
        nickname:"",
        signature:"",
        musicList: [{
          'url': '../../resource/img/xx.png',
          'words': '我的消息',
        }, {
          'url': '../../resource/img/vip.png',
          'words': '会员中心',
        }, {
          'url': '../../resource/img/gwc.png',
          'words': '商城',
        },
          {
            'url': '../../resource/img/zhanghao.png',
            'words': '我的好友',
          }, {
            'url': '../../resource/img/fj.png',
            'words': '附近的人',
            'func':this.toAround
          }, {
            'url': '../../resource/img/sb.png',
            'words': '游戏推荐',
          }, {
            'url': '../../resource/img/sys.png',
            'words': '扫一扫',
            'func':this.scan
          }, {
            'url': '../../resource/img/yf.png',
            'words': '个性换肤',
          }]
      }
    },
    onShow(){
      this.backgroundUrl=this.$store.state.userBaseInfo.backgroundUrl;
      this.avatarUrl=this.$store.state.userBaseInfo.avatarUrl;
      this.nickname=this.$store.state.userBaseInfo.nickname;
      this.signature=this.$store.state.userBaseInfo.signature;
    },
    methods:{
      scan(){
        wx.scanCode({
            success: (res) => {
              wx.showToast({
                title: res.result,
                icon: 'success',
                duration: 2000
              })
            }
          })
      },
      toAround(){
        wx.navigateTo({url:'../around/main'})
      }
    }
  };
</script>

<style scoped>

  .userView {
    display: flex;
    width: 100%;
    height: 200px;
    background-size: 100%;
    align-items: center;
    justify-content: center;
  }

  .avatar {
    width: 50px;
    height: 50px;
    border-radius: 50px;
    margin: 0 auto;
  }

  .nickname {
    color: white;
  }

  .user {
    display: flex;
    flex-direction: column;
    text-align: center;
  }

  .page__bd-mid {
    background-color: #fff;
    display: flex;
  }

  .page__bd-midImage {
    width: 110rpx;
    height: 110rpx;
  }

  .center {
    display: flex;
    align-items: center;
    justify-content: center;
  }


  .page__bd-midImage image {
    height: 40rpx;
    width: 40rpx;
  }

  .page__bd-midContent {
    font-size: 32rpx;
    box-sizing: border-box;
    line-height: 110rpx;
    width: 100%;
    border-bottom: 1rpx solid #e2e3e4;
    display: flex;
    color: #323233;
  }

  .lastList {
    border-bottom: 0rpx;
  }

  .page__bd-contenNum {
    margin-right: 52rpx;
    color: #979798;
  }

  .page__bd-contenNum .weui-cell__ft_in-access:after {
    top: 46rpx;
    right: -30rpx;
    height: 16rpx;
    width: 16rpx;
    border-color: E7E8E9;
  }

  .page__bd-mid:nth-child(1) {
    margin-top: 20rpx;
    margin-bottom: 20rpx;
  }

  .page__bd-mid:nth-child(5) {
    margin-top: 20rpx;
  }

  .btnLeave button {
    margin-top: 20rpx;
    background-color: #fff;
    border-radius: 0;
  }

  .btnLeave button:after {
    display: none;
  }

</style>
