const express = require('express')
const app = express(),
    server = require('http').createServer(app)
app.use(express.static(__dirname + '/static/'))

app.get('/', function(req, res) {
    res.sendFile(__dirname + "/views/index.html")
})

server.listen(3000, () => {
    console.log("Running")
})

module.exports.app = app;

require("./api/routes")