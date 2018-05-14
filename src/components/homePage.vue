<template>
	<div class="container">
		<div class='home_hander'>
			<div class='mine_icon'>

				<img src='https://www.suitius.com/image/resources/ic_topbar_me.png' />
				<p></p>
			</div>
			<div class="mine_renting" :class="Rentin?'active_color':''" @click="tapRentin">
				<b>我是客户</b>
				<p v-show="Rentin"></p>
			</div>
			<div class="mine_landlord" :class="landlord?'active_color':''" @click="tapLandlord">
				<b>我是业主</b>

				<p v-show="landlord"></p>
			</div>
			<div class='mine_new'>

				<img src='https://www.suitius.com/image/resources/ic_topbar_information.png' />
				<p></p>
			</div>
		</div>

		<div class="home_mine_renting" v-show="Rentin">
				<div class='renting_top'>
            <div class=' searchBox'>
                <div class='searchCity'>
                	<router-link to="/selectCity">
                    <b>上海</b>
                    <p></p>
                    <span></span>
                    </router-link>
                </div>
                <div class='searchMain'>
                	<router-link to="/searchS">
	                    <img class="icon1" src="../assets/ic_search.png"/>
	                    <div class='searchTiao'>addressId</div> 
	                    <img class="chahao1" src='https://www.suitius.com/image/resources/ic_search_closs.png'/>
                	</router-link>
                </div>
            </div>
        </div>
        
         <!-- 筛选 -->
      <div class='home_screen'>
          <div class='home_screen_sum'>
              <div class='screen_top'>
                  <div class='budgeting'>
                      <b>预算</b>
                      <div class='budgeting_little'>
                      dget
                        <p></p>
                      </div>
                      -
                      <div class='budgeting_more'>
                        getMa
                        <p></p>
                      </div>
                  </div>
                   <div class='styleFish'>
                      <b>装修风格</b>
                       <div class='styleFish_option'>
                       tyleFishYes
                        <p></p>
                      </div>
                   </div>
              </div>

              <div class='screen_bottom'>
                  <b>构成</b>
                  <div class='screen_relation screen_relation_max'>
                      <span>关系</span>
                      <div class='screen_relation_option'>
                        朋友
                        <p></p>
                      </div>
                  </div>
                  <div class='screen_relation'>
                       <span>成人</span>
                       <div class='screen_relation_option screen_relation_num'>
                        2
                        <p></p>
                      </div>
                  </div>
                  <div class='screen_relation'>
                       <span>儿童</span>
                       <div class='screen_relation_option screen_relation_num' >
                        1
                        <p></p>
                      </div>
                  </div>
              </div>
              <button class='searchEnd' @click="tapSearchEnd">搜 索</button>
          </div>
      </div>
        <!-- bannr图 -->
    <div class='bannerSurvey' @click="questionnaireTap">
        <img src='../assets/timg.jpg'/>
    </div>
    <!-- 攻略提示 -->
    <div class='strategyPrompts'>
        <div class='strategyMian'>
            <div class='tittleGL'>
                攻略贴士
            </div>
            <div class='articleList'>
                <!-- 第一种样式有图片 -->
                <div  class="articleImg">
                	<router-link to="/article">
                    <div class='articleImg_left'>
                        <span>tem.titlnem.contenee</span>
                        <p>em.conem.contenem.contenem.contenem.contenem.contenem.contenem.contenem.contenem.contenem.contenem.contenem.contenem.contenem.contenem.contenten</p>
                        <div class='commentIcon'>
                          <img src='https://www.suitius.com/image/resources/ic_comment_n.png'/>
                          <b>100</b>
                        </div>
                        <div class='transmitIcon' bindtap='transmitTap'>
                            <img src='https://www.suitius.com/image/resources/ic_transpond_n.png'/>
                            <b>100</b>
                        </div>
                    </div>
                    <div class='articleImg_right'>
                        <img src='https://www.suitius.com/image/resources/ic_transpond_n.png'/>
                    </div>
                    </router-link>
                </div>
                 <!-- 第一种样式有图片 -->
                <div  class="articleNoImg">
                    <div class='articleImg_left'>
                        <span>tem.titlnem.contenee</span>
                        <p>em.conem.contenem.contenem.contenem.contenem.contenem.contenem.contenem.contenem.contenem.contenem.contenem.contenem.contenem.contenem.contenten</p>
                        <div class='commentIcon'>
                          <img src='https://www.suitius.com/image/resources/ic_comment_n.png'/>
                          <b>100</b>
                        </div>
                        <div class='transmitIcon' bindtap='transmitTap'>
                            <img src='https://www.suitius.com/image/resources/ic_transpond_n.png'/>
                            <b>100</b>
                        </div>
                    </div>
                    <div v-show="false" class='articleImg_right'>
                        <img src='https://www.suitius.com/image/resources/ic_transpond_n.png'/>
                    </div>
                </div>
               
            </div>
        
        </div>
      </div>  
        
        
		</div>

		<div class="home_mine_landlord" v-show="landlord">
			<div class='noticeImg' @click='noticeShadowTap'>
            <img src='https://www.suitius.com/image/resources/img_cooperation.png'/>
        </div>
        
         <div class='checkHome' @click='checkHomeTap(1)'>
            <div class='iconImg'>
                <img src='https://www.suitius.com/image/resources/ic_home_register.png'/>
            </div>
            <div class='checkName'>
                <b>登记房屋</b>
                <p>免费发布房源，海量客源等你来</p>
            </div>
            <div class='checkJT'>
                 <img src='https://www.suitius.com/image/resources/homeDetail/ic_more_down.png'/>
            </div>
        </div>
        <div class='checkHome' @click='checkHomeTap(2)'>
            <div class='iconImg'>
                <img src='https://www.suitius.com/image/resources/ic_home_house.png'/>
            </div>
            <div class='checkName'>
                <b>我的房屋</b>
                <p>智能管理,安全的线上交易</p>
            </div>
            <div class='checkJT'>
                 <img src='https://www.suitius.com/image/resources/homeDetail/ic_more_down.png'/>
            </div>
        </div>
        
        <div class='checkHome' @click='checkHomeTap(3)'>
            <div class='iconImg'>
                <img src='../assets/ic_home_check.png'/>
            </div>
            <div class='checkName'>
                <b>审核状态</b>
                <p>正在审核中</p>
            </div>
            <div class='checkJT'>
                 <img src='https://www.suitius.com/image/resources/homeDetail/ic_more_down.png'/>
            </div>
        </div>	
		</div>
		<!--弹出层所有-->
		 <div class='noticeShadow' v-show="noticeShadowShow" >
          <img src='https://www.suitius.com/image/resources/ic_close.png' @click='noticeShadowHideTap'/>
          <div class='text'>
              <p>合作须知</p>
             <b>
                1.出租信息应遵循真实、准确、有效的原则。</br>
                2.厨房、卫生间、阳台和地下储藏室等非居住空间，不得单独作为出租信息发布。</br>
                3.自愿公开或隐藏联系方式信息。</br>
                4.平台不承诺对出租信息进行无期限保留。
             </b>  
          </div>
          <div class='yeess' @click='noticeShadowHideTap'>知道了</div>
      </div>

	</div>
