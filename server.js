const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router(__dirname + '/db.json');
const middlewares = jsonServer.defaults();
require('dotenv').config({ path: require('find-config')('.env') });
const port = process.env.PORT_NUMBER;

server.use(middlewares);
server.use(router);

server.listen(port, () => console.log("ready " + port));