<template>
	<div class="container">
		<div class="headerS">
			<div class="backs" @click="refresh">
				<img src="../assets/image/ic_topbar_return.png" />
			</div>
			<div class="headerTitle"></div>
			<div class="information">
			</div>
		</div>

		<div class="loginMain">
			<div class="loginLogo">
				<img src="../assets/image/ic_login_logo.png" />
				<p>您好，欢迎使用SUIT</p>
			</div>
		</div>

		<div class="inputLogin">
			<p>登陆</p>
			<div class="passwordLogin" v-show="loginPassword">
				<input type="number" placeholder="请输入手机号" oninput='if(value.length>11)value=value.slice(0,11)' v-model="photoPW" v-on:input="photoInput" placeholder-style="color:#e7e7e7" />
				<input type="password" v-model="passwordInput" :class="hintShow?'inputTishi':''" v-on:input="photoInput" placeholder="请输入密码" placeholder-style="color:#e7e7e7" />
				<div class="tishi"><b v-show="hintShow">密码错误</b><img v-show="hintShow" src="../assets/image/ic_warning_icon.png" /></div>
				<button :class="dengluTap?'activeCode':''" @click="loginScress">登陆</button>
			</div>
			<div class="codeLogin" v-show="!loginPassword">
				<input type="number" placeholder="请输入手机号" oninput='if(value.length>11)value=value.slice(0,11)' v-on:input="photoInput" v-model="photoNumber" class="inputPhoto" placeholder-style="color:#e7e7e7" />
				<div class="codeHq" :class="hintShow?'inputTishi':''">
					<input type="password" placeholder="请输入验证码" oninput='if(value.length>6)value=value.slice(0,6)' v-on:input="photoInput" v-model="codeNumber" placeholder-style="color:#e7e7e7" />
					<div class="codeTap" :class="photoTap?'activeCode':''" @click="gainCodeTap">{{codeText}}</div>
				</div>
				<div class="tishi"><b v-show="hintShow">密码错误</b><img v-show="hintShow" src="../assets/image/ic_warning_icon.png" /></div>
				<button :class="dengluTap?'activeCode':''" @click="loginScress">登陆</button>
			</div>
			<div class="selsLogin" v-show="loginPassword">
				<span @click="codeLogin">验证码登录</span>
				<router-link to="/register1"><span>立即注册</span></router-link>
			</div>
			<div class="passLogin" v-show="!loginPassword">
				<span @click="passwordLogin">密码登录</span>
			</div>
		</div>
		<div class="partyLogin">
			<p><img src="../assets/image/ic_login_qq.png" /></p>
			<p><img src="../assets/image/ic_login_wechat.png" /></p>
		</div>

	</div>
</template>

