<template>
	<div id="navNav">
		<ul>
				<li><router-link to="/home">首页</router-link></li>
				<li><router-link to="/journeyList">行程</router-link></li>
				<li><router-link to="/">讨论</router-link></li>
				<li><router-link to="/">社区</router-link></li>
				<li><router-link to="/">我</router-link></li>
		</ul>	
	</div>	
</template>

<script>
	export default {

		methods:{
			
		}
		
	}
</script>

<style scoped>
	#navNav{
		width: 100%;
		height: 0.88rem;
		position: fixed;
		bottom: 0;
		left: 0;
		background:#fff;
	}
	#navNav ul{
		width: 100%;
		display: flex;
	}
	#navNav li{
		flex:1;
		font-size:0.37rem ;
		line-height: 0.88rem;
		  text-align: center;
	}
	a{
		text-decoration: none;
		color:#2c3e50;
	}
	.router-link-exact-active{
    	color: #f66;
    }
</style>