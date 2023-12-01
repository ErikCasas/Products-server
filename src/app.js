import {
  routeNotFound,
  validateBody,
  validateMethod,
} from "./middlewares/index.js";
import express from "express";
import router from "./routes/index.js";
import cors from "cors";
import morgan from "morgan";
import { config } from "dotenv";
config();

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(validateMethod);
app.use(validateBody);

//enrutador
app.use("/api/products", router);
//middleware de manejo de error
app.use(routeNotFound);

export default app;
