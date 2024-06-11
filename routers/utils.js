import penguins from "./db.js";

const getPenguinById = (id) => {
  return penguins.find((penguin) => penguin.id === parseInt(id));
};
export default getPenguinById;
