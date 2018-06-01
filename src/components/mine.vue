<template>
	<div class="container">
		<div class="headerS">
			<div class="backs" @click="refresh">
				<img src="../assets/image/ic_landlord_bag5.png" />
			</div>
			<div class="headerTitle">我的</div>
			<div class="information" @click="tapMessage">
				<img src="../assets/image/ic_landlord_bag3.png" />
			</div>
		</div>
		<div class='mine_top' v-if="whatLogin">
			<img class='headImg' src="../assets/img_suit_picture.png" />
			<div class='mine_name'>
				<span>潘旭白</span>
				<img class='iconfont' src="../assets/image/ic_boy_blue1.png" />
				<!-- <img class='iconfont' wx:else src="../assets/image/ic_boy_blue1.png"/>-->
			</div>
		</div>
		<div class='mine_top' v-else>
			<img class='headImg' src="../assets/img_suit_picture.png" />
			<div class="buttonLogin" @click="loginGo">
				登陆/注册
			</div>
		</div>
		<div class='mine_bottom'>
			<div class='mine_list' @click="personalTap" >
				<img class='icon' src='../assets/image/ic_landlord_bag2.png' />
				<b>个人资料</b>
				<img class='arrows' src='https://www.suitius.com/image/resources/ic_more.png' />
			</div>
			<div class='mine_list' @click="iLoveIs">
				<img class='icon' src='../assets/image/me_ic_heart.png' />
				<b>我喜欢的</b>
				<img class='arrows' src='https://www.suitius.com/image/resources/ic_more.png' />
			</div>
			<div class='mine_list'>
				<img class='icon' src='../assets/image/me_ic_hetong.png' />
				<b>我的合同</b>
				<img class='arrows' src='https://www.suitius.com/image/resources/ic_more.png' />
			</div>
			<div class='mine_list'>
				<img class='icon' src='../assets/image/me_ic_hetong.png' />
				<b>合同管理</b>
				<img class='arrows' src='https://www.suitius.com/image/resources/ic_more.png' />
			</div>
			<div class='mine_list'>
				<img class='icon' src='../assets/image/me_ic_shouyi.png' />
				<b>收益管理</b>
				<img class='arrows' src='https://www.suitius.com/image/resources/ic_more.png' />
			</div>
			<div class='mine_list'>
				<img class='icon' src='../assets/image/me_ic_zhangdan.png' />
				<b>账单支付</b>
				<img class='arrows' src='https://www.suitius.com/image/resources/ic_more.png' />
			</div>
			<div class='mine_list'>
				<img class='icon' src='../assets/image/ic_set_about1.png' />
				<b>家政服务</b>
				<img class='arrows' src='https://www.suitius.com/image/resources/ic_more.png' />
			</div>
		
		</div>
	</div>
</template>

<script>
	export default {

		data() {
			return {
				whatLogin:false,//是否登陆
				showTab:0,//0代表租客 1代表房东
			}
		},

		created: function() {
			if(localStorage.getItem('routerHome') == 1){
				this.showTab = 1
			}else{
				this.showTab = 0
			}

		},
		methods: {
			refresh: function() {
				this.$router.push({
					path: '/sultSetting'
				});
			},
			//点击消息
			tapMessage: function() {
				this.$router.push({
					path: '/message'
				});
			},
			//惦记我喜欢的
			iLoveIs:function(){
				this.$router.push({
					path: '/myLikeHome'
				});
			},
//			/个人资料
			personalTap:function(){
				this.$router.push({
					path: '/personalData'
				});
			},
			//去登陆
			loginGo:function(){
				this.$router.push({
					path: '/login'
				});
			},

		}
	}
</script>

<style scoped>
	.container {
		padding-top: 0.88rem;
		padding-bottom: 0.98rem;
		font-size: 0;
	}
	/* pages/mine/mine.wxss */
	
	.mine_top {
		width: 100%;
		padding: 1rem 0;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
		box-sizing: border-box;
		text-align: center;
	}
	.mine_top .buttonLogin{
		width: 3.20rem;
		height: 0.8rem;
		background: #F5A623;
		border-radius: 0.6rem;
		line-height: 0.8rem;
		text-align: center;
		color: #fff;
		font-size: 0.36rem;
		margin-left: 2.12rem;
		margin-top: 0.2rem;
	}
	.mine_top .headImg {
		width: 1.80rem;
		height: 1.80rem;
		margin: 0.20rem;
		border-radius: 50%;
	}
	
	.mine_top .mine_name {
		width: 100%;
	}
	
	.mine_top .mine_name span {
		margin-left: 0.20rem;
		font-size: 0.40rem;
		color: #222222;
	}
	
	.mine_top .mine_name img {
		width: 0.40rem;
		height: 0.40rem;
		margin-left: 0.20rem;
	}
	
	.mine_bottom {
		border-top: 0.20rem solid #eff3f6;
		width: 100%;
		padding: 0 0.30rem;
		box-sizing: border-box;
	}
	
	.mine_bottom .mine_list {
		width: 100%;
		padding: 0.30rem 0;
		box-sizing: border-box;
		border-bottom: 1px solid #e5e5e5;
		position: relative;
	}
	
	.mine_bottom .mine_list a {
		display: block;
		height: 0.20rem;
		width: 0.20rem;
		background: red;
		border-radius: 50%;
		position: absolute;
		right: 0.60rem;
		top: 0.50rem;
	}
	
	.mine_bottom .mine_list .icon {
		width: 0.40rem;
		height: 0.40rem;
		margin-right: 0.39rem;
		float: left;
		margin-top: 0.10rem;
	}
	
	.mine_bottom .mine_list .arrows {
		width: 0.40rem;
		height: 0.40rem;
		float: right;
		margin-top: 0.10rem;
	}
	
	.mine_bottom .mine_list b {
		font-size: 0.32rem;
	}
</style>