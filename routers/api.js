const express = require("express");
const penguinRouter = require("./penguins");
const apiRouter = express.Router();

module.exports = apiRouter;

apiRouter.use("/penguins", penguinRouter);
