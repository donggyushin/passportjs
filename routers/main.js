module.exports = conn => {
  var express = require("express");
  var route = express.Router();

  route.get("/", (req, res) => {
    res.render("main");
  });
  return route;
};
