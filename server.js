const http = require('http') // we use "require" to import packages in nodejs
const app = require('./backend/app'); // in order to use the express app, I need to require it from app.js
const debug = require('debug')("node-angular");

const port = process.env.PORT || 3000;

// tell express which port we are working on
app.set('port', port)
// create a new server, I passed the "express app" from app.js to create a new server
const server = http.createServer(app);

server.listen(port); // we can use port 3000 for testing



