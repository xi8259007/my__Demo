import Vue from 'vue'
import Router from 'vue-router'

import ErrorPage from '@/components/404'

import HelloWorld from '@/components/HelloWorld'
import MyButton from '@/components/MyButton'
import MyTable from '@/components/MyTable'
import MyForm from '@/components/MyForm'
import MyList from '@/components/MyList'
import MyAlert from '@/components/MyAlert'
import MyCss from '@/components/MyCss'
import MySvg from '@/components/MySvg'
import MyCanvas from '@/components/MyCanvas'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '*',
			redirect: '/404'
		},
		{
			path: '/404',
			name: '404',
			component: ErrorPage
		},
		{
			path: '/',
			name: 'Index',
			component: HelloWorld
		},
		{
			path: '/button/',
			name: 'MyButton',
			component: MyButton
		}, {
			path: '/table/',
			name: 'MyTable',
			component: MyTable
		},
		{
			path: '/form/',
			name: 'MyForm',
			component: MyForm
		}, {
			path: '/list/',
			name: 'MyList',
			component: MyList
		}, {
			path: '/alert/',
			name: 'MyAlert',
			component: MyAlert
		}, {
			path: '/css/',
			name: 'MyCss',
			component: MyCss
		}, {
			path: '/svg/',
			name: 'MySvg',
			component: MySvg
		}, {
			path: '/canvas/',
			name: 'MyCanvas',
			component: MyCanvas
		}
	]
})