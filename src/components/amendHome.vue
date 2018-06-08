<template>
	<div class="container">
		<div class="headerS">
			<div class="backs" @click="refresh">
				<img src="../assets/image/ic_topbar_return.png" />
			</div>
			<div class="headerTitle">房屋详情</div>
			<div class="information">
		</div>
		</div>
		<!--轮播-->
		<div class="swipeDiv">
			<mt-swipe ref="swipe" :auto="4000" :speed="500">
				<mt-swipe-item><img src="https://www.suitius.com/tp5/public/uploads/houseimg/5ac2ed879a29e.jpg" /></mt-swipe-item>
				<mt-swipe-item><img src="https://www.suitius.com/tp5/public/uploads/houseimg/5ac2ed879a29e.jpg" /></mt-swipe-item>
				<mt-swipe-item><img src="https://www.suitius.com/tp5/public/uploads/houseimg/5ac2ed879a29e.jpg" /></mt-swipe-item>
			</mt-swipe>
		</div>
		<!--下面-->
		<div class='filloutMes'>

			<div class='fillList fillPlot'>
				<img src='../assets/ic_landlord_house.png' />
				<input type='text' placeholder='小区名称' disabled placeholder-style="color:#9B9B9B" value='Arr.ward}}-lage}}' />
			</div>
			<div class='fillList fillAddess'>
				<img src='../assets/ic_landlord_site.png' />
				<input type='text' placeholder='详细地址' disabled placeholder-style="color:#9B9B9B" value='{homeArr.r' />
			</div>
			<div class='fillList fillName'>
				<img src='../assets/ic_landlord_bag4.png' />
				<input type='text' placeholder='请输入面积' disabled placeholder-style="color:#9B9B9B" value='{homeArr.r' />
			</div>

			<div class='fillSelect'>
				<div class='leftSelect'>
					<b>户型</b>
					<div class='leftSelectBox'>
						homeArr.type
						<!-- <p></p> -->
					</div>
				</div>
				<div class='rightSelect'>
					<b>装修风格</b>
					<div class='leftSelectBox'>
						Arr.style
						<!-- <p></p> -->
					</div>
				</div>
			</div>
		</div>
		<!-- ------ -->
		<div class='settingHome'>
			<div class='settingWidth'>
				<div class='tittleTop'>房屋设定</div>
				<div class='fillList'>
					<img src='../assets/ic_landlord_money.png' />
					<input type='number' maxlength='8' placeholder='请输入租金' placeholder-style="color:#9B9B9B" v-model='moneyText' />
					<a>元/月</a>
				</div>

				<div class='fillSelect'>
					<div class='leftSelect'>
						<b>状态</b>
						<div class='leftSelectBox' @click='leftSelectTap'>
							{{cityYes}}
							<p></p>
						</div>
					</div>
					<div class='rightSelect'>
						<b>押金方式</b>
						<div class='leftSelectBox leftSelectMargin' @click='selectYaTap'>
							{{budgetMinrYes}}
							<p></p>
						</div>
						<div class='leftSelectBox' @click='selectfuTap'>
							{{budgetMaxrYes}}
							<p></p>
						</div>
					</div>
				</div>

				<div class='petWhat'>
					<b>是否接受宠物</b>
					<div class='petYes' data-index='0' @click='petWhatTap'>
						<img v-if="petIndex == 0" src='https://www.suitius.com/image/resources/questionnaire/ic_boy6.png' data-index='1' />
						<img v-else src='https://www.suitius.com/image/resources/questionnaire/ic_boy5.png' data-index='0'> 是
					</div>
					<div class='petNo' data-index='1' @click='petWhatTap'>
						<img v-if="petIndex == 1" src='https://www.suitius.com/image/resources/questionnaire/ic_boy6.png' data-index='1' />
						<img v-else src='https://www.suitius.com/image/resources/questionnaire/ic_boy5.png' data-index='1' /> 否
					</div>
				</div>

				<div class='rentingWhat'>
					<b>选择租房方式</b>
					<div class='rentingYes' data-index='0' @click='rentingWhatTap'>
						<img v-if="rentingIndex == 0" src='https://www.suitius.com/image/resources/questionnaire/ic_boy6.png' data-index='0' />
						<img v-else src='https://www.suitius.com/image/resources/questionnaire/ic_boy5.png' data-index='0' /> 整租
					</div>
					<div class='rentingNo' data-index='1' @click='rentingWhatTap'>
						<img v-if="rentingIndex == 1" src='https://www.suitius.com/image/resources/questionnaire/ic_boy6.png' data-index='1' />
						<img v-else src='https://www.suitius.com/image/resources/questionnaire/ic_boy5.png' data-index='1' /> 合租
					</div>

					<div class='rentingNoYes' data-index='2' @click='rentingWhatTap'>
						<img v-if="rentingIndex == 2" src='https://www.suitius.com/image/resources/questionnaire/ic_boy6.png' data-index='2' />
						<img v-else src='https://www.suitius.com/image/resources/questionnaire/ic_boy5.png' data-index='2' /> 皆可
					</div>
				</div>

				<div class='lesseeType'>
					<b>能接受的租户类型</b>
					<div class='typeFlex'>
						<div class='typeList' data-index='0' @click='typeScreetTap'>
							<p data-index='0'>单身</p>
							<img data-index='0' v-if="typeArray[0] == 1" src='https://www.suitius.com/image/resources/questionnaire/ic_boy6.png' />
							<img v-else src='https://www.suitius.com/image/resources/questionnaire/ic_boy5.png' data-index='0' />
						</div>
						<div class='typeList' data-index='1' @click='typeScreetTap'>
							<p data-index='1'>情侣</p>
							<img data-index='1' v-if="typeArray[1] == 1" src='https://www.suitius.com/image/resources/questionnaire/ic_boy6.png' />
							<img v-else src='https://www.suitius.com/image/resources/questionnaire/ic_boy5.png' data-index='1' />
						</div>
						<div class='typeList' data-index='2' @click='typeScreetTap'>
							<p data-index='2'>家庭</p>
							<img data-index='2' v-if="typeArray[2] == 1" src='https://www.suitius.com/image/resources/questionnaire/ic_boy6.png' />
							<img v-else src='https://www.suitius.com/image/resources/questionnaire/ic_boy5.png' data-index='2' />
						</div>
						<div class='typeList' data-index='3' @click='typeScreetTap'>
							<p data-index='3'>朋友</p>
							<img data-index='3' v-if="typeArray[3] == 1" src='https://www.suitius.com/image/resources/questionnaire/ic_boy6.png' />
							<img v-else src='https://www.suitius.com/image/resources/questionnaire/ic_boy5.png' data-index='3' />
						</div>
						<div class='typeList' data-index='4' @click='typeScreetTap'>
							<p data-index='4'>其他</p>
							<img data-index='4' v-if="typeArray[4] == 1" src='https://www.suitius.com/image/resources/questionnaire/ic_boy6.png' />
							<img v-else src='https://www.suitius.com/image/resources/questionnaire/ic_boy5.png' data-index='4' />
						</div>
					</div>
				</div>

				<div class='timeShijian'>
					<b>入住人数</b>
					<div class='mainNumber'>
						<p>成人</p>
						<input type='number' maxlength='2' value='' bindinput='adultInput' v-model='adultText' />
					</div>
					<div class='mainNumber'>
						<p>儿童</p>
						<input type='number' maxlength='2' value='' bindinput='childInput' v-model='childText' />
					</div>
				</div>

				<div class='settingTime'>
					<b>能接受的预约时间点</b>
					<div class='selectTime'>
						<div class='leftSelectBox' @click='timeMinTap'>
							{{styleFishYes1}}:{{styleFishYes2}}
							<p></p>
						</div>
						<a>-</a>
						<div class='leftSelectBox' @click='timeMaxTap'>
							{{relationYes1}}:{{relationYes2}}
							<p></p>
						</div>

					</div>

				</div>
			</div>
		</div>

		<div class='facilitiesSelect'>
			<div class='facilities'>
				<b>配套设施</b>
				<a>请点击选择设施</a>
			</div>

			<div class='facilityImg'>
				<div class='imgList' data-index='0' @click='facilitiesTap'>
					<img v-if="facilitiesArr[0] == 0" src='../assets/ic_suite_kongt_n.png' data-index='0' />
					<img v-else src='https://www.suitius.com/image/resources/homeDetail/ic_suite_balcony9.png' data-index='0' />
					<a data-index='0'>空调</a>
				</div>
				<div class='imgList' data-index='1' @click='facilitiesTap'>
					<img v-if="facilitiesArr[1] == 0" src='../assets/ic_suite_tv_n.png' data-index='1' />
					<img v-else src='https://www.suitius.com/image/resources/homeDetail/ic_suite_balcony15.png' data-index='1' />
					<a data-index='1'>电视</a>
				</div>
				<div class='imgList' data-index='2' @click='facilitiesTap'>
					<img v-if="facilitiesArr[2] == 0" src='../assets/ic_suite_wardrobe_n.png' data-index='2' />
					<img v-else src='https://www.suitius.com/image/resources/homeDetail/ic_suite_balcony16.png' data-index='2' />
					<a data-index='2'>衣柜</a>
				</div>
				<div class='imgList' data-index='3' @click='facilitiesTap'>
					<img v-if="facilitiesArr[3] == 0" src='../assets/ic_suite_washer_n.png' data-index='3' />
					<img v-else src='https://www.suitius.com/image/resources/homeDetail/ic_suite_balcony17.png' data-index='3' />
					<a data-index='3'>洗衣机</a>
				</div>
				<div class='imgList' data-index='4' @click='facilitiesTap'>
					<img v-if="facilitiesArr[4] == 0" src='../assets/ic_suite_refrigerator_n.png' data-index='4' />
					<img v-else src='https://www.suitius.com/image/resources/homeDetail/ic_suite_balcony12.png' data-index='4' />
					<a data-index='4'>冰箱</a>
				</div>
				<div class='imgList' data-index='5' @click='facilitiesTap'>
					<img v-if="facilitiesArr[5] == 0" src='../assets/ic_suite_water_heater_n.png' data-index='5' />
					<img v-else src='https://www.suitius.com/image/resources/homeDetail/ic_suite_balcony18.png' data-index='5' />
					<a data-index='5'>热水器</a>
				</div>
				<div class='imgList' data-index='6' @click='facilitiesTap'>
					<img v-if="facilitiesArr[6] == 0" src='../assets/ic_suite_bed_n.png' data-index='6' />
					<img v-else src='https://www.suitius.com/image/resources/homeDetail/ic_suite_balcony2.png' data-index='6' />
					<a data-index='6'>床</a>
				</div>
				<div class='imgList' data-index='7' @click='facilitiesTap'>
					<img v-if="facilitiesArr[7] == 0" src='../assets/ic_suite_sofa_n.png' data-index='7' />
					<img v-else src='https://www.suitius.com/image/resources/homeDetail/ic_suite_balcony13.png' data-index='7' />
					<a data-index='7'>沙发</a>
				</div>
				<div class='imgList' data-index='8' @click='facilitiesTap'>
					<img v-if="facilitiesArr[8] == 0" src='../assets/ic_suite_desk_n.png' data-index='8' />
					<img v-else src='https://www.suitius.com/image/resources/homeDetail/ic_suite_balcony6.png' data-index='8' />
					<a data-index='8'>桌子</a>
				</div>
				<div class='imgList' data-index='9' @click='facilitiesTap'>
					<img v-if="facilitiesArr[9] == 0" src='../assets/ic_suite_hearth_n.png' data-index='9' />
					<img v-else src='https://www.suitius.com/image/resources/homeDetail/ic_suite_balcony8.png' data-index='9' />
					<a data-index='9'>煤气灶</a>
				</div>
				<div class='imgList' data-index='10' @click='facilitiesTap'>
					<img v-if="facilitiesArr[10] == 0" src='../assets/ic_suite_cooker_hood_n.png' data-index='10' />
					<img v-else src='https://www.suitius.com/image/resources/homeDetail/ic_suite_balcony5.png' data-index='10' />
					<a data-index='10'>油烟机</a>
				</div>
				<div class='imgList' data-index='11' @click='facilitiesTap'>
					<img v-if="facilitiesArr[11] == 0" src='../assets/ic_suite_chair_n.png' data-index='11' />
					<img v-else src='https://www.suitius.com/image/resources/homeDetail/ic_suite_balcony4.png' data-index='11' />
					<a data-index='11'>椅子</a>
				</div>
				<div class='imgList' data-index='12' @click='facilitiesTap'>
					<img v-if="facilitiesArr[12] == 0" src='../assets/ic_suite_bedside_table_n.png' data-index='12' />
					<img v-else src='https://www.suitius.com/image/resources/homeDetail/ic_suite_balcony3.png' data-index='12' />
					<a data-index='12'>床头柜</a>
				</div>
				<div class='imgList' data-index='13' @click='facilitiesTap'>
					<img v-if="facilitiesArr[13] == 0" src='../assets/ic_suite_mattress_n.png' data-index='13' />
					<img v-else src='https://www.suitius.com/image/resources/homeDetail/ic_suite_balcony11.png' data-index='13' />
					<a data-index='13'>床垫</a>
				</div>
				<div class='imgList' data-index='14' @click='facilitiesTap'>
					<img v-if="facilitiesArr[14] == 0" src='../assets/ic_suite_wifi_n.png' data-index='14' />
					<img v-else src='https://www.suitius.com/image/resources/homeDetail/ic_suite_balcony19.png' data-index='14' />
					<a data-index='14'>WiFi</a>
				</div>
				<div class='imgList' data-index='15' @click='facilitiesTap'>
					<img v-if="facilitiesArr[15] == 0" src='../assets/ic_suite_lock_n.png' data-index='15' />
					<img v-else src='https://www.suitius.com/image/resources/homeDetail/ic_suite_balcony10.png' data-index='15' />
					<a data-index='15'>智能锁</a>
				</div>
				<div class='imgList' data-index='16' @click='facilitiesTap'>
					<img v-if="facilitiesArr[16] == 0" src='../assets/ic_suite_balcony_n.png' data-index='16' />
					<img v-else src='https://www.suitius.com/image/resources/homeDetail/ic_suite_balcony1.png' data-index='16' />
					<a data-index='16'>阳台</a>
				</div>
				<div class='imgList' data-index='17' @click='facilitiesTap'>
					<img v-if="facilitiesArr[17] == 0" src='../assets/ic_suite_toilet_n.png' data-index='17' />
					<img v-else src='https://www.suitius.com/image/resources/homeDetail/ic_suite_balcony14.png' data-index='17' />
					<a>卫生间</a>
				</div>
				<div class='imgList' data-index='18' @click='facilitiesTap'>
					<img v-if="facilitiesArr[18] == 0" src='../assets/ic_suite_garden_n.png' data-index='18' />
					<img v-else src='https://www.suitius.com/image/resources/homeDetail/ic_suite_balcony7.png' data-index='18' />
					<a data-index='18'>花园</a>
				</div>
			</div>
		</div>

		<!-- ------ -->
		<div class='greeting'>
			<b>房屋介绍</b>
			<textarea placeholder="介绍一下您的房子吧" maxlength="100" v-model='textareaVal'></textarea>
		</div>
		<!-- ------ -->
		<div class='sumitBtn' bindtap='submitTap'>提交申请</div>

		<!-- 状态-->
		<div class="dialog-mask" v-show='showDiv1' @click="closeShadow1"></div>
		<vue-pickers :show="show1" :selectData="arrayCity" v-on:cancel="close1" v-on:confirm="confirmFn1"></vue-pickers>
		<!-- 押几-->
		<div class="dialog-mask" v-show='showDiv2' @click="closeShadow2"></div>
		<vue-pickers :show="show2" :selectData="budgetLitter" v-on:cancel="close2" v-on:confirm="confirmFn2"></vue-pickers>
		<!-- 付几-->
		<div class="dialog-mask" v-show='showDiv3' @click="closeShadow3"></div>
		<vue-pickers :show="show3" :selectData="budgetbig" v-on:cancel="close3" v-on:confirm="confirmFn3"></vue-pickers>
		<!-- 看房时间小-->
		<div class="dialog-mask" v-show='showDiv4' @click="closeShadow4"></div>
		<vue-pickers :show="show4" :selectData="styleFishs" v-on:cancel="close4" v-on:confirm="confirmFn4"></vue-pickers>
		<!-- 看房时间大-->
		<div class="dialog-mask" v-show='showDiv5' @click="closeShadow5"></div>
		<vue-pickers :show="show5" :selectData="relationArr" v-on:cancel="close5" v-on:confirm="confirmFn5"></vue-pickers>

	</div>

