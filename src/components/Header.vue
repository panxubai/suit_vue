<template>
	<div class="headerS">
		<div class="headerTitle">SUIT</div>
		<!--<p class="iconfont" id="shuxin" @click="refresh()">&#xe6ae;</p>
		<p class="iconfont" id="search"><router-link to="/search">&#xe86e;</router-link></p>-->
	</div>
</template>

<script>
	export default {

 		methods: {
//			refresh() {
//				window.history.go(0)
//			},
		}
}
</script>

<style scoped>
.headerS{
	width: 100%;
	height: 0.88rem;
	background: #f66;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 99;
}
.headerTitle{
	text-align: center;
	line-height: 0.88rem;
	font-size: 0.37rem;
}
</style>