const pathlib = require('path')

// 显示进程的完成进度
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
// 设置进度字体颜色
const chalk = require('chalk');

// 输出 html
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
	mode: 'development',
    entry: pathlib.resolve(__dirname, 'src/main'),
    output: {
        path: pathlib.resolve(__dirname, 'dist/'), 
        filename: "bundle.js"
	},

	module: {
		rules: [
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
			{ 														//  依赖 less、less-loader
				test: /\.s[ac]ss$/i,
				use: [
					'style-loader',
					'css-loader',
					'sass-loader'
				]
			},
			{														//	依赖 file-loader、url-loader
				test: /\.(jpe?g|gif|png|svg)$/i,							//	图片
				use: {
					loader: 'url-loader', 							//	[减少请求] 满足条件 内部调用file-loaader
					options: {
						esModule: false,
						outputPath: 'images/',						//	输出路径	相对于output.path 
						//publicPath: 'dist/images/',					//	html引入路径
						limit: 8 * 1024,							//	超过[limit] 4k使用file-loader压缩, 否则使用url-loader[base64]
						name: '[name].[ext]?[hash]'
					}
				}
			},
			{
				test: /\.html$/,
				use: {
				  	loader: 'html-loader',
				  	options: {
						attrs: ['img:src']
				  	}
				}
			}
		]
	},

	plugins: [
		new HtmlWebpackPlugin({
			title: 'My htmlDemo',
			minify: {
				removeComments: true,
				collapseWhitespace: true,
				minifyCSS: true
			  },
			filename: 'index.html',
			template: pathlib.join(__dirname, 'src/index.html')
		}),
		new ProgressBarPlugin({
			format: chalk.green('Progressing') + '[:bar]' + chalk.green(':percent') + '(:elapsed seconds)',
			clear: false
		}),

	]
};