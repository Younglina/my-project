<template>
  <div>
  <i-load-more v-if="loading" :loading="loading" />
  <div class="rank" v-else="!loading">
    <div class="rankMain" >
      <span>官方榜</span>
      <div>
        <div @click='toPlayListDetail(ids.bs)'><rank-comp :img="imgs.bs" :items="bs"></rank-comp></div>
        <div @click='toPlayListDetail(ids.xg)'><rank-comp :img="imgs.xg" :items="xg"></rank-comp></div>
        <div @click='toPlayListDetail(ids.yc)'><rank-comp :img="imgs.yc" :items="yc"></rank-comp></div>
        <div @click='toPlayListDetail(ids.rg)'> <rank-comp :img="imgs.rg" :items="rg"></rank-comp></div>
      </div>
    </div>
    <div>
      <span>全球榜</span>
      <div class="rankDiv">
        <div class="rankInner">
          <div><img :src="imgs.sc" /><span>说唱TOP榜</span></div>
          <div><img :src="imgs.dy" /><span>云音乐电音榜</span></div>
          <div><img :src="imgs.xh" /><span>云音乐嘻哈榜</span></div>
        </div>
        <div class="rankInner">
          <div><img :src="imgs.douy" /><span>抖音排行榜</span></div>
          <div><img :src="imgs.acg" /><span>云音乐ACG榜</span></div>
          <div><img :src="imgs.gd" /><span>云音乐国电榜</span></div>
        </div>
        <div class="rankInner">
          <div><img :src="imgs.dj" /><span>电竞音乐榜</span></div>
          <div><img :src="imgs.mg" /><span>美国Billboard周榜</span></div>
          <div><img :src="imgs.ituns" />iTunes榜</div>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
  import RankComp from '../../components/rank-comp'
  export default {
    name: "paihang",
    data(){
      return {
        loading:true,
        bs:'',
        sg:'',
        yc:'',
        rg:'',
        ids:{bs:'',
          sg:'',
          yc:'',
          rg:'',},
        imgs:{
          bs:'../../resource/img/bs.jpg',
          xg:'../../resource/img/xg.jpg',
          yc:'../../resource/img/yc.jpg',
          rg:'../../resource/img/rg.jpg',
          sc:"../../resource/img/sc.jpg",
          dy:"../../resource/img/dy.jpg",
          xh:"../../resource/img/xh.jpg",
          douy:"../../resource/img/douy.jpg",
          acg:"../../resource/img/acg.jpg",
          gd:"../../resource/img/gd.jpg",
          dj:"../../resource/img/dj.jpg",
          mg:"../../resource/img/mg.jpg",
          ituns:"../../resource/img/ituns.jpg",
          uk:"../../resource/img/uk.jpg",
        }
      }
    },
    components:{
      RankComp
    },
    methods:{
      toPlayListDetail(id){
        // this.$store.commit('setSongListId',id);
        var url = '../songList/main?id='+id;
        wx.navigateTo({
          url
        })
      },
    },
    mounted(){
      this.$fly.all([
        this.$fly.get(this.$api+"/top/list?idx=3"),
        this.$fly.get(this.$api+"/top/list?idx=0"),
        this.$fly.get(this.$api+"/top/list?idx=2"),
        this.$fly.get(this.$api+"/top/list?idx=1")
      ]).then(this.$fly.spread((bs,xg,yc,rg)=>{
        console.log(bs.data)
        this.bs = bs.data.playlist.tracks.slice(0,3);
        this.ids.bs=bs.data.playlist.id;
        this.xg = xg.data.playlist.tracks.slice(0,3);
        this.ids.xg=xg.data.playlist.id;
        this.yc = yc.data.playlist.tracks.slice(0,3);
        this.ids.yc=yc.data.playlist.id;
        this.rg = rg.data.playlist.tracks.slice(0,3);
        this.ids.rg=rg.data.playlist.id;
        // this.$store.commit('setRank',[bs.data.playlist,xg.data.playlist,yc.data.playlist,rg.data.playlist]);
        this.loading = false;
      }))
    }
  }
</script>

<style scoped>
  img{
    border-radius: 3px;
    width: 100px;
  }
  .rank{
    height: 100%;
    overflow-y: auto;
  }
  .rankInner{
    display: flex;
    justify-content: space-between;
    margin: 5px;
  }
  .rankMain{
    padding:0 5px;
  }
  .rankInner > div{
    display: flex;
    flex-direction: column;
    font-size: 12px;
  }
  span{
    font-size: 12px;
    font-weight: bold;
  }
  image{
    width: 100px;
    height: 100px;
  }
</style>
