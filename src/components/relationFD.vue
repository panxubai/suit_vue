<template>
	<div class="container">
		<div class="headerS">
			<div class="backs" @click="refresh">
				<img src="../assets/image/ic_topbar_return.png" />
			</div>
			<div class="headerTitle">联系业主</div>
			<div class="information">
		</div>
		</div>
		<div class='fdEndBox' @click="refresh">
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
			<span>到访时间</span>
			<div class='selectTime'>
				<div class='selectDay' @click="dayTap">
					{{monthDayText}}
					<p></p>
				</div>
				<div class='selectHour' @click="timeTap">
					{{hourText}}:{{minuteText}}
					<p></p>
				</div>
			</div>
		</div>

		<div class='photos'>
			<span>联系电话</span>
			<input type='number' placeholder='请填写手机号码' maxlength="11" v-model="photoVal" />
		</div>

		<div class='greeting'>
			<span>打个招呼</span>
			<textarea placeholder="业主您好，想跟几个小伙伴租您的房子，望沟通" maxlength="100" v-model="greetsVal" ></textarea>
		</div>
		<div class='sumitBtn'>提交申请</div>
		
		<!--"调起城市组件结束-->
		<div class="dialog-mask" v-show='showDiv' @click="closeShadow" ></div>
		<vue-pickers :show="show1" :selectData="pickData2" v-on:cancel="close" v-on:confirm="confirmFn"></vue-pickers>
		<vue-pickers :show="show2" :selectData="pickData1" v-on:cancel="close1" v-on:confirm="confirmFn1"></vue-pickers>

	</div>

</template>

<script>
	import VuePickers from 'vue-pickers'
	export default {
		components: {
			VuePickers
		},
		data() {
			
			return {
				showDiv:false,//遮罩层
				show1: false,//组件的显示隐藏
				show2: false,//组件的显示隐藏
				  pickData1: {
						columns: 1,
						default: [{
							text: "今天",
							value:0
						}],
						pData1: [{
							text: "今天",
							value:0
						}, {
							text: "明天",
							value:1
						}]
					},
				pickData2: {
					columns: 2, // 两列
					//link: true, // 联级必须需要link 参数
					default: [
						{
							text: '00',
							value:0	

						},
						{
							text: '00',
							value:0	

						},
					], // 默认显示哪个
					// 第一列数据结构
					pData1:[{
						text: '00',
						value:0	
					}],
					// 第二列数据结构
					pData2: [{
						text: '00',
						value:0	
					},{
						text: '30',
						value:1	
					}],

				},
				minuteText:'00',//选择分钟
			    hourText:'00',//选择小时
			    monthDayText: "今天",//选择日期
			    photoVal:"",//手机号
			    greetsVal:"",//打个招呼

			}
		},
		beforeMount:function(){
			this.pickData2.default[0] = dataTime(0);
			this.hourText = dataTime(0).text;
			this.pickData2.pData1 = hoursArr(0)
		},
		methods: {
			refresh: function() {
				window.history.go(-1)
			},
			//点击选择时间
			timeTap: function() {
				this.show1 = true;
				this.showDiv = true;
			},
			//点击关闭选择生日
			close: function(e) {
				//console.log(e);
				this.showDiv = false;
				this.show1 = false;
			},
			//点击确定选择生日
			confirmFn: function(data) {
				this.show1 = false;
				this.showDiv = false;
				this.pickData2.default[0].text = data.select1.text;
				this.pickData2.default[0].value = data.select1.value;
				this.pickData2.default[1].text = data.select2.text;
				this.pickData2.default[1].value = data.select2.value;
				this.hourText = data.select1.text;
				this.minuteText = data.select2.text;
			},
			//点击遮罩层
			closeShadow:function(){
				this.show1 = false;
				this.show2 = false;
				this.showDiv = false;
			},
			//点击选择今天明天
			dayTap:function(){
				this.showDiv = true;
				this.show2 = true;
			},
			//点击关闭选择职业
			close1: function(e) {
				//console.log(e);
				this.showDiv = false;
				this.show2 = false;
			},
			//点击确定选择今天
			confirmFn1: function(data) {
				//console.log(data.select1.text)
				this.show2 = false;
				this.showDiv = false;
				this.monthDayText = data.select1.text;
				this.pickData1.default[0].text = data.select1.text;
				this.pickData1.default[0].value = data.select1.value;
				this.pickData2.default[0] = dataTime(data.select1.value);
				this.hourText = dataTime(data.select1.value).text;
				this.pickData2.pData1 = hoursArr(data.select1.value)
			},
			//点击选择性别
			genderTap:function(e){
				this.genderIndex = e.target.dataset.index
			},
			//点击选择宠物
			restsTap:function(e){
				this.restsIndex = e.target.dataset.index
			},

		}

	}
	
	function dataTime(i){
		let that =this;
		const date = new Date();
		if(i == 0){
			if(date.getHours()<10){
				var hoursData = {
					text:'0'+date.getHours()+1,
					value:date.getHours()
				}
			}else{
				var hoursData = {
					text:date.getHours()+1,
					value:date.getHours()
				}
			};
		}else{
			var hoursData = {
					text:'08',
					value:8
			}
		}
		
			
//		const minutes = []
		
		return hoursData;
	}
	function hoursArr(i){
		let that =this;
		const date = new Date();
		const hours = [];	
//		const minutes = []
if(i == 0){
	for (let i = date.getHours()+1; i <= 23; i++) {
			if(i<10){
				var datas = {
					text:'0'+i,
					value:i
				}
			}else{
				var datas = {
					text:i,
					value:i
				}
			}
			
		  hours.push(datas)
		}
}else{
		for (let i = 0; i <= 23; i++) {
			if(i<10){
				var datas = {
					text:'0'+i,
					value:i
				}
			}else{
				var datas = {
					text:i,
					value:i
				}
			}
			
		  hours.push(datas)
		}
}
		
		return hours;
	}
