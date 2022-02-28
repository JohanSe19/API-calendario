"use-restrict";
const { check } = require("express-validator");
const ActionSchedule = require("../models/ActionSchedule");

const createEvent = [
    check("action")
      .notEmpty({ ignore_whitespace: true })
      .withMessage("*El dato action no puede estar vacío")
      .bail()
      .isMongoId()
      .withMessage("El campo debe ser un object id válido")
      .bail()
      .custom((value) => {
        return ActionSchedule.findOne({ _id: value }).then((id) => {
          if (!id) {
            return Promise.reject("La acción no existe en el sistema");
          }
        });
      })
      .bail(),
    check("description")
      .notEmpty({ ignore_whitespace: true })
      .withMessage("*El campo email no puede estar vacío")
      .bail()
      .isString()
      .withMessage("*Este campo debe ser de tipo string")
      .bail(),
  ];

  module.exports = {
    createEvent
  }