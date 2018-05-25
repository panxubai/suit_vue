<template>
	<div class="container">
		<div class="headerS">
			<div class="backs" @click="refresh">
				<img src="../assets/image/ic_topbar_return.png" />
			</div>
			<div class="headerTitle">修改密码</div>
			<div class="information">
			</div>
		</div>
		
		<div class="inputSum">
			<input type="password" placeholder="请输入新密码" />
			<input type="password" placeholder="请确认新密码" />
			<button>确认</button>
		</div>

	</div>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {
			refresh: function() {
				window.history.go(-1)
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
	.inputSum{
		width: 6.7rem;
		margin: 0 auto;
	}
	.inputSum input{
		width: 100%;
		height:0.85rem;
		margin-top: 0.4rem;
		font-size: 0.32rem;
		color: #9B9B9B;
		border-bottom: 1px solid #E5E5E5;
	}
	.inputSum button{
		width: 100%;
		height: 0.8rem;
		background: #F5A623;
		border-radius: 0.6rem;
		color: #fff;
		line-height: 0.8rem;
		font-size: 0.28rem;
		letter-spacing: 0.1rem;
	}
</style>