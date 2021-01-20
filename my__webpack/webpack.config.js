const path = require('path')
const { ESLINT } = require('./config/index')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const VueLoaderPlugin = require('vue-loade/lib/plugin')

// module.exports 基础配置 entry、module、mode、output

module.exports = function (env, argv) {
	env = env || {};
	let conf = null

	//	mode:					设置 process.env.NODE_ENV
	//	none					不优化 
	//	development		输出调试信息
	//	production		最高优化、启用压缩、忽略错误
	if( env.production){
		conf = require('./config/webpack.production')
	} else if( env.development ){
		conf = require('./config/webpack.development')
	} else {
		conf = require('./config/webpack.test')
	}

	return {
		/*
		**		entry：	导入路径
		**		单入口：					SPA 字符串
		**		多入口：					MPA JSON
		*/
		entry: {
			app: './src/js/index'
		},

		/*  
		**		output：导出路径
		**		path：					路径 [dev环境不需要] __dirname => 当前目录	 通过 path.resolve解析
		**		filename：			名称 [必须是绝对路径]
		*/

		/*
		**		模块解析
		*/
		module: {
			//	根据规则使用loader解析JS以外的东西	[从后往前解析]
			rules: [
				//	CSS	解析
				{
					test: /\.css$/i,
					use: [
						env.production ? {loader: MiniCssExtractPlugin.loader,options: {publicPath:'../'}} : 'style-loader',	// vue-style-loader
						'css-loader',
						{
							loader: 'postcss-loader',
							options: {
								plugins: [
									require('autoprefixer')({
										"overrideBrowserslist": [
											"defaults",
											"not ie < 11",
											"last 2 versions",
											"> 1%",
											"iOS 7",
											"last 3 iOS versions"
										]
									})
								]
							}
						}
					]
				},

				//  Less 解析
				// {
				// 	test: /\.less$/i,
				// 	use: [
				// 		'style-loader',
				// 		'css-loader',
				// 		'less-loader'
				// 	]
				// },

				//	Sass 解析
				{
					test: /\.s[ac]ss$/i,
					use: [
						'style-loader',
						'css-loader',
						'sass-loader'
					]
				},

				//	JS/jsx	解析
				{
					test: /\.(jsx?)$/i,
					use: [
						{
							loader: 'babel-loader',
							options: {
								presets: ['@babel/preset-env']
							}
						},
						...ESLINT ? [{
							loader: 'eslint-loader',
							options: {
								exclude: /node_modules | bower_modules/
							}
						}] : []
					],
					
				},
				

				//	图片 解析
				{
					test: /\.(jpe?g|gif|png|svg)$/i,
					use: {
						loader: 'url-loader',						//	减少请求
						options: {
							outputPath: 'images/',				//	导出路径	相对于output.path 
							publicPath: '../images/',		//	html引入路径	配置devserver后无用
							limit: 8 * 1024								//	limit以内使用url-loader转[base64]内置	否则file-loader引入
						}
					}
				},
				//	字体 解析
				{
					test: /\.(eot|svg|ttf|woff2?)$/i,
					use: {
						loader: 'url-loader',
						options: {
							outputPath: 'fonts/',
							publicPath: 'dist/fonts/',
							limit: 4 * 1024
						}
					}
				},

				//	vue	解析
				{
					test: /\.vue$/i,
					use: {
						loader: 'vue-loader'
					}
				}

			]
		},
		...conf,

		/*
		**	别名
		*/
		resolve: {
			alias: {
				'@': path.resolve(__dirname, './src/')
			}
		},

		/*
		**	performance、stats警告关闭
		*/	
		performance: {
			hints: false
			// hints: env.production ? false : 'warning'
		},
		// stats: { children: false }
	}
	
}