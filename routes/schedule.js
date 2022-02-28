"use restrict";
const scheduleController = require("../controllers/scheduleController");
const route = require("express").Router();
const validator = require("../middleware/validator");


route.post("/createEvent", validator.createEvent, scheduleController.createEvent);

route.get("/listEvent", scheduleController.listEvent);

route.post("/editEvent", scheduleController.editEvent);

route.delete("/deleteEvent/eventId/:eventId/", scheduleController.deleteEvent);




module.exports = route;
