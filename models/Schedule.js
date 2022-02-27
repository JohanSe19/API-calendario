const mongoose = require("mongoose");
const { EntityNameMongo } = require("./EntityNameMongo");
/**
 * Define a Schema for Status using Mongo and Mongoose as ODM.
 * @see https://mongoosejs.com/docs/guide.html
 */
const ScheduleSchema = new mongoose.Schema(
  {
    dateSchedule:{type: Date, required:true},
    description:{ type: String, required: true},
    action:{
        type: mongoose.Schema.Types.ObjectId, ref: EntityNameMongo.ACTIONSCHEDULE, required:true
    }
  },
  {
    timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" }, 
  }
);
// export model user with Status
module.exports = mongoose.model(EntityNameMongo.SCHEDULE, ScheduleSchema);
