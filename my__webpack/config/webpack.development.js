const path = require('path')
const Webpack = require('webpack')
const StylelintPlugin = require('stylelint-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const StyleLint = require('./index')

module.exports = {
	mode: 'development',
	output: {
		filename: 'bundle.js',
	},
	devServer: {
		hot: true,
		contentBase: '../src/index.html',
		host: 'localhost',
		port: 8088,
		historyApiFallback: true,
	},
	devtool: 'source-map',
	plugins: [
		new Webpack.HotModuleReplacementPlugin(),
		...StyleLint ? [new StylelintPlugin({
			files: ['**/*.css','**/*.scss','**/*.less','**/*.vue','**/*.html']
		})] : [],
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, '../src/index.html')
		})
	]
}