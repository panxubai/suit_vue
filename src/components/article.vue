<template>
	<div class="container">
		<div class='articleMain' @click="containerTap">
			<div class='headline'>
				contentMain.title
			</div>
			<div class='headTime'>
				<div class='nameImg'>
					<img src='../assets/img_suit_picture.png' />
					<b>conten</b>
				</div>
				<div class='times'>contentMain.time</div>
			</div>

			<div class='articleContent'>
				<!-- 文章内容 -->
				<div class='articleList'>
					<b>自问自答下吧，通过别人指点，算是大致理，通过别人指点，算是大致理解了，当执行钩子函数时，通过别人指点，算是大致理解了，当执行钩子函数时，通过别人指点，算是大致理解了，当执行钩子函数时，通过别人指点，算是大致理解了，当执行钩子函数时，通过别人指点，算是大致理解了，当执行钩子函数时，通过别人指点，算是大致理解了，当执行钩子函数时，通过别人指点，算是大致理解了，当执行钩子函数时，通过别人指点，算是大致理解了，当执行钩子函数时，通过别人指点，算是大致理解了，当执行钩子函数时，通过别人指点，算是大致理解了，当执行钩子函数时，通过别人指点，算是大致理解了，当执行钩子函数时，通过别人指点，算是大致理解了，当执行钩子函数时解了，当执行钩子函数时如果遇到next('/home')等时会中断当前导航，比如当前导航是去/a,那么遇到next('/home')后就会把to.path改为/home，然后会重新触发这个离开的钩子，注意：此时会重新触发执行这个钩子，而不是在这个钩子函数继续执行的，之前是一直没理解这里，以为是执行next('/home')后就会直接跳到home页面呢，当重新触发后就会继续执行next('/home')所以会一直循环。至于解决办法就是判断下，如果已经是/home了就next()。</b>
					<img src='https://www.suitius.com/tp5/public/uploads/articlepic/5ac9bda9692e4.jpg' />
				</div>

			</div>

			<div class='commentSum'>
				<div class='shadeo'></div>
				<!--  <div class='neComment' v-show="commentArray.length == 0" >暂无评论</div>-->
				<!-- 评论区 -->
				<div class='newsList'>
					<div class='topic'>评论区</div>
					<div class='keyList'>
						<div class='imgs'>
							<img src='https://www.suitius.com/tp5/public/uploads/articlepic/5ac9bda9692e4.jpg' />
						</div>
						<div class='newsBox'>
							<p>item.name</p>
							<b>item.time</b>
							<span>item.comment</span>
						</div>
					</div>
					
					
				</div>
			</div>
		</div>

		<div class='bottomPl'>
			<!-- 点击评论之前 -->
			<div class='plMain' v-show="commentShow">
				<div class='comment' @click="commentTap">写评论</div>
				<div class='tapComment'>
					<img src='https://www.suitius.com/image/resources/homeDetail/ic_suite_balcony25.png' @click="commentTapScroll"/>
				</div>
				<a>22</a>
				<div class="buttons"><img src='https://www.suitius.com/image/resources/homeDetail/ic_suite_balcony26.png' /></div>
			</div>

			<!-- 点击评论之后 -->
			<div class='inputWidth' v-show="!commentShow">
				<input type='text' ref="autoFocus" maxlength="50"  cursor-spacing="8" placeholder='请输入评论内容' />
				<p>发布</p>
			</div>

		</div>

	</div>
</template>

<script>
	export default {
		data() {
			return {
				commentShow: true,
				scrollTops:0,
				scrollYes:true
				
			}
		},
		mounted(){

		},
		methods: {
			//点击数去评论
			commentTap: function() {
				this.commentShow = false;
				this.$nextTick(function () {
			        // DOM 更新了
			        this.$refs.autoFocus.focus()
			        
			      })
			},
			//点击主页面 隐藏输入框
			containerTap: function() {
				this.commentShow = true;
			},
			commentTapScroll:function(){
				let that = this;
			
				if(that.scrollYes){
					that.scrollTops = $(document).scrollTop();
				}

				//console.log($('.ommentSum').offset().top-$(document).scrollTop(),$(document).scrollTop(),$(document).height(),$(window).height(),$(window).width())
				//在评论区
				if($('.commentSum').offset().top-$(document).scrollTop()<$(window).height()-$('.bottomPl').height()-$('.shadeo').height()){
					
					if(that.scrollTops >= $('.commentSum').offset().top-$(window).height()){
						//console.log("已经超过评论区了",$('.articleMain').height()-$(window).height()-$('.commentSum').height()-$('.bottomPl').height()-$('.shadeo').height());
						$('body,html').animate({scrollTop:$('#content').height()-$(window).height()-$('.commentSum').height()-$('.shadeo').height()});
					}else{
						$('body,html').animate({scrollTop:that.scrollTops});
						that.scrollYes = true;//记录滚动距离
					}
					
				}else{
					//不在评论区
					that.scrollTops = $(document).scrollTop();
					that.scrollYes = false;//不记录滚动距离
					$('body,html').animate({scrollTop:$('.commentSum').offset().top});
				}

			
			},
		}
	}
</script>