</script>

<style scoped>
	.container{
		padding-top: 0.88rem;
		z-index: 110;
		 position: fixed;
		top: 0;
		left: 0;
        right: 0;
        bottom: 0;
        overflow-y:scroll; 
	}
	.headerS{
	box-shadow: 0 0.04rem 0.08rem 0 rgba(0, 0, 0, 0.10);

}
	a{
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
		width: 6.7rem;
		margin: 0 auto;
		height: 2.29rem;
		border-bottom: 1px solid #E5E5E5;
	}
	
	.visitTime span {
		display: block;
		font-size: 0.32rem;
		color: #222222;
		line-height: 1.09rem;
	}
	
	.visitTime .selectTime {
		width: 100%;
	}
	
	.visitTime .selectTime .selectDay {
		width: 2.6rem;
		height: 0.64rem;
		background: #F8F8F8;
		border-radius: 0.08rem;
		float: left;
		font-size: 0.28rem;
		color: #555555;
		line-height: 0.64rem;
		padding-left: 0.5rem;
		box-sizing: border-box;
		position: relative;
	}
	
	.visitTime .selectTime .selectHour {
		width: 3.78rem;
		height: 0.64rem;
		background: #F8F8F8;
		border-radius: 0.08rem;
		float: right;
		font-size: 0.28rem;
		color: #555555;
		line-height: 0.64rem;
		padding-left: 0.5rem;
		box-sizing: border-box;
		position: relative;
	}
	
	.visitTime .selectTime p {
		width: 0;
		height: 0;
		border-width: 0.1rem;
		border-style: solid;
		border-color: #999 transparent transparent transparent;
		position: absolute;
		top: 0.27rem;
		right: 0.32rem;
	}
	
	.photos {
		font-size: 0.32rem;
		padding-bottom: 0.32rem;
		border-bottom: 1px solid #E5E5E5;
	}
	
	.greeting,
	.photos {
		width: 6.7rem;
		margin: 0 auto;
	}
	
	.greeting span,
	.photos span {
		display: block;
		font-size: 0.32rem;
		color: #222222;
		line-height: 1.09rem;
	}
	
	.photos input {
		width: 100%;
		height: 0.64rem;
		background: #F8F8F8;
		border-radius: 0.08rem;
		font-size: 0.28rem;
		padding: 0 0.32rem;
		box-sizing: border-box;
		color: #222222;
		z-index: 10;
		border: none;
	}
	
	.greeting textarea {
		width: 100%;
		height: 2.2rem;
		background: #F8F8F8;
		border-radius: 0.08rem;
		font-size: 0.28rem;
		padding: 0.32rem;
		box-sizing: border-box;
		color: #222222;
		z-index: 10;
		border: none;
	}
	
	.sumitBtn {
		width: 100%;
		height: 0.98rem;
		background: #F5A623;
		font-size: 0.36rem;
		color: #FFFFFF;
		text-align: center;
		line-height: 0.98rem;
		position: fixed;
		bottom: 0;left: 0;
	}
	
	.dialog-mask {
		width: 100%;
		height: 100%;
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 8;
		background: rgba(0, 0, 0, 0.3);
	}
</style>