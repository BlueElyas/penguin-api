const penguins = require("./db");

const getPenguinById = (id) => {
  return penguins.find((penguin) => penguin.id === parseInt(id));
};

module.exports = getPenguinById;
