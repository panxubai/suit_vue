<template>
	<div class="container container1"  @scroll="paperScroll">
		<div class="headerS headerDetail" v-show="headersShw">
			<div class="backs" @click="refresh">
				<img src="../assets/image/ic_topbar_return.png" />
			</div>
			<div class="headerTitle">房屋详情</div>
			<div class="information" >
			</div>
		</div>
		<!--轮播-->
		<div class="swipeDiv">
			<img class="backImg" @click="refresh" src="../assets/image/ic_topbar_return_w.png" />
			<img class="fenxiangImg" @click="shareOpen" src="../assets/image/ic_topbar_transpond_w.png" />
			<mt-swipe ref="swipe" :auto="4000" :show-indicators="false" @change="handleChange">
				<mt-swipe-item><img src="https://www.suitius.com/tp5/public/uploads/houseimg/5ac2ed879a29e.jpg" preview="0"/></mt-swipe-item>
				<mt-swipe-item><img src="https://www.suitius.com/tp5/public/uploads/houseimg/5ac2ed879a29e.jpg" preview="0"/></mt-swipe-item>
				<mt-swipe-item><img src="https://www.suitius.com/tp5/public/uploads/houseimg/5ac2ed879a29e.jpg" preview="0"/></mt-swipe-item>
			</mt-swipe>
			<span>{{activeIndex}}/3</span>
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
				<img class='imageFace' src='../assets/resources/homeDetail/ic_suite_contact.png' />
				<span>homeArray.ca</span>
				<p @click="relationTap"><img src='../assets/resources/homeDetail/ic_suite_contact.png' />联系业主</p>
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
						<img src='../assets/resources/homeDetail/ic_suite_balcony9.png' />
						<a>空调</a>
					</div>

				</div>

			</div>
		</div>

		<div class='flatmate'>
			<div class='flatTop'>
				合租室友推荐
				<div class='questionDiv' @click='questionTap'>
					<img class='question' src='../assets/resources/homeDetail/ic_suit_question.png' />
				</div>
				<b @click='showtapSd'>
        设定
        <img src='../assets/resources/homeDetail/ic_more_down.png'/>
      </b>
			</div>
			<p  v-show="taolunzuShow">你对室友的期望是？</p>
			<div class='chumMain' v-show="!taolunzuShow">
				<b>选择推荐室友加入讨论组</b>
				<div class='chumList'>
					<div class="scrolls">
						<!--<P wx:if="{{peopleArr.length == 0}}">没有搜索到合租室友哦，请更换条件重新搜索哦</P>-->
						<div class='headList'>

							<img src="../assets/resources/homeDetail/ic_more_down.png" />
							<span>tem.call</span>
							<div class='shadow'>
								<img src='../assets/resources/questionnaire/ic_boy6.png' />
							</div>
						</div>
						<div class='headList'>

							<img src="../assets/resources/homeDetail/ic_more_down.png" />
							<span>tem.call</span>
							<div class='shadow'>
								<img src='../assets/resources/questionnaire/ic_boy6.png' />
							</div>
						</div>
						<div class='headList'>

							<img src="../assets/resources/homeDetail/ic_more_down.png" />
							<span>tem.call</span>
							<div class='shadow'>
								<img src='../assets/resources/questionnaire/ic_boy6.png' />
							</div>
						</div>
						<div class='headList'>

							<img src="../assets/resources/homeDetail/ic_more_down.png" />
							<span>tem.call</span>
							<div class='shadow'>
								<img src='../assets/resources/questionnaire/ic_boy6.png' />
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
        <img src='../assets/resources/ic_list_sign.png'/>
         omeArray.house_info.m
     </span>
			<div id="maps" style="width: 100%; height: 3.3rem;"></div>
		</div>

		<div class='plotIntroduce'>
			<p>小区介绍</p>
			<span>meArray.house_info.descri</span>
		</div>
		
		<div class="detailBottom">
			<div class="enshrine" @click="enshrineTap">
				<img v-if="enshrineS" src="../assets/image/tabbar_ic_heart_h1.png"/>
				<img v-else src="../assets/image/tabbar_ic_heart_h2.png"/>
				<p></p>
			</div>
			<div class="relationFd" @click="relationTap">
				联系业主
			</div>
			<div class="contract" @click="linkContract">
				线上签约
			</div>	
		</div>
		
		<!--分享功能-->
		<div class='tipsWindown' v-show="shareShow" @click="shareClose"></div>
		<div class="shareGn">
			<img class='chahao' @click="shareClose" src='../assets/resources/homeDetail/ic_pop_close.png'/>
			<p>分享房屋</p>
			<ul>
				<li>
					<img src="../assets/image/ic_login_wechat.png"/>
					<span>微信好友</span>
				</li>
				<li>
					<img src="../assets/image/ic_login_wechat.png"/>
					<span>微信好友</span>
				</li>
				<li>
					<img src="../assets/image/ic_login_wechat.png"/>
					<span>微信好友</span>
				</li>
				<li>
					<img src="../assets/image/ic_login_wechat.png"/>
					<span>微信好友</span>
				</li>
				<li>
					<img src="../assets/image/ic_login_wechat.png"/>
					<span>微信好友</span>
				</li>
				<li>
					<img src="../assets/image/ic_login_wechat.png"/>
					<span>微信好友</span>
				</li>
			</ul>
		</div>

		<!-- 点击问号跳出弹出框 -->
		<div class='tipsWindown' v-show="questionShow" @click='yesTapCh'></div>
		<div class='expectationss' v-show="questionShow">
			<p>合租室友推荐是什么？</p>
			<!-- <img class='chahao' src='../assets/resources/homeDetail/ic_pop_close.png' @click='yesTapCh'/>-->
			<b>可以筛选出你想合租的室友,选中后可以创建讨论组,一起商量合租等事宜。</b>
			<div class='buttonsumss' @click='yesTapCh'>知道了</div>
		</div>

		<!-- 点击设定跳出弹出框 -->
		<div class='tipsWindown' v-show="tipsWindownMenuIsShow" @click='hidenTipTap'></div>
		<div class='expectation' v-show="tipsWindownMenuIsShow">
			<p>你对室友的期望是？</p>
			<!--<img class='chahao' src='../assets/resources/homeDetail/ic_pop_close.png' @click='hidenTipTap'/>-->
			<div class='sumList'>
				<div class='gender margins'>
					<span>性别</span>
					<a :class="genderIndex == 1? 'activeGender' : ''" @click='genderTap(1)' data-index="1">男</a>
					<a :class="genderIndex == 0? 'activeGender' : ''" @click='genderTap(0)' data-index="0">女</a>
				</div>
				<div class='age margins'>
					<span>年龄</span>
					<input class='first1' oninput='if(value.length>2)value=value.slice(0,2)' type='number' v-model='ageLitterValue' />
					<a>-</a>
					<input oninput='if(value.length>2)value=value.slice(0,2)' type='number' v-model='ageBigValue' />
				</div>
				<div class='pet margins'>
					<span>宠物</span>
					<a :class="petIndex == 1? 'activePet' : ''" @click='petTap(1)' data-index="1">有</a>
					<a :class="petIndex == 0? 'activePet' : ''" @click='petTap(0)' data-index="0">无</a>
				</div>
			</div>
			<div class='buttonsum' @click="jointBtnTap">提交</div>
		</div>