<style scoped>
	.container {
		padding: 0.88rem 0;
	}
	
	.articleMain {
		width: 100%;
	}
	
	.articleMain {
		width: 6.7rem;
		margin: 0 auto;
		padding-bottom: 0.1rem;
	}
	
	.articleMain .headline {
		padding: 0.3rem 0;
		width: 100%;
		color: #000000;
		font-size:0.4rem ;
		font-weight: 500;
		line-height:0.5rem ;
	}
	
	.articleMain .headTime {
		height: 0.9rem;
		width: 100%;
		border-bottom: 1px solid #E5E5E5;
	}
	
	.articleMain .headTime .nameImg {
		font-size: 0.32rem;
		width: 50%;
		float: left;
	}
	
	.articleMain .headTime .nameImg img {
		width: 0.6rem;
		height: 0.6rem;
		float: left;
		margin-right: 0.2rem;
	}
	
	.articleMain .headTime .nameImg b {
		font-size: 0.32rem;
		color: #9B9B9B;
		line-height: 0.6rem;
	}
	
	.articleMain .headTime .times {
		width: 50%;
		float: right;
		font-size: 0.26rem;
		line-height: 0.6rem;
		color: #9B9B9B;
		text-align: right;
	}
	
	.articleContent {
		width: 100%;
	}
	
	.articleContent .articleList {
		width: 100%;
		margin-top: 0.4rem;
		font-size: 0.32rem;
		color: #222222;
		letter-spacing: 1px;
		line-height: 0.54rem;
	}
		.articleContent .articleList img{
			max-width: 100%;
		}
	
	.commentSum {
		position: relative;
		margin-top: 0.2rem;
	}
	
	.commentSum .shadeo {
		width: 7.5rem;
		height: 0.2rem;
		background: #eff3f6;
		position: absolute;
		top: 0;
		left: -0.4rem;
	}
	
	.neComment {
		width: 100%;
		height: 2.5rem;
		line-height: 2.5rem;
		text-align: center;
		font-size: 0.32rem;
		color: #C0C0C0;
	}
	
	.newsList {
		width: 100%;
		box-sizing: border-box;
		padding-top: 0.52rem;
	}
	
	.newsList .topic {
		font-size: 0.32rem;
		color: #222222;
		font-weight: 600;
	}
	
	.keyList {
		width: 100%;
		display: flex;
		box-sizing: border-box;
		border-bottom: 1px solid #E5E5E5;
		margin-top: 0.4rem;
	}
	
	.keyList .imgs {
		width: 0.9rem;
		margin-right: 0.32rem;
	}
	
	.keyList .imgs img {
		width: 0.9rem;
		height: 0.9rem;
		border-radius: 50%;
		float: left;
	}
	
	.keyList .newsBox {
		width: 5.48rem;
		font-size: 0.24rem;
	}
	
	.keyList .newsBox p {
		display: inline-block;
		font-size: 0.24rem;
		margin: 0.08rem 0;
		color: #555555;
		font-weight: 400;
	}
	
	.keyList .newsBox b {
		float: right;
		font-size: 0.24rem;
		margin: 0.08rem 0;
		color: #C0C0C0;
	}
	
	.keyList .newsBox span {
		display: block;
		font-size: 0.32rem;
		color: #222222;
		margin-top: 0.2rem;
		margin-bottom: 0.32rem;
	}
	
	.bottomPl {
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 1rem;
		background: #fff;
		box-shadow: 0 -4px 6px 0 rgba(0, 0, 0, 0.08);
	}
	
	.bottomPl .plMain {
		width: 6.7rem;
		margin: 0 auto;
		padding: 0.15rem 0;
		font-size: 0.28rem;
	}
	
	.bottomPl .plMain .comment {
		width: 4.53rem;
		height: 0.7rem;
		background: #F8F8F8;
		box-sizing: border-box;
		border: 1px solid #E2E2E2;
		padding-left: 0.32rem;
		line-height: 0.68rem;
		font-family: PingFangSC-Regular;
		font-size: 0.28rem;
		color: #C0C0C0;
		letter-spacing: 0;
		border-radius: 0.6rem;
		float: left;
	}
	
	.bottomPl .plMain .tapComment {
		height: 0.48rem;
		width: 0.52rem;
		margin-top: 0.11rem;
		margin-left: 0.32rem;
		float: left;
	}
	
	.bottomPl .plMain .tapComment img {
		height: 0.48rem;
		width: 0.52rem;
		float: left;
	}
	
	.bottomPl .plMain a {
		font-size: 0.28rem;
		color: #C0C0C0;
		line-height: 0.7rem;
		margin-left: 0.1rem;
	}
	
	.bottomPl .plMain .buttons {
		width: 0.52rem;
		height: 0.52rem;
		float: right;
		position: relative;
		margin-top: 0.09rem;
	}
	
	.bottomPl .plMain .buttons img {
		width: 0.52rem;
		height: 0.52rem;
		position: absolute;
		left: 0;
		top: 0;
	}
	
	.bottomPl .inputWidth {
		width: 6.7rem;
		margin: 0 auto;
		box-sizing: border-box;
		padding: 0.15rem 0;
	}
	
	.bottomPl .inputWidth input {
		width: 5.58rem;
		height: 0.7rem;
		background: #F8F8F8;
		border: 1px solid #E2E2E2;
		border-radius: 0.6rem;
		padding: 0 0.2rem;
		box-sizing: border-box;
		font-size: 0.28rem;
		float: left;
	}
	
	.bottomPl .inputWidth p {
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
</style>