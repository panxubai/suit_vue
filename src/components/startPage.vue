<template>
	<div class="container">
		<div class="startMain">
			<div class="tartTop">
				<img src="../assets/img_suit_picture.png"/>
				<span>SUIT</span>
			</div>
			<p>先随便先随便来一句来一句话</p>
		</div>
		
	</div>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		},
		mounted() {
			let that = this;
			setTimeout(function(){
				that.$router.push({
						path: '/homePage'
				});
			},2000)
		}
	}
</script>

<style>
	.startMain{
		margin-top: 5.4rem;
		width: 100%;
		text-align: center;
		font-size: 0;
	}
	.startMain .tartTop{
		width: 3.3rem;
		height: 0.88rem;
		margin: 0.15rem auto;
	}
	.startMain .tartTop img{
		width: 0.88rem;
		height: 0.88rem;
		float: left;
	}
	.startMain .tartTop span{
		font-size: 0.9rem;
		margin-left: 0.1rem;
		float: left;

	}
	.startMain p{
		width: 100%;
		text-align: center;
		font-size: 0.24rem;
		color: #999999;
		margin-top: 0.3rem;
	}
</style>