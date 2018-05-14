import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'//首页
import HomePage from '@/components/homePage'//首页
import Header from '@/components/Header'
import Nav from '@/components/Nav'
import Questionnaire from '@/components/questionnaire'//问卷调查
import SelectCity from '@/components/selectCity'//城市选择
import JourneyNews from '@/components/journeyNews'//消息页
import PersonalData from '@/components/personalData'//个人资料
import RelationFD from '@/components/relationFD'//联系业主
import Searchs from '@/components/searchs'//搜索
import Sultnews from '@/components/sultnews'//系统消息
import Message from '@/components/message'//系统消息
import SultSetting from '@/components/sultSetting'//系统设置
import Asregards from '@/components/asregards'//关于
import Article from '@/components/article'//文章详情
import JourneyList from '@/components/journeyList'//我的行程
import MyVisit from '@/components/myVisit'//我的到访
import Feedback from '@/components/feedback'//意见反馈
import HomeRegister from '@/components/homeRegister'//登记房屋
import MyHome from '@/components/myHome'//我的房屋
import SearchEnd from '@/components/searchEnd'//搜索结果
import AmendHome from '@/components/amendHome'//房东房源详情
import DiscussionList from '@/components/discussionList'//讨论组
import Discussion from '@/components/discussion'//讨论组详情
import RouteChat from '@/components/routeChat'//行程详情
import VisitChat from '@/components/visitChat'//到访详情
import HomeDetail from '@/components/homeDetail'//房源详情页
Vue.use(Router)

export default new Router({
  routes: [
  	{path:"/",redirect:"/home"},
  	{
      path: '/questionnaire',
      name: 'questionnaire',
      component:Questionnaire
   },{
      path: '/selectCity',
      name: 'selectCity',
      component:SelectCity
   },{
      path: '/personalData',
      name: 'personalData',
      component:PersonalData
   },{
      path: '/relationFD',
      name: 'relationFD',
      components: {
				default:RelationFD,
				header:Header,
			}
   },{
      path: '/home',
      name: 'home',
      components: {
				default:Home,
				header:Header,
				nav:Nav
			}
   },{
      path: '/homePage',
      name: 'homePage',
      components: {
				default:HomePage,
				header:Header,
				nav:Nav
			}
   },{
      path: '/searchs',
      name: 'searchs',
      components: {
				default:Searchs,
				header:Header,
			}
    },{
      path: '/journeyNews',
      name: 'journeyNews',
      components: {
				default:JourneyNews,
				header:Header,
			}
   },{
      path: '/sultnews',
      name: 'sultnews',
      components: {
				default:Sultnews,
				header:Header,
			}
    },{
      path: '/message',
      name: 'message',
      components: {
				default:Message,
				header:Header,
			}
    },{
      path: '/sultSetting',
      name: 'sultSetting',
      components: {
				default:SultSetting,
				header:Header,
			}
    },{
      path: '/asregards',
      name: 'asregards',
      components: {
				default:Asregards,
				header:Header,
			}
    },{
      path: '/article',
      name: 'article',
      components: {
				default:Article,
				header:Header,
			}
    },{
      path: '/journeyList',
      name: 'journeyList',
      components: {
				default:JourneyList,
				header:Header,
				nav:Nav
			}
    },{
      path: '/myVisit',
      name: 'myVisit',
      components: {
				default:MyVisit,
				header:Header,
			}
    },{
      path: '/feedback',
      name: 'feedback',
      components: {
				default:Feedback,
				header:Header,
			}
    },{
      path: '/homeRegister',
      name: 'homeRegister',
      components: {
				default:HomeRegister,
				header:Header,
			}
     },{
      path: '/myHome',
      name: 'myHome',
      components: {
				default:MyHome,
				header:Header,
			}
    },{
      path: '/searchEnd',
      name: 'searchEnd',
      components: {
				default:SearchEnd,
				header:Header,
			}
    },{
      path: '/amendHome',
      name: 'amendHome',
      components: {
				default:AmendHome,
				header:Header,
			}
    },{
      path: '/discussionList',
      name: 'discussionList',
      components: {
				default:DiscussionList,
				header:Header,
			}
    },{
      path: '/discussion',
      name: 'discussion',
      components: {
				default:Discussion,
				header:Header,
			}
    },{
      path: '/routeChat',
      name: 'routeChat',
      components: {
				default:RouteChat,
				header:Header,
			}
    },{
      path: '/visitChat',
      name: 'visitChat',
      components: {
				default:VisitChat,
				header:Header,
			}
    },{
      path: '/homeDetail',
      name: 'homeDetail',
      components: {
				default:HomeDetail,
				header:Header,
			}
    }
   
  ]
})
