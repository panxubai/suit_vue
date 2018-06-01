<template>
	<div class="container">
		<div class="headerS">
			<div class="backs">

			</div>
			<div class="headerTitle">SUIT</div>
			<div class="information" @click="tapMessage">
				<img src="../assets/image/ic_landlord_bag3.png" />
			</div>

		</div>
		<div class='home_hander'>

			<div class="mine_renting" :class="Rentin?'active_color':''" @click="tapRentin">
				<b>我是客户</b>
				<p v-show="Rentin"></p>
			</div>
			<span></span>
			<div class="mine_landlord" :class="landlord?'active_color':''" @click="tapLandlord">
				<b>我是业主</b>

				<p v-show="landlord"></p>
			</div>
			<!--<div class='mine_new'>

				<img src='https://www.suitius.com/image/resources/ic_topbar_information.png' />
				<p></p>
			</div>-->
		</div>

		<div class="home_mine_renting" v-show="Rentin">
			<div class='renting_top'>
				<div class=' searchBox'>
					<div class='searchCity'>
						<router-link to="/selectCity">
							<b>上海</b>
							<p></p>
							<span></span>
						</router-link>
					</div>
					<div class='searchMain'>
						<router-link :to="{path:'/searchS',query: {gid: 1}}">
							<img class="icon1" src="../assets/ic_search.png" />
							<div class='searchTiao'>{{addressId}}</div>
						</router-link>
						<img class="chahao1" src='https://www.suitius.com/image/resources/ic_search_closs.png' @click="eliminateTap" />
					</div>
				</div>
			</div>

			<!-- 筛选 -->
			<div class='home_screen'>
				<div class='home_screen_sum'>
					<div class='screen_top'>
						<div class='budgeting'>
							<b>预算</b>
							<div class='budgeting_little' @click='budgetingMin'>
								{{budgetMinrYes}}
								<p></p>
							</div>
							-
							<div class='budgeting_more' @click='budgetingMax'>
								{{budgetMaxrYes}}
								<p></p>
							</div>
						</div>
						<div class='styleFish'>
							<b>装修风格</b>
							<div class='styleFish_option' @click='styletap'>
								{{styleFishYes}}
								<p></p>
							</div>
						</div>
					</div>

					<div class='screen_bottom'>
						<b>构成</b>
						<div class='screen_relation screen_relation_max'>
							<span>关系</span>
							<div class='screen_relation_option' @click='relationtap'>
								{{relationYes}}
								<p></p>
							</div>
						</div>
						<div class='screen_relation'>
							<span>成人</span>
							<div class='screen_relation_option screen_relation_num' @click='adultTap'>
								{{numberYes1}}
								<p></p>
							</div>
						</div>
						<div class='screen_relation'>
							<span>儿童</span>
							<div class='screen_relation_option screen_relation_num' @click='childrenTap'>
								{{numberYes2}}
								<p></p>
							</div>
						</div>
					</div>
					<button class='searchEnd' @click="tapSearchEnd">搜 索</button>
				</div>
			</div>
			<!-- bannr图 -->
			<div class='bannerSurvey' @click="questionnaireTap">
				<img src='../assets/timg.jpg' />
			</div>
			<!-- 攻略提示 -->
			<div class='strategyPrompts'>
				<div class='strategyMian'>
					<div class='tittleGL'>
						攻略贴士
					</div>
					<div class='articleList'>
						<!-- 第一种样式有图片 -->
						<div class="articleImg">
							<router-link to="/article">
								<div class='articleImg_left'>
									<span>tem.titlnem.contenee</span>
									<p>em.conem.contenem.contenem.contenem.contenem.contenem.contenem.contenem.contenem.contenem.contenem.contenem.contenem.contenem.contenem.contenten</p>
									<div class='commentIcon'>
										<img src='https://www.suitius.com/image/resources/ic_comment_n.png' />
										<b>100</b>
									</div>
									<div class='transmitIcon' bindtap='transmitTap'>
										<img src='https://www.suitius.com/image/resources/ic_transpond_n.png' />
										<b>100</b>
									</div>
								</div>
								<div class='articleImg_right'>
									<img src='https://www.suitius.com/image/resources/ic_transpond_n.png' />
								</div>
							</router-link>
						</div>
						<!-- 第一种样式有图片 -->
						<div class="articleNoImg">
							<div class='articleImg_left'>
								<span>tem.titlnem.contenee</span>
								<p>em.conem.contenem.contenem.contenem.contenem.contenem.contenem.contenem.contenem.contenem.contenem.contenem.contenem.contenem.contenem.contenten</p>
								<div class='commentIcon'>
									<img src='https://www.suitius.com/image/resources/ic_comment_n.png' />
									<b>100</b>
								</div>
								<div class='transmitIcon' bindtap='transmitTap'>
									<img src='https://www.suitius.com/image/resources/ic_transpond_n.png' />
									<b>100</b>
								</div>
							</div>
							<div v-show="false" class='articleImg_right'>
								<img src='https://www.suitius.com/image/resources/ic_transpond_n.png' />
							</div>
						</div>

					</div>

				</div>
			</div>

		</div>

		<div class="home_mine_landlord" v-show="landlord">
			<div class='noticeImg' @click='noticeShadowTap'>
				<img src='https://www.suitius.com/image/resources/img_cooperation.png' />
			</div>

			<div class='checkHome' @click='checkHomeTap(1)'>
				<div class='iconImg'>
					<img src='https://www.suitius.com/image/resources/ic_home_register.png' />
				</div>
				<div class='checkName'>
					<b>登记房屋</b>
					<p>免费发布房源，海量客源等你来</p>
				</div>
				<div class='checkJT'>
					<img src='https://www.suitius.com/image/resources/homeDetail/ic_more_down.png' />
				</div>
			</div>
			<div class='checkHome' @click='checkHomeTap(2)'>
				<div class='iconImg'>
					<img src='https://www.suitius.com/image/resources/ic_home_house.png' />
				</div>
				<div class='checkName'>
					<b>我的房屋</b>
					<p>智能管理,安全的线上交易</p>
				</div>
				<div class='checkJT'>
					<img src='https://www.suitius.com/image/resources/homeDetail/ic_more_down.png' />
				</div>
			</div>

			<div class='checkHome' @click='checkHomeTap(3)'>
				<div class='iconImg'>
					<img src='../assets/ic_home_check.png' />
				</div>
				<div class='checkName'>
					<b>审核状态</b>
					<p>正在审核中</p>
				</div>
				<div class='checkJT'>
					<img src='https://www.suitius.com/image/resources/homeDetail/ic_more_down.png' />
				</div>
			</div>
		</div>
		<!--弹出层所有-->
		<div class='noticeShadow' v-show="noticeShadowShow">
			<img src='https://www.suitius.com/image/resources/ic_close.png' @click='noticeShadowHideTap' />
			<div class='text'>
				<p>合作须知</p>
				<b>
                1.出租信息应遵循真实、准确、有效的原则。<br/>
                2.厨房、卫生间、阳台和地下储藏室等非居住空间，不得单独作为出租信息发布。<br/>
                3.自愿公开或隐藏联系方式信息。<br/>
                4.平台不承诺对出租信息进行无期限保留。
             </b>
			</div>
			<div class='yeess' @click='noticeShadowHideTap'>知道了</div>
		</div>
		<!-- 点击我是房东跳出弹出框 -->
		<div class='tipsWindown' v-show="ownerFirstShow" @click='hidenTipTap'></div>
		<div class='expectationss' v-show="ownerFirstShow">
			<p>请进行业主身份验证</p>
			<img class='chahao' src='https://www.suitius.com/image/resources/homeDetail/ic_pop_close.png' @click='hidenTipTap' />
			<div class='fillList fillPhoto'>
				<img src='../assets/ic_landlord_phone.png' />
				<input type='number' placeholder='请输入手机号' oninput='if(value.length>11)value=value.slice(0,11)' v-on:input="photoInput" maxlength='11' placeholder-style="color:#9B9B9B" v-model='photoNumber' />
				<div class="codeTap" :class="photoTap?'activeCode':''" @click="gainCodeTap">{{codeText}}</div>
			</div>
			<div class='fillList fillCode'>
				<img src='../assets/ic_landlord_verify.png' />
				<input type='number' placeholder='验证码' maxlength='6' oninput='if(value.length>6)value=value.slice(0,6)' placeholder-style="color:#9B9B9B" v-model='codeNumber' />
			</div>
			<div class='buttonsumss' @click='yesTapCh'>确定</div>
		</div>

		<!-- 选择预算小-->
		<div class="dialog-mask" v-show='showDiv1' @click="close1"></div>
		<vue-pickers :show="show1" :selectData="arrayCity" v-on:cancel="close1" v-on:confirm="confirmFn1"></vue-pickers>
		<!-- 选择预算大-->
		<vue-pickers :show="show2" :selectData="budgetLitter" v-on:cancel="close1" v-on:confirm="confirmFn2"></vue-pickers>
		<!-- 装修风格-->
		<vue-pickers :show="show3" :selectData="budgetbig" v-on:cancel="close1" v-on:confirm="confirmFn3"></vue-pickers>
		<!-- 关系-->
		<vue-pickers :show="show4" :selectData="styleFishs" v-on:cancel="close1" v-on:confirm="confirmFn4"></vue-pickers>
		<!-- 成人-->
		<vue-pickers :show="show5" :selectData="relationArr1" v-on:cancel="close1" v-on:confirm="confirmFn5"></vue-pickers>
		<!-- 儿童-->
		<vue-pickers :show="show6" :selectData="relationArr2" v-on:cancel="close1" v-on:confirm="confirmFn6"></vue-pickers>

	</div>
