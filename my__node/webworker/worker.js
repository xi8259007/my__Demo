// 接收
this.onmessage = function(e){
	console.log(`接收的内容：${e.data}`)

	this.postMessage('返回的内容')
}