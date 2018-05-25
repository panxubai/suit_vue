<template>
	<!--pages/searchEnd/searchEnd.wxml-->
	<div class='container'>
		<div class='screenEnd'>
			<div class='searchsum' style="z-index:25;">
				<div class="backsearch" @click="refresh">
					<img src="../assets/image/ic_topbar_return.png" />
				</div>
				<router-link :to="{path:'searchs',query:{gid:2}}">
					<div class='searchs'> {{addressEnd}}</div>
				</router-link>
				<img class="chahaos" @click="eliminateTap" src='https://www.suitius.com/image/resources/ic_search_closs.png' />

			</div>
			<div class='screenMain' style="z-index:25;">
				<div class="screenLeft" :class="selectIndex == 1? 'activeSolt' : ''" @click="soltTap">
					排序
					<p></p>
				</div>
				<div class="screenRight" :class="selectIndex == 2? 'activeSolt' : ''" @click="screenTap">
					筛选
					<p></p>
				</div>
				<div class='gang'></div>
			</div>
			<!-- 阴影 -->
			<div class="dialog-mask " v-show="soltMenuIsShow" @click='maskTap'></div>
			<!-- 排序 -->
			<div class='soltEnd'>
				<p v-for="(item,index) in sortArr" :data-index="index" :data-mian="item" :class="soltIndex == index? 'activeSolt' : ''" @click="soltTapSure">{{item}}</p>
			</div>
			<!-- 阴影 -->
			<div class="dialog-mask " v-show="screenMenuIsShow" @click='maskTapScreen'></div>
			<!-- 筛选 -->
			<div class='screenEndShow'>
				<div class='screenScroll'>
					<div class="scrollDiv">
						<div class='composite composite1'>
							<p>综合</p>
							<span v-for="(item,index) in compositeArr1" :data-index="index" :data-mian="item" @click='screenTapSure1(index)' :class="soltIndex1 == index? 'activeScreen' : ''">{{item}}</span>
						</div>
						<div class='composite composite2'>
							<p>预算</p>
							<span v-for="(item,index) in compositeArr2" :data-index="index" :data-mian="item" @click='screenTapSure2(index)' :class="soltIndex2 == index? 'activeScreen' : ''">{{item}}</span>
						</div>
						<div class='composite composite3'>
							<p>装修风格</p>
							<span v-for="(item,index) in compositeArr3" :data-index="index" :data-mian="item" @click='screenTapSure3(index)' :class="soltIndex3 == index? 'activeScreen' : ''">{{item}}</span>
						</div>
						<div class='composite composite4'>
							<p>户型</p>
							<span v-for="(item,index) in compositeArr4" :data-index="index" :data-mian="item" @click='screenTapSure4(index)' :class="soltIndex4[index] == index? 'activeScreen' : ''">{{item}}</span>
						</div>
						<div class='composite composite5'>
							<p>偏好</p>
							<span v-for="(item,index) in compositeArr5" :data-index="index" :data-mian="item" @click='screenTapSure5(index)' :class="soltIndex5[index] == index? 'activeScreen' : ''">{{item}}</span>
						</div>
					</div>
					<div class='bottomSareen'>
						<div class='NoConditions' bindtap="hidenUnlimited">条件不限</div>
						<div class='confirm' bindtap="showConfirm">确定</div>
					</div>
				</div>
			</div>
		</div>

		<!--<div class='noHome'>
     <img src='../../resources/restImg/img_missing_card2.png'/>
        <text>哦哟~列表为空</text>
    </div>  -->

		<div class='searchEndBox'>
			<!-- 开始 -->
			<div class='searchEndList'>
				<div class='leftImg'>
					<img src='https://www.suitius.com/tp5/public/uploads/houseimg/5acace442e7c0.jpg' />
				</div>
				<div class='rightMain'>
					<p>好日子大家园</p>
					<div class='nameImgPic'>
						<img src='https://www.suitius.com/image/resources/ic_list_sign.png'>
						<span>潘旭白</span>
						<b>60000<a>元/月</a></b>

					</div>
					<h6>三室一厅㎡</h6>
					<div class='addessSum'>
						<img src='https://www.suitius.com/image/resources/ic_list_sign.png' />
						<span>距离江湾体育场3km</span>
					</div>
				</div>
			</div>
			<!-- 结束 -->

		</div>

	</div>

