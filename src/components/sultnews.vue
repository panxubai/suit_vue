<template>
	<div class='container'>
		
		<div class="headerS">
			<div class="backs" @click="refresh">
				<img src="../assets/image/ic_topbar_return.png" />
			</div>
			<div class="headerTitle">系统消息</div>
			<div class="information">
		</div>
		</div>
     <div class='newsList'>
        <div class='keyList' >
            <div class='imgs'>
                <img src='../assets/resources/img_suit_picture.png'></img>
            </div>
            <div class='newsBox'>
               <p>SUIT小秘书</p>
               <b>20183232932813</b>
               <span>打算开店咯实打实的卡上的卡</span>
            </div>
        </div>
    </div> 

     <!--<div class='noneNew' v-show="newsArray.length == 0">
        <img src='../assets/img_missing_card3.png'></img>
        <b>哦哟~消息为空</b>
    </div> -->


</div>

</template>

<script>
	export default {
  data () {
    return {
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
  width: 100%;
	padding-top: 0.88rem;
}

.headerS{
	box-shadow: 0 0.04rem 0.08rem 0 rgba(0, 0, 0, 0.10);

}
.newsList{
  width: 100%;
  box-sizing: border-box;
  padding: 0 0.4rem;
  font-size: 0.24rem;
}
.keyList{
  width: 100%;
  display:flex;
  padding: 0.4rem 0;
  box-sizing: border-box;
  border-bottom: 1px solid #E5E5E5;
}
.keyList .imgs{
  width: 0.9rem;
  margin-right: 0.32rem;
}
.keyList .imgs img{
  width: 0.9rem;
  height: 0.9rem;
  border-radius: 50%;
  float: left;
}
.keyList .newsBox{
  width: 5.48rem;
}
.keyList .newsBox p{
  display: block;
  font-size: 0.28rem;
color: #222222;
font-weight: 400;
}
.keyList .newsBox b{
   display: block;
  font-size: 0.24rem;
  margin: 0.08rem 0 0.2rem;
color: #C0C0C0;
}
.keyList .newsBox span{
  font-size: 0.28rem;
color: #555555;

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