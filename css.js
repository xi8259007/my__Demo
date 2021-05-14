/**
 * 		v2021.3.2
 * 		horizontal vertical panel	二级导航 aside => ul.menu-tree => li.level1 => ul.level2
 * 
 * 		Chrome/Firefox/Internet Explorer/Opera
 * 		-webkit-transform:
 * 			 -moz-transform:
 * 				-ms-transform:
 * 				 -o-transform:
 * 						transform:
 * 
 * 		.block__element--modifier		CSS 命名规范__BEM
 * 		块__元素--修饰/行为
 * 
 * 		@命名空间
 * 		.l-: 布局(layouts)					布局
 * 		.o-: 对象(objects)					与下相比独立与上下文
 * 		.c-: 组件(components)					与上相比结构会变动
 * 		.js: js的钩子(JavaScript hooks)
 * 		.is-|.has-: 状态类(state classes)
 * 		.t1|.s1: 排版大小(typography sizes)
 * 		.u-: 实用类(utility classes)
 * 
 * 		before,after 全部用“::”
 * 
 * 		多媒体查询 - 根据系统主题模式预置网站主题 深色/浅色主题	no-preference/light/dark
 * 		JS检测 window.matchMedia('prefers-color-scheme').media
 * 		<link rel="stylesheet" href="dark.css"  media="(prefers-color-scheme: dark)">
 * 		<link rel="stylesheet" href="light.css" media="(prefers-color-scheme: no-preference), (prefers-color-scheme: light)">
 * 		@media (prefers-color-schem: light) { :root { --background-color: #333; --text-color: #333; --link-color: #333;} }
 * 		@media (prefers-color-schem: dark) { :root { --background-color: #fff; --text-color: #fff; --link-color: #fff;} }
 * 
 * 
 * 		@自定义绘制形状	 坐标点	-- clip-path: polygon(x轴 y轴,x轴 y轴)
 * 		@图片					 独立的流内容（图像、图表、照片、代码等等）
 * 									 <figure>
 *									 	<figcaption>有标题的图片</figcaption>
 *										<img src="xxx" loading="lazy" alt="chrome大于76" />
 *									 </figure>
 * 		@控制active		 适用于 移动端	--	:focus-within
 * 		@移除鼠标事件		 pointer-events: none;
 * 		@条件判断				@media  @supports		--	http://www.runoob.com/cssref/css-reference.html
 * 		@符号					 font-family: simsun,"宋体"; &gt;&gt;
 * 		@光标颜色				caret-color: red;
 * 		@首字母大写			text-transform: capitalize;
 * 		@图片倒影				img:{-webkit-box-reflect:below 0px -webkit-gradient(linear,left top,left bottom,from(transparent),to(rgba(250, 250, 250,.1)))}
 * 		@文字镂空				-webkit-text-fill-color: transparent;
 * 		@文本颜色				text-shadow: 0px 0px 0px #d6obob;
 * 		@首字大写				text-transform: capitalize;
 * 		@文字模糊				color: transparent; text-shadow: #111 0 0 5px;
 * 		@透明度				  opacity:0.4;filter:alpha(opacity=40);
 * 		@背景透明				div { background: rgba(0, 0, 0,0.6)!important;filter:Alpha(opacity=60);background:#000;}
 *  								 div p { position:relative;}
 * 		@弹出层居中			 position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%);
 * 		@计算属性				.ele { width: calc(expression);} 函数function，给元素计算 calc(~"49% - 2px");
 * 		@表单字体颜色		::-moz-placeholder { color: #fff; opacity: 1;}
 * 									::-webkit-input-placeholder { color: #fff;}
 * 		@字体设置				body { font-family: Arial,"Microsoft Yahei","微软雅黑",sans-serif;}
 * 		@边框阴影				box-shadow :0 5px 10px rgba(0, 0, 0, .2);
 * 		@网页黑白色			html { filter: grayscale(100%); filter:progid:DXImageTransform.Microsoft.BasicImage(grayscale=1); _filter:none; }
 * 		@移动端1px		 ::before,::after { content: ""; position: absolute; left: 0; right: 0; height: 1px; color: #e5e5e5; z-index: 2;}
 * 									::before { top: 0; border-top: 1px solid #e5e5e5; transform-origin: 0 0; transform: scaleY(.5);}
 * 									::after { bottom:0; border-bottom: 1px solid #e5e5e5; transform-origin: 0 100%; transform: scaleY(.5);}
 * 		@溢出隐藏			 width: 80%; overflow: hidden; text-overflow: ellipsis;
 * 		@单行					display: block; white-space: nowrap;
 * 		@多行					display: -webkit-box; -webkit-line-clamp: 2;-webkit-box-orient: vertical; word-break: break-all;
 * 		@线性渐变			 background-image: linear-gradient(top, #000000 0%, #000000 100%);
 * 		@径向渐变			 background-image: radial-gradient(top, #000000 0%, #000000 100%);
 * 		@背景图像原点位置 background-origin: padding-box ¦ border-box ¦ content-box
 * 
 * 
 * 
 ******************************************** 		@弹性布局 flex 		********************************************
 * 		http://www.webhek.com/post/flex-cheatsheet.html	--	Demo
 * 		https://codepen.io/enxaneta/pen/adLPwv					--	Demo
 * 
 * 		方向		--		flex-direction:		row					¦		row-reverse		¦		column		¦		column-reverse
 *																	 水平					    		相反       			垂直	 		 				垂直相反
 * 		拆行		--		flex-wrap:				nowrap			¦				wrap			¦		wrap-reverse
 * 																	 不拆									拆分	     			相反
 * 		水平		--		justify-content:	flex-start	¦			flex-end		¦		 center  	¦		space-between		¦		space-around
 * 																	 开头									结尾   					中心						 头 中 尾						行前间后留白
 *		垂单		--		align-items:			center			¦		 flex-start 	¦		flex-end	¦			baseline
 * 																	 中心					  			开头						结尾							基线
 * 		垂多		--		align-content:		center			¦		 flex-start		¦		flex-end	¦		space-between		¦		space-around
 * 																	 中心									开头						结尾						行间留白						行四周留白
 * 		排序		--		order:						initial（默认值 0）、inherit
 * 
 * 		简写 多行水平垂直		flex-flow: flex-direction and flex-wrap;	column wrap/row wrap;
 * 		parent	--	display: flex; flex-direction: column; height: 100%;
 *		son			--	flex-grow: 1
 * 
 * 
 ******************************************** 		@动画变形过渡  		********************************************
 *
 * 		变换		--		transform:				none				¦			 rotate	  	¦		 scale		¦				skew				¦			translate			¦			matrix
 * 																	 默认									旋转						缩放							扭曲								移动							矩阵变形
 * 		动画		--		animation: 				ease				¦			 linear	  	¦		ease-in		¦		 		ease-out		¦			ease-in-out		¦  cubic-bezier(n,n,n,n)
 * 																	 由慢到快						 速度相同					慢速开始						慢速结束					 慢速开始结束					函数
 * 
 *		过渡		--		transition: all .5s linear 0s;
 *														名称 持续时间 效果 延迟时间

 * 		旋转		--		transform: rotate(0deg)		角度：正值顺时，负值逆时	rotate(angle),rotate3d(x,y,z,angle),rotateX(angle),rotateY(angle),rotateZ(angle)
 * 		偏移		--		transform: translate(x,y)	位置：x正右负左，y正下负上		translate(x,y),translate3d(x,y,z),translateX(x),translateY(y),translateZ(z)
 * 		缩放		--		transform: scale(x,y)			倍数：默认(1,1)，大于1放大，小于1缩小		scale(x,y)，scale3d(x,y,z)，scaleX(x)，scaleY(y)，scaleZ(z)
 * 		
 * 		动画		--		animation: warning 1.5s infinite linear;
 * 															函数名 持续时间 连续循环 速度
 * 		动画帧数			 -webkit-@keyframes warning { 0% {transform: rotate(0deg);} 100% {transform: rotate(360deg);} }
 * 													@keyframes warning { 0% {transform: rotate(0deg);} 100% {transform: rotate(360deg);} }
 * 
 * 
 ******************************************** 		@关系选择符  		********************************************
 *
 * 		[attribute]							用于选取带有指定属性的元素。
 * 		[attribute="value"]			用于选取带有指定属性和值的元素。
 * 		[attribute~="value"]		用于选取属性值中包含指定词汇的元素。
 * 		[attribute|="value"]		用于选取带有以指定值开头的属性值的元素，该值必须是整个单词。
 * 		[attribute^="value"]		匹配属性值以指定值开头的每个元素。
 * 		[attribute$="value"]		匹配属性值以指定值结尾的每个元素。
 * 		[attribute*="value"]    匹配属性值中包含指定值的每个元素。
 * 
 * 		E F                     选择所有被E元素包含的F元素。
 * 		E>F                     选择所有作为E元素的子元素F。
 * 		E+F                     选择紧贴在E元素之后F元素。
 * 		E~F                     选择E元素所有兄弟元素F。
 * 
 * 		:firs-child							选取第一个标签
 * 		:last-child							选取最后一个标签
 * 		:nth-last-child(3)			选取倒数第3个标签
 * 		:nth-child(n)						选取第 n 个标签
 * 		:nth-child(n+4)					选取大于等于4的标签
 * 		:nth-child(-n+4)				选取小于等于4的标签
 * 		:nth-child(n+4):nth-child(-n+8)	选取第4〜8个标签
 * 		:nth-child(2n)					选取偶数标签，2n = even
 * 		:nth-child(2n-1)				选取奇书标签，2n-1 = odd
 * 		:nth-child(3n+1)				自定义选取，3n+1 = 隔二取一
 * 
 * 
 ******************************************** 		@背景裁剪  		********************************************
 * 
 * 		裁剪		--		ackground-clip: border-box ¦ padding-box ¦ context-box ¦ no-clip ¦ text
 * 		border-box：此值为默认值，背景从border区域向外裁剪，也就是超出部分将被裁剪掉
 * 		padding-box：背景从padding区域向外裁剪，超过padding区域的背景将被裁剪掉
 * 		context-box：背景从content区域向外裁剪，超过context区域的背景将被裁剪掉
 * 		no-clip： 背景从border区域向外裁剪背景 （ -webkit-私有）
 * 		text：文本剪裁
 * 
 * 		background: -webkit-linear-gradient(top, #000000 0%, #000000 100%);
 * 		background: -ms-linear-gradient(top, rgba(255,255,255,1.0) 0%, rgba(255,255,255,1.0) 100%);
 * 		background: linear-gradient(top, #000000 0%, #000000 100%);
 * 		-ms-filter: "progid:DXImageTransform.Microsoft.gradient(GradientType=0,startColorstr=#80000000,endColorstr=#80000000)";		Filter for IE8
 * 		filter: progid:DXImageTransform.Microsoft.gradient(GradientType=0,startColorstr=#80000000, endColorstr=#80000000); 		Filter for older IE
 * 
 * 
*/
