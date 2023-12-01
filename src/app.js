import express from "express";
import router from "./routes/index.js";
import cors from "cors";
import { config } from "dotenv";
import routeNotFound from "./middlewares/routeNotFound.js";
import morgan from "morgan";
import validateMethod from "./middlewares/validateMethod.js";
config();
const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(validateMethod);
//enrutador
app.use("/api/products", router);
//middleware de manejo de error
app.use(routeNotFound);

export default app;
