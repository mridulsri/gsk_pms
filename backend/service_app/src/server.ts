import express, { Request, Response, Application } from "express";

import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";

import router from "./routes/index";

dotenv.config();

const app: Application = express();
const PORT = process.env.PORT || 5000;

// use middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// add routes config
app.use(router);

// app.get("/", (req: Request, res: Response): void => {
//   res.send("Service-app is up and running...!");
// });

app.listen(PORT, (): void => {
  console.log(`Service-app is running at  http://localhost:${PORT}/`);
});
