var express = require("express");
var app = express();
var mysql = require("mysql");
var mysql_opts = require("./options/mysql");
var conn = mysql.createConnection(mysql_opts);
var main = require("./routers/main")(conn, passport, LocalStrategy);
var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;
var bodyParser = require("body-parser");
var session = require("express-session");
var MySQLStore = require("express-mysql-session")(session);
var MySQLStoreOpts = require("./options/MySQLStore");
var sessionStore = new MySQLStore(MySQLStoreOpts);

//middlewares
app.use("", main);
app.use(
  session({
    key: "session_cookie_name",
    secret: "DSF#@!#@EDR@#Dqs1",
    resave: false,
    saveUninitialized: true,
    store: sessionStore
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//settings
app.set("view engine", "ejs");
app.set("views", "./views");

app.listen(8081, () => {
  console.log("listening at localhost:8081!");
});
