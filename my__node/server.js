const express = require('express');
const session = require('express-session');
const Keycloak = require('keycloak-connect');

let memoryStore = new session.MemoryStore();
let kcConfig = {
	clientId: 'myclient',
	bearerOnly: true,
	serverUrl: 'http://localhost:8080/auth',
	realm: 'myrealm',
	realmPublicKey: 'MIIBIjANB...'
};

let keycloak = new Keycloak({ store: memoryStore }, kcConfig)

let app = express();
let server = app.listen(8080, function () {
	console.log('Example app listening at ',);
})


app.use(keycloak.middleware());

app.get('/', function (req, res) {
	res.send('hello world')
})