<transition name="router-slid" mode="out-in">
            <router-view></router-view>
        </transition>
	</div>

</template>

<script>
	var that;
	var options={
				fullscreenEl:false //关闭全屏按钮
			}
	import Vue from 'vue'
	import preview from 'vue-photo-preview'
	import 'vue-photo-preview/dist/skin.css'
	Vue.use(preview,options)
	export default {

		data() {
			return {
				headersShw:false,
				questionShow: false,//点击问号
				tipsWindownMenuIsShow: false,//对势有的期望
				enshrineS:false,//true收藏false不受藏
				taolunzuShow:true,//推荐室友
				genderIndex: 1,//性别
				petIndex: 1,//宠物
				ageLitterValue: "",//年龄
				ageBigValue: "",//年龄
				activeIndex:1,//swper当前索引
				shareShow:false,//分享功能
				opacityH:0
			}
		},
		created: function () {
		that = this;
    },
		mounted() {

			var data = {　　　　　　
				address: "上海市宝山区好日子大家园A区",
				　　　　　　key: "TQMBZ-XHTHS-SDVOE-6PJ5A-SV5AO-ZOBE5",
				　　　　　　get_poi: 0　　　　
			}
			var url = "http://apis.map.qq.com/ws/geocoder/v1/?";
			data.output = "jsonp";
			$.ajax({
				type: "get",
				dataType: 'jsonp',
				data: data,
				jsonp: "callback",
				jsonpCallback: "QQmap",
				url: url,
				success: function(data) {
					console.log(data)
					mapShow(data.result.location.lat, data.result.location.lng)
				},
				error: function(err) {
					alert("服务端错误，请刷新浏览器后重试")
				}

			})
 			console.log(this.$refs.swipe.index)
		},
		methods: {
			refresh: function() {
				window.history.go(-1)
			},
			paperScroll:function(e){
				if($('.container1').scrollTop()>=$('.headerDetail').height()){
					that.headersShw = true
				}else{
					that.headersShw = false
				}
				$(".headerDetail").css("opacity",($('.container1').scrollTop()-$('.headerDetail').height())*0.01)
			},
			//轮播索引
			 handleChange:function(index){
			 	this.activeIndex = index+1;
			 },
			//点击联系业主
			relationTap:function(){
				this.$router.push({path:'/relationFD'});
			},
			//点击推荐室友提交按钮
			jointBtnTap:function(){
				this.taolunzuShow = false;
				this.tipsWindownMenuIsShow = false
			},
			//点击问号出现提示
			questionTap: function() {
				this.questionShow = true
			},
			//点击阴影部分消失
			yesTapCh: function() {
				this.questionShow = false
			},
			//点击设定出现
			showtapSd: function() {
				this.tipsWindownMenuIsShow = true
			},
			//点击阴影部分消失
			hidenTipTap: function() {
				this.tipsWindownMenuIsShow = false
			},
			//点击选择男女
			genderTap: function(val) {
				this.genderIndex = val
			},
			//点击选择宠物
			petTap: function(val) {
				this.petIndex = val
			},
			//打开分享
			shareOpen:function(){
				this.shareShow = true;
				$('.shareGn').animate({
						bottom: '0'
				},200)
			},
			//关闭分享
			shareClose:function(){
				this.shareShow = false;
				$('.shareGn').animate({
						bottom: '-6rem'
				},200)
			},
			//点击线上签约
			linkContract:function(){
				console.log(321312)
				this.$router.push({path:'/linkContract'});
			},
			//收藏房源
			enshrineTap:function(){
				if(this.enshrineS){
					this.enshrineS = false
				}else{
					this.enshrineS = true
				}
				
			},
		}
	}

	function mapShow(lat, lng) {
		console.log(lat, lng)
		var center = new qq.maps.LatLng(lat, lng);
		var map = new qq.maps.Map(document.getElementById("maps"), {
			center: center,
			zoom: 16
		});
		//创建一个Marker
		var marker = new qq.maps.Marker({
			//设置Marker的位置坐标
			position: center,
			//设置显示Marker的地图
			map: map
		});
		var anchor = new qq.maps.Point(0, 39),
			size = new qq.maps.Size(30, 39),
			origin = new qq.maps.Point(0, 0),
			scaleSize = new qq.maps.Size(30, 39),
			icon = new qq.maps.MarkerImage(
				"data:image/png;base64,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",
				size,
				origin,
				anchor,
				scaleSize
			);
		marker.setIcon(icon);

	}
