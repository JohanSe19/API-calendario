const { createLogger, format, transports } = require("winston");
const { combine, timestamp, prettyPrint } = format;
require("winston-daily-rotate-file");


const transport = new transports.DailyRotateFile({
  filename: "LEMON-%DATE%.log",
  dirname:'./storage/logs',
  datePattern: "DD-MM-YYYY",
  zippedArchive: true,
  maxSize: "20m",
  maxFiles: "14d",
});

const logger = createLogger({
  transports: [transport],
  format: combine(
    timestamp(),
    prettyPrint()
  ),
});

module.exports = logger;
