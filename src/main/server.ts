import express from "express";
import swaggerUi from "swagger-ui-express";
import "../database/index";
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
