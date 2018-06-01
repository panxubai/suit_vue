<template>
	<div class="container">
		<div class="headerS">
			<div class="backs" @click="refresh">
				<img src="../assets/image/ic_topbar_return.png" />
			</div>
			<div class="headerTitle">行程详情</div>
			<div class="information">
		</div>
		</div>
		<div class='fdEndBox'>
			<div class='searchEndList'>
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
			</div>
		</div>

		<div class='visitTime'>
			<div class='visitMain' :style="{ 'height': refuseShow ? '3.3rem' : '2rem' }">
				<p>到访时间</p>
				<div class='timeEnd'>
					<img src='https://www.suitius.com/image/resources/homeDetail/ic_suite_balcony20.png' />
					<b>{{dataAr&nbsp;&nbsp; rr.access_</b>
					<!--<div class='consent'>已同意</div>-->
					<div class='pending'>待处理</div>
					<!-- <div class='refuse'>已拒绝</div>-->
				</div>
				<div class='headNew'>
	                <img class='images' src='../assets/ic_suite_phone.png'/>
	                <b>{{dataArr.n</b>
	                <div class='phoneFs'>
		                <span>发送</span>
		                <img src='../assets/ic_suite_phone.png'/>
	               </div>
	            </div> 
				<div class='select' v-show="refuseShow">
					<div class='refuse' @click="refuseTap">拒绝</div>
					<div class='consent' @click="consentTap">同意</div>
				</div>
			</div>
		</div>
		<!--------------------->
		<div class='chatBoxes' :style="{ 'height': refuseShow ? '4.5rem' : '5.8rem' }">
			<div class="scroll_y">
				<!-- 本人的聊天 -->
				<div>
					<div class='oneselfId commons'>
						<div class='content'>
							<b>m.name}</b>
							<div class='contentText'>
								<span>item.comsdkfjkdsjflsdjflkdsjflkjdslkfjdsklfjklment}}</span>
								<p></p>
							</div>
						</div>
						<div class='headPortrait'>
							<img src='https://www.suitius.com/image/resources/ic_list_sign.png' />
						</div>
					</div>
					<!-- 其他人的聊天 -->
					<div class='otherId commons'>
						<div class='headPortrait'>
							<img src='https://www.suitius.com/image/resources/ic_list_sign.png' />
						</div>
						<div class='content'>
							<b>.name}}</b>
							<div class='contentText'>
								<span>item.comme大家ask的距离喀什的就ask来得及看啦nt}}</span>
								<p></p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class='inputBox'>
			<div class='inputWidth'>
				<input type='text' maxlength="50" cursor-spacing="8" placeholder='请留言' v-model='mainInput' />
				<p>发送</p>
			</div>
		</div>

		<!-- 点击拒绝跳出弹出框 -->
		<div class='tipsWindown' v-show="questionShow" @click='hidenTipTap'></div>
		<div class='expectationss' v-show="questionShow">
			<p>请选择拒绝原因</p>
			<img class='chahao' src='https://www.suitius.com/image/resources/homeDetail/ic_pop_close.png' @click='hidenTipTap' />
			<div class="selectss" :class="showNumber==1?'activeSelect':''" @click='elsectTap(1)'>
				A.<b>房子已经租出去了</b>
			</div>
			<div class="selectss" :class="showNumber==2?'activeSelect':''" @click='elsectTap(2)'>
				B.<b>预约的时间不可行</b>
			</div>
			<div class="selectss" :class="showNumber==3?'activeSelect':''" @click='elsectTap(3)'>
				C.<b>其他原因</b>
			</div>
			<div class='buttonsumss'>确定</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Home',
		data() {
			return {
				mainInput: "",
				questionShow: false,
				showNumber: 1,
				refuseShow:true,//点击同意和拒绝之后隐藏
			}
		},
		methods: {
			refresh: function() {
				window.history.go(-1)
			},
			//点击拒绝
			refuseTap: function() {
				this.questionShow = true
			},
			//点击同意
			consentTap: function() {
				this.refuseShow = false;
			},
			//关闭拒绝原因
			hidenTipTap: function() {
				this.questionShow = false
			},
			//选择拒绝原因
			elsectTap: function(val) {
				this.showNumber = val
			},
			
		}
	}
</script>

