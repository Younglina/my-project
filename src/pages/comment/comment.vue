<template>
  <scroll-view class="comment"  :scroll-y="true">
      <span style="font-size:14px">精彩评论</span>
      <div >
        <i-cell-group>
          <i-cell v-for="item in comment.hotComments" class="list" ripple :key="item.id">
            <div class="listMain" button>
              <div>
                <i-avatar :src="item.user.avatarUrl">
                </i-avatar>
              </div>
              <div class="listR">
                <div class="listT">
                  <span>{{item.user.nickname}}</span>
                  <div>{{item.likedCount}}<i-icon type="like" /></div>
                </div>
                <span>{{item.content}}</span>
              </div>
            </div>
          </i-cell>
        </i-cell-group>
      </div>
      <span style="font-size:14px">最新评论</span>
      <div>
        <i-cell-group>
          <i-cell v-for="item in comments" class="list" :key="item.id">
          <div class="listMain">
            <div>
              <i-avatar :src="item.user.avatarUrl">
              </i-avatar>
            </div>
            <div class="listR">
              <div class="listT">
                <span>{{item.user.nickname}}</span>
                <div>{{item.likedCount}}<i-icon type="like" /></div>
              </div>
              <span>{{item.content}}</span>
            </div>
          </div>
            </i-cell>
        </i-cell-group>
      </div>
  </scroll-view>
</template>

<script>
  export default {
    name: "comment",
    data(){
      return {
        comment:[],
        comments:[],
        screenHeight:''
      }
    },
    methods:{

    },
    onLoad(){
      let that = this;
      wx.getSystemInfo({
        success(res){
          that.screenHeight = res.screenHeight;
        }
      })
    },
    onPageScroll(e){
      console.log(e)
      if(e.scrollTop> 50){
        this.comments.push(...(this.comment.comments.slice(this.comments.length,this.comments.length+10)))
      }
    },
    onShow() {
      //通过option参数获取
      let res =  this.$fly.get(this.$api+'/comment/'+this.$root.$mp.query.type+'?id='+this.$root.$mp.query.id);
      res.then(res=>{
        this.comment = res.data;
        this.comments = res.data.comments.slice(0,10);
      })
    },
  }
</script>

<style scoped>

  .listT,.listR,.listMain{
    display: flex;
  }
  .listMain{
    width: 100%;
  }
  .list{
    margin: 10px 0;
  }
  .comment{
    overflow-y: auto;
    height: 100%;
  }
  .listR{
    flex-direction: column;
    margin-left: 10px;
    width: 100%;
  }
  .listT{
    width: 100%;
    justify-content: space-between;
  }
  .list li{
    margin: 10px 0;
  }
  .mu-item{
    height: 100%;
    padding:5px 16px;
  }
</style>
