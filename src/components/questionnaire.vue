<template>
	<!--pages/questionnaire/questionnaire.wxml-->
	<div class="container">
		<div class="headerS">
			<div class="backs" @click="refresh">
				<img src="../assets/image/ic_topbar_return.png" />
			</div>
			<div class="headerTitle">问卷调查</div>
			<div class="information">
		</div>
		</div>
		<div class='backTop'>
			<img src='../assets/resources/questionnaire/ic_boy_back.png' />
			<p> SUIT是为了解决业主出租房和客户租房问题而诞生的。若你想体验更有效的服务,请花点时间填写以下内容。</p>
		</div>

		<div class='questMain'>
			<div class='birthday'>
				<p>生日</p>
				 <span v-if="yearText != ''" @click='birthdayTap'>{{yearText}}年{{monthText}}月</span>
				<span v-else @click='birthdayTap'>请选择生日</span>

			</div>
			<div class='gender'>
				<p>性别</p>
				<div class="genderMan" v-bind:class="genderIndex == 1?'active_color':''" data-index='1' @click='genderTap'>
					
<img v-if="genderIndex == 1" data-index = '1'  src='../assets/resources/questionnaire/ic_boy2.png'/>
<img v-else data-index='1' src='../assets/resources/questionnaire/ic_boy1.png' />
					<a data-index='1'>男</a>
				</div>
				<div class="genderWoman" v-bind:class="genderIndex == 0?'active_color':''" data-index='0' @click='genderTap'>
					<img v-if="genderIndex == 0" data-index = '0' src='../assets/resources/questionnaire/ic_boy4.png' @click='genderTap'/>
<img v-else data-index='0' src='../assets/resources/questionnaire/ic_boy3.png' />
					<a data-index='0'>女</a>
				</div>
			</div>

			<div class='birthday'>
				<p>职业</p>
				<span v-if="occupationText !=''" @click="occupationTap">{{occupationText}}</span>
       <span v-else @click="occupationTap">请选择职业</span>
			</div>
			<div class='schools'>
				<p>学校</p>
				<input type='text' placeholder='请填写学校' v-model="inputVal"  />
			</div>
			<div class='rests'>
				<p>宠物</p>
				<div class='restsYes' data-index='1' @click='restsTap'>
				<img v-if="restsIndex == 1"  src='../assets/resources/questionnaire/ic_boy6.png' data-index = '1'  />
<img  v-else src='../assets/resources/questionnaire/ic_boy5.png' data-index='1'>
					<a data-index='1'>有</a>
				</div>
				<div class='restsNo' data-index='0' @click='restsTap'>
	           <img v-if="restsIndex == 0" src='../assets/resources/questionnaire/ic_boy6.png' data-index = '0'  />
<img v-else src='../assets/resources/questionnaire/ic_boy5.png' data-index='0'>
					<a data-index='0'>无</a>
				</div>

			</div>
			<div class='submitWj'>提交</div>
		</div>

		<!--"调起城市组件结束-->
		<div class="dialog-mask" v-show='showDiv' @click="closeShadow" ></div>
		<vue-pickers :show="show1" :selectData="pickData2" v-on:cancel="close" v-on:confirm="confirmFn"></vue-pickers>
		<vue-pickers :show="show2" :selectData="pickData1" v-on:cancel="close1" v-on:confirm="confirmFn1"></vue-pickers>
	</div>

</template>

