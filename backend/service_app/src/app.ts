import express, { Request, Response, Application } from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";

import { AppRouter } from "./routes/index";

dotenv.config();

const app: Application = express();

// use middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

//app.use(router);

const router = new AppRouter(app);
router.initialize();

app.get("/", (req: Request, res: Response): void => {
  res.send({ message: "Service-app is up and running...!" });
});

export default app;