</template>

<script>
	const hours = [];
	for(let i = 0; i <= 23; i++) {
		if(i < 10) {
			var datas = {
				text: '0' + i,
				value: i
			}
		} else {
			var datas = {
				text: i,
				value: i
			}
		}

		hours.push(datas)
	}

	import VuePickers from 'vue-pickers';
	import Vue from 'vue';

	export default {
		components: {
			VuePickers
		},
		data() {
			return {
				showDiv1: false, //租房状态
				show1: false, //租房状态
				showDiv2: false, //租房状态
				show2: false, //租房状态
				showDiv3: false, //租房状态
				show3: false, //租房状态
				showDiv4: false, //时间小
				show4: false, //时间小
				showDiv5: false, //时间大
				show5: false, //时间大

				arrayCity: { //租房状态
					columns: 1,
					default: [{
						text: "待租",
						value: 0
					}],
					pData1: [{
						text: "待租",
						value: 0
					}, {
						text: "已租",
						value: 1
					}]
				},
				styleFishs: { //选择看房时间小
					columns: 2, // 两列
					//link: true, // 联级必须需要link 参数
					default: [{
							text: '08',
							value: 8

						},
						{
							text: '00',
							value: 0

						},
					], // 默认显示哪个
					// 第一列数据结构
					pData1: hours,
					// 第二列数据结构
					pData2: [{
						text: '00',
						value: 0
					}, {
						text: '30',
						value: 1
					}],

				},
				relationArr: { //选择看房时间大
					columns: 2, // 两列
					//link: true, // 联级必须需要link 参数
					default: [{
							text: '22',
							value: 22
						},
						{
							text: '00',
							value: 0

						},
					], // 默认显示哪个
					// 第一列数据结构
					pData1: hours,
					// 第二列数据结构
					pData2: [{
						text: '00',
						value: 0
					}, {
						text: '30',
						value: 1
					}],

				},
				budgetLitter: { //押一
					columns: 1,
					default: [{
						text: "押一",
						value: 0
					}],
					pData1: [{
						text: "押一",
						value: 0
					}, {
						text: "押二",
						value: 1
					}, {
						text: "押三",
						value: 2
					}]
				},
				budgetbig: { //付一
					columns: 1,
					default: [{
						text: "付一",
						value: 0
					}],
					pData1: [{
						text: "付一",
						value: 0
					}, {
						text: "付二",
						value: 1
					}, {
						text: "付三",
						value: 2
					}]
				},
				moneyText: "", //输入的押金
				adultText: "", //成人数量
				childText: "", //儿童数量
				cityYes: "待租", //待租状态*
				budgetMinrYes: "押一", //押一*
				budgetMaxrYes: "付一", //付一*
				styleFishYes1: "08", //预约时间小时小*
				styleFishYes2: "00", //预约时间分钟小*
				relationYes1: "22", //预约时间小时大*
				relationYes2: "00", //预约时间分钟大*
				petIndex: 0, //是否接受宠物
				rentingIndex: 0, //租房方式
				typeArray: [0, 0, 0, 0, 0], //租客类型顺序排列0未选中，1选中
				facilitiesArr: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //设施顺序排列0未选中，1选中
				textareaVal: "", //房屋介绍
			}
		},
		updated() {

		},
		created: function() {

		},
		methods: {
			refresh: function() {
				window.history.go(-1)
			},
			//租房状态
			leftSelectTap: function() {
				this.showDiv1 = true;
				this.show1 = true;
			},
			closeShadow1: function() {
				this.showDiv1 = false;
				this.show1 = false;
			},
			close1: function() {
				this.showDiv1 = false;
				this.show1 = false;
			},
			confirmFn1: function(data) {
				this.arrayCity.default[0].text = data.select1.text;
				this.arrayCity.default[0].value = data.select1.value;
				this.cityYes = data.select1.text;
				this.showDiv1 = false;
				this.show1 = false;

			},
			//押金方式1
			selectYaTap: function() {
				this.showDiv2 = true;
				this.show2 = true;
			},
			closeShadow2: function() {
				this.showDiv2 = false;
				this.show2 = false;
			},
			close2: function() {
				this.showDiv2 = false;
				this.show2 = false;
			},
			confirmFn2: function(data) {
				this.budgetLitter.default[0].text = data.select1.text;
				this.budgetLitter.default[0].value = data.select1.value;
				this.budgetMinrYes = data.select1.text;
				this.showDiv2 = false;
				this.show2 = false;

			},
			//押金方式2
			selectfuTap: function() {
				this.showDiv3 = true;
				this.show3 = true;
			},
			closeShadow3: function() {
				this.showDiv3 = false;
				this.show3 = false;
			},
			close3: function() {
				this.showDiv3 = false;
				this.show3 = false;
			},
			confirmFn3: function(data) {
				this.budgetbig.default[0].text = data.select1.text;
				this.budgetbig.default[0].value = data.select1.value;
				this.budgetMaxrYes = data.select1.text;
				this.showDiv3 = false;
				this.show3 = false;

			},
			//接受宠物
			petWhatTap: function(e) {
				this.petIndex = e.target.dataset.index
			},
			//租房方式
			rentingWhatTap: function(e) {
				this.rentingIndex = e.target.dataset.index
			},
			//人物关系
			typeScreetTap: function(e) {
				if(this.typeArray[e.target.dataset.index] == 1) {
					this.$set(this.typeArray, e.target.dataset.index, 0);
				} else {
					this.$set(this.typeArray, e.target.dataset.index, 1);
				}
			},
			//预约时间小
			timeMinTap: function() {
				this.showDiv4 = true;
				this.show4 = true;
			},
			closeShadow4: function() {
				this.showDiv4 = false;
				this.show4 = false;
			},
			close4: function() {
				this.showDiv4 = false;
				this.show4 = false;
			},
			confirmFn4: function(data) {
				this.styleFishs.default[0].text = data.select1.text;
				this.styleFishs.default[0].value = data.select1.value;
				this.styleFishs.default[1].text = data.select2.text;
				this.styleFishs.default[1].value = data.select2.value;
				this.styleFishYes1 = data.select1.text;
				this.styleFishYes2 = data.select2.text;
				this.showDiv4 = false;
				this.show4 = false;
			},
			//预约时间大
			timeMaxTap: function() {
				this.showDiv5 = true;
				this.show5 = true;
			},
			closeShadow5: function() {
				this.showDiv5 = false;
				this.show5 = false;
			},
			close5: function() {
				this.showDiv5 = false;
				this.show5 = false;
			},
			confirmFn5: function(data) {
				this.relationArr.default[0].text = data.select1.text;
				this.relationArr.default[0].value = data.select1.value;
				this.relationArr.default[1].text = data.select2.text;
				this.relationArr.default[1].value = data.select2.value;
				this.relationYes1 = data.select1.text;
				this.relationYes2 = data.select2.text;
				this.showDiv5 = false;
				this.show5 = false;
			},
			//点击选择设施
			facilitiesTap: function(e) {
				if(this.facilitiesArr[e.target.dataset.index] == 1) {
					this.$set(this.facilitiesArr, e.target.dataset.index, 0);
				} else {
					this.$set(this.facilitiesArr, e.target.dataset.index, 1);
				}
			},
		}
	}
