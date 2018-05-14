<template>
	<div class="container">
		<!--轮播-->
		<div class="swipeDiv">
			<mt-swipe ref="swipe" :auto="4000" :speed="500">
				<mt-swipe-item><img src="https://www.suitius.com/tp5/public/uploads/houseimg/5ac2ed879a29e.jpg" /></mt-swipe-item>
				<mt-swipe-item><img src="https://www.suitius.com/tp5/public/uploads/houseimg/5ac2ed879a29e.jpg" /></mt-swipe-item>
				<mt-swipe-item><img src="https://www.suitius.com/tp5/public/uploads/houseimg/5ac2ed879a29e.jpg" /></mt-swipe-item>
			</mt-swipe>
		</div>

		<div class='namePic'>
			<div class='topName'>
				<span>homeArray.hohouse_info.vi</span>
				<b>homeA<a>元/月</a></b>
			</div>
			<div class='bottomName'>
				<span>home ㎡</span>
				<b>homeArray.h</b>
			</div>
		</div>

		<div class='ownerHome'>
			<div class='ownerPhone'>
				<img class='imageFace' src='https://www.suitius.com/image/resources/homeDetail/ic_suite_contact.png' />
				<span>homeArray.ca</span>
				<p>
					<img src='https://www.suitius.com/image/resources/homeDetail/ic_suite_contact.png' />联系业主</p>
			</div>
			<div class='homeReferral'>
				<p>房屋介绍</p>
				<div class='presentations'>
					<div class='presentationList'>
						<span>风格：</span>
						<b>简装</b>
						<!--<text wx:if="{{homeArray.house_info.style == 1}}">精装</text>
						<text wx:if="{{homeArray.house_info.style == 2}}">毛坯</text>-->
					</div>
					<div class='presentationList'>
						<span>朝向：</span>
						<b>东</b>
					</div>
					<div class='presentationList'>
						<span>电梯：</span>
						<b>有电梯</b>
						<!--<text wx:else>无电梯</text>-->
					</div>
					<div class='presentationList'>
						<span>用途：</span>
						<b>普通住宅</b>
					</div>
				</div>
			</div>
			<div class='facility'>
				<p>配套设施</p>
				<div class='facilityImg'>
					<div class='imgList'>
						<img src='https://www.suitius.com/image/resources/homeDetail/ic_suite_balcony9.png' />
						<a>空调</a>
					</div>

				</div>

			</div>
		</div>

		<div class='flatmate'>
			<div class='flatTop'>
				合租室友推荐
				<div class='questionDiv' @click='questionTap'>
					<img class='question' src='https://www.suitius.com/image/resources/homeDetail/ic_suit_question.png'/>
				</div>
				<b @click='showtapSd'>
        设定
        <img src='https://www.suitius.com/image/resources/homeDetail/ic_more_down.png'/>
      </b>
			</div>
			<p>你对室友的期望是？</p>
			<div class='chumMain'>
				<b>选择推荐室友加入讨论组</b>
				<div class='chumList' >
					<div class="scrolls">
						<!--<P wx:if="{{peopleArr.length == 0}}">没有搜索到合租室友哦，请更换条件重新搜索哦</P>-->
						<div class='headList' >

							<img src="https://www.suitius.com/image/resources/homeDetail/ic_more_down.png"/>
							<span>tem.call</span>
							<div class='shadow'>
								<img src='https://www.suitius.com/image/resources/questionnaire/ic_boy6.png'/>
							</div>
						</div>
						<div class='headList' >

							<img src="https://www.suitius.com/image/resources/homeDetail/ic_more_down.png"/>
							<span>tem.call</span>
							<div class='shadow'>
								<img src='https://www.suitius.com/image/resources/questionnaire/ic_boy6.png'/>
							</div>
						</div>
						<div class='headList' >

							<img src="https://www.suitius.com/image/resources/homeDetail/ic_more_down.png"/>
							<span>tem.call</span>
							<div class='shadow'>
								<img src='https://www.suitius.com/image/resources/questionnaire/ic_boy6.png'/>
							</div>
						</div>
						<div class='headList' >

							<img src="https://www.suitius.com/image/resources/homeDetail/ic_more_down.png"/>
							<span>tem.call</span>
							<div class='shadow'>
								<img src='https://www.suitius.com/image/resources/questionnaire/ic_boy6.png'/>
							</div>
						</div>
					</div>
				</div>
				<div class='buttonsum'>创建讨论组</div>
			</div>
		</div>


