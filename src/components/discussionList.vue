<template>
	<div class='container'>

		<!--<div class='noHome' style="display:{{dataArr.length == 0 &&showKong?'block':'none'}}">
     <image src='../../resources/restImg/img_missing_card2.png'></image>
        <b>哦哟~列表为空</b>
    </div> -->
		<div class="headerS">
			<div class="backs">
			</div>
			<div class="headerTitle">讨论组</div>
			<div class="information">
			</div>

		</div>
		<div class='routeList'>
			<mt-cell-swipe :right="[  
                {  
                    content: '退出',  
                    style: { background: '#ff7900', color: '#fff',},  
                    handler: () => deleteSection(1)  
                }  
            ]">
				<div class='routeTop' @click="routerLink">
					<div v-if="itemArr.length == 2" class="imgsum imgsumtwo">
						<img v-for="item in itemArr" :src='item' />
					</div>
					<div v-if="itemArr.length == 3" class='imgsum imgsumthree'>
						<img v-for="item in itemArr" :src='item' />
					</div>
					<div v-if="itemArr.length == 4" class='imgsum'>
						<img v-for="item in itemArr" :src='item' />
					</div>
					<div v-if="itemArr.length == 1" class='imgsum'>
						<img v-for="item in itemArr" :src='item' />
					</div>

					<div class='routeRight'>
						<p>{{item.hou</p>
						<!-- <span wx:if="{{item.no_read != 0}}">{{item.</span>-->
						<div class='routeTime'>
							<h6>use_info.area}} ㎡</h6>
							<b>3000<a>元/月</a></b>
						</div>
					</div>
				</div>
			</mt-cell-swipe>
		</div>
		<div class='routeList'>
			<mt-cell-swipe :right="[  
                {  
                    content: '退出',  
                    style: { background: '#ff7900', color: '#fff',},  
                    handler: () => deleteSection(1)  
                }  
            ]">
				<div class='routeTop' @click="routerLink">
					<div v-if="itemArr.length == 2" class="imgsum imgsumtwo">
						<img v-for="item in itemArr" :src='item' />
					</div>
					<div v-if="itemArr.length == 3" class='imgsum imgsumthree'>
						<img v-for="item in itemArr" :src='item' />
					</div>
					<div v-if="itemArr.length == 4" class='imgsum'>
						<img v-for="item in itemArr" :src='item' />
					</div>
					<div v-if="itemArr.length == 1" class='imgsum'>
						<img v-for="item in itemArr" :src='item' />
					</div>

					<div class='routeRight'>
						<p>{{item.hou</p>
						<!-- <span wx:if="{{item.no_read != 0}}">{{item.</span>-->
						<div class='routeTime'>
							<h6>use_info.area}} ㎡</h6>
							<b>3000<a>元/月</a></b>
						</div>
					</div>
				</div>
			</mt-cell-swipe>
		</div>
		<transition name="router-slid" mode="out-in">
			<router-view></router-view>
		</transition>
	</div>
</template>

<script>
	import { CellSwipe } from 'mint-ui';
	import Vue from 'vue'
	Vue.component(CellSwipe.name, CellSwipe);
	export default {

		data() {
			return {
				itemArr: ["../assets/img_suit_picture.png", "../assets/logo.png", "../assets/logo.png"]
			}
		},

		created: function() {

		},
		methods: {
			refresh: function() {
				window.history.go(-1)
			},
			deleteSection: function(item) {
				console.log(item)
			},
			routerLink: function() {
				this.$router.push({
					path: '/discussion'
				});
			},
		}
	}
</script>

<style scoped>
	a {
		text-decoration: none;
	}
	
	.container {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		min-height: 100%;
		background: #eff3f6;
		padding-top: 0.88rem;
		padding-bottom: 0.98rem;
		box-sizing: border-box;
	}
	
	.headerS {
		box-shadow: 0 0.04rem 0.08rem 0 rgba(0, 0, 0, 0.10);
	}
	
	.routeList {
		width: 100%;
		height: 2.12rem;
		border-bottom: 1px solid #eff3f6;
		box-sizing: border-box;
		background: #fff;
		margin-bottom: 0.22rem;
		position: relative;
	}
	/*.routeList .del{
  width: 100px;
  height: 212rem;
  text-align: center;
  line-height: 212rem;
  background: #FF3B30;
  font-size: 28rem;
  color: #FFFFFF;
  position: absolute;
  top: 0;
  right: -100px;
  z-index: 999;
}*/
	
	.routeList .routeTop {
		width: 100%;
		height: 1.70rem;
		padding: 0.40rem 0.40rem 0;
		display: flex;
	}
	
	.routeList .routeTop .imgsum {
		width: 1.72rem;
		height: 1.30rem;
		display: flex;
		flex-wrap: wrap;
		background: #D8D8D8;
	}
	
	.routeList .routeTop .imgsumtwo {
		align-items: center;
	}
	
	.routeList .routeTop .imgsumthree img:first-child {
		margin-left: 25%;
	}
	
	.routeList .routeTop .imgsum img {
		width: 50%;
		height: 50%;
	}
	
	.routeList .routeTop .routeRight {
		margin-left: 0.32rem;
		height: 1.70rem;
		width: 100%;
		position: relative;
	}
	
	.routeList .routeTop .routeRight span {
		display: block;
		width: 0.40rem;
		height: 0.40rem;
		background: #FE2C54;
		border-radius: 50%;
		font-size: 0.20rem;
		color: #FFFFFF;
		letter-spacing: 0;
		line-height: 0.40rem;
		position: absolute;
		top: 0;
		right: 0;
		text-align: center;
	}
	
	.routeList .routeTop .routeRight p {
		display: block;
		font-size: 0.32rem;
		color: #222222;
		font-weight: 500;
		margin-bottom: 0.40rem;
	}
	
	.routeList .routeTop .routeRight .routeTime {
		font-size: 0.44rem;
		width: 100%;
	}
	
	.routeList .routeTop .routeRight .routeTime h6 {
		display: inline-block;
		font-size: 0.28rem;
		color: #9B9B9B;
	}
	
	.routeList .routeTop .routeRight .routeTime b {
		font-size: 0.44rem;
		color: #FE8B25;
		float: right;
	}
	
	.routeList .routeTop .routeRight .routeTime b a {
		font-size: 0.28rem;
		color: #FE8B25;
	}
	
	.noHome {
		width: 100%;
		text-align: center;
	}
	
	.noHome img {
		width: 2.60rem;
		height: 2.60rem;
		margin-top: 2.50rem;
	}
	
	.noHome b {
		display: block;
		font-size: 0.32rem;
		color: #9B9B9B;
		margin-top: 0.48rem;
	}
	
	.router-slid-enter-active,
	.router-slid-leave-active {
		transition: transform .2s;
	}
	
	.router-slid-enter,
	.router-slid-leave-active {
		transform: translate3d(100%, 0, 0);
	}
</style>