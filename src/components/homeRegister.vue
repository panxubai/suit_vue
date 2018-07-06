<template>
	<!--pages/homeRegister/homeRegister.wxml-->
	<div class='container'>
		<div class="headerS">
			<div class="backs" @click="refresh">
				<img src="../assets/image/ic_topbar_return.png" />
			</div>
			<div class="headerTitle">登记房屋</div>
			<div class="information">
			</div>
		</div>
		<div class='uploadPictures'>
			<div class='homeImg'>
				<p>房源图片
					<a>最多上传9张图片哦~</a>
				</p>

				<div class='chumList'>
					<div class="scrollGd">
						<div class='headList'>
							<img src='../assets/ic_user_camera.png' class='images' />
							<img class='delImg' src='../assets/resources/ic_search_closs.png' />
						</div>
						<div class='tapPhoto'>
							<img class='absoloatImg' src='../assets/ic_user_camera.png' />
						</div>
					</div>
				</div>

			</div>

			<div class='propertyHome'>
				<b>房产证图片</b>
				<div class='propertyImg'>

					<!--<div  class='headList'>
            <img src='../assets/resources/ic_search_closs.png'   class='images'  />
            <img class='delImg' src='../assets/resources/ic_search_closs.png' />
        </div>-->
					<div class='tapPhoto'>
						<img class='absoloatImg' src='../assets/ic_user_camera.png' />
					</div>
				</div>
			</div>
		</div>

		<div class='filloutMes'>
			<div class='fillList fillName'>
				<img src='../assets/ic_landlord_name.png' />
				<input type='text' placeholder='请输入姓名' v-model="nameText" placeholder-style="color:#9B9B9B" />
			</div>
			<div class='fillList fillPlot'>
				<img src='../assets/ic_landlord_house.png' />
				<input type='text' placeholder='小区名称' v-model="plotText" placeholder-style="color:#9B9B9B" />
			</div>
			<div class='fillList fillAddess'>
				<img src='../assets/ic_landlord_site.png' />
				<input type='text' placeholder='详细地址' v-model="addessText" placeholder-style="color:#9B9B9B" />
			</div>
			<div class='fillList fillPhoto'>
				<img src='../assets/ic_landlord_phone.png' />
				<input type='number' placeholder='请输入手机号' v-on:input="photoInput" v-model="photoNumber" oninput='if(value.length>11)value=value.slice(0,11)' maxlength='11' placeholder-style="color:#9B9B9B" />
				<div class="codeTap" :class="photoTap?'activeCode':''" @click="gainCodeTap">{{codeText}}</div>
			</div>
			<div class='fillList fillCode'>
				<img src='../assets/ic_landlord_verify.png' />
				<input type='number' placeholder='验证码' v-model="codeNumber" maxlength='6' oninput='if(value.length>6)value=value.slice(0,6)' placeholder-style="color:#9B9B9B" />
			</div>

			<div class='btnSumTap'>提交</div>

		</div>

	</div>

</template>

<script>
	var that;
	export default {
		data() {
			return {
				photoTap: false, //是否可以点击获取验证码
				codeText: "获取验证码",
				photoNumber: "", //手机号
				nameText: "", //姓名
				plotText: "", //小区
				addessText: "", //详细地址
				codeNumber: "", //验证码
			}
		},
		created: function() {
			that = this;
		},
		methods: {
			refresh: function() {
				window.history.go(-1)
			},
			gainCodeTap: function() {
				if(that.photoTap) {
					timer()
				} else {
					return;
				}

			},
			photoInput: function() {
				console.log(1111)
				var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1}))+\d{8})$/;
				if(!myreg.test(that.photoNumber)) {
					that.photoTap = false
				} else {
					that.photoTap = true
				}

			},
		}
	}

	function timer() {
		localStorage.setItem('sultCodeTime', 60)
		let value = localStorage.getItem('sultCodeTime') || 60;
		if(value > 0) {
			that.codeText = value + 's';
			that.photoTap = false;
		}
		var timer = setInterval(function() {
			if(value > 0) {
				value--;
				that.codeText = value + 's';
				that.photoTap = false;
				localStorage.setItem('sultCodeTime', value)
			} else {
				clearInterval(timer);
				localStorage.removeItem('sultCodeTime')
				let myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1}))+\d{8})$/;
				if(!myreg.test(that.photoNumber)) {
					that.codeText = '获取验证码';
					that.photoTap = false;

				} else {
					that.codeText = '获取验证码';
					that.photoTap = true;
				}
			}
		}, 1000);
	};
