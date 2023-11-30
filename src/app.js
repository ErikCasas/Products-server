import express from "express";
import router from "./routes/index.js";
import cors from "cors";
import { config } from "dotenv";
import routeNotFound from "./middlewares/routeNotFound.js";
import morgan from "morgan";
config();
const app = express();

app.use(morgan("dev"))
app.use(express.json());
app.use(cors());
//enrutador
app.use("/api", router);
//middleware de manejo de error
app.use(routeNotFound);

export default app;
