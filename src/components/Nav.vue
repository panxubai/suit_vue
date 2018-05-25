<template>
	<div id="navNav">
		<ul>
			<li>
				<router-link to="/homePage">
					<p></p>首页</router-link>
			</li>
			<li>
				<router-link to="/journeyList">
					<p></p>行程</router-link>
			</li>
			<li>
				<router-link to="/discussionList">
					<p></p>讨论</router-link>
			</li>
			<li>
				<router-link to="/community">
					<p></p>社区</router-link>
			</li>
			<li>
				<router-link to="/mine">
					<p></p>我的</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {

		methods: {

		}

	}
</script>

<style scoped>
	#navNav {
		width: 100%;
		height: 0.98rem;
		position: fixed;
		bottom: 0;
		left: 0;
		background: #fff;
		 border-top: 1px solid #e5e5e5; 
	}
	
	#navNav ul {
		width: 100%;
		display: flex;
	}
	
	#navNav li {
		flex: 1;
		font-size: 0.2rem;
		text-align: center;
	}
	#navNav li p{
		margin-top: 0.1rem;
	}
	#navNav li:nth-child(1) p {
		width: 100%;
		height: 0.54rem;
		background: url(./../assets/nav/tabbar_ic_home_n.png) no-repeat;
		background-size: 0.54rem 0.54rem;
		background-position: center center
	}
	
	#navNav li:nth-child(2) p {
		width: 100%;
		height: 0.54rem;
		background: url(./../assets/nav/tabbar_ic_xingcheng_n.png) no-repeat;
		background-size: 0.54rem 0.54rem;
		background-position: center center
	}
	
	#navNav li:nth-child(3) p {
		width: 100%;
		height: 0.54rem;
		background: url(./../assets/nav/tabbar_ic_taolun_n.png) no-repeat;
		background-size: 0.54rem 0.54rem;
		background-position: center center
	}
	
	#navNav li:nth-child(4) p {
		width: 100%;
		height: 0.54rem;
		background: url(./../assets/nav/tabbar_ic_community_n.png) no-repeat;
		background-size: 0.54rem 0.54rem;
		background-position: center center
	}
	
	#navNav li:nth-child(5) p {
		width: 100%;
		height: 0.54rem;
		background: url(./../assets/nav/tabbar_ic_me_n.png) no-repeat;
		background-size: 0.54rem 0.54rem;
		background-position: center center
	}
	
	#navNav li:nth-child(1) .router-link-exact-active p {
		width: 100%;
		height: 0.54rem;
		background: url(./../assets/nav/tabbar_ic_home_h.png) no-repeat;
		background-size: 0.54rem 0.54rem;
		background-position: center center
	}
	
	#navNav li:nth-child(2) .router-link-exact-active p {
		width: 100%;
		height: 0.54rem;
		background: url(./../assets/nav/tabbar_ic_xingcheng_h.png) no-repeat;
		background-size: 0.54rem 0.54rem;
		background-position: center center
	}
	
	#navNav li:nth-child(3) .router-link-exact-active p {
		width: 100%;
		height: 0.54rem;
		background: url(./../assets/nav/tabbar_ic_taolun_h.png) no-repeat;
		background-size: 0.54rem 0.54rem;
		background-position: center center
	}
	
	#navNav li:nth-child(4) .router-link-exact-active p {
		width: 100%;
		height: 0.54rem;
		background: url(./../assets/nav/tabbar_ic_community_h.png) no-repeat;
		background-size: 0.54rem 0.54rem;
		background-position: center center
	}
	
	#navNav li:nth-child(5) .router-link-exact-active p {
		width: 100%;
		height: 0.54rem;
		background: url(./../assets/nav/tabbar_ic_me_h.png) no-repeat;
		background-size: 0.54rem 0.54rem;
		background-position: center center
	}
	
	a {
		text-decoration: none;
		color: #2c3e50;
	}
	
	.router-link-exact-active {
		color: #FE8B25;
	}
</style>