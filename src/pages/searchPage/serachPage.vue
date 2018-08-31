<template>
  <div>
    <div style="display: flex;padding: 5px 10px">
      <input auto-focus  v-model="searchValue" style="width: 100%;border-bottom:1px solid;"/>
      <i-icon type="search" @click="doSearch(searchValue)" size="16"></i-icon>
    </div>
    <div v-if="isSearch" style="height: 100%">
      <span style="font-size: 14px">热门搜索</span>
      <br>
      <span class="hotSearch"  v-for="(item,index) in hotSearch" :key="index" @click="doSearch(item.first)">{{item.first}}</span>
    </div>
    <div v-if="searchList" class="searchList">
      <i-cell-group>
        <i-cell v-for="(item,index) in searchList" :key="item.id" :title="item.name" :label="item.artists[0].name +'-'+ item.album.name">
          <span slot="icon">{{index+1}}</span>
          <i-icon slot="footer" type="switch" @click="visible=!visible"/>
        </i-cell>
      </i-cell-group>
      <i-action-sheet :visible="visible" :actions="actions"  @click="visible=!visible"/>
    </div>
  </div>
</template>

<script>
  export default {
    name: "search",
        onLoad(){
       wx.setNavigationBarTitle({
      title: '搜索'
    })
    },
    data(){
      return{
        searchValue:'',
        hotSearch:'',
        isSearch:true,
        searchList:[],
        visible:false,
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
    methods:{
      goback(){
        this.$router.go(-1)
      },
      // toPlay(index,id){
      //   this.$router.push({name:'playing',params:{id:id}});
      //   this.$store.dispatch('setCurrentSongList', this.songList);
      // },
      doSearch(value){
        let that = this;
        const Fly = require('flyio/dist/npm/wx');
        let fly = new Fly();
        if(this.searchValue || value){
        fly.get(this.$api+'/search?keywords='+value || this.searchValue).then(res=>{
          that.searchList = res.data.result.songs;
          that.isSearch =false;
        })
      }
      }
    },
    onShow(){
      this.isSearch=true;
      this.searchList=[];
      this.searchValue = '';
      const Fly = require('flyio/dist/npm/wx');
      let fly = new Fly();
      let that = this;
      fly.get(this.$api+'/search/hot').then(res=>{
        that.hotSearch = res.data.result.hots
      })
    }
  }
</script>

<style scoped>
  .hotSearch{
    border-radius: 36px;
    border: 1px solid silver;
    padding: 5px 10px;
    margin: 5px;
    display: inline-block;
    font-size:14px;
  }
  .hotSearch:hover{
    background-color: silver;
    color:white;
  }
  .hotItems{
    display: flex;
  }
  .searchList{
    height: 100%;
    overflow-y: auto;
  }
  .songlistName{
    flex-grow: 1;
  }
</style>
