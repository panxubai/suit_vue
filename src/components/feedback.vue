<template>
	<div class='container'>
		<div class="headerS">
			<div class="backs" @click="refresh">
				<img src="../assets/image/ic_topbar_return.png" />
			</div>
			<div class="headerTitle">消息</div>
			<div class="information">
		</div>
		</div>
		<div class='feedMain'>
			<div class='rentingWhat'>
				<b>您遇到的问题类型</b>
				<div class='rentingYes' data-index='1' @click='rentingWhatTap'>
					<img v-if="rentingIndex == 1" src='https://www.suitius.com/image/resources/questionnaire/ic_boy6.png' data-index='1' />
					<img v-else src='https://www.suitius.com/image/resources/questionnaire/ic_boy5.png' data-index='1' /> 产品意见
				</div>
				<div class='rentingNo' data-index='2' @click='rentingWhatTap'>
					<img v-if="rentingIndex == 2" src='https://www.suitius.com/image/resources/questionnaire/ic_boy6.png' data-index='2' />
					<img v-else src='https://www.suitius.com/image/resources/questionnaire/ic_boy5.png' data-index='2' /> 功能
				</div>

				<div class='rentingNoYes' data-index='3' @click='rentingWhatTap'>
					<img v-if="rentingIndex == 3" src='https://www.suitius.com/image/resources/questionnaire/ic_boy6.png' data-index='3' />
					<img v-else src='https://www.suitius.com/image/resources/questionnaire/ic_boy5.png' data-index='3' /> 其他
				</div>
			</div>

			<div class="section">
				<textarea placeholder="亲，我们非常重视您给我们提出的宝贵建议，帮助我们不断完善产品，谢谢！" placeholder-style="color:#9B9B9B;" maxlength='150' v-model='sectionInput'></textarea>
			</div>

			<div class='homeImg'>
				<p>上传图片
					<a>(3/5)</a>
				</p>
				<div class='chumList'>
					<div class="scrollGd">
						<div class='headList'>
							<img src='../assets/ic_user_camera.png' class='images'/>
							<!--<img class='delImg' src='https://www.suitius.com/image/resources/ic_search_closs.png'/>-->
						</div>
						<div class='tapPhoto'>
							<input type="file" v-on:change='previewFile' />
							<img class='absoloatImg' src='../assets/ic_user_camera.png' />
						</div>
					
					</div>

				</div>

			</div>

			<div class='inputBox'>
				<input type='text' placeholder='(选填)请填写你的手机号或者邮箱、QQ' v-model='phoneEmalInput' placeholder-style="color:#9B9B9B;" />
			</div>

			<div class='btnSumBox'>提交申请</div>

		</div>
	</div>

</template>

<script>
	export default {
		data() {
			return {
				rentingIndex: 1,
				sectionInput: "", //意见
				phoneEmalInput: "", //手机号
			}
		},
		methods: {
			refresh: function() {
				window.history.go(-1)
			},
			rentingWhatTap: function(e) {
				this.rentingIndex = e.target.dataset.index
			},
			previewFile: function(e) { 
				console.log(e)
			}
		}
	}
</script>

<style scoped>
	/* pages/feedback/feedback.wxss */
	
	.container {
		padding-top: 0.88rem;
	}
	.headerS{
	box-shadow: 0 0.04rem 0.08rem 0 rgba(0, 0, 0, 0.10);

}
	.feedMain {
		width: 6.7rem;
		margin: 0 auto;
	}
	
	.feedMain .rentingWhat {
		width: 100%;
		padding-top: 0.4rem;
		font-size: 0.28rem;
	}
	
	.feedMain .rentingWhat b {
		line-height: 0.41rem;
		font-size: 0.32rem;
		color: #222222;
		font-weight: 600;
		margin-right: 0.8rem;
		display: block;
		margin-bottom: 0.32rem;
	}
	
	.feedMain .rentingWhat .rentingYes,
	.feedMain .rentingWhat .rentingNo,
	.feedMain .rentingWhat .rentingNoYes {
		width: 1.2rem;
		height: 0.4rem;
		font-size: 0.28rem;
		color: #555555;
		line-height: 0.36rem;
		display: inline-block;
		margin-right: 0.6rem;
	}
	
	.feedMain .rentingWhat .rentingYes {
		width: 1.8rem;
	}
	
	.feedMain .rentingWhat .rentingNoYes {
		margin-right: 0;
	}
	
	.feedMain .rentingWhat .rentingYes img,
	.feedMain .rentingWhat .rentingNo img,
	.feedMain .rentingWhat .rentingNoYes img {
		width: 0.32rem;
		height: 0.32rem;
		margin-right: 0.2rem;
		float: left;
		margin-top: 0.02rem;
	}
	
	.section {
		width: 100%;
		margin-top: 0.6rem;
	}
	
	.section textarea {
		width: 100%;
		height: 3.4rem;
		padding: 0.32rem;
		box-sizing: border-box;
		font-size: 0.28rem;
		color: #000;
		background: #F8F8F8;
		border-radius: 0.04rem;
	}
	
	.homeImg {
		width: 6.7rem;
		margin: 0 auto;
	}
	
	.homeImg p {
		display: block;
		font-size: 0.32rem;
		color: #222222;
		font-weight: 400;
		padding-top: 0.4rem;
	}
	
	.homeImg p a {
		font-size: 0.24rem;
		color: #555555;
		margin-left: 0.16rem;
	}
	
	.homeImg .chumList {
		width: 100%;
		overflow-x: scroll;
		-ms-overflow-x: scroll;
		height: 1.4rem;
		margin-top: 0.12rem;

	}
	.homeImg .chumList .scrollGd{
		width: 3rem;
		height: 1.4rem;
		overflow: hidden;
		font-size: 0;
	}
	.homeImg .chumList .headList {
		width: 1.4rem;
		height: 1.4rem;
		display: inline-block;
		position: relative;
		background: #555555;
		margin-right: 0.2rem;
	}
	
	.homeImg .chumList .headList .images {
		width: 1.4rem;
		height: 1.4rem;
	}
	
	.homeImg .chumList .headList .delImg {
		width: 0.64rem;
		height: 0.64rem;
		position: absolute;
		top: -0.1rem;
		right: -0.1rem;
	}
	
	.homeImg .tapPhoto {
		width: 1.4rem;
		height: 1.4rem;
		background: #E7E7E7;
		position: relative;
		display: inline-block;
	}
	
	.homeImg .tapPhoto input{
		position: absolute;
		width: 100%;
		height: 100%;
		opacity: 0;
		z-index: 100;
	}
	.homeImg .tapPhoto .absoloatImg {
		width: 0.58rem;
		height: 0.48rem;
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		margin: auto;
		z-index: 99;
	}
	
	.inputBox {
		width: 6.7rem;
		margin: 0.4rem auto;
	}
	
	.inputBox input {
		width: 100%;
		height: 1.04rem;
		background: #F8F8F8;
		border-radius: 0.04rem;
		font-size: 0.28rem;
		color: #000;
		padding: 0 0.32rem;
		box-sizing: border-box;
	}
	
	.btnSumBox {
		width: 6.7rem;
		height: 0.8rem;
		margin: 0.24rem auto;
		background: #F5A623;
		border-radius: 0.6rem;
		text-align: center;
		line-height: 0.8rem;
		font-size: 0.28rem;
		color: #FFFFFF;
	}
</style>