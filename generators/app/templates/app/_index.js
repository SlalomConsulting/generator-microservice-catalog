var express = require("express");
var path = require("path");
//MODULES_HOOK

var app = express();

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "catalog.html"));
});

//ENDPOINTS_HOOK

app.use(function(req, res, next) {
    res.status(404).send('Sorry cant find that!');
});

// Listen on port 8080
app.listen(8080);
