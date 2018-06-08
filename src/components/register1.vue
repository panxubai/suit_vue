<template>
	<div class="container">
		<div class="headerS">
			<div class="backs" @click="refresh">
				<img src="../assets/image/ic_topbar_return.png" />
			</div>
			<div class="headerTitle">手机号注册</div>
			<div class="information">

			</div>
		</div>

		<div class="inputLogin">
			<div class="codeLogin">
				<input type="number" placeholder="请输入手机号" oninput='if(value.length>11)value=value.slice(0,11)' v-on:input="photoInput" v-model="photoNumber" class="inputPhoto" placeholder-style="color:#e7e7e7" />
				<div class="codeHq">
					<input type="password" placeholder="请输入验证码" oninput='if(value.length>6)value=value.slice(0,6)' v-on:input="photoInput" v-model="codeNumber" placeholder-style="color:#e7e7e7" />
					<div class="codeTap" :class="photoTap?'activeCode':''" @click="gainCodeTap">{{codeText}}</div>
				</div>
				<button :class="nextStep?'activeCode':''" @click="loginScress">下一步</button>
			</div>
		</div>
		<transition name="router-slid" mode="out-in">
			<router-view></router-view>
		</transition>
	</div>
</template>

<script>
	var that;
	export default {
		data() {
			return {
				photoNumber: "",
				codeNumber: "",
				codeText: "获取验证码",
				nextStep: false, //下一步可点
				photoTap: false, //验证码可点
				timeIng: true, //输入事件防止读秒变色
			}
		},
		created: function() {
			that = this;
		},
		methods: {
			refresh: function() {
				window.history.go(-1)
			},
			photoInput: function() {
				var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1}))+\d{8})$/;
				if(!myreg.test(that.photoNumber)) {
					that.photoTap = false
				} else {
					if(that.timeIng) {
						that.photoTap = true
					}
				};
				if(myreg.test(that.photoNumber) && that.codeNumber != "") {
					that.nextStep = true
				} else {
					that.nextStep = false
				}
			},
			gainCodeTap: function() {
				if(that.photoTap) {
					timer()
				} else {
					return;
				}
			},
			loginScress: function() {
				if(this.nextStep) {
					this.$router.push({
						path: '/register2'
					});
				}
			},
		}
	}

	function timer() {
		that.timeIng = false;
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
					that.timeIng = true;

				} else {
					that.codeText = '获取验证码';
					that.photoTap = true;
					that.timeIng = true;
				}
			}
		}, 1000);
	};
</script>

<style scoped>
	.container {
		padding-top: 0.88rem;
		z-index: 105;
		background: #fff;
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		overflow-y: scroll;
	}
	
	.headerS {
		box-shadow: 0 0.04rem 0.08rem 0 rgba(0, 0, 0, 0.10);
	}
	
	.inputLogin {
		width: 5.8rem;
		margin: 0.3rem auto 0;
	}
	
	.codeLogin .inputPhoto {
		width: 100%;
		height: 0.84rem;
		margin-top: 0.6rem;
		font-size: 0.32rem;
		border-bottom: 1px solid #E7E7E7;
		color: #000;
	}
	
	.inputLogin button {
		width: 100%;
		height: 0.8rem;
		font-size: 0.32rem;
		background: #e7e7e7;
		letter-spacing: 0.2rem;
		border-radius: 0.6rem;
		color: #999;
		margin-top: 1.2rem;
	}
	
	.codeLogin .codeHq {
		width: 100%;
		height: 0.84rem;
		margin-top: 0.6rem;
		border-bottom: 1px solid #E7E7E7;
		display: flex;
	}
	
	.codeLogin .codeHq input {
		font-size: 0.32rem;
		color: #000;
		flex: 1;
	}
	
	.codeLogin .codeHq .codeTap {
		width: 1.6rem;
		height: 0.64rem;
		background: #e7e7e7;
		border-radius: 0.49rem;
		font-size: 0.24rem;
		color: #9B9B9B;
		text-align: center;
		line-height: 0.64rem;
		margin-top: 0.1rem;
	}
	
	.activeCode {
		background: #FE8B25 !important;
		color: #fff !important;
	}
	
	.router-slid-enter-active,
	.router-slid-leave-active {
		transition: transform .2s;
	}
	
	.router-slid-enter,
	.router-slid-leave-active {
		transform: translate3d(100%, 0, 0);
	}
</style>