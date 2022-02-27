const mongoose = require("mongoose");
const { EntityNameMongo } = require("./EntityNameMongo");
/**
 * Define a Schema for Status using Mongo and Mongoose as ODM.
 * @see https://mongoosejs.com/docs/guide.html
 */
const StatusSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description:{ type: String, required: true},
  },
  {
    timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" },
  }
);
// export model user with Status
module.exports = mongoose.model(EntityNameMongo.ACTIONSCHEDULE, StatusSchema);
