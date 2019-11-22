const http 	= require('http');
const url 	= require('url');
const fs 	= require('fs');
const zlib 	= require('zlib');

http.createServer((req, res) => {
	let {pathname, query} = url.parse(req.url, true);
	let rs = fs.createReadStream(`www${pathname}`); 	// 读取、写入
	let gz = zlib.createGzip();							// 压缩

	res.setHeader('Content-Encoding', 'gzip')			// 压缩格式

	rs.pipe(gz).pipe(res);								// 读写返回到客户端

	rs.on('error', err => {
		res.setHeader('Content-Encoding', 'plain')		// 正常显示错误, 'X-xxx'自定义头
		res.writeHeader(404);							// 先设置、后写入
		res.write('not found');
		res.end();
		console.log(`读取错误: ${err}`)
	})

	// rs.on('data', () => 读取到)
	// rs.on('end', () => 读取完成)
	// rs.on('error', err => err)
	// rs.on('finish', () => 管道完成)
}).listen(8080);

