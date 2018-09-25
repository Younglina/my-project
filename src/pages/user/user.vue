<template>
  <div>
    <div class="userdiv" :style="{backgroundImage:'url('+backgroundUrl+')'}">
      <div class="user">
        <image class="avatar" :src="avatarUrl"></image>
        <text class="nickname">{{nickname}}</text>
        <div class="fensi">
          <span class="flow">关注 17</span>
          <span>粉丝 12</span>
        </div>
      </div>
    </div>
    <div>
    <i-tabs :current="showTable" @change="handleChange">
      <i-tab key="userMusic" title="音乐"></i-tab>
      <i-tab key="userMesg" title="消息"></i-tab>
    </i-tabs>
    </div>
    <div>
      <UserMusic v-if="showTable==='userMusic'"></UserMusic>
      <UserMesg v-else-if="showTable==='userMesg'"></UserMesg>
    </div>
   
  </div>
</template>

<script>
import UserMusic from './pages/UserMusic'
import UserMesg from './pages/UserMesg'
  export default {
    name: "user",
    components:{ UserMusic,UserMesg },
    data() {
      return {
        backgroundUrl: "",
        avatarUrl: "",
        nickname: "",
        signature: "",
        showTable:"userMusic",
      };
    },
    onShow() {
      this.backgroundUrl = this.$store.state.userBaseInfo.backgroundUrl;
      this.avatarUrl = this.$store.state.userBaseInfo.avatarUrl;
      this.nickname = this.$store.state.userBaseInfo.nickname;
      this.signature = this.$store.state.userBaseInfo.signature;
    },
    methods: {
      handleChange(e){
        this.showTable = e.mp.detail.key
      },
    }
  };
</script>

<style scoped>
  .userdiv {
    display: flex;
    width: 100%;
    height: 220px;
    background-size: 100%;
  }
  
  .avatar {
    width: 70px;
    height: 70px;
    border-radius: 50px;
    margin: 0;
  }
  
  .nickname {
    color: white;
    font-size: 14px;
    margin-top: 10px;
  }
  
  .fensi {
    font-size: 12px;
    color: white;
  }
  
  .flow {
    padding-right: 10px;
  }
  
  .user {
    display: flex;
    flex-direction: column;
    text-align: left;
    margin-top: 50px;
    margin-left: 20px;
  }
 </style>
