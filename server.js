const express = require('express')
const app = express();
app.use(express.static(__dirname + '/static/'))
app.name = "osumaniaskins";

app.get('/', function(req, res) {
    res.sendFile(__dirname + "/views/index.html")
})

app.listen(3000, "osumaniaskins.herokuapp.com", () => {
    console.log("Running")
})

module.exports.app = app;

require("./api/routes")