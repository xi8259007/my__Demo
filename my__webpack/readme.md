```
	-	主要作用于框架 vue react
	- webpack												核心
	- webpack-cli										命令行
	- webpack-dev-server						开发环境服务器
	- html-webpack-plugin						插件,生成html

	/*
	**	处理样式
	*/
	- css-loader										读取/解析css文件, 输出成js字符串
	- style-loader									输出到页面上的style标签
	- mini-css-extract-plugin				style-loader, 分离style, webpack 4.2以上
	- postcss-loader								添加前缀			配置：1）文件 postcss.config.js 2）webpack.config.js内
	- autoprefixer									配合检查			配置：1）文件 .browserslistrc		2）package.json内

	- node-sass											核心
	- sass-loader										编译/解析sass
	- less													核心
	- less-loader										编译/解析less

	/*
	**	处理图片
	*/
	- file-loader										压缩：图片、字体
	- url-loader										减少请求：依赖⬆：大于limit使用⬆，否则在页面转成base64

	- babel-loader									解析js/jsx 通过babel转换
	- @babel/core										核心
	- @babel/preset-env							预设

	- eslint												核心 - 自定义规则
	- eslint-loader									js规则检测
	- .eslintrc.js									配置文件	module.exports = {rules: {"indent": ["error", 2]}}
	- .eslintignore									忽略文件	build/** config/** public/** scripts/**

	- stylelint											核心 - 校验样式文件
	- stylelint-webpack-plugin			css规则检测
	- stylelint-config-standard			规则配置文件
	- .stylelintrc.json							配置文件	{"extends":"stylelint-config-standard","rules": {"indentation": 2}}
	- .stylelintignore   						忽略文件	/src/**/*.css

	- jest													核心
	- jest-webpack									代码测试 - !!作者弃坑

	- vue														核心
	- vue-style-loader							样式
	- vue-html-loader								html
	-	vue-template-compiler					编译模版


	-cnpm i webpack webpack-cli webpack-dev-server css-loader style-loader postcss-loader autoprefixer node-sass sass-loader file-loader url-loader babel-loader @babel/core @babel/preset-env html-webpack-plugin stylelint stylelint-webpack-plugin stylelint-config-standard jest eslint eslint-loader -D

```