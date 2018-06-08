<template>
	<div class="container">
		<div class="headerS">
			<div class="backs" @click="refresh">
				<img src="../assets/image/ic_topbar_return.png" />
			</div>
			<div class="headerTitle">我的房屋</div>
			<div class="information">
		</div>
		</div>
		<div class='fdEndBox'>
			<div class='searchEndList'>
				<router-link to="/amendHome">
				<div class='leftImg'>
					<img src='https://www.suitius.com/tp5/public/uploads/houseimg/5acace442e7c0.jpg' />
				</div>
				<div class='rightMain'>
					<p>好日子大家园</p>
					<div class='nameImgPic'>
						<img src='https://www.suitius.com/image/resources/ic_list_sign.png'>
						<span>潘旭白</span>
						<b>60000<a>元/月</a></b>

					</div>
					<h6>三室一厅㎡</h6>
					<div class='addessSum'>
						<img src='https://www.suitius.com/image/resources/ic_list_sign.png' />
						<span>距离江湾体育场3km</span>
					</div>
				</div>
				</router-link>
			</div>
		</div>
		<transition name="router-slid" mode="out-in">
            <router-view></router-view>
        </transition>
	</div>
</template>

<script>
		export default {

		data() {
			return {
				
			}
		},

		created: function() {

		},
		methods: {
			refresh: function() {
				window.history.go(-1)
			},
			

		}
	}
</script>

<style scoped>
	a{
		text-decoration: none;
	}
	.container{
		padding-top: 0.88rem;
		z-index: 100;
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
	.fdEndBox {
		width: 100%;
		border-bottom: 1px solid #E5E5E5;
	}
	
	.fdEndBox .searchEndList {
		width: 6.9rem;
		height: 3.21rem;
		margin: 0 auto;
		box-sizing: border-box;
		padding: 0.4rem 0;
	}
	
	.fdEndBox .searchEndList .leftImg {
		width: 2.4rem;
		height: 2.4rem;
		float: left;
	}
	
	.fdEndBox .searchEndList .leftImg img {
		width: 2.4rem;
		height: 2.4rem;
	}
	
	.fdEndBox .searchEndList .rightMain {
		width: 4.18rem;
		height: 2.4rem;
		float: right;
	}
	
	.fdEndBox .searchEndList .rightMain p {
		display: block;
		font-size: 0.32rem;
		color: #222222;
		font-weight: 700;
		margin-bottom: 0.25rem;
	}
	
	.fdEndBox .searchEndList .rightMain h6 {
		font-size: 0.28rem;
		color: #9B9B9B;
		line-height: 0.76rem;
	}
	
	.fdEndBox .searchEndList .rightMain .nameImgPic {
		height: 0.62rem;
	}
	
	.fdEndBox .searchEndList .rightMain .nameImgPic img {
		width: 0.4rem;
		height: 0.4rem;
		background: #D8D8D8;
		border-radius: 50%;
		border: 1px solid #979797;
		float: left;
		margin-top: 0.11rem;
		margin-right: 0.16rem;
	}
	
	.fdEndBox .searchEndList .rightMain .nameImgPic span {
		font-size: 0.28rem;
		color: #222222;
		line-height: 0.62rem;
		float: left;
	}
	
	.fdEndBox .searchEndList .rightMain .nameImgPic b {
		float: right;
		font-size: 0.44rem;
		color: #FE8B25;
		line-height: 0.62rem;
	}
	
	.fdEndBox .searchEndList .rightMain .nameImgPic a {
		float: right;
		font-size: 0.28rem;
		color: #FE8B25;
		line-height: 0.68rem;
	}
	
	.fdEndBox .searchEndList .addessSum img {
		width: 0.4rem;
		height: 0.4rem;
		float: left;
	}
	
	.fdEndBox .searchEndList .addessSum span {
		font-size: 0.28rem;
		color: #9B9B9B;
		float: left;
		line-height: 0.4rem;
	}
	.router-slid-enter-active, .router-slid-leave-active {
        transition: transform .2s;
    }
    .router-slid-enter, .router-slid-leave-active {
        transform: translate3d(100%, 0, 0);
    }
</style>