<script>
	const date = new Date()
		const years = []
		const months = []
		for (let i = 1960; i <= date.getFullYear(); i++) {
			let data = {
				text:i,
				value:i
			}
		  years.push(data)
		}
		
		for (let i = 1; i <= 12; i++) {
		  let data1 = {
				text:i,
				value:i
			}
		  months.push(data1)
		}
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
							text: "金融",
							value:0
						}],
						pData1: [{
							text: "金融",
							value:0
						}, {
							text: "销售",
							value:1
						}, {
							text: "IT互联网",
							value:2
						}, {
							text: "教育培训",
							value:3
						}, {
							text: "电商",
							value:4
						}, {
							text: "硬件",
							value:5
						}, {
							text: "学生",
							value:6
						}, {
							text: "老板",
							value:7
						}, {
							text: "其他",
							value:8
						}]
					},
				pickData2: {
					columns: 2, // 两列
					//link: true, // 联级必须需要link 参数
					default: [{
							text: 1990,
							value:1990

						},
						{
							text: 1,
							value:1

						},
					], // 默认显示哪个
					// 第一列数据结构
					pData1: years,
					// 第二列数据结构
					pData2: months,

				},
				occupationText:"",//选择职业
			    yearText:"",//选择年
			    monthText: "",//选择月
			    genderIndex:0,//0，未选择，1，男    0，女
			    restsIndex: 0,//0，未选择，1，是    0，否
			    inputVal:""//学校

			}
		},
		methods: {
			refresh: function() {
				window.history.go(-1)
			},
			//点击选择生日
			birthdayTap: function() {
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
				this.yearText = data.select1.text;
				this.monthText = data.select2.text;
			},
			//点击遮罩层
			closeShadow:function(){
				this.show1 = false;
				this.show2 = false;
				this.showDiv = false;
			},
			//点击选择职业
			occupationTap:function(){
				this.showDiv = true;
				this.show2 = true;
			},
			//点击关闭选择职业
			close1: function(e) {
				//console.log(e);
				this.showDiv = false;
				this.show2 = false;
			},
			//点击确定选择职业
			confirmFn1: function(data) {
				
				this.show2 = false;
				this.showDiv = false;
				this.occupationText = data.select1.text;
				this.pickData1.default[0].text = data.select1.text;
				this.pickData1.default[0].value = data.select1.value;
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
</script>

<style scoped>
	/* pages/questionnaire/questionnaire.wxss */
	.container{
		padding-top: 0.88rem;
		z-index: 100;
		position: fixed;
		top: 0;
		left: 0;
        right: 0;
        bottom: 0;
         overflow-y:scroll;  
	}

	.backTop {
		width: 100%;
		height: 3.5rem;
		position: relative;
	}
	
	.backTop img {
		width: 100%;
		height: 3.5rem;
	}
	
	.backTop p {
		display: block;
		width: 6.7rem;
		height: 1.35rem;
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		margin: auto;
		z-index: 99;
		font-size: 0.32rem;
		color: #FFFFFF;
	}
	
	.questMain {
		width: 5.9rem;
		margin: 0 auto;
	}
	
	.questMain .birthday {
		width: 100%;
		height: 0.97rem;
		border-bottom: 1px solid #E5E5E5;
	}
	
	.questMain .birthday p {
		font-size: 0.32rem;
		color: #222222;
		font-weight: 600;
		line-height: 0.97rem;
		float: left;
	}
	
	.questMain .birthday span {
		font-size: 0.28rem;
		color: #9B9B9B;
		float: right;
		line-height: 0.97rem;
	}
	
	.questMain .gender {
		margin-top: 0.5rem;
		margin-bottom: 0.32rem;
		width: 100%;
		height: 0.8rem;
	}
	
	.questMain .gender p {
		font-size: 0.32rem;
		color: #222222;
		font-weight: 600;
		line-height: 0.8rem;
		float: left;
		margin-right: 0.4rem;
	}
	
	.questMain .gender .genderMan,
	.genderWoman {
		width: 2.03rem;
		height: 0.8rem;
		background: #F5F5F5;
		border-radius: 0.4rem;
		float: left;
		padding: 0.2rem 0.56rem;
		box-sizing: border-box;
	}
	
	.questMain .gender .genderWoman {
		float: right;
	}
	
	.questMain .gender .genderMan img,
	.questMain .gender .genderWoman img {
		width: 0.4rem;
		height: 0.4rem;
		float: left;
	}
	
	.questMain .gender .genderMan a,
	.questMain .gender .genderWoman a {
		font-size: 0.28rem;
		color: #555555;
		float: right;
		line-height: 0.4rem;
	}
	
	.schools {
		width: 100%;
		height: 0.97rem;
		margin-top: 0.32rem;
		border-bottom: 1px solid #E5E5E5;
	}
	
	.schools p {
		font-size: 0.32rem;
		color: #222222;
		font-weight: 600;
		line-height: 0.8rem;
		float: left;
	}
	
	.schools input {
		width: 4.5rem;
		float: right;
		height: 0.97rem;
		text-align: right;
		font-size: 0.28rem;
		color: #9B9B9B;
		border: none;
	}
	
	.rests {
		width: 100%;
		height: 0.97rem;
		margin-top: 0.32rem;
	}
	
	.rests p {
		font-size: 0.32rem;
		color: #222222;
		font-weight: 600;
		line-height: 1rem;
		float: left;
		margin-right: 0.2rem;
	}
	
	.questMain .rests .restsYes,
	.restsNo {
		width: 0.8rem;
		height: 0.32rem;
		float: left;
		margin-top: 0.32rem;
		margin-left: 1rem;
	}
	
	.questMain .rests .restsYes img,
	.questMain .rests .restsNo img {
		width: 0.32rem;
		height: 0.32rem;
		float: left;
	}
	
	.questMain .rests .restsYes a,
	.questMain .rests .restsNo a {
		font-size: 0.28rem;
		color: #555555;
		float: right;
	}
	
	.submitWj {
		width: 5.9rem;
		height: 0.8rem;
		background: #F5A623;
		border-radius: 0.6rem;
		font-size: 0.28rem;
		color: #FFFFFF;
		text-align: center;
		line-height: 0.8rem;
		margin-top: 0.8rem;
	}
	
	.dialog-mask {
		width: 100%;
		height: 100%;
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 100;
		background: rgba(0, 0, 0, 0.3);
	}
	
	.questMain .gender .active_color {
		background: rgba(254, 139, 37, 0.20);
	}
	
	.questMain .gender .active_color a {
		color: #FE8B25;
	}
	a{
		text-decoration: none;
	}
	
	.area_roll>div {
		font-size: 0.24rem;
	}
	

	/*.area_roll_mask{
	background: #fff !important;
}
.area_btn_box{
	background: #fff !important;
}*/
</style>