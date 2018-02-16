/* Module dependencies.
*/

const http = require('http');
const express = require('express');
const path = require('path');

const app = express();

// Serve static assets from the /public folder
app.use('/', express.static(path.join(__dirname, 'app')));

/* Get port from environment and store in Express.
*/

const port = process.env.PORT || '8080';
app.set('port', port);

/* Create HTTP server.
*/

const server = http.createServer(app);

/* Listen on provided port, on all network interfaces.
*/

server.listen(port);