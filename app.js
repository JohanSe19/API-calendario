const express = require("express");
const app = express();
const path = require("path");
const helmet = require('helmet');

const bodyParser = require("body-parser");
require(path.join(__dirname, "./config/db"));

app.set("view engine", "ejs");
app.use(helmet());

app.use(express.static(__dirname+'/storage/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: false })); // support encoded bodies

app.use("/api", require(path.join(__dirname, "routes/api")));
// Error Handler
app.use(function (err, req, res, next) {
  res.status(500);
  res.json({ error: err });
});


module.exports = app;
