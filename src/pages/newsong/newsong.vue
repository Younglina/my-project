<template>
  <div>
  <i-cell-group @tap="toPlaying">
    <i-cell  v-for="(item,index) in songList" :key="item.id" :title="item.name" :label="item.song.artists[0].name +'-'+ item.song.album.name" :data-id="item.id" :data-index="index">
      <span slot="icon" >{{index+1}}</span>
    </i-cell>
  </i-cell-group>
  </div>
</template>

<script>
  export default {
    name: "newsong",
    data(){
      return {
        songList:''
      }
    },
    onLoad(){
      let that = this;
      this.$fly.get(that.$api+'/personalized/newsong').then(res=>{
        that.songList = res.data.result;
      })
    },
    methods:{
      toPlaying(el){
        let id = el.mp.target.dataset.id;
        let index = el.mp.target.dataset.index;
        this.$store.commit('setPlaying', this.songList[index])
        wx.navigateTo({url:'../playing/main?id='+id})
        this.$store.commit('setCurrentSongList', this.songList);
      }
    }
  };
</script>

<style scoped>

</style>
