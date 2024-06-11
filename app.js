import express from "express";
import morgan from "morgan";
import cors from "cors";
import bodyParser from "body-parser";
import apiRouter from "./routers/api.js";

const app = express();

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

export default app;