</template>

<script>
	export default {
		data() {
			return {
				Rentin: true, //我要租房
				landlord: false, //我是业主
				noticeShadowShow:false,//合作须知
			}
		},
		methods: {
			//点击我要租房
			tapRentin: function() {
				if(this.Rentin) {

				} else {
					this.Rentin = true;
					this.landlord = false;
				}
			},
			//点击我是房东
			tapLandlord: function() {
				if(this.landlord) {

				} else {
					this.Rentin = false;
					this.landlord = true;
				}
			},
			//点击进入搜索结果
			tapSearchEnd:function(){
				this.$router.push({path:'/searchEnd'});
			},
			//点击问卷调查
			questionnaireTap:function(){
				this.$router.push({path:'/questionnaire'});
			},
			//弹出合作须知弹出层
			noticeShadowTap:function(){
				this.noticeShadowShow = true
			},
			//关闭合作须知弹出层
			noticeShadowHideTap:function(){
				this.noticeShadowShow = false
			},
			//点击登记房屋等跳转
			checkHomeTap:function(val){
				if(val == 1){
					this.$router.push({path:'/homeRegister'});
				}else if(val == 2){
					this.$router.push({path:'/myhome'});
				}else if(val == 3){
					
				}
				
			},
		}
	}
</script>

<style scoped>
	.container {
		padding-top: 0.88rem;
		font-size: 0.24rem;
		padding-bottom: 0.42rem;
	}
	
	.home_hander {
		height: 1.08rem;
		width: 100%;
		position: fixed;
		background: #fff;
		z-index: 99;
	}
	
	.home_hander img {
		width: 0.48rem;
		height: 0.48rem;
		margin-top: 0.31rem;
	}
	
	.mine_icon,
	.mine_new {
		width: 15%;
		height: 100%;
		float: left;
		text-align: center;
		position: relative;
	}
	
	.mine_icon p,
	.mine_new p {
		width: 1px;
		height: 0.34rem;
		background: #eee;
		position: absolute;
		bottom: 0.38rem;
		margin-top: -0.27rem;
	}
	
	.mine_icon p {
		right: 0;
	}
	
	.mine_new p {
		left: 0;
	}
	
	.mine_renting,
	.mine_landlord {
		width: 35%;
		height: 100%;
		line-height: 1.08rem;
		float: left;
		text-align: center;
		position: relative;
	}
	
	.mine_renting b,
	.mine_landlord b {
		font-size: 0.32rem;
	}
	/*.mine_new a{
  display: block;
  height: 15rem;
  width: 15rem;
  background: red;
  border-radius: 50%;
  position: absolute;
  right:25rem;
top:25rem;

}
.mine_icon a{
  display: block;
  height: 15rem;
  width: 15rem;
  background: red;
  border-radius: 50%;
  position: absolute;
 right:25rem;
top:25rem;

}*/
	
	.mine_renting p,
	.mine_landlord p {
		width: 0.14rem;
		height: 0.14rem;
		border-radius: 50%;
		background: #f2a533;
		position: relative;
		left: 50%;
		margin-left: -0.07rem;
		bottom: 0.35rem;
	}
	
	.active_color {
		color: #f2a533;
	}
	
	.home_mine_renting,.home_mine_landlord{
    padding-top: 1.08rem;
}