</script>

<style scoped>
	.container {
		font-size: 0;
		padding-bottom: 0.98rem;
		z-index: 105;
		 position: fixed;
		top: 0;
		left: 0;
        right: 0;
        bottom: 0;
        overflow-y:scroll; 
	}
	.headerS{
		opacity: 0;
	}
	a {
		text-decoration: none;
	}
	
	.swipeDiv {
		height: 4.22rem;
		width: 100%;
		position: relative;
	}
	.swipeDiv span{
		padding: 0 0.23rem;
		background: rgba(0,0,0,0.60);
		border-radius: 0.30rem;
		font-size: 0.28rem;
		color: #FFFFFF;
		line-height: 0.4rem;
		position: absolute;
		bottom: 0.32rem;
		right: 0.4rem;
	}
	.backImg {
		width: 0.48rem;
		height: 0.48rem;
		position: absolute;
		top: 0.2rem;
		z-index: 9;
		left: 0.33rem;
	}
	.headerS {
		box-shadow: 0 0.04rem 0.08rem 0 rgba(0, 0, 0, 0.10);
	}
	.fenxiangImg {
		width: 0.48rem;
		height: 0.48rem;
		position: absolute;
		top: 0.2rem;
		right: 0.33rem;
		z-index: 9;
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
	
	.flatmate {
		width: 100%;
		border-bottom: 0.20rem solid #eff3f6;
		padding-top: 0.20rem;
		padding-bottom: 0.27rem;
	}
	
	.flatmate .flatTop {
		width: 6.90rem;
		margin: 0 auto;
		font-size: 0.32rem;
		color: #222222;
		line-height: 0.80rem;
		font-weight: 600;
	}
	
	.flatmate .flatTop .questionDiv {
		display: inline-block;
		height: 0.80rem;
		width: 0.32rem;
	}
	
	.flatmate .flatTop .question {
		width: 0.32rem;
		height: 0.32rem;
		position: relative;
		top: 0.05rem;
		left: 0.10rem;
	}
	
	.flatmate .flatTop b {
		float: right;
		font-size: 0.28rem;
		color: #FE8B25;
	}
	
	.flatmate .flatTop b img {
		width: 0.32rem;
		height: 0.32rem;
		float: right;
		margin-top: 0.24rem;
		margin-left: 0.10rem;
	}
	
	.flatmate p {
		display: block;
		width: 6.90rem;
		margin: 0 auto;
		font-size: 0.28rem;
		color: #555555;
	}
	
	.chumMain {
		width: 6.90rem;
		margin: 0 auto;
	}
	
	.chumMain b {
		font-size: 0.28rem;
		color: #555555;
	}
	
	.chumMain .chumList {
		width: 100%;
		overflow-x: auto;
		height: 2rem;
		padding-top: 0.36rem;
		box-sizing: border-box;
	}
	
	.chumMain .chumList .scrolls {
		width: 16rem;
		height: 100%;
		overflow: hidden;
		font-size: 0;
	}
	
	.chumMain .chumList .headList {
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
	
	.chumMain .chumList .headList span {
		display: block;
		width: 100%;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	
	.chumMain .chumList p {
		text-align: center;
		font-size: 0.27rem;
		color: #555555;
		line-height: 1.92rem;
	}
	
	.chumMain .chumList .headList .shadow {
		width: 1.20rem;
		height: 1.20rem;
		border-radius: 50%;
		background: rgba(00, 00, 00, .5);
		position: absolute;
		top: 0;
		left: 0;
	}
	
	.chumMain .chumList .headList .shadow>img {
		width: 0.32rem;
		height: 0.32rem;
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		margin: auto;
	}
	
	.chumMain .chumList .headList>img {
		width: 1.20rem;
		height: 1.20rem;
		border-radius: 50%;
	}
	
	.buttonsum {
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
	
	.mapMain {
		width: 100%;
		padding-top: 0.20rem;
	}
	
	.mapMain p {
		display: block;
		width: 6.90rem;
		margin: 0 auto;
		font-size: 0.32rem;
		color: #222222;
		line-height: 0.80rem;
		font-weight: 600;
	}
	
	.mapMain>span {
		display: block;
		width: 6.90rem;
		margin: 0 auto;
		font-size: 0.28rem;
		color: #555555;
		margin-bottom: 0.19rem;
		line-height: 0.41rem;
	}
	
	.mapMain span img {
		width: 0.41rem;
		height: 0.41rem;
		float: left;
	}
	
	.plotIntroduce {
		width: 100%;
		padding-top: 0.20rem;
		padding-bottom: 0.50rem;
	}
	
	.plotIntroduce p {
		display: block;
		width: 6.90rem;
		margin: 0 auto;
		font-size: 0.32rem;
		color: #222222;
		line-height: 0.80rem;
		font-weight: 600;
	}
	
	.plotIntroduce span {
		display: block;
		width: 6.90rem;
		margin: 0 auto;
		font-size: 0.28rem;
		color: #555555;
	}
	
	.tipsWindown {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(00, 00, 00, .5);
		z-index: 9;
	}
	
	.expectationss {
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
	
	.expectationss p {
		display: block;
		width: 100%;
		font-size: 0.28rem;
		color: #555555;
		text-align: center;
		margin-bottom: 0.32rem;
	}
	
	.chahao {
		height: 0.48rem;
		width: 0.48rem;
		position: absolute;
		top: 0.22rem;
		right: 0.22rem;
	}
	
	.expectationss b {
		display: block;
		width: 5rem;
		margin: 0 auto;
		font-size: 0.28rem;
		color: #9B9B9B;
	}
	
	.buttonsumss {
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
	
	.expectation {
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
	
	.expectation p {
		display: block;
		width: 100%;
		font-size: 0.28rem;
		color: #555555;
		text-align: center;
		margin-bottom: 0.32rem;
	}
	
	.expectation .sumList {
		width: 4rem;
		margin: 0 auto;
	}
	
	.expectation .sumList .margins {
		margin-bottom: 0.32rem;
		height: 0.52rem;
	}
	
	.expectation .sumList .gender {
		width: 100%;
		height: 0.52rem;
	}
	
	.expectation .sumList span {
		float: left;
		font-size: 0.28rem;
		line-height: 0.52rem;
		color: #222222;
	}
	
	.expectation .sumList .gender a,
	.expectation .sumList .pet a {
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
	
	.expectation .sumList .gender .activeGender {
		background: rgba(254, 139, 37, 0.20);
		color: #FE8B25;
	}
	
	.expectation .sumList .pet .activePet {
		background: rgba(254, 139, 37, 0.20);
		color: #FE8B25;
	}
	
	.expectation .sumList .age a {
		display: block;
		text-align: center;
		width: 0.32rem;
		line-height: 0.52rem;
		color: #555555;
		float: left;
	}
	
	.expectation .sumList .age input {
		width: 1.40rem;
		height: 0.52rem;
		background: #F5F5F5;
		border-radius: 0.04rem;
		font-size: 0.24rem;
		color: #555555;
		text-align: center;
		float: left;
	}
	
	.expectation .sumList .age .first1 {
		margin-left: 0.32rem;
	}
	
	.detailBottom{
		width: 100%;
		height: 0.98rem;
		background: #fff;
		position: fixed;
		bottom: 0;
		left: 0;
		display: flex;
		border-top:1px solid #eee;
	}
	.detailBottom .enshrine{
		width: 1.62rem;
		text-align: center;
		position: relative;
	}
	.detailBottom .enshrine img{
		width: 0.54rem;
		height: 0.54rem;
		margin-top: 0.22rem;
	}
	.detailBottom .enshrine p{
		width: 1px;
		height: 0.32rem;
		background: #eee;
		position: absolute;
		right: 0;
		top: 0.33rem;
		
	}
	.detailBottom .relationFd{
		width: 2.36rem;
		text-align: center;
		font-size: 0.32rem;
		color: #555555;
		line-height: 0.98rem;
	}
	.detailBottom .contract{
		flex: 1;
		text-align: center;
		font-size: 0.32rem;
		color: #fff;
		line-height: 0.98rem;
		background: #F5A623;
	}
	.shareGn{
		width: 100%;
		height: 6rem;
		background: #FFF;
		position: fixed;
		bottom:-6rem;
		left: 0;
		z-index: 99;
	}
	.shareGn p{
		font-size: 0.32rem;
		color: #9B9B9B;
		line-height: 0.9rem;
		margin-left: 0.4rem;
	}
	.shareGn ul{
		width: 100%;
		display: flex;
		flex-wrap: wrap;
	}
	.shareGn ul li{
		width: 33.3%;
		margin-top: 0.7rem;
		text-align: center;
	}
	.shareGn ul li img{
		height: 1rem;
		width: 1rem;
	}
	.shareGn ul li span{
		display: block;
		margin-top: 0.15rem;
		text-align: center;
		font-size: 0.28rem;
color: #4A4A4A;
	}
	.router-slid-enter-active, .router-slid-leave-active {
        transition: transform .2s;
    }
    .router-slid-enter, .router-slid-leave-active {
        transform: translate3d(100%, 0, 0);
    }
</style>