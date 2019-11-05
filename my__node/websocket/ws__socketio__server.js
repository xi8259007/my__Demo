const http = require('http');	// http	https
const io = require('socket.io');

let httpServer = http.createServer((req, res) => {

}).listen(8080);

// let httpsServer = https.createServer( {key: keys.serviceKey, cert: keys.certificate},(req, res) => {});

let WsServer = io.listen(httpServer);

// 连接
WsServer.on('connection', sock => {
	
	//sock.emit	发送
	setInterval(() => {
		sock.emit('sendTime', new Date().getTime())
	}, 1000)

	//sock.on	接收
	sock.on('aaa', (a, b, c) => {
		console.log(a, b, c)
	})

	//sock 事件 disconnect		断开连接
	sock.on('disconnect',() => {
		console.log('客户端断开连接！')
	})
})