<template>
	<div class="container">
		<h1><router-link to="/questionnaire">问卷调查</router-link></h1>
		<h1><router-link to="/homePage">首页</router-link></h1>
		<h2><router-link to="/selectCity">城市选择</router-link></h2>
		<h2><router-link to="/personalData">个人资料</router-link></h2>
		<h2><router-link to="/relationFD">联系业主</router-link></h2>
		<h2><router-link to="/searchS">搜索</router-link></h2>
		<h2><router-link to="/message">消息中心</router-link></h2>
		<h2><router-link to="/sultSetting">系统设置</router-link></h2>
		<h2><router-link to="/article">文章详情</router-link></h2>
		<h2><router-link to="/journeyList">我的行程</router-link></h2>
		<h2><router-link to="/myVisit">我的到访</router-link></h2>
		<h2><router-link to="/myhome">我的房屋</router-link></h2>
		<h2><router-link to="/homeRegister">登记房屋</router-link></h2>
		<h2><router-link to="/searchEnd">搜索结果</router-link></h2>
		<h2><router-link to="/amendHome">房东房源详情</router-link></h2>
		<h2><router-link to="/discussionList">讨论组</router-link></h2>
		<h2><router-link to="/discussion">讨论组详情</router-link></h2>
		<h2><router-link to="/routeChat">行程详情</router-link></h2>
		<h2><router-link to="/visitChat">到访详情</router-link></h2>
		<h2><router-link to="/homeDetail">房源详情页</router-link></h2>
		<div id="maps" style="width: 100%;height: 3rem;">
		</div>
		<img :src="url" />
		<input id="secondPic" type="file" data-index='1' accept="image/*" capture="camera" v-on:change='previewFile'>
		<canvas id="myCanvas" style="display:none;"></canvas>
		<img id="ago" src="" alt="" style="display:none;" />
	</div>
</template>

<script>
	export default {
		name: 'Home',
		data() {
			return {
				msg: 'Welcome to Your Vue.js App',
				url: 'https://www.suitius.com/image/resources/ic_search_closs.png'
			}
		},
		mounted(){
			console.log(312321)
			var center = new qq.maps.LatLng(39.982163, 116.306070);
      var map = new qq.maps.Map(document.getElementById("maps"), {
        center: center,
        zoom: 16
    });
    //创建一个Marker
    var marker = new qq.maps.Marker({
        //设置Marker的位置坐标
        position: center,
        //设置显示Marker的地图
        map: map
    });
			var anchor = new qq.maps.Point(0, 39),
        size = new qq.maps.Size(42, 68),
        origin = new qq.maps.Point(0, 0),
        scaleSize = new qq.maps.Size(42, 68),
        icon = new qq.maps.MarkerImage(
            "data:image/png;base64,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",
            size,
            origin,
            anchor,
            scaleSize
        );
         marker.setIcon(icon);
	
		},
		methods: {
			previewFile: function(e) { //选择图片调用的方法
				let that = this
				var file = e.target.files[0];
				var supportedTypes = ['image/jpg', 'image/jpeg', 'image/png'];
				console.log(e)
				//this.url= e.target.value
				if(file && supportedTypes.indexOf(file.type) >= 0) {
					this.file = file;
					// if (Math.round(file.size / 1024) < 10240) {
					var picIndex = e.target.dataset.index;
					compressPic(file, function(data) { //压缩图片
						//console.log(data);
						that.url = data
						//that.setPic(picIndex, data);
					});
					// } else {
					//   showToast('图片超过大小限制！');
					// }
				} else {
					showToast('文件格式只支持：jpg、jpeg 和 png');
				}
			},
		}
	}

	function compressPic(fil, cb) {
		var Cnv = document.getElementById('myCanvas');
		var Cntx = Cnv.getContext('2d'); //获取2d编辑容器
		var imgss = new Image(); //创建一个图片
		var agoimg = document.getElementById("ago");
		var tmpFile = fil;
		var reader = new FileReader();
		var base64Data;
		reader.readAsDataURL(tmpFile);
		reader.onload = function(e) {
			var url = e.target.result;
			imgss.src = url;
			agoimg.src = url;
			agoimg.onload = function() {
				//等比缩放
				var m = imgss.width / imgss.height;
				Cnv.height = 300; //该值影响缩放后图片的大小
				Cnv.width = 300 * m;
				//img放入画布中
				//设置起始坐标，结束坐标
				Cntx.drawImage(agoimg, 0, 0, 300 * m, 300);
				base64Data = Cnv.toDataURL("image/png");
				cb && cb(base64Data);
			}
		}
		return Cnv.toDataURL("image/png");
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.container {
		padding-top: 0.88rem;
	}
	
	h1,
	h2 {
		font-weight: normal;
	}
	
	ul {
		list-style-type: none;
		padding: 0;
	}
	
	li {
		display: inline-block;
		margin: 0 10px;
	}
	
	a {
		text-decoration: none;
		color: #42b983;
	}
</style>