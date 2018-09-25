<template>
    <div class="userMusic">
        <div class="myMusic">
            <span>歌单</span>
            <span>共被收藏0次</span>
        </div>
        <div class="myList">
            <div class="musicImg my"><img style="width:40px;height:40px" src="/resource/img/paihan.png" alt=""></div>
            <div class="innerMusic">
                <span class="title">我的听歌排行榜</span>
                <span class="sub">累计听歌7831首</span>
            </div>
        </div>
        <div class="myList">
            <img src="/resource/img/like.jpeg" class="musicImg" alt="">
            <div class="innerMusic">
                <span class="title">我喜欢的音乐</span>
                <span class="sub">{{playlist[0].trackCount}}首,播放{{playlist[0].playCount}}次</span>
            </div>
        </div>
        <div class="myMusic">
            <span>收藏的歌单({{playlist.length-1}})</span>
            <span></span>
        </div>
        <div class="myList" v-for="(item,index) in playlist" v-if="index!==0" :key="item.id" @tap="toPlayListDetail(item.id)">
            <img :src="item.coverImgUrl" class="musicImg" alt="">
            <div class="innerMusic">
                <span class="title">{{item.name}}</span>
                <span class="sub">{{item.trackCount}}首,播放{{item.playCount}}次</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "userMusic",
        data() {
            return {
                "playlist": [{
                        "subscribers": [],
                        "subscribed": false,
                        "creator": {
                            "defaultAvatar": false,
                            "province": 360000,
                            "authStatus": 0,
                            "followed": false,
                            "avatarUrl": "http://p1.music.126.net/ElqljSFQEePTo_WuWhdDMg==/1365593465472278.jpg",
                            "accountStatus": 0,
                            "gender": 1,
                            "city": 360200,
                            "birthday": 819388800000,
                            "userId": 111736605,
                            "userType": 0,
                            "nickname": "往复随安2",
                            "signature": "你好，再见。",
                            "description": "",
                            "detailDescription": "",
                            "avatarImgId": 1365593465472278,
                            "backgroundImgId": 3275445145304100,
                            "backgroundUrl": "http://p1.music.126.net/N8uPfii-dB-NAJuEW63Dlw==/3275445145304100.jpg",
                            "authority": 0,
                            "mutual": false,
                            "expertTags": null,
                            "experts": null,
                            "djStatus": 0,
                            "vipType": 0,
                            "remarkName": null,
                            "avatarImgIdStr": "1365593465472278",
                            "backgroundImgIdStr": "3275445145304100"
                        },
                        "artists": null,
                        "tracks": null,
                        "tags": [],
                        "trackNumberUpdateTime": 1537515847799,
                        "adType": 0,
                        "status": 0,
                        "subscribedCount": 0,
                        "cloudTrackCount": 0,
                        "specialType": 5,
                        "userId": 111736605,
                        "trackUpdateTime": 1537521171255,
                        "trackCount": 53,
                        "coverImgId": 528865094188722,
                        "privacy": 0,
                        "newImported": false,
                        "updateTime": 1537515847799,
                        "anonimous": false,
                        "totalDuration": 0,
                        "commentThreadId": "A_PL_0_137136854",
                        "coverImgUrl": "http://p1.music.126.net/rO33HrMCxQNHVSzgYLE9nA==/528865094188722.jpg",
                        "playCount": 1363,
                        "ordered": true,
                        "description": null,
                        "createTime": 1449642098605,
                        "highQuality": false,
                        "name": "往复随安2喜欢的音乐",
                        "id": 137136854
                    },
                    {
                        "subscribers": [],
                        "subscribed": true,
                        "creator": {
                            "defaultAvatar": false,
                            "province": 410000,
                            "authStatus": 0,
                            "followed": false,
                            "avatarUrl": "http://p1.music.126.net/Eet-whlol-TfgNvpT0YaSQ==/109951163558281528.jpg",
                            "accountStatus": 0,
                            "gender": 0,
                            "city": 411300,
                            "birthday": -2209017600000,
                            "userId": 129377889,
                            "userType": 200,
                            "nickname": "莉犬",
                            "signature": "那个夏日已然饱和。/一切真的会好起来吗",
                            "description": "",
                            "detailDescription": "",
                            "avatarImgId": 109951163558281540,
                            "backgroundImgId": 109951163567843570,
                            "backgroundUrl": "http://p1.music.126.net/vv-RKeXSpg3ly_GHS2T-FQ==/109951163567843561.jpg",
                            "authority": 0,
                            "mutual": false,
                            "expertTags": [
                                "ACG",
                                "日语"
                            ],
                            "experts": null,
                            "djStatus": 10,
                            "vipType": 0,
                            "remarkName": null,
                            "avatarImgIdStr": "109951163558281528",
                            "backgroundImgIdStr": "109951163567843561",
                            "avatarImgId_str": "109951163558281528"
                        },
                        "artists": null,
                        "tracks": null,
                        "tags": [
                            "日语",
                            "ACG",
                            "流行"
                        ],
                        "trackNumberUpdateTime": 1537803002315,
                        "adType": 0,
                        "status": 0,
                        "subscribedCount": 287409,
                        "cloudTrackCount": 0,
                        "specialType": 0,
                        "userId": 129377889,
                        "trackUpdateTime": 1537803137386,
                        "trackCount": 125,
                        "coverImgId": 19126004765742416,
                        "privacy": 0,
                        "newImported": false,
                        "updateTime": 1537803002315,
                        "anonimous": false,
                        "totalDuration": 0,
                        "commentThreadId": "A_PL_0_2105681544",
                        "coverImgUrl": "http://p1.music.126.net/Bdr5DuGf-ZzZywHRR6DKLA==/19126004765742414.jpg",
                        "playCount": 7290323,
                        "ordered": true,
                        "description": "喜欢无需铺垫，只需一秒便沦陷。\n无前奏日语歌，开口直接秒杀你。\n\n歌单里精选了100首无前奏日语歌，\n相信你们听完这些歌的第一句后，你们就会喜欢这些歌的~感谢大家的收听w\n\n封面p站id：58893318 画师：おくたこす",
                        "createTime": 1518832598692,
                        "highQuality": false,
                        "name": "日系/无前奏：开口即跪 一秒沦陷",
                        "id": 2105681544,
                        "coverImgId_str": "19126004765742414"
                    },
                    {
                        "subscribers": [],
                        "subscribed": true,
                        "creator": {
                            "defaultAvatar": false,
                            "province": 360000,
                            "authStatus": 0,
                            "followed": false,
                            "avatarUrl": "http://p1.music.126.net/tdAmHoNh9s8ezJySUJnnQw==/109951163414375254.jpg",
                            "accountStatus": 0,
                            "gender": 0,
                            "city": 360400,
                            "birthday": -2209017600000,
                            "userId": 260023764,
                            "userType": 0,
                            "nickname": "要会撒娇哦",
                            "signature": "认清",
                            "description": "",
                            "detailDescription": "",
                            "avatarImgId": 109951163414375250,
                            "backgroundImgId": 3433774815230246,
                            "backgroundUrl": "http://p1.music.126.net/TFCF5V4zpOuJFz-s8K-Alw==/3433774815230246.jpg",
                            "authority": 0,
                            "mutual": false,
                            "expertTags": null,
                            "experts": null,
                            "djStatus": 0,
                            "vipType": 0,
                            "remarkName": null,
                            "avatarImgIdStr": "109951163414375254",
                            "backgroundImgIdStr": "3433774815230246",
                            "avatarImgId_str": "109951163414375254"
                        },
                        "artists": null,
                        "tracks": null,
                        "tags": [],
                        "trackNumberUpdateTime": 1537236218498,
                        "adType": 0,
                        "status": 0,
                        "subscribedCount": 1,
                        "cloudTrackCount": 0,
                        "specialType": 0,
                        "userId": 260023764,
                        "trackUpdateTime": 1537236218498,
                        "trackCount": 68,
                        "coverImgId": 109951163093043680,
                        "privacy": 0,
                        "newImported": false,
                        "updateTime": 1537236218498,
                        "anonimous": false,
                        "totalDuration": 0,
                        "commentThreadId": "A_PL_0_941262247",
                        "coverImgUrl": "http://p1.music.126.net/yTU-bvoh2mWqg7RPmEs1bg==/109951163093043682.jpg",
                        "playCount": 229,
                        "ordered": false,
                        "description": "",
                        "createTime": 1506901848298,
                        "highQuality": false,
                        "name": "少女情怀总是诗",
                        "id": 941262247,
                        "coverImgId_str": "109951163093043682"
                    },
                    {
                        "subscribers": [],
                        "subscribed": true,
                        "creator": {
                            "defaultAvatar": false,
                            "province": 360000,
                            "authStatus": 0,
                            "followed": false,
                            "avatarUrl": "http://p1.music.126.net/tdAmHoNh9s8ezJySUJnnQw==/109951163414375254.jpg",
                            "accountStatus": 0,
                            "gender": 0,
                            "city": 360400,
                            "birthday": -2209017600000,
                            "userId": 260023764,
                            "userType": 0,
                            "nickname": "要会撒娇哦",
                            "signature": "认清",
                            "description": "",
                            "detailDescription": "",
                            "avatarImgId": 109951163414375250,
                            "backgroundImgId": 3433774815230246,
                            "backgroundUrl": "http://p1.music.126.net/TFCF5V4zpOuJFz-s8K-Alw==/3433774815230246.jpg",
                            "authority": 0,
                            "mutual": false,
                            "expertTags": null,
                            "experts": null,
                            "djStatus": 0,
                            "vipType": 0,
                            "remarkName": null,
                            "avatarImgIdStr": "109951163414375254",
                            "backgroundImgIdStr": "3433774815230246",
                            "avatarImgId_str": "109951163414375254"
                        },
                        "artists": null,
                        "tracks": null,
                        "tags": [],
                        "trackNumberUpdateTime": 1536994151927,
                        "adType": 0,
                        "status": 0,
                        "subscribedCount": 1,
                        "cloudTrackCount": 0,
                        "specialType": 0,
                        "userId": 260023764,
                        "trackUpdateTime": 1537227966860,
                        "trackCount": 33,
                        "coverImgId": 109951163093037980,
                        "privacy": 0,
                        "newImported": false,
                        "updateTime": 1536994151927,
                        "anonimous": false,
                        "totalDuration": 0,
                        "commentThreadId": "A_PL_0_930330172",
                        "coverImgUrl": "http://p1.music.126.net/rqANa-8UC_9RToWu9o8ftA==/109951163093037979.jpg",
                        "playCount": 49,
                        "ordered": false,
                        "description": null,
                        "createTime": 1506172291992,
                        "highQuality": false,
                        "name": "一日看尽长安花",
                        "id": 930330172,
                        "coverImgId_str": "109951163093037979"
                    },
                    {
                        "subscribers": [],
                        "subscribed": true,
                        "creator": {
                            "defaultAvatar": false,
                            "province": 360000,
                            "authStatus": 0,
                            "followed": false,
                            "avatarUrl": "http://p1.music.126.net/tdAmHoNh9s8ezJySUJnnQw==/109951163414375254.jpg",
                            "accountStatus": 0,
                            "gender": 0,
                            "city": 360400,
                            "birthday": -2209017600000,
                            "userId": 260023764,
                            "userType": 0,
                            "nickname": "要会撒娇哦",
                            "signature": "认清",
                            "description": "",
                            "detailDescription": "",
                            "avatarImgId": 109951163414375250,
                            "backgroundImgId": 3433774815230246,
                            "backgroundUrl": "http://p1.music.126.net/TFCF5V4zpOuJFz-s8K-Alw==/3433774815230246.jpg",
                            "authority": 0,
                            "mutual": false,
                            "expertTags": null,
                            "experts": null,
                            "djStatus": 0,
                            "vipType": 0,
                            "remarkName": null,
                            "avatarImgIdStr": "109951163414375254",
                            "backgroundImgIdStr": "3433774815230246",
                            "avatarImgId_str": "109951163414375254"
                        },
                        "artists": null,
                        "tracks": null,
                        "tags": [],
                        "trackNumberUpdateTime": 1530790490401,
                        "adType": 0,
                        "status": 0,
                        "subscribedCount": 1,
                        "cloudTrackCount": 0,
                        "specialType": 0,
                        "userId": 260023764,
                        "trackUpdateTime": 1537177306693,
                        "trackCount": 38,
                        "coverImgId": 109951163093041380,
                        "privacy": 0,
                        "newImported": false,
                        "updateTime": 1531122282733,
                        "anonimous": false,
                        "totalDuration": 0,
                        "commentThreadId": "A_PL_0_874507221",
                        "coverImgUrl": "http://p1.music.126.net/FJquprx1qJEkSWt33v3T5g==/109951163093041372.jpg",
                        "playCount": 200,
                        "ordered": false,
                        "description": null,
                        "createTime": 1502327688635,
                        "highQuality": false,
                        "name": "梨花院落溶溶夜",
                        "id": 874507221,
                        "coverImgId_str": "109951163093041372"
                    }
                ]
            };
        },
        methods: {
            toPlayListDetail(id) {
                wx.navigateTo({
                    url: '../songList/main?id=' + id
                })
            }
        }
    };
</script>

<style scoped>
    .myMusic,
    .myList,
    .innerMusic,
    .my {
        display: flex;
    }
    
    .innerMusic {
        flex-direction: column;
    }
    
    .userMusic {
        padding: 0 10px;
    }
    
    .myMusic {
        justify-content: space-between;
        font-size: 12px;
        color: grey;
        background-color: #fbfafa;
        margin: 5px 0;
    }
    
    .myList {
        margin-bottom: 5px;
    }
    
    .musicImg {
        width: 60px;
        height: 60px;
        border-radius: 5px;
    }
    
    .my {
        align-items: center;
        justify-content: center;
        background-color: black;
    }
    
    .innerMusic {
        justify-content: center;
        margin-left: 10px
    }
    
    .title {
        font-size: 14px
    }
    
    .sub {
        font-size: 10px;
        color: grey;
        margin-top: 5px;
    }
</style>
