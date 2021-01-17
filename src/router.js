//引入vue
import Vue from 'vue';
//引入vue-router
import VueRouter from 'vue-router';
//第三方库需要use一下才能用
Vue.use(VueRouter)
//引用page1页面
import FilmDetailPage from "@/components/film/FilmDetailPage";
import FilmList from './components/film/FilmListPage.vue';
import PerformerList from './components/performer/PerformerList.vue';
import PerformerDetail from "@/components/performer/PerformerDetail";
import HelloWorld from './components/HelloWorld.vue';
import PerformerManagePage from './components/manage/performer/PerformerManagePage'
import TagManagePage from "@/components/manage/tag/TagManagePage";

//定义routes路由的集合，数组类型
const routes=[
    //单个路由均为对象类型，path代表的是路径，component代表组件
    {path:'/',redirect:'films'},
    {path:'/film',component:FilmDetailPage},
    // {path:'/film/:filmId',component:FilmDetailPage},
    {path:'/films',component:FilmList},
    {path:'/performer',component:PerformerDetail},
    {path:'/performers',component:PerformerList},

    {path:'/performerManage',component:PerformerManagePage},
    {path:'/tagManage',component:TagManagePage},

    {path:'/hello',component:HelloWorld}
]

//实例化VueRouter并将routes添加进去
const router=new VueRouter({
//ES6简写，等于routes：routes
    routes
});

//抛出这个这个实例对象方便外部读取以及访问
export default router