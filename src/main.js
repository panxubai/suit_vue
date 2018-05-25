// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import store from './store'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.config.productionTip = false
Vue.use(MintUI)
Vue.prototype.$axios = axios
/* eslint-disable no-new */
router.beforeEach((to, from, next) => {
	const list = ['homePage', 'journeyList', 'discussionList', 'community', 'mine','selectCity','questionnaire','searchEnd', 'searchs','message','sultnews','journeyNews',] // 将需要切换效果的路由名称组成一个数组
	const listNo = ['homePage', 'journeyList', 'discussionList', 'community', 'mine'] //不需要切换效果
	const toName = to.name // 即将进入的路由名字
	const fromName = from.name // 即将离开的路由名字
	const toIndex = list.indexOf(toName) // 进入下标
	const fromIndex = list.indexOf(fromName) // 离开下标
	const toIndexNo = listNo.indexOf(toName) // tab进入下标
	const fromIndexNo = listNo.indexOf(fromName) // tab离开下标
	let direction = ''
	if(toIndex > -1 && fromIndex > -1) { // 如果下标都存在
		if(toIndexNo > -1 && fromIndexNo > -1) {///如果都存在没有切换效果
			
		} else {
			if(toIndex < fromIndex) { // 如果进入的下标小于离开的下标，那么是左滑
				direction = 'left'
			} else {
				direction = 'right' // 如果进入的下标大于离开的下标，那么是右滑
			}
		}

	}
	store.state.viewDirection = direction //这里使用vuex进行赋值
	return next()
})
new Vue({
	el: '#app',
	router,
	store,
	components: {
		App
	},
	template: '<App/>'
})