.home_mine_renting .renting_top{
  width: 100%;
  height: 4.22rem;
  overflow: hidden;
  background: url(../assets/timgs.jpg);
  background-position: 100% 100%;
}
.renting_top .searchBox{
  width: 90%;
  height: 0.8rem;
  background: #fff;
  border-radius: 0.5rem;
  margin-top:3.1rem;
  margin-left:5%;
  box-sizing: border-box;
  padding: 0 0.3rem; 
}
.searchBox .searchCity{
  width: 25%;
  float: left;
  position: relative;
}
.searchCity b{
  font-size: 0.36rem;
color: #222222;
line-height: 0.8rem;
}
.searchBox .searchCity p{
        width:0; 
        height:0;
        border-width:0.1rem;
        border-style:solid;
        border-color:#999 transparent transparent transparent;   
        position: absolute;
        top:0.36rem;
        right: 0.5rem;
}
.searchBox .searchCity span{
  width: 1px;
  height: 0.32rem;
  background: #eee;
  position: absolute;
  right: 0.1rem;
  top:0.24rem;
}
.searchBox .searchMain{
  width: 70%;
  float: left;
  position: relative;
}
.searchBox .searchMain .icon1{
	  position: absolute;
	width:0.45rem;
height:0.45rem;
  top:0.14rem;
  left:0.32rem;
}
.searchBox .searchMain .searchTiao{
  width: 80%;
  float: right;
  height: 100%;
  font-size: 0.32rem;
  line-height: 0.8rem;
  color: #999;
}
.searchBox .searchMain .chahao1{
  position: absolute;
  width:0.48rem;
height:0.48rem;
top:0.14rem;
right:-0.2rem;

}

