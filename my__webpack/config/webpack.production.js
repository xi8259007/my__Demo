const path = require('path')
const StylelintPlugin = require('stylelint-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {STYLELINT} = require('./index')
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
	mode: 'production',
	output: {
		path: path.resolve(__dirname, '../dist'),
		filename: '[name].min-[hash].js',
	},
	plugins: [
		...STYLELINT ? [new StylelintPlugin({
			files: ['**/*.css','**/*.scss','**/*.less','**/*.vue','**/*.htm','**/*.html']
		})] : [],

		//	生成 HTML
		new HtmlWebpackPlugin({
			//	<%= htmlWebpackPlugin.options.title %>
			title: 'Webpack Study Demo',

			// 压缩html
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

			// 模板导入入口
			template: path.join(__dirname, '../src/index.html'),
			hash: true
		}),

		//	分离导出css
		new MiniCssExtractPlugin({
			filename: "style/[name].[chunkhash:8].css",
			chunkFilename: "[id].css"
	　　 }),

		//	清理打包输出文件夹
		new CleanWebpackPlugin()
	]
}