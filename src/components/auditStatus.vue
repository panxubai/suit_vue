<template>
	<div class="container">
		<div class="headerS">
			<div class="backs" @click="refresh">
				<img src="../assets/image/ic_topbar_return.png" />
			</div>
			<div class="headerTitle">房屋审核</div>
			<div class="information">
			</div>
		</div>
<!--<div class='noHome' v-if="dataArr.length == 0">
     <img src='../assets/img_missing_card3.png'/>
        <b>哦哟~列表为空</b>
    </div>  -->
		<div class='routeList'>
			<div class='routeTop'>
				<img src="../assets/image/ic_topbar_return.png" />
				<div class='routeRight'>
					<p>em.villa</p>
					<div class='routeBottomDs'>
						<span>待审核</span>
					</div>
					<div class='routeTime'>
						<b>em.add</b>
					</div>
				</div>
			</div>

		</div>

		<div class='routeList'>
			<div class='routeTop'>
				<img src="../assets/image/ic_topbar_return.png" />
				<div class='routeRight'>
					<p>m.vil</p>
					<div class='routeBottom'>
						<span>已拒绝</span>
					</div>
					<div class='routeTime'>
						<b>em.addr</b>
					</div>
				</div>
			</div>

		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		mounted() {

		},
		methods: {
			refresh: function() {
				window.history.go(-1)
			},

		}
	}
</script>

<style scoped>
	.container {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		min-height: 100%;
		background: #eff3f6;
		padding-top: 0.88rem;
		box-sizing: border-box;
		font-size: 0;
	}
	
	.headerS {
		box-shadow: 0 0.04rem 0.08rem 0 rgba(0, 0, 0, 0.10);
	}
	
	.routeList{
  border-top: 1px solid #eff3f6;
  width: 100%;
  height: 2.13rem;
  padding: 0.40rem 0.40rem 0;
  box-sizing: border-box;
  background: #fff;
  margin-bottom: 0.22rem;
}
.routeList .routeTop{
   width: 100%;
  height: 1.70rem;
  display: flex;
}
.routeList .routeTop img{
   width: 1.3rem;
  height: 1.30rem;
}
.routeList .routeTop .routeRight{
    margin-left: 0.32rem;
 height: 1.70rem; 
 width: 100%;
}
.routeList .routeTop .routeRight p{
 display: inline-block;
 font-size: 0.32rem;
color: #222222;
font-weight: 500;
margin-bottom: 0.40rem;
}
.routeList .routeTop .routeRight .routeTime{
  width: 100%;
}
.routeList .routeTop .routeRight .routeTime b{
  display: block;
  font-size: 0.28rem;
color: #9B9B9B;
width: 5.06rem;
white-space:nowrap;
overflow: hidden;
text-overflow: ellipsis;
}

.routeList .routeBottom,.routeBottomDs{
  display: inline-block;
  height: 0.80rem;
  float: right;
}
.routeList .routeBottom span{
  display: block;
  width: 1.30rem;
  height: 0.50rem;
  background: #C0C0C0;
border-radius: 0.40rem;
   font-size: 0.24rem;
color: #FFFFFF;
   line-height: 0.50rem;
   margin-top: 0.15rem;
   text-align: center;
}
.routeList .routeBottomDs span{
  display: block;
  width: 1.30rem;
  height: 0.50rem;
border-radius: 0.40rem;
   font-size: 0.24rem;
   line-height: 0.50rem;
   margin-top: 0.15rem;
   text-align: center;
  background: #fff;
  color: #AADD76;
}
.noHome{
  width: 100%;
  text-align: center;
}
.noHome img{
  width: 2.6rem;
  height: 2.6rem;
  margin-top: 2.5rem;
}
.noHome b{
  display: block;
  font-size: 0.32rem;
color: #9B9B9B;
margin-top: 0.48rem;
}
</style>