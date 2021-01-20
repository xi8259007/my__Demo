const StylelintPlugin = require('stylelint-webpack-plugin')


module.exports = {
	mode: 'development',
	output: {
		filename: 'bundle.js',
	},
	plugins: [
		...STYLELINT ? [new StylelintPlugin({
			files: ['**/*.css','**/*.scss','**/*.less','**/*.vue','**/*.htm','**/*.html']
		})] : [],
	]
}