const path = require('path')
const ESLint = require('./config/index')
module.exports = function (env, argv) {
	env = env || {};


	if( env.production){
		conf = require('./config/webpack.production')
	} else if( env.development ){
		conf = require('./config/webpack.development')
	} else {
		conf = require('./config/webpack.test')
	}

	return {
		entry: './src/js/index',
		module: {
			rules: [
				//	js
				{
					test: /\.(js|jsx)$/i,
					use: [{
						loader: 'babel-loader',
						options: {
							presets: ['@babel/preset-env']
						}
					},
					...ESLint ? [{
						loader: 'eslint-loader',
						options: {
							exclude: /node_modules|bower_modules/
						}
					}] : []
					]
				},
				//	css
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
				//	sass
				{
					test: /\.s[ac]ss$/i,
					use: [
						'style-loader',
						'css-loader',
						'sass-loader'
					]
				},
				//	images
				{
					test: /\.(jpg|gif|png)$/i,
					use: {
						loader: 'url-loader',
						options: {
							outputPath: 'images/',
							limit: 2 * 1024
						}
					}
				},
				//	fonts
				{
					test: /\.(eot|svg|ttf|woff|woff2)$/i,
					use: {
						loader: 'url-loader',
						options: {
							outputPath: 'fonts/',
							limit: 2*1024
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
		}
	}
	
}