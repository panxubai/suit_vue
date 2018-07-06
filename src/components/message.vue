<template>
<div class="container">
	<div class="headerS">
			<div class="backs" @click="refresh">
				<img src="../assets/image/ic_topbar_return.png" />
			</div>
			<div class="headerTitle">消息</div>
			<div class="information">
		</div>
		</div>
    <div class='messageMain'>
          <div class='systemNew' data-type='0'>
          	<router-link to="/sultnews">
              <div class='messageImg'>
                <img class='ic_message' src='../assets/resources/ic_message_xitong1.png'></img>
              </div>
              <div class='messagediv'>
                  <p>系统消息</p>
              </div>
              <img class='ic_more' src='../assets/resources/ic_more.png'></img>
             <!-- <b wx:if="{{newXx.suit>0}}">{{newXx.suit}}</b>-->
             </router-link>
          </div>

          <div class='journey' data-type='1'>
          	<router-link to="/journeyNews">
               <div class='messageImg'>
                <img class='ic_message' src='../assets/resources/ic_message_xitong2.png'></img>
              </div>
              <div class='messagediv'>
                  <p>行程消息</p>
              </div>
               <img class='ic_more' src='../assets/resources/ic_more.png'></img>
               <!--  <b wx:if="{{newXx.trip>0}}">{{newXx.trip}}</b>-->
               </router-link>
          </div>
          <div class='usenet'  data-type='2'>
          	<router-link to="/journeyNews">
               <div class='messageImg'>
                <img class='ic_message' src='../assets/resources/ic_message_xitong.png'></img>
              </div>
              <div class='messagediv'>
                  <p>讨论组消息</p>
              </div>
               <img class='ic_more' src='../assets/resources/ic_more.png'></img>
               <!-- <b wx:if="{{newXx.disc>0}}">{{newXx.disc}}</b>-->
               </router-link>
          </div>
           <div class='visit' data-type='3'>
           	<router-link to="/journeyNews">
               <div class='messageImg'>
               <img class='ic_message' src='../assets/resources/ic_message_xitong2.png'></img>
              </div>
              <div class='messagediv'>
                  <p>到访消息</p>
              </div>
               <img class='ic_more' src='../assets/resources/ic_more.png'></img>
               <!-- <b wx:if="{{newXx.visit>0}}">{{newXx.visit}}</b>-->
               </router-link>
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
  position: fixed;
		top: 0;
		left: 0;
        right: 0;
        bottom: 0;
        overflow-y:scroll; 
        z-index: 100;
}
.headerS{
	box-shadow: 0 0.04rem 0.08rem 0 rgba(0, 0, 0, 0.10);

}
.messageMain{
  width: 100%;
  box-sizing: border-box;
  padding-left:0.4rem;
}
.systemNew,.journey,.usenet,.visit{
  width: 100%;
  height: 1.4rem;
  position: relative;
  
}
.messageImg{
  width:1.12rem;
  height: 100%;
    float: left;
}
 .messageImg .ic_message{
  width: 0.8rem;
  height: 0.8rem;
  margin-top: 0.4rem;
}
.messagediv{
  width: 5.6rem;
  float: left;
  padding: 0.4rem 0;
  border-bottom: 1px solid #dddddd;
}
 .messagediv p{
  display: block;
  font-size: 0.32rem;
color: #222222;
  line-height: 0.5rem;
  margin-top:0.1rem;
}
.systemNew b,.journey b,.usenet b,.visit b{
  display: block;
  width: 0.4rem;
  height: 0.4rem;
  background: #FE2C54;
  border-radius: 50%;
  font-size: 0.24rem;
color: #FFFFFF;
letter-spacing: 0;
line-height: 0.4rem;
position: absolute;
top: 0.55rem;
right: 0.84rem;
text-align: center;
}
.ic_more{
  width: 0.32rem;
  height: 0.32rem;
  position: absolute;
  right: 0.32rem;
  top:0.53rem;
}
</style>