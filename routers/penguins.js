import express from "express";
import getPenguinById from "./utils.js";
import penguins from "./db.js";

const penguinRouter = express.Router();

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

penguinRouter.post("/", (req, res, next) => {
  req.body.id = penguins.length + 1;
  penguins.push(req.body);
  res.status(201).send(req.body);
});

penguinRouter.put("/:penguinId", (req, res, next) => {
  // Get ID from URL parameter
  const index = penguins.findIndex((penguin) => penguin.id === req.penguin.id);
  if (index >= 0) {
    penguins[index] = { id: req.penguin.id, ...req.body };
    res.send(penguins[index]);
  } else {
    res.status(404).send("Penguin not found!");
  }
});

penguinRouter.delete("/:penguinId", (req, res, next) => {
  if (req.penguin.id >= 0) {
    const filteredArr = penguins.filter(
      (penguin) => penguin.id !== req.penguin.id
    );
    res.send(filteredArr);
  } else {
    res.status(404).send("Delete failed");
  }
});

export default penguinRouter;
