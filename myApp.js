require("dotenv").config();
var express = require("express");
var app = express();

console.log("Hello World");

app.use((req, res, next) => {
  console.log(`${req.method} ${req.path} - ${req.ip}`);
  next();
});

app.get(
  "/now",
  (req, res, next) => {
    req.time = new Date().toString;
    next();
  },
  (req, res) => {
    res.send({
      time: req.time
    });
  }
);

app.get("/", function (req, res) {
  let absolutePath = __dirname + "/views/index.html";
  //   res.send("Hello Express");
  res.sendFile(absolutePath);
});

app.use("/public", express.static(__dirname + "/public"));

app.get("/json", function (req, res) {
  if (process.env.MESSAGE_STYLE === "uppercase") {
    res.json({ message: "HELLO JSON" });
  }
  if (process.env.MESSAGE_STYLE !== "uppercase") {
    res.json({ message: "Hello json" });
  }
});
module.exports = app;