<style scoped>
	.container {
		padding-top: 0.88rem;
	}
	.headerS{
	box-shadow: 0 0.04rem 0.08rem 0 rgba(0, 0, 0, 0.10);
}
	
	a {
		text-decoration: none;
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
	
	.visitTime {
		width: 100%;
	}
	
	.visitTime .visitMain {
		width: 6.9rem;
		margin: 0 auto;
		border-bottom: 1px solid #E5E5E5;
	}
	
	.visitTime .visitMain p {
		display: block;
		font-size: 0.32rem;
		color: #222222;
		font-weight: 500;
		margin-top: 0.32rem;
	}
	
	.visitTime .visitMain .timeEnd {
		width: 100%;
		margin-top: 0.18rem;
		font-size: 0.38rem;
	}
	
	.visitTime .visitMain .timeEnd img {
		width: 0.3rem;
		height: 0.3rem;
		float: left;
		margin-top: 0.1rem;
		margin-right: 0.32rem;
	}
	
	.visitTime .visitMain .timeEnd b {
		font-size: 0.28rem;
		color: #555555;
	}
	
	.visitTime .visitMain .timeEnd .consent {
		width: 1.3rem;
		height: 0.5rem;
		background: #AADD76;
		border-radius: 0.4rem;
		text-align: center;
		line-height: 0.5rem;
		font-size: 0.24rem;
		color: #FFFFFF;
		float: right;
	}
	
	.visitTime .visitMain .timeEnd .pending {
		width: 1.3rem;
		height: 0.5rem;
		background: #fff;
		border-radius: 0.4rem;
		text-align: center;
		line-height: 0.5rem;
		font-size: 0.24rem;
		color: #AADD76;
		float: right;
	}
	
	.visitTime .visitMain .timeEnd .refuse {
		width: 1.3rem;
		height: 0.5rem;
		background: #C0C0C0;
		border-radius: 0.4rem;
		text-align: center;
		line-height: 0.5rem;
		font-size: 0.24rem;
		color: #FFFFFF;
		float: right;
	}
	
	.visitTime .visitMain .headNew{
   width: 100%;
   margin-top: 0.10rem;
   font-size: 0.44rem;
}
.visitTime .visitMain .headNew .images{
    width: 0.40rem;
  height: 0.40rem;
  float: left;
  border-radius: 50%;
  margin-top: 0.10rem;
  margin-right: 0.16rem;
}
.visitTime .visitMain .headNew .phoneFs{
  width:30%;
  float: right;
  margin-top:0.10rem;

}
.visitTime .visitMain .headNew .phoneFs span{
  font-size: 0.24rem;
 float: right;

 margin-right: 0.30rem;
 color: #FE8B24;
}
.visitTime .visitMain .headNew .phoneFs img{
  width: 0.30rem;
  height: 0.30rem;
  float: right;
}
.visitTime .visitMain .headNew b{
  font-size: 0.24rem;
color: #9B9B9B;
}
	
	.visitTime .visitMain .select {
		width: 100%;
		height: 0.80rem;
		margin-top: 0.50rem;
	}
	
	.visitTime .visitMain .select .refuse {
		width: 2.90rem;
		height: 0.80rem;
		background: #EEEEEE;
		border-radius: 0.60rem;
		text-align: center;
		line-height: 0.80rem;
		font-size: 0.28rem;
		color: #9B9B9B;
		float: left;
	}
	
	.visitTime .visitMain .select .consent {
		width: 3.48rem;
		height: 0.80rem;
		background: #F5A623;
		border-radius: 0.60rem;
		text-align: center;
		line-height: 0.80rem;
		font-size: 0.28rem;
		color: #fff;
		float: right;
	}
	/* 自己发送的消息 */
	
	.chatBoxes {
		width: 6.9rem;
		margin: 0 auto;
		overflow-y: auto;
	}
	
	.chatBoxes .oneselfId {
		width: 5.68rem;
		float: right;
		text-align: right;
	}
	
	.chatBoxes .oneselfId .content {
		display: inline-block;
		text-align: right;
		width: 4.4rem;
		margin-right: 0.34rem;
		font-size: 0;
	}
	
	.chatBoxes .oneselfId .content b {
		margin-bottom: 0.1rem;
		display: block;
		font-size: 0.24rem;
		color: #555555;
	}
	
	.chatBoxes .oneselfId .content .contentText {
		padding: 0.2rem 0.32rem;
		background-image: linear-gradient(52deg, #F3AC53 0%, #FE8B24 100%);
		box-sizing: border-box;
		margin-right: 0.16rem;
		position: relative;
		border-radius: 0.05rem;
		display: inline-block;
		font-size: 0;
	}
	
	.chatBoxes .oneselfId .content .contentText p {
		display: block;
		width: 0;
		height: 0;
		border-width: 0.2rem;
		border-style: solid;
		border-color: #FE8B24 transparent transparent transparent;
		position: absolute;
		top: 0;
		right: -0.1rem;
	}
	
	.chatBoxes .oneselfId .content .contentText span {
		font-size: 0.28rem;
		color: #FFFFFF;
		word-break: break-all;
	}
	
	.chatBoxes .oneselfId .headPortrait {
		width: 0.9rem;
		height: 0.9rem;
		float: right;
	}
	
	.chatBoxes .oneselfId .headPortrait img {
		width: 0.9rem;
		height: 0.9rem;
		border-radius: 50%;
	}
	/* 其他人发送的消息 */
	
	.chatBoxes .otherId {
		width: 5.68rem;
		float: left;
	}
	
	.chatBoxes .otherId .headPortrait {
		width: 0.9rem;
		height: 0.9rem;
		float: left;
	}
	
	.chatBoxes .otherId .headPortrait img {
		width: 0.9rem;
		height: 0.9rem;
		border-radius: 50%;
	}
	
	.chatBoxes .otherId .content {
		display: inline-block;
		width: 4.4rem;
		margin-left: 0.34rem;
		font-size: 0;
	}
	
	.chatBoxes .otherId .content b {
		display: block;
		font-size: 0.24rem;
		color: #555555;
		margin-bottom: 0.1rem;
	}
	
	.chatBoxes .otherId .content .contentText {
		padding: 0.2rem 0.32rem;
		background: #EFF3F6;
		box-sizing: border-box;
		margin-left: 0.16rem;
		position: relative;
		border-radius: 0.05rem;
		display: inline-block;
		font-size: 0;
	}
	
	.chatBoxes .otherId .content .contentText p {
		display: block;
		width: 0;
		height: 0;
		border-width: 0.2rem;
		border-style: solid;
		border-color: #EFF3F6 transparent transparent transparent;
		position: absolute;
		top: 0;
		left: -0.1rem;
	}
	
	.chatBoxes .otherId .content .contentText span {
		font-size: 0.28rem;
		color: #222222;
		word-break: break-all;
	}
	
	.chatBoxes .commons {
		margin-top: 0.3rem;
		padding-bottom: 0.2rem;
	}
	
	.inputBox {
		width: 100%;
		height: 1rem;
		box-shadow: 0 -4px 6px 0 rgba(0, 0, 0, 0.08);
		position: fixed;
		bottom: 0;
		left: 0;
	}
	
	.inputBox .inputWidth {
		width: 6.9rem;
		margin: 0 auto;
		box-sizing: border-box;
		padding: 0.16rem 0;
	}
	
	.inputBox .inputWidth input {
		width: 5.78rem;
		height: 0.7rem;
		background: #F8F8F8;
		border: 1px solid #E2E2E2;
		border-radius: 0.6rem;
		padding: 0 0.2rem;
		box-sizing: border-box;
		font-size: 0.28rem;
		float: left;
	}
	
	.inputBox .inputWidth p {
		display: block;
		float: right;
		width: 1rem;
		text-align: center;
		line-height: 0.7rem;
		font-size: 0.28rem;
		background: #FE8B24;
		color: #fff;
		border-radius: 0.3rem;
	}
	
	.tipsWindown {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(00, 00, 00, .5);
		z-index: 9;
	}
	
	.expectationss {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		margin: auto;
		width: 5.80rem;
		height: 4.60rem;
		background: #fff;
		padding-top: 0.64rem;
		border-radius: 8px;
		padding-bottom: 0.32rem;
		z-index: 20;
	}
	
	.expectationss p {
		display: block;
		width: 100%;
		font-size: 0.28rem;
		color: #555555;
		text-align: center;
		margin-bottom: 0.32rem;
	}
	
	.expectationss .chahao {
		height: 0.48rem;
		width: 0.48rem;
		position: absolute;
		top: 0.22rem;
		right: 0.22rem;
	}
	
	.expectationss .selectss {
		width: 4.30rem;
		height: 0.52rem;
		margin: 0.32rem auto;
		font-size: 0.28rem;
		color: #222222;
		line-height: 0.52rem;
	}
	
	.expectationss .selectss b {
		width: 3.34rem;
		height: 0.52rem;
		background: #F5F5F5;
		border-radius: 0.04rem;
		padding-left: 0.32rem;
		line-height: 0.52rem;
		font-size: 0.24rem;
		color: #555555;
		float: right;
	}
	
	.buttonsumss {
		width: 3.58rem;
		height: 0.80rem;
		background: #F5A623;
		border-radius: 0.60rem;
		font-size: 0.28rem;
		color: #FFFFFF;
		text-align: center;
		line-height: 0.80rem;
		margin: 0.64rem auto 0;
	}
	
	.expectationss .activeSelect {
		color: #FE8B25;
	}
	
	.expectationss .activeSelect b {
		background: rgba(254, 139, 37, 0.20);
		color: #FE8B25;
	}
</style>