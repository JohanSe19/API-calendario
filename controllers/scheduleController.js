const Utilities = require("../utils/Utilities");
const chalk = require("chalk");
const Schedule = require("../models/Schedule");
const ObjectID = require("mongodb").ObjectID;
const moment = require("moment");
const { dumpError } = require("../utils/customFunctions.js");

async function createEvent(req, res) {
  try {
    console.log(chalk.yellow(" ======= Init createSchedule ======= "));
    const { dateEvent, description, action } = req.body;
    let dateEventTransform = moment(dateEvent);

    const newSchedule = new Schedule({
      action: ObjectID(action),
      dateSchedule: dateEventTransform,
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
    dumpError(error, "createEvent");
    return res.status(Utilities.COD_RESPONSE_HTTP_ERROR).json({
      ResponseCode: Utilities.COD_RESPONSE_ERROR_CREATE,
      ResponseMessage:
        "Ocurrió un error al guardar la informacion, contacte al administrador",
    });
  }
}

async function editEvent(req, res) {
  try {
    console.log(chalk.yellow(" ======= Init editSchedule ======= "));
    const { eventId, dateEvent, description } = req.body;
    const dateEventTransform = moment(dateEvent);

    const update = {
      _id: eventId,
      $set: {
        dateSchedule: dateEventTransform,
        description: description,
      },
    };

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
      ResponseCode: Utilities.COD_RESPONSE_ERROR_UPDATE,
      ResponseMessage:
        "Ocurrió un error al guardar la informacion, contacte al administrador",
    });
  }
}

async function deleteEvent(req, res) {
  try {
    console.log(chalk.yellow(" ======= Init deleteSchedule ======= "));
    const { eventId } = req.params;

    const updateSchedule = await Schedule.remove({ _id: ObjectID(eventId) });

    console.log(chalk.yellow(" ======= Finish deleteSchedule ======= "));
    return res.status(Utilities.COD_RESPONSE_HTTP_OK).json({
      ResponseCode: Utilities.COD_RESPONSE_SUCCESS,
      ResponseMessage: "Se ha eliminado el evento correctamente.",
    });
  } catch (error) {
    console.log(chalk.red(" ======= Init error deleteSchedule ======= "));
    console.log(error);
    return res.status(Utilities.COD_RESPONSE_HTTP_ERROR).json({
      ResponseCode: Utilities.COD_RESPONSE_ERROR_DELETE,
      ResponseMessage: "Ocurrió un error, contacte al administrador",
    });
  }
}

async function listEvent(req, res) {
  try {
    console.log(chalk.yellow(" ======= Init listEvent ======= "));

    const dataReport = await Schedule.find();

    console.log(chalk.yellow(" ======= Finish listEvent ======= "));
    return res.status(Utilities.COD_RESPONSE_HTTP_OK).json({
      ResponseCode: Utilities.COD_RESPONSE_SUCCESS,
      ResponseMessage: "Se ha obtenido la información correctamente.",
      data: dataReport,
    });
  } catch (error) {
    console.log(chalk.red(" ======= Init error listEvent ======= "));
    console.log(error);
    return res.status(Utilities.COD_RESPONSE_HTTP_ERROR).json({
      ResponseCode: Utilities.COD_RESPONSE_ERROR_LIST,
      ResponseMessage:
        "Ocurrió un error al obtener la información, contacte al administrador",
    });
  }
}

module.exports = {
  createEvent,
  editEvent,
  deleteEvent,
  listEvent,
};
