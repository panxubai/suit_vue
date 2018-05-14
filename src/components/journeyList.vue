<template>
	<div class='container'> 
<!--<div class='noHome' v-if="dataArr.length == 0">
     <img src='../assets/img_missing_card3.png'/>
        <b>哦哟~列表为空</b>
    </div>  -->

    
    <div class='routeList' > 
        <div class='routeTop'>
            <img src='https://www.suitius.com/image/resources/img_suit_picture.png'/>
            <div class='routeRight'>
              <p>item.ward-iz想Z想Z想大大打折的tem.</p>
                <!--<div class='routeBottomDs'>
                  <span>待处理</span>
              </div>  -->
                 <div  class='routeBottomJj'>
                  <span>已拒绝</span>
              </div>  
               <!--<div  class='routeBottomTy'>
                  <span>已同意</span>
              </div>-->
              <div class='routeTime'>
              <h1>{{item. 100㎡</h1>
                  <b>6000<a>元/月</a></b>
              </div>
            </div>
        </div>
         <div class='routeBottom'>
            <span> item.access_time</span>
          <!--  <a wx:if="{{item.on_read != 0}}">{{item.on_read}}</a>-->
            <img src='https://www.suitius.com/image/resources/ic_more.png'/>
         </div>
    </div>

</div>
</template>

<script>
</script>

<style scoped>
	.container{
   position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #eff3f6;
	padding-top: 0.88rem;
	box-sizing: border-box;
}
.routeList{
  border-top: 1px solid #eff3f6;
  width: 100%;
  height: 3.12rem;
  padding: 0.4rem 0.4rem 0;
  box-sizing: border-box;
  background: #fff;
  border-bottom: 0.22rem solid #eff3f6;
}
.routeList .routeTop{

   width: 100%;
  height: 1.7rem;
  display: flex;
  border-bottom: 1px solid #E5E5E5;
}
.routeList .routeTop img{
   width: 1.3rem;
  height: 1.3rem;
}
.routeList .routeTop .routeRight{
	position: relative;
    margin-left: 0.32rem;
 height: 1.7rem; 
 width: 100%;
}
.routeList .routeBottomJj,.routeBottomDs,.routeBottomTy{
position: absolute;
top: 0;
right: 0;
  height: 0.8rem;

}
.routeList .routeBottomTy span{
  display: block;
  width: 1.3rem;
  height: 0.5rem;
  background: #AADD76;
  border-radius: 0.4rem;
   font-size: 0.24rem;
  color: #FFFFFF;
   line-height: 0.5rem;
   text-align: center;
}
 .routeList .routeBottomJj span{
  display: block;
  width: 1.3rem;
  height: 0.5rem;
  background: #C0C0C0;
border-radius: 0.4rem;
   font-size: 0.24rem;
color: #FFFFFF;
   line-height: 0.5rem;
   text-align: center;
} 
.routeList .routeBottomDs span{
  display: block;
  width: 1.3rem;
  height: 0.5rem;
border-radius: 0.4rem;
   font-size: 0.24rem;
   line-height: 0.5rem;
   text-align: center;
  background: #fff;
  color: #AADD76;
}
.routeList .routeTop .routeRight p{
	width:3.5rem ;
	overflow: hidden;
text-overflow:ellipsis;
white-space: nowrap;
 font-size: 0.32rem;
color: #222222;
font-weight: 500;
margin-bottom: 0.4rem;
}
.routeList .routeTop .routeRight .routeTime{
  width: 100%;
  margin-top: 0.3rem;
}
.routeList .routeTop .routeRight .routeTime h1{
  font-size: 0.28rem;
color: #9B9B9B;
float: left;
margin-top: 0.15rem;
}
.routeList .routeTop .routeRight .routeTime b{
  font-size: 0.44rem;
color: #FE8B25;
float: right;
}
.routeList .routeTop .routeRight .routeTime b a{
 font-size: 0.28rem;
color: #FE8B25;
}

.routeList .routeBottom{
	font-size: 0.24rem;
   width: 100%;
  height: 0.8rem;
  position: relative;
}
.routeList .routeBottom a{
     display:block;
    width:0.4rem;
    height:0.4rem;
    background:#FE2C54;
  border-radius:50%;
  font-size:0.2rem;
  color:#FFFFFF;
  letter-spacing:0;
  line-height:0.4rem;
  position:absolute;
  top:0.16rem;
right:0.39rem;

  text-align:center;
}
.routeList .routeBottom span{
   font-size: 0.28rem;
   line-height: 0.8rem;
color: #9B9B9B;
}
.routeList .routeBottom img{
   width: 0.32rem;
   height: 0.32rem;
   float: right;
   margin-top: 0.24rem;
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