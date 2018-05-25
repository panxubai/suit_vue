<template>
	<div class="container">
		<div class="headerS">
			<div class="backs" @click="refresh">
				<img src="../assets/image/ic_topbar_return.png" />
			</div>
			<div class="headerTitle">城市选择</div>
			<div class="information">
		</div>
		</div>
		<div class="titleP">当前定位城市</div>
		<div class="location">上海</div>
		<div class="titleP">选择城市</div>
		<ul>
			<li v-for="(item,index) in cityArr" v-on:click="getIndex(index)">
				<p>{{item}}</p>
				<img v-if="cityIndexImg == index" src="../assets/ic_pitch_on_o.png" />
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				cityArr:["上海","北京","深圳"],
				cityIndexImg:0
			}
		},
		methods:{
			refresh: function() {
				window.history.go(-1)
			},
			getIndex:function(index){
				this.cityIndexImg = index
			}
		}
	}
</script>

<style scoped>
	.container {
		width: 6.7rem;
		margin: 0 auto;
		padding-top: 0.88rem;
	}
	.headerS{
	box-shadow: 0 0.04rem 0.08rem 0 rgba(0, 0, 0, 0.10);

}
	.container .titleP {
		font-family: PingFangSC-Regular;
		font-size: 0.36rem;
		color: #9B9B9B;
		margin-top: 0.32rem;
	}
	
	.container .location {
		width: 100%;
		font-family: PingFangSC-Regular;
		font-size: 0.36rem;
		color: #222222;
		letter-spacing: 0;
		line-height: 1rem;
		border-bottom: 1px solid rgba(0, 0, 0, 0.10);
		margin-bottom: 0.6rem;
	}
	
	.container ul {
		width: 100%;
	}
	
	.container ul li {
		width: 100%;
		height: 1.04rem;
		border-bottom: 1px solid rgba(0, 0, 0, 0.10);
		display: -webkit-flex;
		display: flex;
		justify-content: space-between;
	}
	
	.container ul li p {
		font-size: 0.28rem;
		line-height: 1.04rem;
		color: #222222;
	}
	
	.container ul li img {
		width: 0.4rem;
		height: 0.4rem;
		margin-top: 0.28rem;
	}
</style>