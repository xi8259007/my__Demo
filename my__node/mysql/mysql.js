const mysql = require('mysql');

let db = mysql.createPool({
	host: 'localhost',
	user: 'root',
	password: 'root@123',
	port: 3309,
	database: 'websocket',
	socketPath: '/tmp/mysql.sock'
});


db.query(`SELECT name FROM user__table WHERE id=3;`, (err, data) => {
	if (err) {
		console.log('错了', err)
	} else {
		console.log(data)
	}
})