<div class='mapMain'>
			<p>地理位置</p>
			<span>
        <img src='https://www.suitius.com/image/resources/ic_list_sign.png'/>
         omeArray.house_info.m
     </span>
			<div id="map" style="width: 100%; height: 3.3rem;"></div>
		</div>

		<div class='plotIntroduce'>
			<p>小区介绍</p>
			<span>meArray.house_info.descri</span>
		</div>
		
		<!-- 点击问号跳出弹出框 -->
<div class='tipsWindown' v-show="questionShow" @click='yesTapCh'></div> 
    <div class='expectationss' v-show="questionShow">
         <p>合租室友推荐是什么？</p>
        <!-- <img class='chahao' src='https://www.suitius.com/image/resources/homeDetail/ic_pop_close.png' @click='yesTapCh'/>-->
         <b>可以筛选出你想合租的室友,选中后可以创建讨论组,一起商量合租等事宜。</b>
           <div class='buttonsumss' @click='yesTapCh'>知道了</div>
    </div>
    
    <!-- 点击设定跳出弹出框 -->
<div class='tipsWindown' v-show="tipsWindownMenuIsShow" @click='hidenTipTap'></div>
    <div class='expectation' v-show="tipsWindownMenuIsShow" >
        <p>你对室友的期望是？</p>
        <!--<img class='chahao' src='https://www.suitius.com/image/resources/homeDetail/ic_pop_close.png' @click='hidenTipTap'/>-->
        <div class='sumList'>
          <div class='gender margins'>
              <span>姓名</span>
              <a :class="genderIndex == 1? 'activeGender' : ''" @click='genderTap(1)' data-index="1">男</a>
              <a :class="genderIndex == 0? 'activeGender' : ''" @click='genderTap(0)' data-index="0">女</a>
          </div>
          <div class='age margins'>
               <span>年龄</span>
               <input class='first1'  maxlength="2" type='number' v-model='ageLitterValue'/>
               <a>-</a>
               <input  maxlength="2" type='number' v-model='ageBigValue'  />
          </div>
          <div class='pet margins'>
               <span>宠物</span>
              <a :class="petIndex == 1? 'activePet' : ''" @click='petTap(1)' data-index="1">有</a>
              <a :class="petIndex == 0? 'activePet' : ''" @click='petTap(0)' data-index="0">无</a>
          </div>
        </div>
      <div class='buttonsum'>提交</div>
    </div>

</div>

</template>

<script>
	
	export default {
		
		data() {
			return {
				questionShow:false,
				tipsWindownMenuIsShow:false,
				genderIndex:1,
				petIndex:1,
				ageLitterValue:"",
				ageBigValue:""
			}
		},
		mounted(){},
		methods: {
			//点击问号出现提示
			questionTap:function(){
				this.questionShow = true
			},
			//点击阴影部分消失
			yesTapCh:function(){
				this.questionShow = false
			},
			//点击设定出现
			showtapSd:function(){
				this.tipsWindownMenuIsShow = true
			},
			//点击阴影部分消失
			hidenTipTap:function(){
				this.tipsWindownMenuIsShow = false
			},
			//点击选择男女
			genderTap:function(val){
				this.genderIndex = val
			},
			//点击选择宠物
			petTap:function(val){
				this.petIndex = val
			},
		}
	}
</script>

