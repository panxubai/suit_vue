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
    <div class='mine_bottom'>
    	<router-link to="/feedback">
    <div class='mine_list'> 
              <img class='icon' src='../assets/ic_set_about.png'></img>
              <b>意见反馈</b>
              <img class='arrows' src='https://www.suitius.com/image/resources/ic_more.png'></img>
         </div>
          </router-link>
         <router-link to="/asregards">
         <div class='mine_list'>    	
              <img class='icon' src='../assets/ic_set_about2.png'></img>
              <b>关于</b>
              <img class='arrows' src='https://www.suitius.com/image/resources/ic_more.png'></img>
         </div>
         </router-link>
          <router-link to="/changePassword">
         <div class='mine_list'>    	
              <img class='icon' src='../assets/image/ic_set_mima.png'></img>
              <b>修改密码</b>
              <img class='arrows' src='https://www.suitius.com/image/resources/ic_more.png'></img>
         </div>
         </router-link>
    </div>
    <div class="sumBtn">
    	退出登录
    </div>
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
}
.headerS{
	box-shadow: 0 0.04rem 0.08rem 0 rgba(0, 0, 0, 0.10);

}
.mine_bottom{
  width: 100%;
  padding: 0 0.3rem;
  box-sizing: border-box;
}
.mine_bottom .mine_list{
	font-size: 0.32rem;
  width: 100%;
  padding: 0.3rem 0;
  box-sizing: border-box;
  border-bottom: 1px solid #e5e5e5; 
}
.mine_bottom .mine_list .icon{
  width: 0.4rem;
  height: 0.4rem;
  margin-right: 0.39rem;
  float:left;
margin-top:0.1rem;

}
.mine_bottom .mine_list .arrows{
  width: 0.4rem;
  height: 0.4rem;
  float: right;
  margin-top: 0.1rem;
}
.mine_bottom .mine_list b{
  font-size: 0.32rem;
  line-height: 0.6rem;
  color: #000;

}
.sumBtn{
	width: 5.9rem;
	height: 0.8rem;
	margin-top: 7rem;
	margin-left: 0.8rem;
	background: #F5A623;
	border-radius: 0.6rem;
	text-align: center;
	line-height: 0.8rem;
	color: #fff;
	font-size: 0.28rem;
}
</style>