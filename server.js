"use restrict";
const express = require("express");
const server = express();
const cors = require("cors");
const corsOptions = {
  exposedHeaders: "Content-disposition",
};
server.use(cors(corsOptions));
require("dotenv-flow").config({
  silent: true,
});


server.use(require("./app.js"));

const PORT = process.env.PORT || 8004;

server.listen(PORT, function _listen() {
  console.log(`Server up on port ${PORT}`);
});
