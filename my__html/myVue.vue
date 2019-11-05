<!DOCTYPE html>
<!-- 语言代码类型：en|zh-cmn-Han|szh-cmn-Hant ==> 默认英文|简体|繁体 -->
<html lang="zh-cmn-Han">

<head>
	<!-- 字符编码：utf-8|gb2312|big5 ==> 万国码|简体中文|繁体中文 -->
	<meta charset="utf-8">
	<!-- 屏幕视口：device-width|物理宽度, initial-scale|初始缩放比例, minimum-scale|最小比例, maximum-scale|最大比例, user-scalable|是否允许缩放, shrink-to-fit|自适应IOS9+-->
	<meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no, shrink-to-fit=no">

	<!-- ****扩展 start**** -->

	<!-- 浏览器内核：webkit|ie-comp|ie-stand ==> webkit内核|IE兼容内核|IE标准内核 -->
	<meta name="renderer" content="webkit">
	<!-- 自动禁止：数字识别为电话号码 -->
	<meta name="format-detection" content="telephone=no, email=no, adress=no">
	<!-- 网页描述：120 字 ~ 150 字,要流畅完整,并且能体现出当前网页的作用,能准确反映网页内容的描述标签 -->
	<meta name="description" content="your description">
	<!-- 谷歌插件：关闭翻译插件-->
	<meta name="google" value="notranslate">
	<!-- 关键词搜索：推荐5 ~ 10 -->
	<meta name="keywords" content="bootstarp,js">
	<!-- 搜索引擎索引方式 -->
	<meta name="robots" content="index,follow">
	<!-- 网页作者-->
	<meta name="author" content="AaronLu">
	<!-- 清理缓存：禁止浏览器从本地计算机的缓存中访问页面内容, 浏览器、缓存服务器、源服务器 -->
	<meta http-equiv="Pragma" content="no-cache">
	<meta http-equiv="Cache-Control" content="no-cache, must-revalidate">
	<meta http-equiv="expires" content="0">

	<!-- 版本控制：优先使用 IE 最新版本和 Chrome -->
	<meta http-equiv="X-UA-Compatible" content="IE=Edge, chrome=1">
	<!-- 禁止转码：百度==>添加广告 -->
	<meta http-equiv="Cache-Control" content="no-siteapp">

	<!-- Favicons -->
	<link rel="apple-touch-icon" href="ico/favicon.png">
	<link rel="icon" href="ico/favicon.ico">
	<title>myVue</title>


	<!-- External CSS -->
	<!-- <link rel="stylesheet" href="static/css/bootstrap.min.css"> -->

</head>
<body>
<div id="app">
</div>
</body>

<!-- External JS -->
<script src="https://cdn.bootcss.com/vue/2.5.17/vue.min.js"></script>
<script>
	var Son = {
		template: `
		<div>
			接收到的数据{{title}}
			<div>1</div>
			<div>2</div>
			<p></p>
			<a></a>
		</div>
		`,
		props: ['title']
	}

	var App = {
		components:{
			son: Son
		},
		template: `<div>
			<son :title='abc'></son>
		</div>`,
		data(){
			return {
				'abc': 123
			}
		},
	}

	new Vue({
		el: '#app',
		components: {
			myApp: App
		},
		template: '<myApp/>'
	})
</script>
</html>