</template>

<script>
	var that;
	export default {
		data() {
			return {
				soltMenuIsShow: false, //排序遮罩层
				screenMenuIsShow: false, //筛选的遮罩层
				selectIndex: 0, //点击排序和筛选
				addressEnd: "请输入地址", //地址*
				addressType: "", //地址类型*
				sortArr: ["综合", "价格", "便利", "舒适"],
				soltIndex: 0,
				compositeArr1: ["整租", "合租", "不限"],
				compositeArr2: ["1500以下", "1500-2500", "2500-3500", "3500-4500", "4500-8000", "8000以上"],
				compositeArr3: ["简装", "精装", "毛坯", "不限"],
				compositeArr4: ["一室", "二室", "三室", "四室及以上"],
				compositeArr5: ["阳台", "智能锁", "花园"],
				soltIndex1: -1, //综合筛选
				soltIndex2: -1, //预算筛选
				soltIndex3: -1, //装修风格筛选
				soltIndex4: [-1, -1, -1, -1], //户型筛选
				soltIndex5: [-1, -1, -1], //偏好筛选
			}
		},
		created: function() {
			that = this;
			//用户选择地址
			this.addressEnd = this.$route.query.text || "请输入地址";
			this.addressType = this.$route.query.type || "";
		},
		methods: {
			refresh: function() {
				window.history.go(-1)
			},
			//点击差号清空地址
			eliminateTap: function() {
				this.$router.replace({
					path: '/searchEnd'
				});
				this.addressEnd = "请输入地址";
				this.addressType = "";
			},
			//点击排序
			soltTap: function() {
				if(this.soltMenuIsShow) {
					this.soltMenuIsShow = false;
					this.selectIndex = 0;
					$('.soltEnd').animate({
						top: '-3rem'
					})
				} else {
					this.screenMenuIsShow = false;
					this.selectIndex = 0;
					$('.screenEndShow').animate({
						top: '-7rem'
					})
					this.soltMenuIsShow = true;
					this.selectIndex = 1;
					$('.soltEnd').animate({
						top: '1.89rem'
					})
				}

			},
			//点击遮罩层消失
			maskTap: function() {
				this.soltMenuIsShow = false;
				this.selectIndex = 0;
				$('.soltEnd').animate({
					top: '-3rem'
				})
			},
			//点击用什么排序
			soltTapSure: function(e) {
				this.soltIndex = e.target.dataset.index;
			},
			//点击筛选
			screenTap: function() {
				if(this.screenMenuIsShow) {
					this.screenMenuIsShow = false;
					this.selectIndex = 0;
					$('.screenEndShow').animate({
						top: '-7rem'
					})
				} else {
					this.soltMenuIsShow = false;
					this.selectIndex = 0;
					$('.soltEnd').animate({
						top: '-3rem'
					})
					this.screenMenuIsShow = true;
					this.selectIndex = 2;
					$('.screenEndShow').animate({
						top: '1.89rem'
					})
				}
			},
			maskTapScreen: function() {
				this.screenMenuIsShow = false;
				this.selectIndex = 0;
				$('.screenEndShow').animate({
					top: '-7rem'
				})
			},
			screenTapSure1: function(index) {
				if(this.soltIndex1 == index) {
					this.soltIndex1 = -1;
				} else {
					this.soltIndex1 = index;
				}
			},
			screenTapSure2: function(index) {
				if(this.soltIndex2 == index) {
					this.soltIndex2 = -1;
				} else {
					this.soltIndex2 = index;
				}
			},
			screenTapSure3: function(index) {
				if(this.soltIndex3 == index) {
					this.soltIndex3 = -1;
				} else {
					this.soltIndex3 = index;
				}
			},
			screenTapSure4: function(index) {
				if(this.soltIndex4[index] == index) {
					this.$set(this.soltIndex4, index, -1);
				} else {
					this.$set(this.soltIndex4, index, index);
				}
			},
			screenTapSure5: function(index) {
				if(this.soltIndex5[index] == index) {
					this.$set(this.soltIndex5, index, -1);
				} else {
					this.$set(this.soltIndex5, index, index);
				}
			},
		}
	}
</script>

