import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/homePage' //首页
import Nav from '@/components/Nav' //导航
import Questionnaire from '@/components/questionnaire' //问卷调查
import SelectCity from '@/components/selectCity' //城市选择
import JourneyNews from '@/components/journeyNews' //消息页
import PersonalData from '@/components/personalData' //个人资料
import RelationFD from '@/components/relationFD' //联系业主
import Searchs from '@/components/searchs' //搜索
import Sultnews from '@/components/sultnews' //系统消息
import Message from '@/components/message' //系统消息
import SultSetting from '@/components/sultSetting' //系统设置
import Asregards from '@/components/asregards' //关于
import Article from '@/components/article' //文章详情
import JourneyList from '@/components/journeyList' //我的行程
import MyVisit from '@/components/myVisit' //我的到访
import Feedback from '@/components/feedback' //意见反馈
import HomeRegister from '@/components/homeRegister' //登记房屋
import MyHome from '@/components/myHome' //我的房屋
import SearchEnd from '@/components/searchEnd' //搜索结果
import AmendHome from '@/components/amendHome' //房东房源详情
import DiscussionList from '@/components/discussionList' //讨论组
import Discussion from '@/components/discussion' //讨论组详情
import RouteChat from '@/components/routeChat' //行程详情
import VisitChat from '@/components/visitChat' //到访详情
import HomeDetail from '@/components/homeDetail' //房源详情页
import Community from '@/components/community' //社区
import MyLikeHome from '@/components/myLikeHome' //我喜欢的
import Mine from '@/components/mine' //我的 个人中心
import ChangePassword from '@/components/changePassword' //修改密码
import Login from '@/components/login' //登陆
import Register1 from '@/components/register1' //注册1
import Register2 from '@/components/register2' //注册2
import Earnings from '@/components/earnings' //收益
import AuditStatus from '@/components/auditStatus' //房屋审核
import LinkContract from '@/components/linkContract' //线上签约
import StartPage from '@/components/startPage' //启动页
Vue.use(Router)

export default new Router({
	routes: [{
			path: "/",
			redirect: "/startPage"
		},
		{
			path: '/questionnaire',
			name: 'questionnaire',
			component: Questionnaire
		}, {
			path: '/startPage',
			name: 'startPage',
			component: StartPage
		}, {
			path: '/selectCity',
			name: 'selectCity',
			component: SelectCity
		}, {
			path: '/linkContract',
			name: 'linkContract',
			component: LinkContract
		}, {
			path: '/personalData',
			name: 'personalData',
			component: PersonalData
		}, {
			path: '/relationFD',
			name: 'relationFD',
			component: RelationFD
		}, {
			path: '/login',
			name: 'login',
			component: Login
		}, {
			path: '/register1',
			name: 'register1',
			component: Register1
		}, {
			path: '/register2',
			name: 'register2',
			component: Register2
		}, {
			path: '/auditStatus',
			name: 'auditStatus',
			component: AuditStatus
		}, {
			path: '/homePage',
			name: 'homePage',
			components: {
				default: HomePage,
				nav: Nav
			}
		}, {
			path: '/mine',
			name: 'mine',
			components: {
				default: Mine,
				nav: Nav
			}
		}, {
			path: '/searchs',
			name: 'searchs',
			component: Searchs
		}, {
			path: '/journeyNews',
			name: 'journeyNews',
			component: JourneyNews
		}, {
			path: '/earnings',
			name: 'earnings',
			components: {
				default: Earnings,
				nav: Nav
			}
		}, {
			path: '/sultnews',
			name: 'sultnews',
			component: Sultnews
		}, {
			path: '/message',
			name: 'message',
			component: Message
		}, {
			path: '/sultSetting',
			name: 'sultSetting',
			component: SultSetting
		}, {
			path: '/asregards',
			name: 'asregards',
			component: Asregards
		}, {
			path: '/article',
			name: 'article',
			component: Article
		}, {
			path: '/journeyList',
			name: 'journeyList',
			components: {
				default: JourneyList,
				nav: Nav
			}
		}, {
			path: '/myVisit',
			name: 'myVisit',
			components: {
				default: MyVisit,
				nav: Nav
			}
		}, {
			path: '/feedback',
			name: 'feedback',
			component: Feedback
		}, {
			path: '/homeRegister',
			name: 'homeRegister',
			component: HomeRegister
		}, {
			path: '/myHome',
			name: 'myHome',
			component: MyHome
		}, {
			path: '/searchEnd',
			name: 'searchEnd',
			component: SearchEnd
		}, {
			path: '/amendHome',
			name: 'amendHome',
			component: AmendHome
		}, {
			path: '/discussionList',
			name: 'discussionList',
			components: {
				default: DiscussionList,
				nav: Nav
			}
		}, {
			path: '/discussion',
			name: 'discussion',
			component: Discussion
		}, {
			path: '/routeChat',
			name: 'routeChat',
			component: RouteChat
		}, {
			path: '/visitChat',
			name: 'visitChat',
			component: VisitChat
		}, {
			path: '/homeDetail',
			name: 'homeDetail',
			component: HomeDetail
		}, {
			path: '/community',
			name: 'community',
			components: {
				default: Community,
				nav: Nav
			}
		}, {
			path: '/myLikeHome',
			name: 'myLikeHome',
			component: MyLikeHome
		}, {
			path: '/changePassword',
			name: 'changePassword',
			component: ChangePassword
		}

	]
})