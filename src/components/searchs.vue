<template>
	<div class="container">
		<div class="headerS">
			<div class="backs" @click="refresh">
				<img src="../assets/image/ic_topbar_return.png" />
			</div>
			<div class="headerTitle">搜索</div>
			<div class="information">
		</div>
		</div>
		<!-- 搜索框 -->
		<div class='searchPageSum'>
			<div class='search_border'>
				<div class='searchBoxSum'>
					<img class="ic_search" src="../assets/ic_search.png" />
					<input placeholder-style="color:#999999" placeholder="商圈/行政区/小区" v-on:input="searchEndChange" v-model="inputVal" />
					<img class="ic_search_closs" src='https://www.suitius.com/image/resources/ic_search_closs.png' @click="eliminateTap"></img>
				</div>
			</div>
			<!--<div class='noHome' style="display:{{showList?'block':'none'}}">
     <img src='../../resources/restImg/img_missing_card2.png'></img>
        <text>哦哟~搜索列表为空</text>
    </div> -->

			<div class='searchEnd'>
				<div class='hotSearch'>
					<p>热门搜索</p>
					<span v-for="item in hotSearch" :data-type="item.type" :data-text="item.text" @click="bindtapa">{{item.text}}</span>

				</div>
				<div v-show="historySearch.length != 0" class='hotSearch historySearch'>
					<p>历史搜索
						<img src='https://www.suitius.com/image/resources/ic_search_delete.png' @click="removeHistorySearch"></img>
					</p>
					<span v-for="item in historySearch" :data-type="item.type" :data-text="item.text" @click="bindtapa">{{item.text}}</span>
				</div>

			</div>

			<div class='searchIng'>
				<div class='administrative'>
					<p>行政区</p>
					<span data-type="ward" @click="bindtapa">item</span>
				</div>
				<div class='business'>
					<p>商圈</p>
					<span data-type="mall" @click="bindtapa">item</span>
				</div>
				<div class='plot'>
					<p>小区</p>
					<span data-type="village" @click="bindtapa">item</span>
				</div>
			</div>

		</div>

	</div>
</template>

<script>
	export default {
		data() {
			return {
				inputVal: "",
				hotSearch: [{
					text: "宝山区",
					type: "ward"
				}, {
					text: "虹口区",
					type: "ward"
				}, {
					text: "杨浦区",
					type: "ward"
				}, {
					text: "宝山区",
					type: "ward"
				}, {
					text: "宝山区",
					type: "ward"
				}, {
					text: "宝山区",
					type: "ward"
				}],
				historySearch: [],
			}
		},
		created() {
			let that = this;
			that.historySearchfun()
			//console.log(this.$route.query.gid)
		},
		methods: {
			refresh: function() {
				window.history.go(-1)
			},
			//本地获取历史搜索
			historySearchfun: function() {
				let that = this;
				var logs = JSON.parse(localStorage.getItem('historySearch')) || [];
				//console.log(logs)
				this.historySearch = logs

			},
			//输入框改变事件
			searchEndChange: function() {
				console.log(this.inputVal)
			},
			//点击差号清空输入框
			eliminateTap: function() {
				this.inputVal = ""
			},
			//选择要搜索的字段
			bindtapa: function(e) {
				console.log(this.$route.query.gid);
				if(this.$route.query.gid == 1){
					this.$router.push({
						name: 'homePage',
						params: {
				           text: e.srcElement.dataset.text,
							type: e.srcElement.dataset.type
				          }
					});
				}else{
					this.$router.push({
						path: '/searchEnd',
						query: {
				           text: e.srcElement.dataset.text,
							type: e.srcElement.dataset.type
				          }
					});
				}
				var logsArr = this.historySearch;
				let data = {
					text: e.srcElement.dataset.text,
					type: e.srcElement.dataset.type
				};
				console.log(data)
				for(let i = 0; i < logsArr.length; i++) {
					if(logsArr[i].text == e.srcElement.dataset.text) {
						logsArr.splice(i, 1);
					}
				}
				logsArr.unshift(data);
				localStorage.setItem("historySearch", JSON.stringify(logsArr));
				this.historySearch = logsArr
			},
			//清空历史搜索
			removeHistorySearch: function() {
				//告诉后台清空历史
				this.historySearch = [],
					localStorage.removeItem('historySearch')
			},
		}
	};
</script>

<style scoped>
	.container {
		padding-top: 0.88rem;
	}
	.headerS{
	box-shadow: 0 0.04rem 0.08rem 0 rgba(0, 0, 0, 0.10);

}
	.searchPageSum {
		width: 6.7rem;
		margin: 0 auto;
	}
	
	.searchBoxSum {
		width: 100%;
		height: 0.8rem;
		background: #F8F8F8;
		border-radius: 1.2rem;
		margin-top: 0.38rem;
	}
	
	.search_border {
		width: 100%;
		height: 1.52rem;
		border-bottom: 1px solid #F8F8F8;
	}
	
	.searchBoxSum .ic_search {
		width: 0.48rem;
		height: 0.48rem;
		float: left;
		margin: 0.16rem 0.16rem 0 0.4rem;
	}
	
	.searchBoxSum input {
		caret-color: #F5A623;
		width: 70%;
		height: 100%;
		font-size: 0.35rem;
		float: left;
		background: #f8f8f8;
	}
	
	.searchBoxSum .ic_search_closs {
		width: 0.48rem;
		height: 0.48rem;
		float: right;
		margin-top: 0.16rem;
		margin-right: 0.4rem;
	}
	
	.searchEnd {
		width: 100%;
		font-size: 0.28rem;
	}
	
	.searchEnd .hotSearch {
		width: 100%;
		padding: 0.4rem 0 0.16rem;
		border-bottom: 1px solid #F8F8F8;
	}
	
	.searchEnd .hotSearch p {
		width: 100%;
		display: block;
		font-family: PingFangSC-Regular;
		font-size: 0.34rem;
		color: #9B9B9B;
		letter-spacing: 0;
		margin-bottom: 0.4rem;
	}
	
	.searchEnd .hotSearch img {
		width: 0.48rem;
		height: 0.48rem;
		float: right;
	}
	
	.searchEnd .hotSearch span {
		display: inline-block;
		padding: 0.12rem 0.38rem;
		min-width: 0.04rem;
		font-family: PingFangSC-Regular;
		font-size: 0.28rem;
		color: #555555;
		background: #F8F8F8;
		border-radius: 0.2rem;
		margin-right: 0.24rem;
		margin-bottom: 0.24rem;
	}
	
	.searchIng {
		width: 100%;
	}
	
	.searchIng p {
		display: block;
		color: #9B9B9B;
		font-size: 0.4rem;
		margin-top: 0.4rem;
		margin-bottom: 0.08rem;
	}
	
	.searchIng span {
		display: block;
		font-size: 0.4rem;
		line-height: 1.04rem;
		border-bottom: 1px solid #eee;
	}
</style>