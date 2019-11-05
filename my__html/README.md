1. 前端开发标准<br>
<b>1.1. 统一文件夹结构</b><br>
&nbsp;&nbsp;project/<br>
&nbsp;&nbsp;&nbsp;&nbsp;│── ico/<br>
&nbsp;&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;&nbsp;├─ ico<br>
&nbsp;&nbsp;&nbsp;&nbsp;│── static/<br>
&nbsp;&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;&nbsp;├─ fonts/<br>
&nbsp;&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;&nbsp;├─ css/<br>
&nbsp;&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;&nbsp;├─ js/<br>
&nbsp;&nbsp;&nbsp;&nbsp;│── style/<br>
&nbsp;&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;&nbsp;│<br>
&nbsp;&nbsp;&nbsp;&nbsp;│── js/<br>
&nbsp;&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;&nbsp;│<br>
&nbsp;&nbsp;&nbsp;&nbsp;│── images/<br>
&nbsp;&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;&nbsp;├─ content/<br>
&nbsp;&nbsp;&nbsp;&nbsp;│── dist/<br>
&nbsp;&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;&nbsp;│<br>
&nbsp;&nbsp;&nbsp;&nbsp;└── index.html


	<b>1.2.  统一开发标准</b>	[......样式命名标准 B.E.M.....]<br>
&nbsp;&nbsp;*   遵循html5规范，参考腾讯 http://alloyteam.github.io/CodeGuide/<br>
&nbsp;&nbsp;1） 单行注释 双斜线后，必须跟一个空格，缩进与下一行代码保持一致，可位于一个代码行的末尾，与代码间隔一个空格。<br>
&nbsp;&nbsp;2） 多行注释 最少三行, '\*'后跟一个空格<br>
&nbsp;&nbsp;3） 语义化标签，如标题根据重要性用h*(同一页面只能有一个h1)，段落标记用p，列表用ul，内联元素中不可嵌套块级元素等<br>
&nbsp;&nbsp;4） 尽可能减少div嵌套<br>
&nbsp;&nbsp;5） 图片格式限gif/jpg/png, 图片质量保证在80%以上, 该用img标签的时候用img标签, 该用背景图片的用background, 背景图片请尽可能使用sprite技术，减小http请求，考虑到多人协作开发，sprite按模块制作<br>
&nbsp;&nbsp;6） 命名规范按照BEM(bootstrap为基础)：.block__element--modifier	块>修饰/行为<br>
&nbsp;&nbsp;7） 页面跳转用 <a> 标签，功能用 <button><br>
&nbsp;&nbsp;8） 『『『『先引入less在引入js,环境下打开否则报错』』』** sass需要ruby环境<br>
&nbsp;&nbsp;9） 默认input长度100%，input 没有闭合标签，只有 /，标签闭合不要 /(html5规范)<br>
&nbsp;&nbsp;10）<figure> 标签规定独立的流内容（图像、图表、照片、代码等等）。<figcaption>定义 figure，元素的标题,置于<figure>元素的第一个或最后一个子元素的位置<br>
&nbsp;&nbsp;11）块级元素 > 行内元素 ==>>  \<h5><a>正确</a>\</h5><br>
&nbsp;&nbsp;12）开发工具 - 编辑器 格式 统一4个空格 ==> 2个tab<br>