.home_screen{
  width: 100%;
  height: 5.47rem;
    border-bottom:0.2rem solid #eff3f6; 
}
.home_screen_sum{
  width:6.7rem;
  margin:0 auto;
 
}
.home_screen_sum .screen_top{
  height: 1.97rem;
  width: 100%;
   border-bottom: 1px solid #e5e5e5;
}
.screen_top .budgeting{
  width: 4.23rem;
    float: left;
    line-height: 0.64rem;
}
.home_screen p{
   width:0; 
    height:0;
    border-width:0.1rem;
    border-style:solid;
    border-color:#999 transparent transparent transparent;   
    position: absolute;
    top:0.27rem;
    right: 0.23rem;
}
.home_screen b,.home_screen b{
  font-family: PingFangSC-Medium;
  display: block;
  width: 100%;
  font-size: 0.32rem;
  color: #222222;
  line-height: 1rem;
}
.budgeting .budgeting_little,.budgeting .budgeting_more,.styleFish .styleFish_option,.screen_relation_option{

  height: 0.64rem;
  background: #F8F8F8;
  border-radius: 0.16rem;
  line-height: 0.64rem;
  box-sizing: border-box;
  padding-left:0.28rem;
  font-size: 0.28rem;
  font-family: PingFangSC-Regular;
  color: #555555;
  position: relative;
 border: none;
}
.budgeting .budgeting_little{
 margin-right: 0.12rem;
   float: left;
     width:1.7rem;
}
.budgeting .budgeting_more{
  float: right;
  margin-right: 0.4rem;
  width:1.7rem;
}
.screen_top .styleFish{
  width: 2.47rem;
  float: right;
}
.styleFish .styleFish_option{
  width: 100%;
}
.screen_relation{
  width: 31%;
  float: left;
}
.screen_relation_max{
  width: 38%;
}
.screen_relation span{
  float: left;
  margin-right: 0.16rem;
  font-size: 0.28rem;
  line-height: 0.64rem;
}
.screen_relation_option{
width: 1.58rem;
height: 0.64rem;
float: left;
}
.screen_relation_num{
  width: 1.1rem;
}
.searchEnd{
  width: 100%;
  height: 0.8rem;
  background: #F5A623;
  border-radius: 1.2rem;
  color: #fff;
  line-height: 0.8rem;
  font-family: PingFangSC-Regular;
  font-size: 0.35rem;
  float: left;
  margin-top:0.64rem;
  border: none;
}