</template>

<script>
	var that;
	import VuePickers from 'vue-pickers';
	import eventVue from '../../static/js/eventVue.js'
	import Vue from 'vue';
	export default {
		components: {
			VuePickers
		},
		data() {
			return {
				showDiv1: false, //遮罩层
				show1: false, //时间小
				show2: false, //租房状态
				show3: false, //租房状态
				show4: false, //时间小
				show5: false, //时间大
				show6: false, //时间大
				Rentin: true, //我要租房
				landlord: false, //我是业主
				addressId: "您想住哪里", //给后台穿地址
				addressType:"",//给后台穿地址类型
				noticeShadowShow: false, //合作须知
				ownerFirstShow: false, //业主身份验证
				photoTap: false, //是否可以点击获取验证码
				codeText: "获取验证码",
				photoNumber: "", //手机号
				codeNumber: "", //验证码

				arrayCity: { //价钱小
					columns: 1,
					default: [{
						text: "不限",
						value: 0
					}],
					pData1: [{
						text: "不限",
						value: 0
					}, {
						text: "2000",
						value: 1
					}, {
						text: "3000",
						value: 2
					}, {
						text: "4000",
						value: 3
					}, {
						text: "5000",
						value: 4
					}, {
						text: "6000",
						value: 5
					}]
				},
				budgetLitter: { //价钱大
					columns: 1,
					default: [{
						text: "不限",
						value: 0
					}],
					pData1: [{
						text: "不限",
						value: 0
					}, {
						text: "2000",
						value: 1
					}, {
						text: "3000",
						value: 2
					}, {
						text: "4000",
						value: 3
					}, {
						text: "5000",
						value: 4
					}, {
						text: "6000",
						value: 5
					}, {
						text: "7000",
						value: 6
					}, {
						text: "8000",
						value: 7
					}]
				},
				budgetbig: { //装修风格
					columns: 1,
					default: [{
						text: "不限",
						value: 3
					}],
					pData1: [{
						text: "简装",
						value: 0
					}, {
						text: "精装",
						value: 1
					}, {
						text: "毛坯",
						value: 2
					}, {
						text: "不限",
						value: 3
					}]
				},
				styleFishs: { //关系
					columns: 1,
					default: [{
						text: "单身",
						value: 0
					}],
					pData1: [{
						text: "单身",
						value: 0
					}, {
						text: "情侣",
						value: 1
					}, {
						text: "家庭",
						value: 2
					}, {
						text: "朋友",
						value: 3
					}, {
						text: "其他",
						value: 4
					}]
				},
				relationArr1: { //成人
					columns: 1,
					default: [{
						text: "1",
						value: 0
					}],
					pData1: [{
						text: "1",
						value: 0
					}, {
						text: "2",
						value: 1
					}, {
						text: "3",
						value: 2
					}, {
						text: "4",
						value: 3
					}, {
						text: "5",
						value: 4
					}]
				},
				relationArr2: { //儿童
					columns: 1,
					default: [{
						text: "0",
						value: 0
					}],
					pData1: [{
						text: "0",
						value: 0
					}, {
						text: "1",
						value: 1
					}, {
						text: "2",
						value: 2
					}, {
						text: "3",
						value: 3
					}, {
						text: "4",
						value: 4
					}]
				},
				budgetMinrYes: '不限', //预算小
				budgetMaxrYes: '不限', //预算大
				styleFishYes: "不限", //风格*
				relationYes: "单身", //关系*
				numberYes1: 1, //成人数量*
				numberYes2: 0, //儿童数量*
			}
		},
		created: function() {
			that = this;
			//用户选择地址
			console.log(this.$route)
			this.addressId = this.$route.params.text || "您想住哪里";
			this.addressType = this.$route.params.type || "";
			//console.log(localStorage.getItem('routerHome'))
			if(localStorage.getItem('routerHome') == 1){//1我是业主
				this.Rentin = false;
				this.landlord = true;
			}else{
				return;
			}
		},
		mounted(){
		},
		methods: {
			//点击消息
			tapMessage: function() {
				this.$router.push({
					path: '/message'
				});
			},
			//点击我要租房
			tapRentin: function() {
				if(this.Rentin) {

				} else {
					this.Rentin = true;
					this.landlord = false;
					eventVue.$emit("userDefinedEvent",0)
					localStorage.setItem('routerHome',0)//控制导航和首页显示
				}
			},
			//点击我是房东
			tapLandlord: function() {
				if(this.landlord) {

				} else {
					this.Rentin = false;
					this.landlord = true;
					this.ownerFirstShow = true;
					eventVue.$emit("userDefinedEvent",1)
					localStorage.setItem('routerHome',1)
				}
			},
			//点击进入搜索结果
			tapSearchEnd: function() {
				console.log(23123)
				if(this.addressType == ""){
					this.$router.push({
						path: '/searchEnd'
					});
				}else{//用户选择了地址
					this.$router.push({
						path: '/searchEnd',
						query: {
				           text: that.addressId,
							type: that.addressType
				          }
					});
				}
				
			},
			//点击差号清空地址
			eliminateTap:function(){
				this.$router.replace({
					path: '/'
				});
				this.addressId = "您想住哪里";
				this.addressType = "";	
			},
			//点击问卷调查
			questionnaireTap: function() {
				this.$router.push({
					path: '/questionnaire'
				});
			},
			//弹出合作须知弹出层
			noticeShadowTap: function() {
				this.noticeShadowShow = true
			},
			//关闭合作须知弹出层
			noticeShadowHideTap: function() {
				this.noticeShadowShow = false
			},
			//点击登记房屋等跳转
			checkHomeTap: function(val) {
				if(val == 1) {
					this.$router.push({
						path: '/homeRegister'
					});
				} else if(val == 2) {
					this.$router.push({
						path: '/myHome'
					});
				} else if(val == 3) {
					this.$router.push({
						path: '/auditStatus'
					});
				}

			},
			hidenTipTap: function() {
				this.ownerFirstShow = false
			},
			//点击获取验证码
			gainCodeTap: function() {
				if(that.photoTap) {
					timer()
				} else {
					return;
				}

			},
			//用户输入手机号正则
			photoInput: function() {
				console.log(1111)
				var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1}))+\d{8})$/;
				if(!myreg.test(that.photoNumber)) {
					that.photoTap = false
				} else {
					that.photoTap = true
				}

			},
			//点击确定
			yesTapCh: function() {

			},
			//价钱小
			budgetingMin: function() {
				this.showDiv1 = true;
				this.show1 = true;
			},
			close1: function() {
				this.showDiv1 = false;
				this.show1 = false;
				this.show2 = false;
				this.show3 = false;
				this.show4 = false;
				this.show5 = false;
				this.show6 = false;
			},
			confirmFn1: function(data) {
				this.arrayCity.default[0].text = data.select1.text;
				this.arrayCity.default[0].value = data.select1.value;
				this.budgetMinrYes = data.select1.text;
				this.showDiv1 = false;
				this.show1 = false;

			},
			//价钱大
			budgetingMax: function() {
				this.showDiv1 = true;
				this.show2 = true;
			},

			confirmFn2: function(data) {
				this.budgetLitter.default[0].text = data.select1.text;
				this.budgetLitter.default[0].value = data.select1.value;
				this.budgetMaxrYes = data.select1.text;
				this.showDiv1 = false;
				this.show2 = false;

			},
			//装修风格
			styletap: function() {
				this.showDiv1 = true;
				this.show3 = true;
			},
			confirmFn3: function(data) {
				this.budgetbig.default[0].text = data.select1.text;
				this.budgetbig.default[0].value = data.select1.value;
				this.styleFishYes = data.select1.text;
				this.showDiv1 = false;
				this.show3 = false;

			},
			//关系
			relationtap: function() {
				this.showDiv1 = true;
				this.show4 = true;
			},
			confirmFn4: function(data) {
				this.styleFishs.default[0].text = data.select1.text;
				this.styleFishs.default[0].value = data.select1.value;
				this.relationYes = data.select1.text;
				this.showDiv1 = false;
				this.show4 = false;

			},
			//成人
			adultTap: function() {
				this.showDiv1 = true;
				this.show5 = true;
			},
			confirmFn5: function(data) {
				this.relationArr1.default[0].text = data.select1.text;
				this.relationArr1.default[0].value = data.select1.value;
				this.numberYes1 = data.select1.text;
				this.showDiv1 = false;
				this.show5 = false;

			},
			//儿童
			childrenTap: function() {
				this.showDiv1 = true;
				this.show6 = true;
			},
			confirmFn6: function(data) {
				this.relationArr2.default[0].text = data.select1.text;
				this.relationArr2.default[0].value = data.select1.value;
				this.numberYes2 = data.select1.text;
				this.showDiv1 = false;
				this.show6 = false;

			},

		}
	}

	function timer() {
		localStorage.setItem('sultCodeTime', 60)
		let value = localStorage.getItem('sultCodeTime') || 60;
		if(value > 0) {
			that.codeText = value + 's';
			that.photoTap = false;
		}
		var timer = setInterval(function() {
			if(value > 0) {
				value--;
				that.codeText = value + 's';
				that.photoTap = false;
				localStorage.setItem('sultCodeTime', value)
			} else {
				clearInterval(timer);
				localStorage.removeItem('sultCodeTime')
				let myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1}))+\d{8})$/;
				if(!myreg.test(that.photoNumber)) {
					that.codeText = '获取验证码';
					that.photoTap = false;

				} else {
					that.codeText = '获取验证码';
					that.photoTap = true;
				}
			}
		}, 1000);
	};
