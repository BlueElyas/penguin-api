const express = require("express");
const penguinRouter = express.Router();
const penguins = require("./db");
const getPenguinById = require("./utils");

module.exports = penguinRouter;

penguinRouter.param("penguinId", (req, res, next, id) => {
  const penguin = getPenguinById(id);
  if (penguin) {
    req.penguin = penguin;
    next();
  } else {
    res.status(404).send("Penguin not found!");
  }
});

penguinRouter.get("/", (req, res, next) => {
  res.send(penguins);
});

penguinRouter.get("/:penguinId", (req, res, next) => {
  res.send(req.penguin);
});
