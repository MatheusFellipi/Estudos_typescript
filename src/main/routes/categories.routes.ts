import { Router } from "express";
import { CategoryRepository } from "../../repositories/CategoriesRepository";

const categoriesRoutes = Router();
const categoryRepository = new CategoryRepository();

categoriesRoutes.post("/", (request, response) => {
  const { name, description } = request.body;

  return response.status(201).send();
});
categoriesRoutes.get("/", (request, response) => {
  const all = categoryRepository.list();

  return response.status(201).json(all);
});

export { categoriesRoutes };
