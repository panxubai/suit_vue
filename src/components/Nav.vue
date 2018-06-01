<template>
	<div id="navNav">
		<ul class="Rentin" v-if="showTab == 0">
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
		<ul class="Landlord" v-else>
			<li>
				<router-link to="/homePage">
				<p></p>首页</router-link>
			</li>
			<li>
				<router-link to="/myVisit">
					<p></p>到访</router-link>
			</li>
			<li>
				<router-link to="/earnings">
					<p></p>收益</router-link>
			</li>
			<li>
				<router-link to="/mine">
					<p></p>我的</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
	import Vue from 'vue';
	import eventVue from '../../static/js/eventVue.js'
	export default {
		data(){
			return {
				showTab:0,//0代表是租客，1代表房东
			}
		},
		methods: {
		
		},
		created(){
			let that = this;
			eventVue.$on("userDefinedEvent",function(msg){
				that.showTab = msg;
			})
			if(localStorage.getItem('routerHome') == 1){
				that.showTab = 1
			}else{
				that.showTab = 0
			}
		},

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
	
	#navNav .Rentin li:nth-child(2) p {
		width: 100%;
		height: 0.54rem;
		background: url(./../assets/nav/tabbar_ic_xingcheng_n.png) no-repeat;
		background-size: 0.54rem 0.54rem;
		background-position: center center
	}
	
	#navNav .Rentin li:nth-child(3) p {
		width: 100%;
		height: 0.54rem;
		background: url(./../assets/nav/tabbar_ic_taolun_n.png) no-repeat;
		background-size: 0.54rem 0.54rem;
		background-position: center center
	}
	
	#navNav .Rentin li:nth-child(4) p {
		width: 100%;
		height: 0.54rem;
		background: url(./../assets/nav/tabbar_ic_community_n.png) no-repeat;
		background-size: 0.54rem 0.54rem;
		background-position: center center
	}
	
	#navNav .Rentin li:nth-child(5) p {
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
	
	#navNav .Rentin li:nth-child(2) .router-link-exact-active p {
		width: 100%;
		height: 0.54rem;
		background: url(./../assets/nav/tabbar_ic_xingcheng_h.png) no-repeat;
		background-size: 0.54rem 0.54rem;
		background-position: center center
	}
	
	#navNav .Rentin li:nth-child(3) .router-link-exact-active p {
		width: 100%;
		height: 0.54rem;
		background: url(./../assets/nav/tabbar_ic_taolun_h.png) no-repeat;
		background-size: 0.54rem 0.54rem;
		background-position: center center
	}
	
	#navNav .Rentin li:nth-child(4) .router-link-exact-active p {
		width: 100%;
		height: 0.54rem;
		background: url(./../assets/nav/tabbar_ic_community_h.png) no-repeat;
		background-size: 0.54rem 0.54rem;
		background-position: center center
	}
	
	#navNav .Rentin li:nth-child(5) .router-link-exact-active p {
		width: 100%;
		height: 0.54rem;
		background: url(./../assets/nav/tabbar_ic_me_h.png) no-repeat;
		background-size: 0.54rem 0.54rem;
		background-position: center center
	}
	
	
	

	
	#navNav .Landlord li:nth-child(2) p {
		width: 100%;
		height: 0.54rem;
		background: url(./../assets/nav/tabbar_ic_xingcheng_n.png) no-repeat;
		background-size: 0.54rem 0.54rem;
		background-position: center center
	}
	
	#navNav .Landlord li:nth-child(3) p {
		width: 100%;
		height: 0.54rem;
		background: url(./../assets/nav/tabbar_ic_shouyi_n.png) no-repeat;
		background-size: 0.54rem 0.54rem;
		background-position: center center
	}
	
	#navNav .Landlord li:nth-child(4) p {
		width: 100%;
		height: 0.54rem;
		background: url(./../assets/nav/tabbar_ic_me_n.png) no-repeat;
		background-size: 0.54rem 0.54rem;
		background-position: center center
	}
	


	
	#navNav .Landlord li:nth-child(2) .router-link-exact-active p {
		width: 100%;
		height: 0.54rem;
		background: url(./../assets/nav/tabbar_ic_xingcheng_h.png) no-repeat;
		background-size: 0.54rem 0.54rem;
		background-position: center center
	}
	
	#navNav .Landlord li:nth-child(3) .router-link-exact-active p {
		width: 100%;
		height: 0.54rem;
		background: url(./../assets/nav/tabbar_ic_shouyi_h.png) no-repeat;
		background-size: 0.54rem 0.54rem;
		background-position: center center
	}
	
	#navNav .Landlord li:nth-child(4) .router-link-exact-active p {
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