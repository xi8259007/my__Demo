const path = require('path')
const Webpack = require('webpack')
const StylelintPlugin = require('stylelint-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { STYLELINT } = require('./index')

// "dev": "webpack-dev-server --env.development --open --watch --inline --config webpack基本用发.js",

module.exports = {
	mode: 'development',
	output: {
		filename: 'bundle.js',
	},

	/*
	**		开发者工具 开发环境,开发者工具显示原始代码
	*/
	devtool: 'source-map',

	/*
	**		本地开发服务器 存储在内存,速度快
	*/
	devServer: {
		hot: true,									// 热更新，无需手动刷新配合 Webpack.HotModuleReplacementPlugin模块
		contentBase: '../src',			// 本地服务器所加载的页面所在的目录
		host: 'localhost',
		port: 8088,
		historyApiFallback: true,		//	用于单页应用，404指向index.html

		// 代理到后端的服务地址，会拦截所有以api开头的请求地址
		// proxy: {
			// "/api": "http://localhost:3000"
		// }
	},

	/*
	**		插件
	*/
	plugins: [
		/*
		**	热更新
		*/
		new Webpack.HotModuleReplacementPlugin(),

		//	样式校验																// '**':任意目录	'*'：根目录 
		...STYLELINT ? [new StylelintPlugin({
			files: ['**/*.css','**/*.scss','**/*.less','**/*.vue','**/*.htm','**/*.html']
		})] : [],

		/*
		**	生成HTML
		*/
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, '../src/index.html')
		}),
		new VueLoaderPlugin()
	]
}