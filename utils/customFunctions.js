"use-restrict";
const logger = require("../config/winstonLogger");
const chalk = require("chalk");

function dumpError(err, functionName) {
    try {
      if (typeof err === "object") {
        if (err.message) {
          logger.error(
            "============== Error " + functionName + " =============="
          );
          logger.error(err.message);
          console.log(
            chalk.redBright(
              "============== Error " + functionName + " =============="
            )
          );
          console.log(chalk.redBright("error exception message: ", err.message));
        }
        if (err.stack) {
          logger.error(
            "============== Error " + functionName + " =============="
          );
          logger.error(err.message);
          console.log(chalk.redBright("\nStacktrace:"));
          console.log(chalk.redBright("===================================="));
          console.log(chalk.redBright(err.stack));
          console.log(chalk.redBright("===================================="));
          console.log(
            chalk.yellow(
              "============== Finish " + functionName + "=============="
            )
          );
          logger.error(
            "============== Finish " + functionName + "=============="
          );
        }
      } else {
        console.log("dumpError :: argument is not an object");
        console.log(err);
      }
    } catch (error) {
      logger.error(error);
      console.log(chalk.redBright("\nStacktrace:"));
      console.log(chalk.redBright("===================================="));
      console.log(chalk.redBright(error));
      console.log(chalk.redBright("===================================="));
      console.log(
        chalk.yellow("============== Finish " + functionName + "==============")
      );
    }
  }

  module.exports = {
    dumpError
  }