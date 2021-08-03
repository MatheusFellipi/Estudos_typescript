import { Router } from "express";
import { CategoryRepository } from "../../modules/cars/repositories/CategoriesRepository";

const categoriesRoutes = Router();
const categoryRepository = new CategoryRepository();

categoriesRoutes.post("/", (request, response) => {});
categoriesRoutes.get("/", (request, response) => {
  const all = categoryRepository.list();

  return response.status(201).json(all);
});

export { categoriesRoutes };