</script>

<style scoped>
	.container {
		padding-top: 0.88rem;
		font-size: 0.24rem;
		padding-bottom: 0.98rem;
	}
	
	.home_hander {
		height: 1.08rem;
		width: 100%;
		position: fixed;
		background: #fff;
		z-index: 5;
	}
	
	.home_hander img {
		width: 0.48rem;
		height: 0.48rem;
		margin-top: 0.31rem;
	}
	
	.home_hander span {
		display: block;
		position: absolute;
		width: 1px;
		height: 0.34rem;
		background: #eee;
		left: 50%;
		bottom: 0.38rem;
	}
	
	.mine_renting,
	.mine_landlord {
		width: 50%;
		height: 100%;
		line-height: 1.08rem;
		float: left;
		text-align: center;
		position: relative;
	}
	
	.mine_renting b,
	.mine_landlord b {
		font-size: 0.32rem;
	}
	/*.mine_new a{
  display: block;
  height: 15rem;
  width: 15rem;
  background: red;
  border-radius: 50%;
  position: absolute;
  right:25rem;
top:25rem;

}
.mine_icon a{
  display: block;
  height: 15rem;
  width: 15rem;
  background: red;
  border-radius: 50%;
  position: absolute;
 right:25rem;
top:25rem;

}*/
	
	.mine_renting p,
	.mine_landlord p {
		width: 0.14rem;
		height: 0.14rem;
		border-radius: 50%;
		background: #f2a533;
		position: relative;
		left: 50%;
		margin-left: -0.07rem;
		bottom: 0.35rem;
	}
	
	.active_color {
		color: #f2a533;
	}
	/*.home_mine_renting,.home_mine_landlord{
    padding-top: 1.08rem;
}*/
	
	.home_mine_renting,
	.home_mine_landlord {
		padding-top: 1.08rem;
	}
	
	.home_mine_renting .renting_top {
		width: 100%;
		height: 4.22rem;
		overflow: hidden;
		background: url(./../assets/timgs.jpg);
		background-position: 100% 100%;
	}
	
	.renting_top .searchBox {
		width: 90%;
		height: 0.8rem;
		background: #fff;
		border-radius: 0.5rem;
		margin-top: 3.1rem;
		margin-left: 5%;
		box-sizing: border-box;
		padding: 0 0.3rem;
	}
	
	.searchBox .searchCity {
		width: 25%;
		float: left;
		position: relative;
	}
	
	.searchCity b {
		font-size: 0.36rem;
		color: #222222;
		line-height: 0.8rem;
	}
	
	.searchBox .searchCity p {
		width: 0;
		height: 0;
		border-width: 0.1rem;
		border-style: solid;
		border-color: #999 transparent transparent transparent;
		position: absolute;
		top: 0.36rem;
		right: 0.5rem;
	}
	
	.searchBox .searchCity span {
		width: 1px;
		height: 0.32rem;
		background: #eee;
		position: absolute;
		right: 0.1rem;
		top: 0.24rem;
	}
	
	.searchBox .searchMain {
		width: 70%;
		float: left;
		position: relative;
	}
	
	.searchBox .searchMain .icon1 {
		position: absolute;
		width: 0.45rem;
		height: 0.45rem;
		top: 0.14rem;
		left: 0.32rem;
	}
	
	.searchBox .searchMain .searchTiao {
		width: 80%;
		float: right;
		height: 100%;
		font-size: 0.32rem;
		line-height: 0.8rem;
		color: #999;
	}
	
	.searchBox .searchMain .chahao1 {
		position: absolute;
		width: 0.48rem;
		height: 0.48rem;
		top: 0.14rem;
		right: -0.2rem;
	}
	
	.home_screen {
		width: 100%;
		height: 5.47rem;
		border-bottom: 0.2rem solid #eff3f6;
	}
	
	.home_screen_sum {
		width: 6.7rem;
		margin: 0 auto;
	}
	
	.home_screen_sum .screen_top {
		height: 1.97rem;
		width: 100%;
		border-bottom: 1px solid #e5e5e5;
	}
	
	.screen_top .budgeting {
		width: 4.23rem;
		float: left;
		line-height: 0.64rem;
	}
	
	.home_screen p {
		width: 0;
		height: 0;
		border-width: 0.1rem;
		border-style: solid;
		border-color: #999 transparent transparent transparent;
		position: absolute;
		top: 0.27rem;
		right: 0.23rem;
	}
	
	.home_screen b,
	.home_screen b {
		font-family: PingFangSC-Medium;
		display: block;
		width: 100%;
		font-size: 0.32rem;
		color: #222222;
		line-height: 1rem;
	}
	
	.budgeting .budgeting_little,
	.budgeting .budgeting_more,
	.styleFish .styleFish_option,
	.screen_relation_option {
		height: 0.64rem;
		background: #F8F8F8;
		border-radius: 0.16rem;
		line-height: 0.64rem;
		box-sizing: border-box;
		padding-left: 0.28rem;
		font-size: 0.28rem;
		font-family: PingFangSC-Regular;
		color: #555555;
		position: relative;
		border: none;
	}
	
	.budgeting .budgeting_little {
		margin-right: 0.12rem;
		float: left;
		width: 1.7rem;
	}
	
	.budgeting .budgeting_more {
		float: right;
		margin-right: 0.4rem;
		width: 1.7rem;
	}
	
	.screen_top .styleFish {
		width: 2.47rem;
		float: right;
	}
	
	.styleFish .styleFish_option {
		width: 100%;
	}
	
	.screen_relation {
		width: 31%;
		float: left;
	}
	
	.screen_relation_max {
		width: 38%;
	}
	
	.screen_relation span {
		float: left;
		margin-right: 0.16rem;
		font-size: 0.28rem;
		line-height: 0.64rem;
	}
	
	.screen_relation_option {
		width: 1.58rem;
		height: 0.64rem;
		float: left;
	}
	
	.screen_relation_num {
		width: 1.1rem;
	}
	
	.searchEnd {
		width: 100%;
		height: 0.8rem;
		background: #F5A623;
		border-radius: 1.2rem;
		color: #fff;
		line-height: 0.8rem;
		font-family: PingFangSC-Regular;
		font-size: 0.35rem;
		float: left;
		margin-top: 0.64rem;
		border: none;
	}
	
	.bannerSurvey {
		height: 2.2rem;
		width: 100%;
		border-bottom: 0.2rem solid #eff3f6;
		text-align: center;
	}
	
	.bannerSurvey img {
		width: 6.7rem;
		height: 1.8rem;
	}
	
	.strategyPrompts {
		width: 100%;
	}
	
	.strategyPrompts .strategyMian {
		width: 6.7rem;
		margin: 0 auto;
	}
	
	.strategyPrompts .strategyMian .tittleGL {
		font-family: PingFangSC-Medium;
		font-size: 0.4rem;
		color: #222222;
		font-weight: 600;
		height: 0.84rem;
		line-height: 1.16rem;
	}
	
	.strategyPrompts .strategyMian .articleImg {
		width: 100%;
		height: 2.68rem;
		padding: 0.32rem 0;
		box-sizing: border-box;
		border-bottom: 1px solid #e5e5e5;
	}
	
	.articleImg .articleImg_left {
		width: 3.9rem;
		float: left;
	}
	
	.articleImg .articleImg_left span,
	.strategyPrompts .articleNoImg span {
		display: block;
		width: 100%;
		line-height: 0.5rem;
		font-weight: 500;
		font-size: 0.36rem;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		color: #2c3e50;
	}
	
	.articleImg .articleImg_left p,
	.strategyPrompts .articleNoImg p {
		width: 100%;
		margin-top: 0.12rem;
		margin-bottom: 0.2rem;
		font-size: 0.3rem;
		color: #2c3e50;
		word-wrap: break-word;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
	}
	
	.commentIcon,
	.transmitIcon {
		width: 1.18rem;
		float: left;
	}
	
	.commentIcon img,
	.transmitIcon img {
		width: 0.4rem;
		height: 0.4rem;
		float: left;
	}
	
	.commentIcon b,
	.transmitIcon b {
		font-family: PingFangSC-Regular;
		font-size: 0.24rem;
		color: #9B9B9B;
		float: left;
		letter-spacing: 0.26px;
		margin-left: 0.1rem;
		line-height: 0.4rem;
	}
	
	.articleImg .articleImg_right {
		width: 2.6rem;
		height: 1.74rem;
		float: right;
	}
	
	.articleImg .articleImg_right img {
		width: 100%;
		height: 1.74rem;
	}
	
	.strategyPrompts .articleNoImg {
		width: 100%;
		height: 2.68rem;
		padding: 0.32rem 0;
		box-sizing: border-box;
		border-bottom: 1px solid #e5e5e5;
	}
	
	.home_mine_landlord .noticeImg {
		width: 100%;
		height: 4.22rem;
		margin-bottom: 0.5rem;
	}
	
	.home_mine_landlord .noticeImg img {
		width: 100%;
		height: 4.22rem;
	}
	
	.home_mine_landlord .checkHome {
		width: 6.7rem;
		height: 1.7rem;
		background: #FFF8EE;
		border-radius: 0.08rem;
		margin: 0 auto 0.3rem;
		display: flex;
	}
	
	.home_mine_landlord .checkHome .iconImg {
		width: 1.2rem;
		height: 1.2rem;
		margin: 0.25rem 0.32rem;
	}
	
	.home_mine_landlord .checkHome .iconImg img {
		width: 1.2rem;
		height: 1.2rem;
	}
	
	.home_mine_landlord .checkHome .checkName {
		width: 4.5rem;
		height: 1.7rem;
	}
	
	.home_mine_landlord .checkHome .checkName b {
		display: block;
		font-size: 0.32rem;
		color: #FE8B25;
		font-weight: 500;
		margin-top: 0.47rem;
	}
	
	.home_mine_landlord .checkHome .checkName p {
		display: block;
		font-size: 0.24rem;
		color: #FE8B25;
		margin-top: 0.16rem;
	}
	
	.home_mine_landlord .checkHome .checkJT {
		width: 0.32rem;
		height: 0.32rem;
		margin-top: 0.69rem;
		margin-right: 0.32rem;
	}
	
	.home_mine_landlord .checkHome .checkJT img {
		width: 0.32rem;
		height: 0.32rem;
	}
	
	.noticeShadow {
		width: 100%;
		height: 100%;
		position: fixed;
		z-index: 100;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: rgba(0, 0, 0, 0.5);
	}
	
	.noticeShadow>img {
		width: 0.4rem;
		height: 0.4rem;
		position: absolute;
		top: 2.5rem;
		right: 0.8rem;
	}
	
	.noticeShadow .text {
		width: 6.58rem;
		margin: 4rem auto 0;
	}
	
	.noticeShadow .text p {
		display: block;
		font-size: 0.4rem;
		color: #FFFFFF;
		font-weight: 600;
		font-family: PingFangSC-Medium;
	}
	
	.noticeShadow .text b {
		font-family: PingFangSC-Regular;
		font-size: 0.32rem;
		color: #FFFFFF;
		line-height: 0.6rem;
	}
	
	.noticeShadow .yeess {
		width: 3.3rem;
		height: 0.8rem;
		margin: 1rem auto 0;
		border: 1px solid #FFFFFF;
		border-radius: 0.6rem;
		text-align: center;
		line-height: 0.8rem;
		font-size: 0.28rem;
		color: #FFFFFF;
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
		height: 4.60rem;
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
	
	.expectationss .chahao {
		height: 0.48rem;
		width: 0.48rem;
		position: absolute;
		top: 0.22rem;
		right: 0.22rem;
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
	
	.expectationss .fillList {
		width: 5rem;
		height: 0.85rem;
		margin: 0 auto 0.17rem;
		padding-top: 0.28rem;
		border-bottom: 1px solid #E5E5E5;
		display: flex;
	}
	
	.expectationss .fillList img {
		width: 0.40rem;
		height: 0.40rem;
		margin-top: 0.20rem;
	}
	
	.expectationss .fillList input {
		min-height: 0.80rem;
		width: 2.68rem;
		-webkit-box-flex: 1;
		font-size: 0.32rem;
		margin-left: 0.32rem;
		color: #000;
	}
	
	.expectationss .fillList .codeTap {
		width: 1.60rem;
		height: 0.64rem;
		background: #E7E7E7;
		border-radius: 0.49rem;
		margin-top: 0.10rem;
		text-align: center;
		line-height: 0.64rem;
		font-size: 0.24rem;
		color: #9B9B9B;
	}
	
	.expectationss .fillList .activeCode {
		background: #FE8B25;
		color: #fff;
	}
	
	.dialog-mask {
		width: 100%;
		height: 100%;
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 8;
		background: rgba(0, 0, 0, 0.3);
	}
</style>