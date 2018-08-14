var express = require("express");
var app = express();

app.get("/", (req, res) => {
  res.send("hi!");
});

app.listen(8081, () => {
  console.log("listening at localhost:8081");
});
