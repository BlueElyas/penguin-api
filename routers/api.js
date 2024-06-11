import { Router } from "express";
import penguinRouter from "./penguins.js";
const apiRouter = Router();

apiRouter.use("/penguins", penguinRouter);

export default apiRouter;
