<template>
  <div class="item">
    <image class="rankImg" :src="img"></image>
    <div class="songs">
      <span class="songItem" v-for="(item,index) in items">{{index+1}}.{{item.name}}-{{item.ar[0].name}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "rank-comp",
    props:[
      'img', 'items'
    ]
  }
</script>

<style scoped>
  .rankImg{
    border-radius: 3px;
    width: 100px;
    height: 100px;
  }
  .item{
    display: flex;
    margin-bottom:5px;
  }
  .songs{
    display: flex;
    flex-direction: column;
    margin-left: 5px;
  }
  .songItem{
    margin: 5px 0;
    font-size:12px;
  }
</style>