<style scoped>
	.container {
		padding-top: 0.88rem;
		font-size: 0;
	}
	a{
		text-decoration: none;
	}
	.swipeDiv {
		height: 4.22rem;
		width: 100%;
	}
	
	.mint-swipe {
		height: 4.22rem;
	}
	
	.mint-swipe img {
		height: 4.22rem;
		width: 100%;
	}
	
	.mint-cell-value {
		width: 100%;
	}
	
	.namePic {
		width: 100%;
		padding-top: 0.23rem;
		height: 1.50rem;
		overflow: hidden;
		border-bottom: 0.20rem solid #eff3f6;
	}
	
	.namePic .topName,
	.namePic .bottomName {
		width: 6.90rem;
		margin: 0 auto;
	}
	
	.namePic .topName span {
		font-size: 0.32rem;
		color: #222222;
		font-weight: 700;
		line-height: 0.78rem;
	}
	
	.namePic .topName b {
		font-size: 0.44rem;
		color: #FE8B25;
		margin-top: 0.1rem;
		float: right;
	}
	
	.namePic .topName b a {
		font-size: 0.28rem;
		color: #FE8B25;
	}
	
	.namePic .bottomName span {
		font-size: 0.28rem;
		color: #9B9B9B;
	}
	
	.namePic .bottomName b {
		font-size: 0.28rem;
		color: #9B9B9B;
		float: right;
	}
	
	.ownerHome {
		width: 100%;
		border-bottom: 0.20rem solid #eff3f6;
		padding-bottom: 0.20rem;
	}
	
	.ownerHome .ownerPhone {
		width: 6.90rem;
		height: 1.42rem;
		margin: 0 auto;
		border-bottom: 0.02rem solid #E5E5E5;
	}
	
	.ownerHome .ownerPhone .imageFace {
		width: 0.80rem;
		height: 0.80rem;
		border-radius: 50%;
		margin-right: 0.32rem;
		margin-top: 0.32rem;
		float: left;
	}
	
	.ownerHome .ownerPhone span {
		line-height: 1.42rem;
		font-size: 0.32rem;
		color: #222222;
	}
	
	.ownerHome .ownerPhone p {
		float: right;
		font-size: 0.28rem;
		color: #FE8B25;
		line-height: 1.42rem;
	}
	
	.ownerHome .ownerPhone p img {
		height: 0.40rem;
		width: 0.40rem;
		float: left;
		margin-top: 0.52rem;
		margin-right: 0.16rem;
	}
	
	.ownerHome .homeReferral {
		width: 6.90rem;
		margin: 0 auto;
		padding-top: 0.20rem;
		padding-bottom: 0.32rem;
		border-bottom: 0.02rem solid #E5E5E5;
	}
	
	.ownerHome .homeReferral p {
		display: block;
		font-size: 0.32rem;
		color: #222222;
		line-height: 0.80rem;
		font-weight: 600;
	}
	
	.ownerHome .homeReferral .presentations {
		width: 100%;
	}
	
	.ownerHome .homeReferral .presentationList {
		display: inline-block;
		width: 50%;
	}
	
	.ownerHome .homeReferral .presentationList span {
		font-size: 0.28rem;
		color: #555555;
		line-height: 0.50rem;
	}
	
	.ownerHome .homeReferral .presentationList b {
		font-size: 0.28rem;
		color: #000;
		line-height: 0.50rem;
	}
	/* .ownerHome .homeReferral span{
font-size: 28rem;
color: #555555;
} */
	
	.ownerHome .facility {
		width: 6.90rem;
		margin: 0 auto;
	}
	
	.ownerHome .facility p {
		display: block;
		font-size: 0.32rem;
		color: #222222;
		line-height: 1.05rem;
		font-weight: 600;
	}
	
	.ownerHome .facility .facilityImg {
		width: 100%;
	}
	
	.ownerHome .facility .facilityImg .imgList {
		width: 0.80rem;
		text-align: center;
		display: inline-block;
		margin-right: 0.70rem;
		margin-bottom: 0.60rem;
	}
	
	.ownerHome .facility .facilityImg .imgList a {
		font-size: 0.24rem;
		color: #222222;
	}
	
	.ownerHome .facility .facilityImg .imgList img {
		width: 0.64rem;
		height: 0.64rem;
	}
	
	.ownerHome .facility .facilityImg .imgList:nth-child(5) {
		margin-right: 0;
	}
	
	.ownerHome .facility .facilityImg .imgList:nth-child(10) {
		margin-right: 0;
	}
	
	.ownerHome .facility .facilityImg .imgList:nth-child(15) {
		margin-right: 0;
	}
	
	.ownerHome .facility .facilityImg .imgList:nth-child(20) {
		margin-right: 0;
	}
	
	.flatmate{
  width: 100%;
  border-bottom: 0.20rem solid #eff3f6;
    padding-top: 0.20rem;
      padding-bottom: 0.27rem;
}
.flatmate .flatTop{
 width: 6.90rem;
 margin: 0 auto;
  font-size: 0.32rem;
color: #222222;
  line-height: 0.80rem;
  font-weight: 600;
  

}
.flatmate .flatTop .questionDiv{
  display: inline-block;
  height: 0.80rem;
  width: 0.32rem;
}
.flatmate .flatTop .question{
  width: 0.32rem;
  height: 0.32rem;
  position: relative;
  top:0.05rem;
  left: 0.10rem;
}
.flatmate .flatTop b{
  float: right;
  font-size: 0.28rem;
color: #FE8B25;
}
.flatmate .flatTop b img{
width: 0.32rem;
height: 0.32rem;
float: right;
margin-top: 0.24rem;
margin-left: 0.10rem;
}
.flatmate p{
  display: block;
  width: 6.90rem;
  margin: 0 auto;
  font-size: 0.28rem;
color: #555555;
}

