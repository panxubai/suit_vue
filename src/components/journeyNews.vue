<template>
	<!--pages/journeyNews/journeyNews.wxml-->
<div class='container'>
	<div class="headerS">
			<div class="backs" @click="refresh">
				<img src="../assets/image/ic_topbar_return.png" />
			</div>
			<div class="headerTitle">行程消息</div>
			<div class="information">
		</div>
		</div>
  <div class='journeyList'  >
      <div class='journeyTop'>
          <p>titleb</p>
          <b>item.time</b>
          <span>item.msg_con</span>
      </div>
      <div class='journeyBottom'>
        <a>查看详情</a>
        <img src='https://www.suitius.com/image/resources/ic_more.png'/>
      </div>
  </div>
  <!-- 已度过 -->
  <div class='journeyList zhihuiList'>
      <div class='journeyTop'>
          <p>titleb</p>
          <b>item.time</b>
          <span>item.msg_con</span>
      </div>
      <div class='journeyBottom'>
        <a>查看详情</a>
        <img src='https://www.suitius.com/image/resources/ic_more.png'/>
      </div>
  </div>

    <!--<div class='noneNew' v-show="newsArray.length == 0">
        <img src='../../resources/restImg/img_missing_card3.png'/>
        <b>哦哟~消息为空</b>
    </div> -->
</div>

</template>

<script>
	export default {
	  data () {
	    return {
	      msg: 'Welcome to Your Vue.js App',
	      newsArray:[]
	    }
	  },
	  methods:{
	  	refresh: function() {
				window.history.go(-1)
			},
	  }
	}
</script>

<style scoped>
.container{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #eff3f6;
	padding-top: 0.88rem;

}
.headerS{
	box-shadow: 0 0.04rem 0.08rem 0 rgba(0, 0, 0, 0.10);

}
.journeyList{
  width: 100%;
  padding: 0.4rem 0.4rem 0;
  box-sizing: border-box;
  background: #fff;
  border-bottom: 0.2rem solid  #eff3f6;
}
.journeyList .journeyTop{
    width: 100%;
    border-bottom: 1px solid #E5E5E5;
}
.journeyList .journeyTop p{
  display: block;
  font-size: 0.28rem;
color: #000000;
font-weight: 400; 
}
.journeyList .journeyTop b{
  display: block;
  font-size: 0.24rem;
color: #C0C0C0;
margin-bottom: 0.1rem;
}
.journeyList .journeyTop span{
font-size: 0.28rem;
color: #555555;
display: block;
padding-bottom:0.4rem; 
}
.journeyBottom{
  width: 100%;
  height: 0.8rem;
}
.journeyBottom a{
	display: block;
	width:50%;
	float: left;
  font-size: 0.28rem;
color: #222222;
line-height: 0.8rem;
}
.journeyBottom img{
  width: 0.32rem;
  height: 0.32rem;
  float: right;
  margin-top: 0.24rem;
}

.noneNew{
  width: 100%;
  b-align: center;
}
.noneNew img{
  width: 2.6rem;
  height: 2.6rem;
  margin-top: 1.2rem;
}
.noneNew b{
  display: block;
  font-size: 0.32rem;
color: #9B9B9B;
margin-top: 0.48rem;
}
.zhihuiList .journeyTop p,b{
  color: #9B9B9B;
}
.zhihuiList .journeyTop span{
  color: #9B9B9B;
}
.zhihuiList .journeyBottom a{
  color: #9B9B9B;
}

.noneNew{
  width: 100%;
  text-align: center;
}
.noneNew img{
  width: 2.6rem;
  height: 2.6rem;
  margin-top: 1.2rem;
}
.noneNew b{
  display: block;
  font-size: 0.32rem;
color: #9B9B9B;
margin-top: 0.48rem;
}
</style>