<style style>
	a {
		text-decoration: none;
	}
	
	.screenEnd {
		width: 100%;
		position: fixed;
		top: 0;
	}
	
	.searchsum {
		width: 100%;
		height: 0.84rem;
		position: relative;
		background: #fff;
		padding: 0.1rem 0.3rem;
		box-sizing: border-box;
	}
	
	.searchsum .backsearch {
		width: 0.48rem;
		height: 0.48rem;
		float: left;
		margin-top: 0.1rem;
	}
	
	.searchsum .backsearch img {
		width: 0.48rem;
		height: 0.48rem;
		float: left;
	}
	
	.searchsum .chahaos {
		position: absolute;
		width: 0.48rem;
		height: 0.48rem;
		top: 0.18rem;
		right: 0.5rem;
	}
	
	.searchsum .searchs {
		width: 6.1rem;
		height: 0.64rem;
		background: #F8F8F8;
		border-radius: 0.6rem;
		margin: 0 auto;
		font-family: PingFangSC-Regular;
		font-size: 0.28rem;
		color: #9B9B9B;
		letter-spacing: 0;
		line-height: 0.64rem;
		padding-left: 0.32rem;
		box-sizing: border-box;
		float: right;
	}
	
	.screenMain {
		width: 100%;
		height: 1.09rem;
		background: #FFFFFF;
		box-shadow: 0 0.04rem 0.08rem 0 rgba(0, 0, 0, 0.10);
		position: relative;
	}
	
	.screenMain .screenLeft,
	.screenMain .screenRight {
		width: 50%;
		float: left;
		box-sizing: border-box;
		padding-left: 1.33rem;
		line-height: 1.09rem;
		position: relative;
		font-size: 0.32rem;
		color: #222222;
	}
	
	.screenMain .screenLeft p,
	.screenMain .screenRight p {
		width: 0;
		height: 0;
		border-width: 0.1rem;
		border-style: solid;
		border-color: #999 transparent transparent transparent;
		position: absolute;
		top: 0.5rem;
		right: 1.33rem;
	}
	
	.screenMain .gang {
		width: 0.02rem;
		height: 0.32rem;
		background: #EEEEEE;
		position: absolute;
		left: 50%;
		top: 0.38rem;
	}
	
	.dialog-mask {
		width: 100%;
		height: 100%;
		position: fixed;
		top: 1.88rem;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 8;
		background: rgba(0, 0, 0, 0.3);
	}
	
	.soltEnd {
		position: absolute;
		top: -3rem;
		background: #fff;
		z-index: 20;
		width: 100%;
	}
	
	.soltEnd p {
		display: block;
		width: 6.9rem;
		margin: 0 auto;
		text-align: center;
		line-height: 1.09rem;
		border-top: 1px solid #E5E5E5;
		font-size: 0.32rem;
		color: #222222;
	}
	
	.screenMain .activeSolt {
		color: #FE8B25;
	}
	
	.soltEnd .activeSolt {
		color: #FE8B25;
	}
	
	.screenMain .activeSolt p {
		border-color: #FE8B25 transparent transparent transparent;
	}
	
	.screenEndShow {
		width: 100%;
		height: 7rem;
		position: absolute;
		top: -7rem;
		background: #fff;
		z-index: 20;
	}
	
	.screenScroll {
		width: 6.9rem;
		height: 5.8rem;
		margin: 0 auto;
		overflow-y: auto;
	}
	/*.screenScroll .scrollDiv{
	height: 5.8rem;
}*/
	
	.screenScroll .composite {
		width: 100%;
		font-size: 0;
	}
	
	.screenScroll .composite p {
		display: block;
		font-family: PingFangSC-Medium;
		font-size: 0.32rem;
		color: #222222;
		font-weight: 800;
		letter-spacing: 0;
		line-height: 1.05rem;
	}
	
	.composite {
		border-bottom: 1px solid #E5E5E5;
		padding-bottom: 0.08rem;
	}
	
	.screenScroll .composite span {
		display: inline-block;
		height: 0.52rem;
		background: #F5F5F5;
		border-radius: 0.04rem;
		text-align: center;
		line-height: 0.52rem;
		font-size: 0.24rem;
		color: #555555;
		margin-bottom: 0.24rem;
	}
	
	.screenScroll .composite1 span {
		width: 1.4rem;
		margin-right: 0.32rem;
	}
	
	.screenScroll .composite2 span,
	.screenScroll .composite3 span {
		width: 2rem;
	}
	
	.screenScroll .composite2 span:nth-child(3),
	.screenScroll .composite3 span:nth-child(3) {
		margin: 0 0.32rem;
	}
	
	.screenScroll .composite2 span:nth-child(6),
	.screenScroll .composite3 span:nth-child(6) {
		margin: 0 0.32rem;
	}
	
	.screenScroll .composite4 span {
		width: 1.4rem;
		margin-right: 0.32rem;
	}
	
	.screenScroll .composite4 span:last-child {
		width: 1.73rem;
		margin-right: 0;
	}
	
	.screenScroll .composite5 span {
		width: 1.4rem;
		margin-right: 0.32rem;
	}
	
	.screenScroll .composite5 {
		border: none;
	}
	
	.bottomSareen {
		width: 6.9rem;
		height: 1.2rem;
		position: absolute;
		bottom: 0;
		background: #fff;
		border-top: 1px solid rgba(0, 0, 0, 0.10);
	}
	
	.bottomSareen .NoConditions {
		width: 3rem;
		height: 0.8rem;
		background: #F5F5F5;
		border-radius: 0.6rem;
		font-size: 0.28rem;
		color: #9B9B9B;
		line-height: 0.8rem;
		text-align: center;
		float: left;
		margin-top: 0.19rem;
	}
	
	.bottomSareen .confirm {
		width: 3rem;
		height: 0.8rem;
		background: #F5A623;
		border-radius: 0.6rem;
		font-size: 0.28rem;
		color: #FFFFFF;
		line-height: 0.8rem;
		text-align: center;
		float: right;
		margin-top: 0.19rem;
	}
	
	.screenScroll .composite .activeScreen {
		background: rgba(254, 139, 37, 0.20);
		color: #FE8B25;
	}
	
	.searchEndBox {
		width: 100%;
		padding-top: 1.88rem;
	}
	
	.searchEndList {
		width: 6.9rem;
		height: 3.21rem;
		margin: 0 auto;
		box-sizing: border-box;
		padding: 0.4rem 0;
		border-bottom: 1px solid #E5E5E5;
	}
	
	.searchEndList .leftImg {
		width: 2.4rem;
		height: 2.4rem;
		float: left;
	}
	
	.searchEndList .leftImg img {
		width: 2.4rem;
		height: 2.4rem;
	}
	
	.searchEndList .rightMain {
		width: 4.18rem;
		height: 2.4rem;
		float: right;
	}
	
	.searchEndList .rightMain p {
		display: block;
		font-size: 0.32rem;
		color: #222222;
		font-weight: 700;
		margin-bottom: 0.25rem;
	}
	
	.searchEndList .rightMain h6 {
		font-size: 0.28rem;
		color: #9B9B9B;
		line-height: 0.76rem;
	}
	
	.searchEndList .rightMain .nameImgPic {
		height: 0.62rem;
	}
	
	.searchEndList .rightMain .nameImgPic img {
		width: 0.4rem;
		height: 0.4rem;
		background: #D8D8D8;
		border-radius: 50%;
		border: 1px solid #979797;
		float: left;
		margin-top: 0.11rem;
		margin-right: 0.16rem;
	}
	
	.searchEndList .rightMain .nameImgPic span {
		font-size: 0.28rem;
		color: #222222;
		line-height: 0.62rem;
		float: left;
	}
	
	.searchEndList .rightMain .nameImgPic b {
		float: right;
		font-size: 0.44rem;
		color: #FE8B25;
		line-height: 0.62rem;
	}
	
	.searchEndList .rightMain .nameImgPic a {
		float: right;
		font-size: 0.28rem;
		color: #FE8B25;
		line-height: 0.68rem;
	}
	
	.searchEndList .addessSum img {
		width: 0.4rem;
		height: 0.4rem;
		float: left;
	}
	
	.searchEndList .addessSum span {
		font-size: 0.28rem;
		color: #9B9B9B;
		float: left;
		line-height: 0.4rem;
	}
	
	.noHome {
		width: 100%;
		text-align: center;
	}
	
	.noHome img {
		width: 2.6rem;
		height: 2.6rem;
		margin-top: 2.5rem;
	}
	
	.noHome text {
		display: block;
		font-size: 0.32rem;
		color: #9B9B9B;
		margin-top: 0.48rem;
	}
</style>