</script>

<style scoped>
	/* pages/homeRegister/homeRegister.wxss */
	
	.container {
		padding-top: 0.88rem;
		z-index: 100;
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		overflow-y: scroll;
	}
	
	.headerS {
		box-shadow: 0 0.04rem 0.08rem 0 rgba(0, 0, 0, 0.10);
	}
	
	.uploadPictures {
		width: 100%;
		height: 5.30rem;
		border-bottom: 0.20rem solid #eff3f6;
	}
	
	.uploadPictures .homeImg {
		width: 6.70rem;
		margin: 0 auto;
	}
	
	.uploadPictures .homeImg p {
		display: block;
		font-size: 0.32rem;
		color: #222222;
		font-weight: 400;
		padding-top: 0.40rem;
	}
	
	.uploadPictures .homeImg p a {
		font-size: 0.24rem;
		color: #555555;
		margin-left: 0.16rem;
	}
	
	.uploadPictures .homeImg .chumList {
		width: 100%;
		overflow-x: scroll;
		-ms-overflow-x: scroll;
		height: 1.4rem;
		margin-top: 0.12rem;
	}
	
	.homeImg .chumList .scrollGd {
		width: 3rem;
		height: 1.4rem;
		overflow: hidden;
		font-size: 0;
	}
	
	.uploadPictures .homeImg .chumList .headList {
		width: 1.4rem;
		height: 1.40rem;
		display: inline-block;
		position: relative;
		margin-right: 0.2rem;
	}
	
	.uploadPictures .homeImg .chumList .headList .images {
		width: 1.40rem;
		height: 1.40rem;
	}
	
	.uploadPictures .homeImg .chumList .headList .delImg {
		width: 0.64rem;
		height: 0.64rem;
		position: absolute;
		top: -0.10rem;
		right: 0.10rem;
	}
	
	.uploadPictures .homeImg .tapPhoto {
		width: 1.40rem;
		height: 1.40rem;
		background: #E7E7E7;
		position: relative;
		display: inline-block;
	}
	
	.uploadPictures .homeImg .tapPhoto .absoloatImg {
		width: 0.58rem;
		height: 0.48rem;
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		margin: auto;
		z-index: 999;
	}
	
	.uploadPictures .propertyHome {
		width: 6.70rem;
		margin: 0.40rem auto 0;
		font-size: 0.32rem;
	}
	
	.uploadPictures .propertyHome b {
		font-size: 0.32rem;
		color: #222222;
		font-weight: 400;
	}
	
	.propertyImg {
		width: 100%;
		height: 1.40rem;
		margin-top: 0.24rem;
	}
	
	.propertyImg .headList {
		width: 1.40rem;
		height: 1.40rem;
		position: relative;
	}
	
	.propertyImg .headList .images {
		width: 1.40rem;
		height: 1.40rem;
	}
	
	.propertyImg .headList .delImg {
		width: 0.64rem;
		height: 0.64rem;
		position: absolute;
		top: -0.10rem;
		right: -0.10rem;
	}
	
	.propertyImg .tapPhoto {
		width: 1.40rem;
		height: 1.40rem;
		background: #E7E7E7;
		position: relative;
		display: inline-block;
	}
	
	.propertyImg .tapPhoto .absoloatImg {
		width: 0.58rem;
		height: 0.48rem;
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		margin: auto;
		z-index: 999;
	}
	
	.filloutMes {
		width: 100%;
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
	}
	
	.filloutMes .fillList .codeTap {
		width: 1.60rem;
		height: 0.64rem;
		background: #E7E7E7;
		border-radius: 0.49rem;
		margin-top: 0.10rem;
		text-align: center;
		line-height: 0.64rem;
		font-size: 0.24rem;
		color: #9B9B9B;
	}
	
	.filloutMes .fillList .activeCode {
		background: #FE8B25;
		color: #fff;
	}
	
	.filloutMes .btnSumTap {
		width: 5.90rem;
		height: 0.80rem;
		margin: 0.50rem auto;
		background: #F5A623;
		border-radius: 0.60rem;
		text-align: center;
		line-height: 0.80rem;
		font-size: 0.28rem;
		color: #FFFFFF;
	}
</style>