.bannerSurvey{
  height: 2.2rem;
  width: 100%;
  border-bottom:0.2rem solid #eff3f6; 
  text-align: center;
}
.bannerSurvey img{
  width: 6.7rem;
  height: 1.8rem;
  }
  .strategyPrompts{
  width: 100%;
  padding-bottom: 0.46rem;
}
.strategyPrompts .strategyMian{
  width: 6.7rem;
  margin:0 auto;
}
.strategyPrompts .strategyMian .tittleGL{
  font-family: PingFangSC-Medium;
  font-size: 0.4rem;
  color: #222222;
  font-weight:600;
  height: 0.84rem;
  line-height: 1.16rem;
}
.strategyPrompts .strategyMian .articleImg{
  width: 100%;
  height: 2.68rem;
  padding:0.32rem 0;
  box-sizing: border-box;
  border-bottom: 1px solid #e5e5e5;
}
.articleImg .articleImg_left{
    width: 3.9rem;
     float: left;
}
.articleImg .articleImg_left span,.strategyPrompts .articleNoImg span{
  display: block;
  width: 100%;
  line-height: 0.5rem;
  font-weight:500;
  font-size: 0.36rem;
  overflow: hidden;
text-overflow:ellipsis;
white-space: nowrap;
color: #2c3e50;
}
.articleImg .articleImg_left p,.strategyPrompts .articleNoImg p{
  width: 100%;
  margin-top:0.12rem;
   margin-bottom:0.2rem;
  font-size: 0.3rem;
  color: #2c3e50;
  word-wrap:break-word ;
  overflow:hidden;
  text-overflow:ellipsis;
  display:-webkit-box;
  -webkit-line-clamp:2;
  -webkit-box-orient:vertical;
}
.commentIcon,.transmitIcon{
  width: 1.18rem;
  float: left;
}

 .commentIcon img,.transmitIcon img{
  width: 0.4rem;
   height: 0.4rem;
  float: left;
}
.commentIcon b,.transmitIcon b{
 font-family: PingFangSC-Regular;
font-size: 0.24rem;
color: #9B9B9B;
  float: left;
letter-spacing: 0.26px;
margin-left: 0.1rem;
line-height: 0.4rem;
}
.articleImg .articleImg_right{
  width: 2.6rem;
  height: 1.74rem;
  float: right;
}
.articleImg .articleImg_right img{
  width: 100%;
  height: 1.74rem;
}
.strategyPrompts .articleNoImg{
 width: 100%;
  height: 2.68rem;
  padding:0.32rem 0;
  box-sizing: border-box;
  border-bottom: 1px solid #e5e5e5;
}



.home_mine_landlord .noticeImg{
  width: 100%;
  height: 4.22rem;
  margin-bottom: 0.5rem;
}
.home_mine_landlord .noticeImg img{
  width: 100%;
  height: 4.22rem;
}
.home_mine_landlord .checkHome{
  width: 6.7rem;
  height: 1.7rem;
  background: #FFF8EE;
border-radius: 0.08rem;
margin: 0 auto 0.3rem;
display: flex;
} 

.home_mine_landlord .checkHome .iconImg{
  width: 1.2rem;
  height: 1.2rem;
  margin:0.25rem 0.32rem;
}
.home_mine_landlord .checkHome .iconImg img{
  width: 1.2rem;
  height: 1.2rem;
}
.home_mine_landlord .checkHome .checkName{
  width: 4.5rem;
  height: 1.7rem;
}
.home_mine_landlord .checkHome .checkName b{
  display: block;
  font-size: 0.32rem;
color: #FE8B25;
font-weight: 500;
margin-top: 0.47rem;
}
.home_mine_landlord .checkHome .checkName p{
   display: block;
  font-size: 0.24rem;
color: #FE8B25;
margin-top: 0.16rem;
}
.home_mine_landlord .checkHome .checkJT{
  width: 0.32rem;
  height: 0.32rem;
  margin-top: 0.69rem;
  margin-right: 0.32rem;
}  
.home_mine_landlord .checkHome .checkJT img{
  width: 0.32rem;
  height: 0.32rem;
}
.noticeShadow{
 width: 100%;
  height: 100%;
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
}
.noticeShadow>img{
  width: 0.4rem;
  height: 0.4rem;
  position: absolute;
  top: 2.5rem;
  right: 0.8rem;
}
.noticeShadow .text{
  width: 6.58rem;
  margin: 4rem auto 0;
}
.noticeShadow .text p{
  display: block;
  font-size: 0.4rem;
color: #FFFFFF;
font-weight: 600;
font-family: PingFangSC-Medium;
}
.noticeShadow .text b{
  font-family: PingFangSC-Regular;
font-size: 0.32rem;
color: #FFFFFF;
line-height: 0.6rem;
}
.noticeShadow .yeess{
  width: 3.3rem;
  height: 0.8rem;
  margin: 1rem auto 0;
  border: 1px solid #FFFFFF;
border-radius: 0.6rem;
text-align: center;
line-height: 0.8rem;
font-size: 0.28rem;
color: #FFFFFF;
}
</style>