<template>
	<div class='container'>
		<div class="headerS">
			<div class="backs" @click="refresh">
				<img src="../assets/image/ic_topbar_return.png" />
			</div>
			<div class="headerTitle">消息</div>
			<div class="information">
		</div>
		</div>
    <div class='box'>
        <img src='../assets/img_suit_picture.png'></img>
        <b>SULT</b>
        <p>v 1.0.1</p>
    </div>
    <div class='copyright'>上海劢极科技公司版权所有</div>
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
	.container{
  padding-top: 0.88rem;
}
.headerS{
	box-shadow: 0 0.04rem 0.08rem 0 rgba(0, 0, 0, 0.10);
}
.box{
  width: 100%;
  text-align: center;
}
.box img{
  width: 2rem;
  height: 2rem;
  margin-top: 1.60rem;
  margin-bottom: 0.20rem;
}
.box b{
  display: block;
  font-size: 0.48rem;
color: #222222;
font-weight: 700;
}
.box p{
  display: block;
  font-size: 0.28rem;
color: #555555;
} 
.copyright{
  width: 100%;
  height: 1.68rem;
  position: fixed;
  bottom: 0;
  left: 0;
  text-align: center;
  line-height: 1.68rem;
  font-size: 0.28rem;
color: #555555;
}
</style>