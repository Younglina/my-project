import Vue from 'vue'
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0,
    currentPlaying:{},
    currentSongList:{},
    songId:0,
    songListId:0,
    userBaseInfo:{
      "backgroundUrl": "http://p1.music.126.net/N8uPfii-dB-NAJuEW63Dlw==/3275445145304100.jpg",
      "city": 360200,
      "defaultAvatar": false,
      "avatarUrl": "http://p2.music.126.net/ElqljSFQEePTo_WuWhdDMg==/1365593465472278.jpg",
      "birthday": 819388800000,
      "province": 360000,
      "remarkName": null,
      "mutual": false,
      "nickname": "往复随安2",
      "avatarImgId": 1365593465472278,
      "experts": {},
      "backgroundImgId": 3275445145304100,
      "userType": 0,
      "expertTags": null,
      "authStatus": 0,
      "description": "",
      "backgroundImgIdStr": "3275445145304100",
      "userId": 111736605,
      "vipType": 0,
      "gender": 1,
      "accountStatus": 0,
      "avatarImgIdStr": "1365593465472278",
      "detailDescription": "",
      "djStatus": 0,
      "followed": false,
      "signature": "你好，再见。",
      "authority": 0
    },
    rank:['bs','xg','yc','rg']
  },
  mutations: {
    setPlaying: (state,data) => {
      state.currentPlaying = data
    },
    setSongId: (state,data) => {
      state.songId = data
    },
    setSongListId: (state,data) => {
      state.songListId = data
    },
    setCurrentSongList: (state,data) => {
      state.currentSongList = data
    },
    setRank:(state,data)=>{
      state.rank = data;
    }
  }
});