.chumMain{
  width: 6.90rem;
  margin: 0 auto;
}
.chumMain b{
  font-size: 0.28rem;
color: #555555;
}
.chumMain .chumList{
	width: 100%;
	overflow-x: auto;
  height: 2rem;
  padding-top: 0.36rem;
  box-sizing: border-box;
}
.chumMain .chumList .scrolls{
	width: 16rem;
	height: 100%;
	overflow: hidden;
	font-size: 0;
}
.chumMain .chumList .headList{ 
  width: 1.60rem;
   height: 2rem;
   display: inline-block;
  text-align: center;
  padding-right: 0.40rem;
  box-sizing: border-box;
  font-size: 0.24rem;
  color: #555555;
  position: relative;
}
.chumMain .chumList .headList span{ 
 display: block;
 width: 100%;
 overflow: hidden;
  white-space: nowrap;
   text-overflow:ellipsis;
}
.chumMain .chumList p{
  text-align: center;
  font-size: 0.27rem;
  color: #555555;
  line-height:1.92rem;

}
.chumMain .chumList .headList .shadow{
width: 1.20rem;
  height: 1.20rem;
  border-radius: 50%;
  background: rgba(00, 00, 00, .5);
  position: absolute;
  top: 0;left: 0;
}
.chumMain .chumList .headList .shadow>img{
  width: 0.32rem;
  height: 0.32rem;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
}
.chumMain .chumList .headList>img{
    width: 1.20rem;
  height: 1.20rem;
  border-radius: 50%;
}
 .buttonsum{
  width: 3.58rem;
  height: 0.80rem;
  background: #F5A623;
border-radius: 0.60rem;
font-size: 0.28rem;
color: #FFFFFF;
text-align: center;
line-height: 0.80rem;
margin: 0.37rem auto 0;
}

