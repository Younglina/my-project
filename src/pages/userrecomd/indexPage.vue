<template>
  <div style="padding:0 5px;">
    <div class="carouselDiv">
      <swiper indicator-dots indicator-color="glay" indicator-active-color='red' autoplay="2000" circular>
        <block v-for="item in mvFirst" :key="item.id">
          <swiper-item>
            <img :src="item.cover" />
          </swiper-item>
        </block>
      </swiper>
    </div>
    <div class="centerView">
      <div class="innerView">
        <div>
          <i-icon class="micon" type="activity" size="28" color="red" @click='toNewSong' /></div>
        <span class="iconSpan">每日推荐</span>
      </div>
      <div class="innerView">
        <div>
          <i-icon class="micon" type="createtask" size="28" color="red" @click="toSonglistPage" /></div>
        <span class="iconSpan">歌单</span>
      </div>
      <div class="innerView">
        <div>
          <i-icon class="micon" type="barrage" size="28" color="red" @click="toRank" /></div>
        <span class="iconSpan">排行榜</span>
      </div>
    </div>
    <div class="personalized">
      <span class="perSpan">推荐歌单></span>
      <div class="gdView">
        <div class="gdInnerView" v-for="item in recommendResource" :key="item.id" :id="item.id" @click='toPlayListDetail(item.id)'>
          <div class="playCountMain">
            <div class="playCount">
              <i-icon type="customerservice" /><span>{{item.playCount}}</span></div>
            <img class="innerImg" :src="item.picUrl" /></div>
          <span class="innerText">{{item.name}}</span>
        </div>
      </div>
    </div>
    <div class="personalized">
      <span class="perSpan">推荐新音乐 ></span>
      <div class="gdView" @click="toPlay">
        <div class="gdInnerView" v-for="item in personalizedNewsong" :key="item.id">
          <img class="innerImg" :src="item.song.album.blurPicUrl" :data-id="item.id" :data-index="index" />
          <span class="innerText">{{item.name}}</span>
        </div>
      </div>
    </div>
    <div class="personalized">
      <span class="perSpan">推荐节目></span>
      <div class="gdView">
        <div class="gdInnerView" v-for="item in personalizedDJprogram" :key="item.id">
          <div>
            <img class="innerImg" :src="item.picUrl" />
          </div>
          <span class="innerText">{{item.name}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "music-recommed",
    data() {
      return {
        recommendResource: [],
        personalizedNewsong: '',
        personalizedDJprogram: '',
        mvFirst: '',
        current: 0
      }
    },
    methods: {
      toPlayListDetail(id) {
        // this.$store.commit('setSongListId',id);
        var url = '../songList/main?id=' + id;
        wx.navigateTo({
          url
        })
      },
      toSonglistPage() {
        wx.navigateTo({
          url: '../songlistRecomd/main',
        })
      },
      toNewSong() {
        wx.navigateTo({
          url: '../newsong/main',
        })
      },
      toPlay(el) {
        let id = el.mp.target.dataset.id;
        let index = el.mp.target.dataset.index;
        if (id) {
          this.$store.commit('setPlaying', this.personalizedNewsong[index]);
          wx.navigateTo({
            url: '../playing/main?id=' + id
          })
        }
      },
      toRank() {
        wx.navigateTo({
          url: '../paihang/main'
        })
      },
      goListPage() {
        this.$router.push({
          name: 'songListPage'
        })
      },
      handleChange(detail) {
        this.current = detail.key
      }
    },
    onLoad: function() {
      wx.cloud.init({
        traceUser: true // 用户信息会显示在云开发控制台的用户面板中
      });
      console.log(111)
      wx.cloud.callFunction({
        name: 'test', // 云函数名称
      }).then(res => {
        console.log(res)
      }).catch((err) => {
        console.error(err);
      });
    },
    created() {
      const Fly = require('flyio/dist/npm/wx');
      let fly = new Fly();
      let that = this;
  
      function getMvFist() {
        return fly.get(that.$api + '/mv/first');
      }
  
      function getNewSong() {
        return fly.get(that.$api + '/personalized/newsong');
      }
  
      function getRecomRes() {
        return fly.get(that.$api + '/personalized');
      }
  
      function getPersDj() {
        return fly.get(that.$api + '/personalized/djprogram');
      }
      this.$nextTick(() =>
        // fly.get(that.$api+'/personalized').then((res)=>{
        //   that.recommendResource = res.data.result.slice(0, 6).map(item=>{item.playCount=parseInt(item.playCount/10000) + '万';return item;});
        // })
        fly.all([getMvFist(), getNewSong(), getRecomRes(), getPersDj()]).then(fly.spread((mvF, NewS, RecomRes, PresDj) => {
          that.mvFirst = mvF.data.data.slice(0, 6);
          that.personalizedNewsong = NewS.data.result.slice(0, 6);
          that.recommendResource = RecomRes.data.result.slice(0, 6).map(item => {
            item.playCount = parseInt(item.playCount / 10000) + '万';
            return item;
          });
          that.personalizedDJprogram = PresDj.data.result.slice(0, 6);
        }))
      )
    },
  }
</script>

<style scoped>
  .carouselDiv {
    padding: 5px;
  }
  
  image {
    width: 100%;
    height: 100%;
    border-radius: 5px;
  }
  
  .micon {
    border: 1px solid red;
    border-radius: 50%;
    padding: 10px;
  }
  
  .iconSpan {
    margin-top: 10px;
  }
  
  .perSpan {
    font-size: 14px;
    font-weight: bold;
  }
  
  .centerView {
    display: flex;
    justify-content: space-around;
    margin: 15px 0px;
  }
  
  .gdView {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 5px 0;
  }
  
  .gdInnerView {
    display: flex;
    flex-direction: column;
    width: 100px;
  }
  
  .centerView i {
    color: red;
    border: solid 1px;
    border-radius: 40px;
    padding: 10px;
  }
  
  .innerImg {
    width: 100px;
    height: 100px;
    border-radius: 5px;
  }
  
  .innerView {
    display: flex;
    flex-direction: column;
    text-align: center;
  }
  
  .innerView i {
    font-size: 18px;
  }
  
  .innerView span {
    font-size: 12px;
  }
  
  .innerText {
    font-size: 10px;
    margin-bottom: 10px;
  }
  
  .personalized {
    margin-bottom: 15px;
  }
  
  .playCountMain {
    position: relative;
  }
  
  .playCount {
    position: absolute;
    right: 3px;
    top: 2px;
    color: white;
    font-size: 12px;
    display: flex;
    align-items: center;
  }
  
  .playCount i {
    font-size: 14px;
  }
</style>