<script>
	var that;
	var myreg;
	export default {
		data() {
			return {
				loginPassword: false, //true密码登录
				codeText: "获取验证码",
				photoPW: "", //密码登录手机号
				passwordInput: "", //密码
				photoNumber: "", //验证码登录的手机号
				codeNumber: "", //验证码
				hintShow: false, //红色提示密码验证码都有
				photoTap: false, //代表获取验证码可以点击
				dengluTap: false, //登陆是否亮起
				timeIng: true, //输入事件防止读秒变色
			}
		},
		created: function() {
			that = this;
			myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1}))+\d{8})$/;
		},
		methods: {
			refresh: function() {
				window.history.go(-1)
			},
			codeLogin: function() {
				this.loginPassword = false;
				this.hintShow = false;
				this.dengluTap = false;
				this.photoTap = false;
				//				this.photoPW = ""; //密码登录手机号
				//				this.passwordInput = ""; //密码
				//				this.photoNumber = ""; //验证码登录的手机号
				//				this.codeNumber = ""; //验证码
				if(myreg.test(that.photoNumber) && that.codeNumber != "") {
					that.dengluTap = true
				} else {
					that.dengluTap = false
				}
			},
			passwordLogin: function() {
				this.loginPassword = true;
				this.hintShow = false;
				this.dengluTap = false;
				//				this.photoPW = ""; //密码登录手机号
				//				this.passwordInput = ""; //密码
				//				this.photoNumber = ""; //验证码登录的手机号
				//				this.codeNumber = ""; //验证码
				if(myreg.test(that.photoPW) && that.passwordInput != "") {
					that.dengluTap = true
				} else {
					that.dengluTap = false
				}
			},
			photoInput: function() {

				if(that.loginPassword) {
					if(myreg.test(that.photoPW) && that.passwordInput != "") {
						that.dengluTap = true
					} else {
						that.dengluTap = false
					}
				} else {
					if(!myreg.test(that.photoNumber)) {
						that.photoTap = false
					} else {
						if(that.timeIng) {
							that.photoTap = true
						}
					};
					if(myreg.test(that.photoNumber) && that.codeNumber != "") {
						that.dengluTap = true
					} else {
						that.dengluTap = false
					}
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
				if(this.dengluTap) {
					if(that.loginPassword) { //密码登录

					} else { //验证码登录

					}
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
		font-size: 0;
	}
	/*.headerS{
	box-shadow: 0 0.04rem 0.08rem 0 rgba(0, 0, 0, 0.10);
}*/
	
	.loginMain {
		width: 100%;
	}
	
	.loginLogo {
		width: 100%;
		text-align: center;
		margin-top: 0.3rem;
	}
	
	.loginLogo img {
		width: 1.4rem;
		height: 1.4rem;
	}
	
	.loginLogo p {
		font-family: PingFangSC-Regular;
		font-size: 0.32rem;
		color: #555555;
		margin-top: 0.36rem;
	}
	
	.inputLogin,
	.codeLogin {
		width: 5.8rem;
		margin: 0 auto;
	}
	
	.inputLogin p {
		width: 100%;
		margin-top: 0.7rem;
		text-align: center;
		height: 0.82rem;
		font-size: 0.38rem;
		line-height: 0.82rem;
		color: #FE8B25;
		border-bottom: 0.04rem solid #FE8B25;
	}
	
	.inputLogin .passwordLogin input,
	.codeLogin .inputPhoto {
		width: 100%;
		height: 0.84rem;
		margin-top: 0.3rem;
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
	}
	
	.codeLogin .codeHq {
		width: 100%;
		height: 0.84rem;
		margin-top: 0.3rem;
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
	
	.selsLogin,
	.passLogin {
		width: 100%;
		height: 0.4rem;
		margin-top: 0.34rem;
	}
	
	.selsLogin span,
	.passLogin span {
		font-size: 0.28rem;
		color: #9B9B9B;
		line-height: 0.4rem;
	}
	
	.passLogin span {
		display: block;
		text-align: center;
	}
	
	.selsLogin span:first-child {
		float: left;
	}
	
	.selsLogin span:last-child {
		float: right;
	}
	
	.partyLogin {
		width: 2.8rem;
		margin: 2.2rem auto 0;
	}
	
	.partyLogin p {
		width: 0.6rem;
		height: 0.6rem;
	}
	
	.partyLogin p:first-child {
		float: left;
	}
	
	.partyLogin p:last-child {
		float: right;
	}
	
	.partyLogin p img {
		width: 0.6rem;
		height: 0.6rem;
	}
	
	.tishi {
		width: 100%;
		height: 0.52rem;
	}
	
	.tishi b {
		font-size: 0.24rem;
		line-height: 0.52rem;
		color: #D50000;
	}
	
	.tishi img {
		height: 0.32rem;
		width: 0.32rem;
		margin-top: 0.1rem;
		float: right;
	}
	
	.inputTishi {
		border-bottom: 1px solid #D50000 !important;
	}
	
	.activeCode {
		background: #FE8B25 !important;
		color: #fff !important;
	}
</style>