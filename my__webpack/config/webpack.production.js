const path = require('path')
const StylelintPlugin = require('stylelint-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const StyleLint = require('./index')


module.exports = {
	mode: 'production',
	output: {
		path: path.resolve(__dirname, '../dist'),
		filename: 'bundle.min.js',
	},
	plugins: [
		...StyleLint ? [new StylelintPlugin({
			files: ['**/*.css','**/*.scss','**/*.less','**/*.vue','**/*.html']
		})] : [],
		new HtmlWebpackPlugin({
			minify: {
				removeComments: true,
				collapseWhitespace: false,
				minifyCSS: true
			},
			template: path.resolve(__dirname, '../src/index.html')
		})
	]
}