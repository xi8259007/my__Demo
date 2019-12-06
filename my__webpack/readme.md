```
	-	主要作用于框架 vue react
	- webpack							核心
	- webpack-cli						命令行
	- webpack-dev-server				开发环境服务器
	- html-webpack-plugin				插件,生成html

	- style-loader						输出到style标签
	- mini-css-extract-plugin			>= style-loader, 分离style, webpack 4.2以上
	- css-loader						解析css文件, 输出成js字符串
	- postcss-loader					添加前缀
	- autoprefixer						⬆ 插件, 检查使用率	-	browserslist:[] https://browserl.ist/

	- node-sass							核心
	- sass-loader						解析sass

	- less								核心
	- less-loader						解析less

	- file-loader						压缩图片、字体
	- url-loader						减少请求、超过限制,压缩成[base64],正常情况依赖⬆

	- babel-loader						解析js/jsx 通过babel转换
	- @babel/core						核心
	- @babel/preset-env					配置文件

	- eslint							核心 - 自定义规则
	- eslint-loader						js规则检测
	- .eslintrc.js						配置文件	module.exports = {rules: {"indent": ["error", 2]}}
	- .eslintignore						忽略文件	build/** config/** public/** scripts/**

	- stylelint							核心 - 校验样式文件
	- stylelint-webpack-plugin			css规则检测
	- stylelint-config-standard			规则配置文件
	- .stylelintrc.json					配置文件	{"extends":"stylelint-config-standard","rules": {"indentation": 2}}
	- .stylelintignore   				忽略文件	/src/**/*.css

	- jest								核心
	- jest-webpack						代码测试 - !!作者弃坑

	- vue
	- vue-style-loader
	- vue-html-loader


	-cnpm i webpack webpack-cli webpack-dev-server css-loader style-loader postcss-loader autoprefixer node-sass sass-loader file-loader url-loader babel-loader @babel/core @babel/preset-env html-webpack-plugin stylelint stylelint-webpack-plugin stylelint-config-standard jest eslint eslint-loader -D

```