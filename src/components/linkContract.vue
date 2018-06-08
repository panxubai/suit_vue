<template>
	<div class="container">
		<div class="headerS">
			<div class="backs" @click="refresh">
				<img src="../assets/image/ic_topbar_return.png" />
			</div>
			<div class="headerTitle">线上签约</div>
			<div class="information">
		</div>
		</div>
		
		
		<div class='noHome'>
		     <img src='../assets/img_missing_card2.png'/>
		        <p>哦哟~暂未开启</p>
		    </div>  
		
	</div>
</template>

<script>
export default {
	  data () {
	    return {
	      msg: 'Welcome to Your Vue.js App',
	      newsArray:[]
	    }
	  },
	  methods:{
	  	refresh: function() {
				window.history.go(-1)
			},
	  }
	}
</script>

<style scoped>
	.container{
 padding-top: 0.88rem;
 z-index: 110;
		 position: fixed;
		top: 0;
		left: 0;
        right: 0;
        bottom: 0;
        overflow-y:scroll; 
}
.headerS{
	box-shadow: 0 0.04rem 0.08rem 0 rgba(0, 0, 0, 0.10);
}
.noHome{
	width: 100%;
	margin-top: 1.2rem;
	text-align: center;
}
.noHome img{
	width: 2.6rem;
	height: 2.6rem;
}
.noHome p{
	font-family: PingFangSC-Regular;
font-size: 0.32rem;
color: #9B9B9B;

}
</style>