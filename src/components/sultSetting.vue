<template>
	<div class='container'>
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
    </div>
</div>
</template>

<script>
</script>

<style scoped>
	a{
		text-decoration: none;
	}
	.container{
  padding-top: 0.88rem;
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
</style>