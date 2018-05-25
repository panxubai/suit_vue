<template>
  <div id="app">
    
		<div id="content">
			<transition :name="direction" mode="out-in"> <!--动态获得transition 的name值-->
				<router-view></router-view>
			</transition>	
		</div>
		<nav class="nav">
				<router-view name="nav"></router-view>
		</nav>
		
  </div>
</template>

<script>
export default {
  name: 'App',
	data() {
			return {
	
			}
		},
	computed: {
		direction() {
			const viewDir = this.$store.state.viewDirection
			let tranName =''
        if (viewDir === 'left') {
          tranName = 'view-out'
        } else if (viewDir === 'right') {
          tranName = 'view-in'
        } else {
          tranName = 'fade'
        }
        return tranName
      },
    },
  
}
</script>

<style>
	a{
		text-decoration: none;
	}
	.headerS{
	width: 100%;
	height: 0.88rem;
	background: #fff;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 99;
	display: flex;
}
.headerS .headerTitle{
	flex: 1;
	text-align: center;
	line-height: 0.88rem;
	font-size: 0.37rem;
}
.headerS .backs{
	width: 0.48rem;
	height: 0.48rem;
	margin-left: 0.3rem;
	margin-top: 0.2rem;
	
}
.headerS .information{
	width: 0.48rem;
	height: 0.48rem;
	margin-right: 0.3rem;
	margin-top: 0.2rem;
	
}
	.smnoprint{
		display: none !important;
	}
	#maps a{
		display: none !important;
	}
	#maps span{
		display: none !important;
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

.view-in-enter-active,
.view-out-leave-active {
  position: absolute;
  top: 0;
  width: 100%;
  -webkit-animation-duration: .2s;
  animation-duration: .2s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.view-in-enter-active {
  -webkit-animation-name: inRight;
  animation-name: inRight;
}

.view-out-leave-active {
  -webkit-animation-name: outLeft;
  animation-name: outLeft;
}
@-webkit-keyframes inRight {
  0% {
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0)
  }

  to {
    -webkit-transform: translateZ(0);
    transform: translateZ(0)
  }

}

@keyframes inRight {
  0% {
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0)
  }

  to {
    -webkit-transform: translateZ(0);
    transform: translateZ(0)
  }

}

@-webkit-keyframes outLeft {
  0% {
    -webkit-transform: translateZ(0);
    transform: translateZ(0)
  }

  to {
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0)
  }

}

@keyframes outLeft {
  0% {
    -webkit-transform: translateZ(0);
    transform: translateZ(0)
  }

  to {
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0)
  }

}
</style>