</script>

<style scoped>
	a {
		text-decoration: none;
	}
	
	.container {
		padding-top: 0.88rem;
		z-index: 110;
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		overflow-y: scroll;
		
	}
	.headerS{
	box-shadow: 0 0.04rem 0.08rem 0 rgba(0, 0, 0, 0.10);

}
	.swipeDiv {
		height: 4.22rem;
		width: 100%;
	}
	
	.mint-swipe {
		height: 4.22rem;
	}
	
	.mint-swipe img {
		height: 4.22rem;
		width: 100%;
	}
	
	.mint-cell-value {
		width: 100%;
	}
	
	.filloutMes {
		width: 100%;
		border-bottom: 0.20rem solid #eff3f6;
		padding-bottom: 0.40rem;
	}
	
	.filloutMes .fillList {
		width: 6.70rem;
		height: 0.85rem;
		margin: 0 auto 0.17rem;
		padding-top: 0.28rem;
		border-bottom: 1px solid #E5E5E5;
		display: flex;
	}
	
	.filloutMes .fillList img {
		width: 0.40rem;
		height: 0.40rem;
		margin-top: 0.20rem;
	}
	
	.filloutMes .fillList input {
		height: 0.80rem;
		flex: 1;
		font-size: 0.32rem;
		margin-left: 0.32rem;
		color: #000;
		background: #fff;
	}
	
	.filloutMes .fillSelect {
		width: 6.70rem;
		margin: 0 auto;
		display: flex;
		padding-top: 0.16rem;
		font-size: 0;
	}
	
	.filloutMes .fillSelect .leftSelect {
		width: 2.40rem;
		margin-right: 0.32rem;
	}
	
	.filloutMes .fillSelect b {
		font-size: 0.32rem;
		color: #222222;
		font-weight: 600;
		line-height: 0.93rem;
	}
	
	.filloutMes .fillSelect .rightSelect {
		width: 3.97rem;
	}
	
	.settingHome {
		width: 100%;
		border-bottom: 0.20rem solid #eff3f6;
	}
	
	.settingHome .settingWidth {
		width: 6.70rem;
		margin: 0 auto;
	}
	
	.settingHome .settingWidth .tittleTop {
		font-size: 0.32rem;
		color: #222222;
		font-weight: 600;
		line-height: 1.09rem;
	}
	
	.settingHome .fillList {
		width: 6.70rem;
		height: 0.85rem;
		margin: 0 auto 0.17rem;
		padding-top: 0.28rem;
		border-bottom: 1px solid #E5E5E5;
		display: flex;
	}
	
	.settingHome .fillList img {
		width: 0.40rem;
		height: 0.40rem;
		margin-top: 0.20rem;
	}
	
	.settingHome .fillList input {
		height: 0.80rem;
		flex: 1;
		font-size: 0.32rem;
		margin-left: 0.32rem;
		color: #000;
	}
	
	.settingHome .fillList a {
		font-size: 0.32rem;
		color: #222222;
		font-weight: 600;
		line-height: 0.80rem;
	}
	
	.settingHome .fillSelect {
		width: 100%;
		display: flex;
		padding-top: 0.16rem;
	}
	
	.settingHome .fillSelect .leftSelect {
		width: 2.40rem;
		margin-right: 0.32rem;
	}
	
	.settingHome .fillSelect b {
		font-size: 0.32rem;
		color: #222222;
		display: block;
		font-weight: 600;
		line-height: 0.93rem;
	}
	
	.settingHome .fillSelect .rightSelect {
		width: 3.97rem;
		font-size: 0;
	}
	
	.settingHome .rightSelect .leftSelectBox {
		width: 1.70rem;
		display: inline-block;
	}
	
	.settingHome .rightSelect .leftSelectMargin {
		margin-right: 0.17rem;
	}
	
	.settingHome .petWhat {
		width: 100%;
		height: 1.25rem;
		padding: 0.42rem 0;
		box-sizing: border-box;
		font-size: 0;
	}
	
	.settingHome .petWhat b {
		line-height: 0.41rem;
		font-size: 0.32rem;
		color: #222222;
		font-weight: 600;
		margin-right: 0.80rem;
	}
	
	.settingHome .petWhat .petYes,
	.settingHome .petWhat .petNo {
		width: 0.90rem;
		height: 0.40rem;
		font-size: 0.28rem;
		color: #555555;
		line-height: 0.36rem;
		display: inline-block;
		margin-right: 0.90rem;
	}
	
	.settingHome .petWhat .petNo {
		margin-right: 0;
	}
	
	.settingHome .petWhat .petYes img,
	.settingHome .petWhat .petNo img {
		width: 0.32rem;
		height: 0.32rem;
		margin-right: 0.20rem;
		float: left;
		margin-top: 0.02rem;
	}
	
	.settingHome .rentingWhat {
		width: 100%;
		font-size: 0;
		margin-bottom: 0.40rem;
	}
	
	.settingHome .rentingWhat b {
		line-height: 0.41rem;
		font-size: 0.32rem;
		color: #222222;
		font-weight: 600;
		margin-right: 0.80rem;
		display: block;
		margin-bottom: 0.32rem;
	}
	
	.settingHome .rentingWhat .rentingYes,
	.settingHome .rentingWhat .rentingNo,
	.settingHome .rentingWhat .rentingNoYes {
		width: 1.20rem;
		height: 0.40rem;
		font-size: 0.28rem;
		color: #555555;
		line-height: 0.36rem;
		display: inline-block;
		margin-right: 0.60rem;
	}
	
	.settingHome .rentingWhat .rentingNoYes {
		margin-right: 0;
	}
	
	.settingHome .rentingWhat .rentingYes img,
	.settingHome .rentingWhat .rentingNo img,
	.settingHome .rentingWhat .rentingNoYes img {
		width: 0.32rem;
		height: 0.32rem;
		margin-right: 0.20rem;
		float: left;
		margin-top: 0.02rem;
	}
	
	.settingHome .timeShijian {
		width: 100%;
		font-size: 0;
	}
	
	.settingHome .timeShijian b {
		display: block;
		font-size: 0.32rem;
		color: #222222;
		font-weight: 600;
		line-height: 1.06rem;
	}
	
	.settingHome .timeShijian .mainNumber {
		width: 50%;
		height: 0.64rem;
		font-size: 0;
		display: inline-block;
	}
	
	.settingHome .timeShijian .mainNumber p {
		font-size: 0.28rem;
		color: #555555;
		margin-top: 0.10rem;
		float: left;
	}
	
	.settingHome .timeShijian .mainNumber input {
		display: inline-block;
		width: 2.20rem;
		margin-left: 0.20rem;
		font-size: 0.30rem;
		color: #222222;
		line-height: 0.64rem;
		background: #F8F8F8;
		border-radius: 0.16rem;
		box-sizing: border-box;
		padding: 0 0.28rem;
	}
	
	.lesseeType {
		width: 100%;
		font-size: 0;
	}
	
	.lesseeType b {
		display: block;
		font-size: 0.32rem;
		color: #222222;
		font-weight: 600;
		margin-bottom: 0.24rem;
	}
	
	.lesseeType .typeFlex {
		width: 100%;
		display: flex;
	}
	
	.lesseeType .typeList {
		width: 1.20rem;
		padding-right: 0.60rem;
		box-sizing: border-box;
		text-align: center;
	}
	
	.lesseeType .typeList p {
		display: block;
		font-size: 0.28rem;
		color: #555555;
	}
	
	.lesseeType .typeList img {
		width: 0.32rem;
		height: 0.32rem;
		margin-top: 0.10rem;
	}
	
	.settingTime {
		width: 100%;
		margin-bottom: 0.40rem;
		font-size: 0.32rem;
	}
	
	.settingTime b {
		display: block;
		font-size: 0.32rem;
		color: #222222;
		font-weight: 600;
		margin-bottom: 0.24rem;
	}
	
	.settingTime .selectTime {
		width: 100%;
		display: flex;
	}
	
	.settingTime .selectTime .leftSelectBox {
		width: 3.16rem;
	}
	
	.settingTime .selectTime a {
		display: block;
		width: 0.39rem;
		text-align: center;
		line-height: 0.64rem;
	}
	
	.facilitiesSelect {
		width: 100%;
		border-bottom: 0.20rem solid #eff3f6;
	}
	
	.facilitiesSelect .facilities {
		width: 6.70rem;
		margin: 0 auto;
	}
	
	.facilitiesSelect .facilities b {
		font-size: 0.32rem;
		color: #222222;
		font-weight: 600;
		line-height: 1.06rem;
		margin-right: 0.16rem;
	}
	
	.facilitiesSelect .facilities a {
		font-size: 0.24rem;
		color: #555555;
		line-height: 1.06rem;
	}
	
	.facilitiesSelect .facilityImg {
		width: 6.70rem;
		margin: 0 auto;
		font-size: 0;
	}
	
	.facilitiesSelect .facilityImg .imgList {
		width: 0.80rem;
		text-align: center;
		display: inline-block;
		margin-right: 0.65rem;
		margin-bottom: 0.60rem;
	}
	
	.facilitiesSelect .facilityImg .imgList a {
		font-size: 0.24rem;
		color: #222222;
	}
	
	.facilitiesSelect .facilityImg .imgList img {
		width: 0.64rem;
		height: 0.64rem;
	}
	
	.facilitiesSelect .facilityImg .imgList:nth-child(5) {
		margin-right: 0;
	}
	
	.facilitiesSelect .facilityImg .imgList:nth-child(10) {
		margin-right: 0;
	}
	
	.facilitiesSelect .facilityImg .imgList:nth-child(15) {
		margin-right: 0;
	}
	
	.facilitiesSelect .facilityImg .imgList:nth-child(20) {
		margin-right: 0;
	}
	
	.greeting {
		width: 6.70rem;
		margin: 0 auto;
		font-size: 0;
	}
	
	.greeting b {
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
	}
	
	.greeting textarea {
		width: 100%;
		height: 2.20rem;
		background: #F8F8F8;
		border-radius: 0.08rem;
		font-size: 0.28rem;
		padding: 0.32rem;
		box-sizing: border-box;
		color: #222222;
		z-index: 10;
	}
	
	.sumitBtn {
		width: 6.70rem;
		height: 0.80rem;
		background: #F5A623;
		border-radius: 0.60rem;
		margin: 0.64rem auto;
		font-size: 0.28rem;
		color: #FFFFFF;
		text-align: center;
		line-height: 0.80rem;
	}
	
	.leftSelectBox {
		width: 100%;
		height: 0.64rem;
		background: #F8F8F8;
		border-radius: 0.08rem;
		line-height: 0.64rem;
		box-sizing: border-box;
		padding-left: 0.28rem;
		font-size: 0.30rem;
		font-family: PingFangSC-Regular;
		color: #555555;
		position: relative;
		border: none;
	}
	
	.leftSelectBox p {
		width: 0;
		height: 0;
		border-width: 0.10rem;
		border-style: solid;
		border-color: #999 transparent transparent transparent;
		position: absolute;
		top: 0.27rem;
		right: 0.23rem;
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