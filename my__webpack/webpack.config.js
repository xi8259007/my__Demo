const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// module.exports 基础配置 entry、module、mode、output

module.exports = function (env, argv) {
	env = env || {};

	//	设置 process.env.NODE_ENV
	//	none: 不优化; 
	//	development: 输出调试信息
	//	production: 最高优化、启用压缩、忽略错误
	if( env.production){
		conf = require('./config/webpack.production')
	} else if( env.development ){
		conf = require('./config/webpack.development')
	} else {
		conf = require('./config/webpack.test')
	}

	return {
		//	导入路径: 字符串SPA，json MPA
		entry: {
			app: './src/js/index'
		},

		//	模块解析 - 根据规则使用loader加载解析 //
		module: {
			//	根据规则使用loader加载解析	[从后往前] 解析
			rules: [
				//	js	依赖 babel-loader、@babel/core、@babel/preset-env
				{
					test: /\.(jsx?)$/i,
					use: [
						{
							loader: 'babel-loader',
							options: {
								presets: ['@babel/preset-env']
							}
						},
						// {
						// 	loader: 'eslint-loader'
						// }
					],
					exclude: /node_modules | bower_modules/
				},
				
				//	css	依赖 style-loader输出到<style>标签、css-loader读取/解析css文件 输出js成字符串、postcss-loader添加前缀 配置文件 postcss.config.js、内置插件autoprefixer检查配置使用率 插件配置外 .browserlistrc, 内 package.json
				{
					test: /\.css$/i,
					use: [
						env.production ? {loader: MiniCssExtractPlugin.loader,options: {publicPath:'../'}} : 'style-loader',
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

				//	依赖 node-sass sass-loader
				{
					test: /\.s[ac]ss$/i,
					use: [
						'style-loader',
						'css-loader',
						'sass-loader'
					]
				},

				//  依赖 less less-loader
				// {
				// 	test: /\.s[ac]ss$/i,
				// 	use: [
				// 		'style-loader',
				// 		'css-loader',
				// 		'sass-loader'
				// 	]
				// },

				//	images	依赖 file-loader、url-loader
				{
					test: /\.(jpe?g|gif|png|svg)$/i,
					use: {
						//	[减少请求] 满足条件 内部调用file-loaader
						loader: 'url-loader',
						options: {
							//	导出路径	相对于output.path 
							outputPath: './images/',

							//	html引入路径	配置devserver后无用
							publicPath: './images/',

							//	limit以内使用url-loader转[base64]内置	否则file-loader引入
							limit: 2 * 1024
						}
					}
				},
				//	fonts
				{
					test: /\.(eot|svg|ttf|woff2?)$/i,
					use: {
						loader: 'url-loader',
						options: {
							outputPath: 'fonts/',
							limit: 2 * 1024
						}
					}
				},

				// vue
				{
					test: /\.vue$/i,
					use: {
						loader: 'vue-loader'
					}
				}

			]
		},
		...conf,
		resolve: {
			alias: {
				'@': path.resolve(__dirname, './src/')
			}
		},
		//	performance、stats警告关闭
		// performance: {
		// 	hints: env.production ? false : 'warning'
		// },
		// stats: { children: false }
	}
	
}