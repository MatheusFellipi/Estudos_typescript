import "reflect-metadata";
import express, { NextFunction, Request, response, Response } from "express";
import "express-async-errors";
import swaggerUi from "swagger-ui-express";

import "../database/index";
import "../shared/container";

import { AppError } from "../errors/appError";
import { router } from "./routes";
import swaggerFile from "../swagger.json";

const port = process.env.PORT || "3333";

const app = express();

app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(router);

app.use(
  (error: Error, request: Request, response: Response, next: NextFunction) => {
    if (error instanceof AppError) {
      return response.status(error.statusCode).json({ message: error.message });
    }
    return response.status(500).json({
      status: "erro",
      message: `Interna server - ${error.message}`,
    });
  }
);

app.listen(port, () => {
  console.log("running server " + port);
});
