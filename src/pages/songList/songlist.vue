<template>
  <div>
    <i-load-more v-if="loading" :loading="loading" />
  <div class="songlist" v-else="!loading">
    <img :src="songList.coverImgUrl" class="background">
    <div>
      <div class="creatorMain">
        <div>
          <img class="songImg" :src="songList.coverImgUrl">
        </div>
        <div class="creatorRight">
          <div><span class="songName">{{songList.name}}</span></div>
          <div class="songCreator">
              <img :src="songList.creator.avatarUrl" class="avatar">
            <span style="font-size: 12px;color:azure;margin-left: 5px">{{songList.creator.nickname}}</span>
            <i-icon type="enter"  size="14"  color="azure"/>
          </div>
        </div>
      </div>
      <div class="iconList">
        <div class="iconItem" >
          <i-icon type="message"color="white" size="24" @click="toComment"/><span>{{songList.commentCount}}</span>
        </div>
        <div  class="iconItem"><i-icon type="share" color="white" size="24"/><span>{{songList.shareCount}}</span></div>
        <div  class="iconItem"><i-icon type="success" color="white" size="24"/><span>下载</span></div>
        <div class="iconItem"><i-icon type="editor" color="white" size="24"/><span>多选</span></div>
      </div>
    </div>
      <div class="songlistContain">
          <div class="firstList"  style="height: 100%;padding: 0px">
            <div class="firstListL">
              <i-icon type="playon" size="26"/>
              <span style="font-size:14px;">播放全部(共{{songList.trackCount}}首)</span>
            </div>
            <div class="firstListR">
              <i-icon type="add" size="26"/>
              <span style="font-size:14px;">收藏({{songList.subscribedCount}})</span>
            </div>
          </div>
          <div>
            <i-cell-group @tap="toPlaying">
              <i-cell   v-for="(item,index) in songList.tracks" :key="item.id" :title="item.name" :label="item.ar[0].name +'-'+ item.al.name" :data-id="item.id" :data-index="index">
                <span slot="icon" >{{index+1}}</span>
                <i-icon slot="footer" type="switch" @click="visible=!visible" :data-id="item.id"/>
              </i-cell>
            </i-cell-group>
          </div>
      </div>
    <i-action-sheet :visible="visible" :actions="actions"  @click="visible=!visible"/>
  </div>
  </div>
</template>

<script>
  // import {mapGetters} from 'vuex'
  export default {
    name: "songlist",
    data(){
      return{
        songList:'',
        open:false,
        songName:'',
        loading:true,
        visible: false,
        actions:[
          {
            name: '下载',
            icon: 'success',
          },
          {
            name: '分享',
            icon: 'share',
            openType: 'share'
          },
          {
            name: '删除',
            icon: 'trash',
          }
        ]
      }
    },
    //
    // computed:{
    //   ...mapGetters([
    //     'currentSongList'
    //   ])
    // },
    methods:{
      openBottomSheet(name){
        this.open = true;
        this.songName = name;
      },
      goback(){
        wx.navigateBack()
      },
      toComment(){
        // this.$store.commit('setCurrentSongList', this.songList);
        wx.navigateTo({url:'../comment/main?id='+this.songList.id})
      },
      toPlaying(el){
        let id = el.mp.target.dataset.id;
        let index = el.mp.target.dataset.index;
        this.$store.commit('setPlaying', this.songList.tracks[index])
        wx.navigateTo({url:'../playing/main?id='+id})
        this.$store.commit('setCurrentSongList', this.songList);
      }
    },
    mounted(){
      let that = this;
      const Fly = require('flyio/dist/npm/wx');
      let fly = new Fly();
      fly.get(that.$api+'/playlist/detail?id='+this.$store.state.songListId).then(res=>{
        that.songList = res.data.playlist;
        that.loading=false;
        return;
      })
      // if(this.$route.params.id){
      //   this.$axios.get(this.$api+'/playlist/detail?id='+this.$route.params.id).then(res=>{
      //     that.songList = res.data.playlist;
      //     that.loading=true;
      //     return;
      //   })
      // }
      //
      // if(this.currentSongList && this.currentSongList.tracks){
      //   this.loading=true;
      //   this.songList = this.currentSongList;
      //   return;
      // }
    }
  }
</script>

<style scoped>
  .songlist,.top,.iconList,.songCreator,.creatorMain,.creatorRight,.iconItem,.firstList,.firstListR,.firstListL,.btmSheet{
    display: flex;
  }
  .songlist,.creatorRight,.creator,.iconItem{
    flex-direction: column;
  }
  .songlist,.songlistContain{
    height: 100%;
  }
  .firstList,.firstListR,.firstListL, .iconItem,.songCreator{
    align-items: center;
  }
  .avatar{
    width:30px;
    height:30px;
    border-radius:50%
  }
  .songlistContain{
    background-color: white;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
  .iconList,.top,.creatorMain{
    justify-content: space-around;
  }
  .firstList{
    justify-content: space-between;
  }
  .firstListL{
    padding-left: 10px;
  }
  .firstListR{
    border-top-right-radius: 10px;
   background-color:red;
    padding: 8px 16px;
    color: white;
  }
  .top{
    width: 100%;
    color: white;
    padding: 0 10px;
  }
  .iconList{
    margin-bottom: 10px;
  }
  .top i{
    font-size: 30px;
  }
  .creatorMain{
    padding: 16px;
  }

  .iconItem{
    color:white;
  }
.iconItem span{
  font-size: 12px;
}
  .songImg{
    width: 100px;
    height: 100px;
    border-radius: 3px;
  }
  .songCreator{
    margin-top: 20px;
  }
  .creatorRight{
    justify-content: center;
    padding: 0 16px;
  }
  .songName{
    font-size: 16px;
    color:white;
    font-weight: bold;
  }
  .background{
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
    opacity: 0.6;
    filter: blur(30px);
  }
  .btmSheet{
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
  .btmItem{
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
  }

  .btmIcon{
    margin-top: 5px;
    margin-right: 10px;
  }
</style>
