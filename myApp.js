var express = require("express");
var app = express();

console.log("Hello World");

app.get("/", function (req, res) {
  let absolutePath = __dirname + "/views/index.html";
  //   res.send("Hello Express");
  res.sendFile(absolutePath);
});

app.use("/public", express.static(__dirname + "/public"));

module.exports = app;
