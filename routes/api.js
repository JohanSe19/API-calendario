"use restrict";

const path = require("path");
const route = require("express").Router();


// Routes Roles
route.use("/schedule", require(path.join(__dirname, "/schedule")));


route.get("/", (req, res) => {
  res.json({ message: "API Working" });
});


module.exports = route;
