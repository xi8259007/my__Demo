const pathlib = require('path')
const Webpack = require('webpack')

module.exports = {
	/** 基础 **/
	mode: 'development', 				//	none: 不优化; development: 输出调试信息, 设置 process.env.NODE_ENV; production: 最高优化、启用压缩、忽略错误
	entry: './src/js/index',			//	导入目标文件 SPA './src/js/index'
	// entry: {							//	用户多页面应用 MPA
	// 	'app1': './src/1.js',
	// 	'app2': './src/2.js',
	// },
	output: {														//	输出路径	[必须是绝对路径] 通过 pathlib.resolve 解析
		path: 				pathlib.resolve(__dirname, 'dest'),		//	输出名称	__dirname 当前目录
		filename:			'bundle.js',
		// filename:		'[name].bundle.js',						// [name] 用户多页面应用
	},

	/** 模块解析 - loader加载解析 **/
	module:{ 
		rules: [ 													//	根据规则使用loader 解析js以外的东西 [从后往前]解析
			{														//	依赖 style-loader、css-loader、postcss-loader、autoprefixer
				test: /\.css$/i,									//	css
				use: [								
					'style-loader',									//	通过style-loader输出到<style>标签
					'css-loader',									//	使用css-loader读取/解析css文件 输出js成字符串
					{ 												//	通过autoprefixer检查配置使用率 使用postcss-loader添加前缀
						loader: 'postcss-loader', 					//	配置文件 postcss.config.js
						options: {									//	插件 - autoprefixer
							plugins: [								//	插件配置外 .browserlistrc, 内 package.json
								require('autoprefixer')
							]
						}
					}
					
				]
			},
			{ 														//  依赖 less、less-loader
				test: /\.less$/i,
				use: [
					'style-loader',
					'css-loader',
					'less-loader'
				]
			},
			/* {
				test: /\.(jpg|gif|png)$/i,							//	图片
				use: [
					{
						loader: 'file-loader',						//	图片压缩
						options: {
							outputPath: 'imgs/', 					//	输出路径	相对于output.path 
							publicPath: 'dest/imgs/'				//	html引入路径
						}
					}
				]
			},*/
			{														//	依赖 file-loader、url-loader
				test: /\.(jpg|gif|png)$/i,							//	图片
				use: {
					loader: 'url-loader', 							//	[减少请求] 满足条件 内部调用file-loaader
					options: {
						outputPath: 'imgs/',						//	输出路径	相对于output.path 
						publicPath: 'dest/imgs/',					//	html引入路径
						limit: 4 * 1024								//	超过[limit] 4k使用file-loader压缩, 否则使用url-loader[base64]
					}
				}
			},
			{														//	依赖 file-loader、url-loader
				test: /\.(eot|svg|ttf|woff|woff2)$/i,				//	字体
				use: {
					loader: 'url-loader',
					options: {
						outputPath: 'fonts',
						publicPath: 'dest/fonts/',
						limit: 4*1024
					}
				}
			},
			{														//	依赖 babel-loader、@babel/core、@babel/preset-env
				test: /\.(js|jsx)$/i,
				exclude: /(node_modules|bower_components)/,			//	不包含
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env']
					}
				}
			}
		]
	},

	/** 开发者工具 **/
	devtool: 'source-map',											//	开发环境,开发者工具显示原始代码
	
	/** 开发服务器 **/
	devServer: {													//	存储在内存,速度快
		// hot: true,												//	热更新，无需手动刷新
		// contentBase: 		pathlib.resolve('public'),
		// port:				8080,
		// historyApiFallback:	true,								//	用于单页应用，404指向index.html
		// proxy: {
			// "/api": "http://localhost:3000"						// 代理到后端的服务地址，会拦截所有以api开头的请求地址
		// }
	},

	/** 插件 **/
	plugins: [
		// new Webpack.HotModuleReplacementPlugin() 				//	热更新
	]
}