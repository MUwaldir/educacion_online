import express from "express";
import morgan from "morgan";
import cors from "cors";
import routerCursos from "./routes/cursos.routes.js";
import routerUser from "./routes/user.routes.js";
const app = express();

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use("/api", routerCursos);
app.use("/api", routerUser);

app.use("/", (req, res, next) => {
  res.send("Welcome to the first api eduaction online");
});

export default app;
