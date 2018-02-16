var skill = require('./index');

var express = require('express');
var app = express();

console.log(skill);
//skill.handler();

const port = process.env.PORT || '8080';
console.log("Server is listening on port %s", port);
app.listen(port);
