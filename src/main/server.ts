import express from "express";
import { categoriesRoutes } from "./routes/categories.routes";
const app = express();
app.use(express.json());
const port = process.env.PORT || "3000";

app.use("/categories", categoriesRoutes);

app.listen(port, () => {
  console.log("running server " + port);
});
