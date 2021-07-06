const currentsv = require("./../server").app;
const fs = require("fs")

currentsv.get("/api/skins/", function(req, res) {
    res.status(200).json(fs.readFileSync(__dirname + "/../database/skins.json", "utf-8"))
})