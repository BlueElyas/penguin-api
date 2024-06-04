const express = require("express");
const app = express();
const apiRouter = require("./routers/api");
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");

// Port set up
const PORT = process.env.PORT || 4500;

// Middleware
app.use(morgan("dev"));
app.use(cors());
app.use(bodyParser.json());

// Server listening
app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT} is currently live...`);
});

app.get("/", (req, res) => {
  res.status(301).redirect("api/penguins");
});

// Mounting API router
app.use("/api", apiRouter);
