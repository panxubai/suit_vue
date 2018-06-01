<template>
	<div class="container">
		<div class="headerS">
			<div class="backs" @click="refresh">
				<img src="../assets/image/ic_topbar_return.png" />
			</div>
			<div class="headerTitle">设置密码</div>
			<div class="information">

			</div>
		</div>

		<div class="inputLogin">
			<div class="codeLogin">
				<input type="text" placeholder="昵称" v-model="nameInput" v-on:input="photoInput" placeholder-style="color:#e7e7e7" />
				<input type="password" placeholder="设置密码(6-16数字、字母、下划线)" oninput='if(value.length>16)value=value.slice(0,16)' v-model="passwordInput" v-on:input="photoInput" placeholder-style="color:#e7e7e7" />
				<button :class="nextStep?'activeCode':''" @click="loginScress">完成并登录</button>
			</div>
		</div>

	</div>
</template>

<script>
	var that;
	var patrn;
	import { Toast,MessageBox } from 'mint-ui';
	export default {
		data() {
			return {
				nameInput: "",//名字
				passwordInput: "",//密码
				nextStep: false, //下一步可点

			}
		},
		created: function() {
			that = this;
			patrn=/^(\w){6,16}$/;
		},
		methods: {
			refresh: function() {
				window.history.go(-1)
			},

			loginScress: function() {
			if(that.nextStep){
				if(!patrn.test(this.passwordInput)){//密码格式不对
					Toast('密码格式不对');
				}else{
					MessageBox({
					  title: '提示',
					  message: '确定执行此操作?',
					  showCancelButton: true
					}).then(action => {
                            console.log('点击了确认')
                   });
				}
			}
			},
			photoInput:function(){
				if(this.nameInput != "" && this.passwordInput!= ""){
					that.nextStep = true
				}else{
					that.nextStep = false
				}
			},
		}
	}
</script>

<style scoped>
	.container {
		padding-top: 0.88rem;
	}
	
	.headerS {
		box-shadow: 0 0.04rem 0.08rem 0 rgba(0, 0, 0, 0.10);
	}
	
	.inputLogin {
		width: 5.8rem;
		margin: 0.3rem auto 0;
	}
	
	.codeLogin input {
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
	
	.activeCode {
		background: #FE8B25 !important;
		color: #fff !important;
	}
</style>