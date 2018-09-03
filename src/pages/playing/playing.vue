<template>
  <div class="main">
    <div class="lrcMain">
      <div class="background">
        <div class="filter"></div>
        <img v-if="currentPlaying.al" :src="currentPlaying.al.picUrl" width="100%" height="100%">
        <img v-else="currentPlaying.song.album.blurPicUrl" :src="currentPlaying.song.album.blurPicUrl" width="100%" height="100%">
      </div>
    </div>
    <div class="rotateImg" v-show="!showImg" @click="showImg = !showImg">
      <image  v-if="currentPlaying.al" :src="currentPlaying.al.picUrl" class="musicImg"></image>
      <image   v-else="currentPlaying.song.album.blurPicUrl" :src="currentPlaying.song.album.blurPicUrl" class="musicImg"></image>
    </div>
    <div class="playMain" v-show="showImg" @click.stop="showImg = !showImg">
      <div class="lyric-wrapper"  ref="lyricList">
        <div class="lyric">
          <p v-for="(line,index) in currentLyric.lines" ref="lyricLine" :key="index"
             :class="{'current':currentLineNum===index}"
             class="text">{{line.txt}}</p>
        </div>
      </div>
      <!--<Scroll class="lyric-wrapper" ref="lyricList" :data="currentLyric && currentLyric.lines">-->
        <!--<div class="lyric">-->
          <!--<p v-for="(line,index) in currentLyric.lines" ref="lyricLine" :key="index"-->
             <!--:class="{'current':currentLineNum===index}"-->
             <!--class="text">{{line.txt}}</p>-->
        <!--</div>-->
      <!--</Scroll>-->
      <audio ref="audio" autoplay loop></audio>
    </div>
    <div class="lrcDiv">
      <i-progress percent="25" hide-info></i-progress>
      <div class="playControl">
        <i-icon type="undo" size="24"/>
        <i-icon type="return" size="24"/>
        <!--<i-icon :value="playIcon" @click="togglePlay"></i-icon>-->
        <i-icon type="playon" size="24"/>
        <i-icon type="enter" size="24"/>
        <i-icon type="other" size="24" @click.stop="openBottomSheet"/>
      </div>
    </div>
  </div>
</template>

<script>
  import Lyric from 'lyric-parser'
  import Scroll from '@/components/scroll'
  export default {
    name: "playing",
    data(){
      return {
        currentLyric:[],
        currentLineNum:0,
        currentPlaying:'',
        playing:true,
        showImg:true,
        playIcon:'play_circle_outline',
        open:false,
      }
    },
    components:{
      Scroll
    },
    onLoad(){
      let that = this;
      that.currentPlaying = this.$store.state.currentPlaying;
      let id = this.$root.$mp.query.id;
      this.$fly.all([this.$fly.get(this.$api+'/music/url?id='+id),this.$fly.get(this.$api+'/lyric?id='+id)]).then(
        this.$fly.spread(function (urlRes,lyricRes){
          if(urlRes.data.msg!="Cheating"){
            that.$refs.audio.src =urlRes.data.data[0].url;
          }
          that.currentLyric = new Lyric(lyricRes.data.lrc.lyric,that.handleLyric);
          // that.currentLyric.play();
          // that.currentLineNum = 0;
          // that.$refs.lyricList.scrollTo(0, 0, 1000);
        })
      )
    },
    methods:{
      togglePlay(){
        this.playIcon = this.playing?'pause_circle_outline':'play_circle_outline';
        this.playing = !this.playing;
        this.$refs.audio.onpause=true;
      },
      openBottomSheet () {
        this.open= true;
      },
      closeBottomSheet(){
        this.open= false;
      },
      handleLyric({lineNum, txt}) {
        this.currentLineNum = lineNum
        // 若当前行大于5,开始滚动,以保歌词显示于中间位置
        if (lineNum > 5) {
          let lineEl = this.$refs.lyricLine[lineNum - 5]
          // 结合better-scroll，滚动歌词
          this.$refs.lyricList.scrollToElement(lineEl, 1000)
        } else {
          this.$refs.lyricList.scrollToElement(0, 0, 1000)
        }
      }
    }
  }
</script>

<style scoped>
  .main{
    overflow: hidden;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  .lrcMain{
    flex-grow: 1;
  }
  .playMain{
    flex-shrink: 1;
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
  .lyric-wrapper{
    display: inline-block;
    position: absolute;
    top: 0;
    vertical-align: top;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  .lyric{
    margin: 0 auto;
    height: 100%;
    text-align: center;
    overflow-y:auto;
  }
  .text {
    line-height: 40px;
    color: #c7c7c7;
    font-size: 14px;
  }
  .current{
    color: #fff;
  }
  .playControl{
    display: flex;
    width: 100%;
    justify-content: space-around;
    color: white;
  }

  .btmHead,.btmSub{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .btmSub{
    margin-right: 16px;
  }
  .lrcDiv{
    display: flex;
    flex-direction: column;
    z-index: 100;
    position:absolute;
    bottom:0;
    width:100%;

  }
  .btmSheet{
    width: 100%;
    height: 400px;
    overflow-y: auto;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }

  .btmItem{
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    justify-content: space-between;
    border-bottom: 1px solid rgba(0,0,0,.12);
  }
  .btmName{
    font-size: 12px;
    color:gray;
  }
  .btmIcon i {
    font-size: 5px;
  }
  .playControl i{
    font-size: 38px;
  }

  @keyframes rotates {
    from {
      transform : rotate(0deg);
    }
    to {
      transform : rotate(360deg);
    }
  }
  .rotateImg {
    position: absolute;
    width: 300px;
    height: 300px;
    top:40%;
    left: 50%;
    transform: translate(-50%,-50%);
  }
  .musicImg{
    width:100%;
    height:100%;
    border-radius: 50%;
    animation: rotates 20s linear infinite;
  }
</style>
