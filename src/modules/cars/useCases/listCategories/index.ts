import { CategoryRepository } from "../../repositories/implementations/CategoriesRepository";
import { ListCategoriesController } from "./ListCategoriesController";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

const createCategoryRepository = CategoryRepository.getInstance();
const listCategoriesUseCase = new ListCategoriesUseCase(
  createCategoryRepository
);
const listCategoriesController = new ListCategoriesController(
  listCategoriesUseCase
);
export { listCategoriesController };
