const http = require('http')
const url = require('url')
const querystring = require('querystring')

let httpServer = http.createServer((req, res)=>{
	let data = querystring.parse(req.url, true)
	console.log(data)
}).listen(8080)