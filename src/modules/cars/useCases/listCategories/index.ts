import { CategoryRepository } from "../../repositories/implementations/CategoriesRepository";
import { ListCategoriesController } from "./ListCategoriesController";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

const createCategoryRepository = null;
const listCategoriesUseCase = new ListCategoriesUseCase(
  createCategoryRepository
);
const listCategoriesController = new ListCategoriesController(
  listCategoriesUseCase
);
export { listCategoriesController };
