<template>
<div class="container">
    <div class='messageMain'>
          <div class='systemNew' data-type='0'>
          	<router-link to="/sultnews">
              <div class='messageImg'>
                <img class='ic_message' src='https://www.suitius.com/image/resources/ic_message_xitong1.png'></img>
              </div>
              <div class='messagediv'>
                  <p>系统消息</p>
              </div>
              <img class='ic_more' src='https://www.suitius.com/image/resources/ic_more.png'></img>
             <!-- <b wx:if="{{newXx.suit>0}}">{{newXx.suit}}</b>-->
             </router-link>
          </div>

          <div class='journey' data-type='1'>
          	<router-link to="/journeyNews">
               <div class='messageImg'>
                <img class='ic_message' src='https://www.suitius.com/image/resources/ic_message_xitong2.png'></img>
              </div>
              <div class='messagediv'>
                  <p>行程消息</p>
              </div>
               <img class='ic_more' src='https://www.suitius.com/image/resources/ic_more.png'></img>
               <!--  <b wx:if="{{newXx.trip>0}}">{{newXx.trip}}</b>-->
               </router-link>
          </div>
          <div class='usenet'  data-type='2'>
          	<router-link to="/journeyNews">
               <div class='messageImg'>
                <img class='ic_message' src='https://www.suitius.com/image/resources/ic_message_xitong.png'></img>
              </div>
              <div class='messagediv'>
                  <p>讨论组消息</p>
              </div>
               <img class='ic_more' src='https://www.suitius.com/image/resources/ic_more.png'></img>
               <!-- <b wx:if="{{newXx.disc>0}}">{{newXx.disc}}</b>-->
               </router-link>
          </div>
           <div class='visit' data-type='3'>
           	<router-link to="/journeyNews">
               <div class='messageImg'>
               <img class='ic_message' src='https://www.suitius.com/image/resources/ic_message_xitong2.png'></img>
              </div>
              <div class='messagediv'>
                  <p>到访消息</p>
              </div>
               <img class='ic_more' src='https://www.suitius.com/image/resources/ic_more.png'></img>
               <!-- <b wx:if="{{newXx.visit>0}}">{{newXx.visit}}</b>-->
               </router-link>
          </div>
    </div>
</div>

</template>

<script>
</script>

<style>
.container{
 padding-top: 0.88rem;
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