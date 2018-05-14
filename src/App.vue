<template>
  <div id="app">
    <header class="header">
				<router-view name="header"></router-view>
		</header>
		<div id="content">
			<router-view></router-view>
		</div>
		<nav class="nav">
			<router-view name="nav"></router-view>
		</nav>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
	a{
		text-decoration: none;
	}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.area_ctrl{
	font-size: 0.24rem !important;
	background: #fff !important;
	position: fixed !important;
}
.area_btn_box{
	background: #fff !important;
}
.larea_cancel{
	color: #000 !important;
}
.larea_finish{
	color: #f2a533 !important;
}
.mint-cell-wrapper{
	padding: 0 !important;
}
.mint-cell-wrapper .mint-cell-title{
		display: none;
	}
	.mint-cell-right,.mint-cell-swipe-buttongroup{
			background: red !important;
	}
	.mint-cell-value{
		width: 100%;
	}
	.mint-cell-swipe-button{
		background: red !important;
		font-size: 0.32rem;
		text-align: center;
		padding: 0 0.6rem;
		line-height: 2.12rem;
	}
	.mint-swipe-indicator{
		background: #999999;
	}
	.mint-swipe-indicator.is-active{
		background: #000000;
	}
</style>
