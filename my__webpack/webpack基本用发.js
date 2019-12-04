const path = require('path')
const Webpack = require('webpack')
// 输出html
const HtmlWebpackPlugin = require('html-webpack-plugin');
// 样式规则检测
const StylelintPlugin = require('stylelint-webpack-plugin');

// "dev": "webpack-dev-server --env.development --open --watch --inline --config webpack基本用发.js",

/** 基础 **/
module.exports = {
	//	设置 process.env.NODE_ENV
	//	none: 不优化; 
	//	development: 输出调试信息
	//	production: 最高优化、启用压缩、忽略错误
	mode: 'development',

	//	导入路口
	entry: './src/js/index',
	//	MPA	用户多页面应用
	// entry: {							
	// 'app1': './src/1.js',
	// 'app2': './src/2.js',
	// },
	//	输出路径/名称	__dirname 当前目录	[必须是绝对路径] 通过 path.resolve 解析
	output: {
		path: path.resolve(__dirname, 'dist'),		
		filename: 'bundle.js',

		// [name] 用户多页面应用
		// filename:		'[name].bundle.js',
	},
	/** 模块解析 - 根据规则使用loader加载解析 **/
	module: { 
		//	根据规则使用loader 解析js以外的东西 [ 从后往前 ] 解析
		rules: [ 			
			//	依赖 style-loader输出到<style>标签、css-loader读取/解析css文件 输出js成字符串、postcss-loader添加前缀 配置文件 postcss.config.js、内置插件autoprefixer检查配置使用率 插件配置外 .browserlistrc, 内 package.json
			{
				test: /\.css$/i,
				use: [
					'style-loader',
					'css-loader',
					{
						loader: 'postcss-loader',
						options: {
							plugins: [
								require('autoprefixer')
							]
						}
					}
				]
			},

			//  依赖 less、less-loader
			{
				test: /\.s[ac]ss$/i,
				use: [
					'style-loader',
					'css-loader',
					'sass-loader'
				]
			},

			//  依赖 less、less-loader
			// {
			// 	test: /\.less$/i,
			// 	use: [
			// 		'style-loader',
			// 		'css-loader',
			// 		'less-loader'
			// 	]
			// },
			/* {
				test: /\.(jpg|gif|png)$/i,
				use: [
					{
						loader: 'file-loader',
						options: {
							outputPath: 'imgs/',
							publicPath: './imgs/'
						}
					}
				]
			},*/
			//	依赖 file-loader、url-loader
			{
				test: /\.(jpg|gif|png)$/i,
				use: {
					//	[减少请求] 满足条件 内部调用file-loaader
					loader: 'url-loader',
					options: {
						//	输出路径	相对于output.path 
						outputPath: 'images/',
						//	html引入路径	配置devserver后无用
						publicPath: './images/',
						//	超过4k使用file-loader压缩, 否则使用url-loader[base64]
						limit: 2 * 1024
					}
				}
			},
			//	依赖 file-loader、url-loader
			{
				test: /\.(eot|svg|ttf|woff|woff2)$/i,
				use: {
					loader: 'url-loader',
					options: {
						outputPath: 'fonts',
						publicPath: './fonts/',
						limit: 2*1024
					}
				}
			},
			//	依赖 babel-loader、@babel/core、@babel/preset-env
			{
				test: /\.(js|jsx)$/i,
				//	不包含
				exclude: /(node_modules | bower_components)/,
				use: [{
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env']
					}
				},{
					loader: 'eslint-loader'
				}]
			}
		]
	},

	/** 开发者工具 开发环境,开发者工具显示原始代码 **/
	devtool: 'source-map',
	
	/** 开发服务器 存储在内存,速度快 **/
	devServer: {					
		// 热更新，无需手动刷新								
		hot: true,

		// 静态文件根目录
		contentBase: './dist',

		host: 'localhost',
		port: 8080,

		//	用于单页应用，404指向index.html
		historyApiFallback: true,

		// 代理到后端的服务地址，会拦截所有以api开头的请求地址
		// proxy: {
			// "/api": "http://localhost:3000"
		// }
	},

	/** 插件 **/
	plugins: [
		//	热更新
		new Webpack.HotModuleReplacementPlugin(),

		//	样式校验
		new StylelintPlugin({
			files: ['**/*.css','**/*.scss','**/*.less','**/*.vue','**/*.html']
		}),

		//	生成 html
		new HtmlWebpackPlugin({
			title: 'Webpack Study Demo',
			// 压缩
			minify: {
				// 移除HTML中的注释
				removeComments: true,
				// 删除空白符与换行符
				collapseWhitespace: false,
				// 压缩内联css
				minifyCSS: true
			},
			// 生成的 html 文件名
			filename: 'index.html',
			// 模板路径入口
			template: path.join(__dirname, './src/index.html'),
			hash: true
		}),
	]
}