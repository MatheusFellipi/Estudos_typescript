import express from "express";
import { categoriesRoutes } from "./routes/categories.routes";
import { specificationRoutes } from "./routes/especification.routes";
const app = express();
app.use(express.json());
const port = process.env.PORT || "3000";

app.use("/categories", categoriesRoutes);
app.use("/specification", specificationRoutes);

app.listen(port, () => {
  console.log("running server " + port);
});
