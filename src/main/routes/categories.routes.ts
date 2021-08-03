import { Router } from "express";
import { CategoryRepository } from "../../modules/cars/repositories/CategoriesRepository";
import { createCategoryController } from "../../modules/cars/useCases/createCategory";
import { listCategoriesController } from "../../modules/cars/useCases/listCategories";

const categoriesRoutes = Router();
const categoryRepository = new CategoryRepository();

categoriesRoutes.post("/", (request, response) => {
  return createCategoryController.handle(request, response);
});
categoriesRoutes.get("/", (request, response) => {
  return listCategoriesController.handle(request, response);
});

export { categoriesRoutes };