.mapMain{
   width: 100%;
   padding-top: 0.20rem;
}
.mapMain p{
     display: block;
     width: 6.90rem;
     margin: 0 auto;
  font-size: 0.32rem;
color: #222222;
  line-height: 0.80rem;
  font-weight: 600;
}
.mapMain>span{
   display: block;
     width: 6.90rem;
     margin: 0 auto;
     font-size: 0.28rem;
color: #555555;
margin-bottom: 0.19rem;
line-height: 0.41rem;
}
.mapMain span img{
  width: 0.41rem;
  height: 0.41rem;
  float: left;
}

.plotIntroduce{
   width: 100%;
   padding-top: 0.20rem;
   padding-bottom: 0.50rem;
}
.plotIntroduce p{
     display: block;
     width: 6.90rem;
     margin: 0 auto;
  font-size: 0.32rem;
color: #222222;
  line-height: 0.80rem;
  font-weight: 600;
}
.plotIntroduce span{
  display: block;
     width: 6.90rem;
     margin: 0 auto;
     font-size: 0.28rem;
    color: #555555;
}

.tipsWindown{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(00, 00, 00, .5);
  z-index: 9;
}
.expectationss{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  width: 5.80rem;
  height: 2.90rem;
  background: #fff;
  padding-top: 0.64rem;
  border-radius: 8px;
  padding-bottom: 0.32rem;
  z-index: 20;
}
.expectationss p{
  display: block;
  width: 100%;
  font-size: 0.28rem;
  color: #555555;
  text-align: center;
  margin-bottom: 0.32rem;
}
.chahao{
  height: 0.48rem;
  width: 0.48rem;
  position: absolute;
  top:0.22rem;
  right: 0.22rem;
}
.expectationss b{
  display: block;
  width: 5rem;
  margin: 0 auto;
  font-size: 0.28rem;
  color: #9B9B9B;
}
 .buttonsumss{
  width: 3.58rem;
  height: 0.80rem;
  background: #F5A623;
border-radius: 0.60rem;
font-size: 0.28rem;
color: #FFFFFF;
text-align: center;
line-height: 0.80rem;
margin: 0.37rem auto 0;
}

.expectation{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  width: 5.80rem;
  height: 4.04rem;
  background: #fff;
  padding-top: 0.64rem;
  border-radius: 8px;
  padding-bottom: 0.32rem;
  z-index: 20;
}
.expectation p{
  display: block;
  width: 100%;
  font-size: 0.28rem;
  color: #555555;
  text-align: center;
  margin-bottom: 0.32rem;
}
.expectation .sumList{
  width: 4rem;
  margin: 0 auto;
}
 .expectation .sumList .margins{
  margin-bottom: 0.32rem;
  height: 0.52rem;
}
 .expectation .sumList .gender{
  width: 100%;
  height: 0.52rem;
}
 .expectation .sumList span{
  float: left;
  font-size: 0.28rem;
  line-height: 0.52rem;
  color: #222222;
}
 .expectation .sumList .gender a, .expectation .sumList .pet a{
  display: inline-block;
  width: 1.40rem;
  height: 0.52rem;
  text-align: center;
  line-height: 0.52rem;
  background: #F5F5F5;
  border-radius: 0.04rem;
  font-size: 0.24rem;
  color: #555555;
  margin-left: 0.32rem;
}
 .expectation .sumList .gender .activeGender{
  background: rgba(254,139,37,0.20);
  color: #FE8B25;
}
 .expectation .sumList .pet .activePet{
  background: rgba(254,139,37,0.20);
  color: #FE8B25;
}
 .expectation .sumList .age a{
  display:block;
  text-align: center;
   width: 0.32rem;
  line-height: 0.52rem;
color: #555555;
float: left;
}
.expectation .sumList .age input{
   width: 1.40rem;
  height: 0.52rem;
   background: #F5F5F5;
  border-radius: 0.04rem;
  font-size: 0.24rem;
  color: #555555;
  text-align: center;
  float: left;
}
 .expectation .sumList .age .first1{
   margin-left: 0.32rem;
}
</style>