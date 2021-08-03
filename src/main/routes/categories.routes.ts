import { Router } from "express";
import { CategoryRepository } from "../../modules/cars/repositories/CategoriesRepository";
import { CreateCategoryServices } from "../../modules/cars/services/CreateCategoryServices";

const categoriesRoutes = Router();
const categoryRepository = new CategoryRepository();

categoriesRoutes.post("/", (request, response) => {
  const { name, description } = request.body;
  const createCategoryServices = new CreateCategoryServices(categoryRepository);
  createCategoryServices.execute({ name, description });
  return response.status(201).send();
});
categoriesRoutes.get("/", (request, response) => {
  const all = categoryRepository.list();

  return response.status(201).json(all);
});

export { categoriesRoutes };
