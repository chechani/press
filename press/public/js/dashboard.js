import Vue from 'vue/dist/vue.js';
import VueRouter from 'vue-router/dist/vue-router.js';

import DashboardRoot from "./DashboardRoot.vue";
import PaymentList from "./PaymentList.vue";
import SiteDetail from "./SiteDetail.vue";
import SiteList from "./SiteList.vue";
import SiteNewForm from "./SiteNewForm.vue";

Vue.use(VueRouter);
const routes = [
	{
		name: "home",
		path: '/',
		component: SiteList,
	},
	{
		name: "site-list",
		path: '/sites',
		component: SiteList,
	},
	{
		name: "billing-list",
		path: '/billing',
		component: SiteList,
	},
	{
		name: "site-new",
		path: '/sites/new',
		component: SiteNewForm,
	},
	{
		name: "site-detail",
		path: '/sites/:name',
		component: SiteDetail,
	},
	{
		name: "payment-list",
		path: '/payments',
		component: PaymentList,
	},
];

const router = new VueRouter({
	mode: 'hash',
	base: "dashboard",
	routes: routes,
});

new Vue({
	el: ".dashboard-container",
	router: router,
	template: "<dashboard-root/>",
	components: {
		DashboardRoot
	}
});
