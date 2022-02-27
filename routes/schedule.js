"use restrict";
const scheduleController = require("../controllers/scheduleController");
const route = require("express").Router();
/* const validator = require("../middleware/validator"); */


route.post("/createSchedule", scheduleController.createSchedule);

route.post("/editSchedule", scheduleController.editSchedule);



module.exports = route;
