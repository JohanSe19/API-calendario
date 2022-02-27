const mongoose = require("mongoose");
const chalk = require("chalk");
const db =
  process.env.NODE_ENV === "production"
    ? `mongodb://${process.env.DB_USERNAME}:${process.env.DB_USER_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`
    :  `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;

mongoose.set("useNewUrlParser", true);
mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);
mongoose.set("useUnifiedTopology", true);
console.log(db);
process.env.NODE_ENV === "development"
    ? mongoose.connect(db, {
        authSource: "admin",
        useNewUrlParser: true,
        poolSize: 15,
        socketTimeoutMS: 45000,
      })
    : mongoose.connect(db, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        ssl: false,
        sslValidate: false,
        authSource: "admin",
        // sslCA: [fs.readFileSync("rds-combined-ca-bundle.pem")],
      });

// mongoose.connect(db, { userNewUrlParser: true, useUnifiedTopology: true });

const conStatus = mongoose.connection;
conStatus.on('error', console.error.bind(console, 'connection error:'));
conStatus.on('connected', function() {
console.log(chalk.green('Database is connected'));
});

