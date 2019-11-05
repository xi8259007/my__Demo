const http = require('http');
const mysql = require('mysql');
const fs = require('fs');
const url = require('url');
const zlib = require('zlib');
const crypto = require('crypto')


const myKey = 'sda1asdef5sdfdsfhf3ghasdadsfd2sgfdghdfg2';

// MD5
function md5(str){
	let obj = crypto.createHash('md5');
	obj.update(str);
	return obj.digest('hex');
}

function md5_max(str){
	return md5(md5(str)+myKey)
}

let db = mysql.createPool({
	host: 'localhost',
	user: 'root',
	password: 'root@123',
	port: 3309,
	database: 'websocket',
	socketPath: '/tmp/mysql.sock'
});

let server = http.createServer((req, res) => {
	let {pathname,query} = url.parse(req.url, true);
	let {user,pass} = query;


	switch (pathname) {
		case '/reg':
			if (!user) {
				res.write('{"err": 1, "msg": "username can\'t be null"}')
				res.end();
			} else if (!pass) {
				res.write('{"err": 1, "msg": "password can\'t be null"}')
				res.end();
			} else if (!/^\w{4,16}$/.test(user)) {
				res.write('{"err": 1, "msg": "username is Invalid"}')
				res.end();
			} else if (/['|"]/.test(pass)) {
				res.write('{"err": 1, "msg": "password is Invalid"}')
				res.end();
			} else {
				db.query(`SELECT * FROM user__table WHERE username='${user}'`, (err, data) => {
					if (err) {
						throw error;
						res.write('{"err": 1, "msg": "database error"}');
						res.end()
					} else if (data.length > 0) {
						res.write('{"err": 1, "msg": "this username you"}');
						res.end()
					} else {
						db.query(`INSERT INTO user__table (id,username,password) VALUES(0,'${user}','${md5_max(pass)}')`, (err, data) => {
							if (err) {
								throw error;
								res.write('{"err": 1,"msg": "database": error}');
								res.end()
							} else {
								res.write('{"err": 0, "msg": "success"}');
								res.end()
							}
						})
					}
				})
			}
			break;
		case '/login':
			if (!user) {
				res.write('{"err": 1, "msg": "username can\'t be null"}')
				res.end();
			} else if (!pass) {
				res.write('{"err": 1, "msg": "password can\'t be null"}')
				res.end();
			} else if (!/^\w{4,16}$/.test(user)) {
				res.write('{"err": 1, "msg": "username is Invalid"}')
				res.end();
			} else if (/['|"]/.test(pass)) {
				res.write('{"err": 1, "msg": "password is Invalid"}')
				res.end();
			} else {
				db.query(`SELECT * FROM user__table WHERE username='${user}'`, (err, data)=>{
					if(err){
						throw err;
						res.write('{"err": 1,"msg": "database": error}');
						res.end()
					} else if(data.length ==0){
						res.write('{"err": 1, "msg": "no this user"}')
						res.end()
					}else if(data[0].password != md5_max(pass)){
						res.write('{"err": 1, "msg": "username or password is incorrect"}')
						res.end()
					} else {
						res.write('{"err": 0, "msg": "success"}');
						res.end();
					}
				})
			}
			break;
		default:
			let rs = fs.createReadStream(`www${pathname}`);
			let gz = zlib.createGzip();

			res.setHeader('content-encoding', 'gzip');
			rs.pipe(gz).pipe(res);

			rs.on('error', err => {
				res.writeHead(404);
				res.write('Not Found');
				res.end();
			})
			break;
	}
}).listen(8080);