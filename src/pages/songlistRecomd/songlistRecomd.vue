<template>
  <div style="height: 100%;">
    <div style="z-index: 101;background-color: white;display: flex;align-items: center;padding-left: 10px">
    </div>
    <div class="top">
      <div class="background">
        <div class="filter"></div>
        <!--<img :src="this.$store.state.playing.al.picUrl" width="100%" height="100%">-->
        <img :src="highquality.coverImgUrl" width="100%" height="100%">
      </div>
      <div class="topImg"><img :src="highquality.coverImgUrl" alt=""></div>
      <div class="topR">
        <div class="innerTopT">
          <span style="color: white;font-size: 16px;">精品歌单</span>
          <!--<mu-icon value="right"></mu-icon>-->
        </div>
        <div class="innerTopR">
          <span style="color: white;font-size: 14px;">{{highquality.name}}</span>
          <span style="color: darkgray;font-size: 12px;">{{highquality.copywriter}}</span>
        </div>
      </div>
    </div>
      <i-load-more v-if="loading" :loading="loading" />
    <div class="personalized" v-else="!loading">
      <div class="gdView" @click="toPlayListDetail">
        <div class="gdInnerView" v-for="item in playlists" :key="item.id" >
          <div class="playCountMain">
            <div class="playCount"><mu-icon value="headset"></mu-icon><span>{{item.playCount | formatData}}</span></div>
            <img class="innerImg" :src="item.coverImgUrl" :data-id="item.id"/></div>
          <span class="innerText">{{item.name}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "songlistPage",
    data(){
      return {
        playlists:'',
        highquality:'',
        loading:false,
      }
    },
    onLoad(){
       wx.setNavigationBarTitle({
      title: '推荐歌单'
    })
    },
    filters:{
      formatData(value){
        return  parseInt(value/10000) + '万';
      }
    },
    methods: {
      goback(){
        wx.navigateBack()
      },
      toPlayListDetail(e){
        let id =e.target.dataset.id
        wx.navigateTo({
          url: '../songList/main?id='+id,
        })
      },
    },
    mounted(){
      let that =this;
      this.$fly.get(this.$api+'/top/playlist').then(res=>{
        that.playlists = res.data.playlists;
      })
      setTimeout(
        ()=>{
          this.$fly.get(this.$api+'/top/playlist/highquality?limit=1').then(res=>{
            that.highquality = res.data.playlists[0];
            that.loading=false;
          })
        },500
      )

    }
  }
</script>

<style scoped>
  .gdView {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 5px;
  }

  .gdInnerView {
    display: flex;
    flex-direction: column;
    width: 49%;
  }

  .centerView i {
    color: red;
    border: solid 1px;
    border-radius: 40px;
    padding: 10px;
  }
  .innerImg {
    width: 100%;
    border-radius: 5px;
    height: 180px;
  }

  .innerView i{
    font-size: 18px;
  }
  .innerView span{
    font-size: 12px;
  }
  .innerText {
    font-size: 10px;
    margin-bottom: 10px;
  }
  .innerTopT{
    margin-bottom: 10px;
  }
  .personalized {
    height: 100%;
    overflow-y: auto;
    background-color: white;
  }
  .playCountMain{
    position: relative;
  }
  .playCount{
    position: absolute;
    right: 3px;
    top: 2px;
    color: white;
    font-size: 12px;
    display: flex;
    align-items: center;
  }
  .playCount i{
    font-size: 14px;
  }
  .top{
    display: flex;
    padding: 10px;
  }
  .topR{
    flex-grow: 1;
    margin-left: 10px;
  }
  .topImg img{
    width: 100px;
    height: 100px;
  }
  .topR,.innerTopR{
    display: flex;
    flex-direction: column;
  }
  .background{
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
    opacity: 0.6;
    filter: blur(30px);
  }
  .filter {
    position: absolute;
    width: 100%;
    height: 100%;
    background: black;
    opacity: 0.6;
  }
</style>
