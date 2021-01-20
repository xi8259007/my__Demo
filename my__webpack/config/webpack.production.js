const path = require('path')
const StylelintPlugin = require('stylelint-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { STYLELINT } = require('./index')


module.exports = {
	mode: 'production',
	output: {
		path: path.resolve(__dirname, '../dist'),
		filename: 'bundle.min-[hash].js',
	},
	plugins: [
		/*
		**	清理打包输出文件夹
		*/
		new CleanWebpackPlugin(),
		...STYLELINT ? [new StylelintPlugin({
			files: ['**/*.css','**/*.scss','**/*.less','**/*.vue','**/*.htm','**/*.html']
		})] : [],
		

		/*
		**	生成HTML
		*/
		new HtmlWebpackPlugin({
			title: 'Webpack Study Demo',			//	<%= htmlWebpackPlugin.options.title %>
			template: path.join(__dirname, '../src/index.html'),	// 模板导入入口
			hash: true,
			filename: 'index.html',						// 生成的 html 文件名
			minify: {													// 压缩 html
				removeComments: true,						// 移除 HTML 中的注释
				collapseWhitespace: false,			// 删除空白符与换行符
				minifyCSS: true									// 压缩内联css
			}
		}),

		/*
		**	分离导出css
		*/
		new MiniCssExtractPlugin({
			filename: "css/[name].[chunkhash:8].css",
			chunkFilename: "[id].css"
	　}),
		new VueLoaderPlugin()
	]
}