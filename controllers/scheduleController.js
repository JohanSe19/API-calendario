const Utilities = require("../utils/Utilities");
const chalk = require("chalk");
const Schedule = require("../models/Schedule");
const ObjectID = require("mongodb").ObjectID;
const moment = require("moment");

async function createSchedule(req, res) {
  try {
    console.log(chalk.yellow(" ======= Init createSchedule ======= "));
    const { dateSchedule, description, action } = req.body;
    let dateScheduleTransform = moment(dateSchedule);

    const newSchedule = new Schedule({
      action: ObjectID(action),
      dateSchedule: dateScheduleTransform,
      description: description,
    });

    const schedule = await newSchedule.save();

    console.log(chalk.yellow(" ======= Finish createSchedule ======= "));
    return res.status(Utilities.COD_RESPONSE_HTTP_OK).json({
      ResponseCode: Utilities.COD_RESPONSE_SUCCESS,
      ResponseMessage: "Se ha registrado la información correctamente.",
    });
  } catch (error) {
    console.log(chalk.red(" ======= Init error createSchedule ======= "));
    console.log(error);
    return res.status(Utilities.COD_RESPONSE_HTTP_ERROR).json({
      ResponseCode: Utilities.COD_RESPONSE_ERROR_CREATE,
      ResponseMessage:
        "Ocurrió un error al guardar la informacion, contacte al administrador",
    });
  }
}

async function editSchedule(req, res) {
  try {
    console.log(chalk.yellow(" ======= Init editSchedule ======= "));
    const {scheduleId, dateSchedule, description } = req.body;
    const dateScheduleTransform = moment(dateSchedule);

    const update ={
        _id:scheduleId,
        $set:{
            dateSchedule:dateScheduleTransform,
            description: description
        }
    }

    const updateSchedule = await Schedule.findOneAndUpdate(update);

    console.log(chalk.yellow(" ======= Finish editSchedule ======= "));
    return res.status(Utilities.COD_RESPONSE_HTTP_OK).json({
      ResponseCode: Utilities.COD_RESPONSE_SUCCESS,
      ResponseMessage: "Se ha editado la información correctamente.",
    });
  } catch (error) {
    console.log(chalk.red(" ======= Init error editSchedule ======= "));
    console.log(error);
    return res.status(Utilities.COD_RESPONSE_HTTP_ERROR).json({
      ResponseCode: Utilities.COD_RESPONSE_ERROR_CREATE,
      ResponseMessage:
        "Ocurrió un error al guardar la informacion, contacte al administrador",
    });
  }
}


module.exports = {
  createSchedule,
  editSchedule
};
