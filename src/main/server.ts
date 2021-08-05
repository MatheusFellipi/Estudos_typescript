import express from "express";
import "../database/index";
import "../shared/container";
import swaggerUi from "swagger-ui-express";
import { router } from "./routes";
import swaggerFile from "../swagger.json";

const port = process.env.PORT || "3333";

const app = express();

app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(router);

app.listen(port, () => {
  console.log("running server " + port);
});
