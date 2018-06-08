<template>
  <div class="load2">
  	<div class="centers">
  		
  	
			<span class="loading">  
        <span class="bar1"></span>
			<span class="bar2"></span>
			<span class="bar3"></span>
			<span class="bar4"></span>
			<span class="bar5"></span>
			<span class="bar6"></span>
			<span class="bar7"></span>
			<span class="bar8"></span>
			<span class="bar9"></span>
			<span class="bar10"></span>
			<span class="bar11"></span>
			<span class="bar12"></span>
			</span>
			<label style="cursor:pointer;">正在加载···</label>
		</div>
		</div>
</template>

<script>
export default {
  name: 'load2',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods : {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.load2 {
	   position: fixed;
			text-align: center;
			font-size: 0.32rem;
			background: #ffffff;
			width: 100%;
			height: 100%;
			z-index: 9999;
		}
		.centers{
			position: absolute;
			width: 100%;
			height: 2rem;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			margin: auto;
		}
		@-webkit-keyframes loading {
			from {
				opacity: 1;
			}
			to {
				opacity: 0.2;
			}
		}
		
		.loading {
			display: inline-block;
			margin-right: 0.2rem;
			position: relative;
			width: 0.32rem;
			height: 0.32rem;
			vertical-align: 0.17rem;
			margin-right: 0.3rem;
		}
		
		.loading span {
			display: inline-block;
			width: 20%;
			height: 40%;
			color: #ff7800;
			background: #ff7800;
			position: absolute;
			left: 100%;
			top: 100%;
			opacity: 0;
			-webkit-animation: loading 0.9s linear infinite;
			-webkit-border-radius: 30px;
		}
		
		.loading .bar1 {
			-webkit-transform: rotate(0deg) translate(0, -142%);
			-webkit-animation-delay: 0s;
			color: #ff7800;
		}
		
		.loading .bar2 {
			-webkit-transform: rotate(30deg) translate(0, -142%);
			-webkit-animation-delay: -0.9167s;
			color: #ff7800;
		}
		
		.loading .bar3 {
			-webkit-transform: rotate(60deg) translate(0, -142%);
			-webkit-animation-delay: -0.833s;
			color: #ff7800;
		}
		
		.loading .bar4 {
			-webkit-transform: rotate(90deg) translate(0, -142%);
			-webkit-animation-delay: -0.75s;
			color: #ff7800;
		}
		
		.loading .bar5 {
			-webkit-transform: rotate(120deg) translate(0, -142%);
			-webkit-animation-delay: -0.667s;
			color: #ff7800;
		}
		
		.loading .bar6 {
			-webkit-transform: rotate(150deg) translate(0, -142%);
			-webkit-animation-delay: -0.5833s;
			color: #ff7800;
		}
		
		.loading .bar7 {
			-webkit-transform: rotate(180deg) translate(0, -142%);
			-webkit-animation-delay: -0.5s;
			color: #ff7800;
		}
		
		.loading .bar8 {
			-webkit-transform: rotate(210deg) translate(0, -142%);
			-webkit-animation-delay: -0.41667s;
		}
		
		.loading .bar9 {
			-webkit-transform: rotate(240deg) translate(0, -142%);
			-webkit-animation-delay: -0.333s;
			color: #ff7800;
		}
		
		.loading .bar10 {
			-webkit-transform: rotate(270deg) translate(0, -142%);
			-webkit-animation-delay: -0.25s;
			color: #ff7800;
		}
		
		.loading .bar11 {
			-webkit-transform: rotate(300deg) translate(0, -142%);
			-webkit-animation-delay: -0.1667s;
			color: #ff7800;
		}
		
		.loading .bar12 {
			-webkit-transform: rotate(330deg) translate(0, -142%);
			-webkit-animation-delay: -0.0833s;
			color: #ff7800;
		}
</style>
