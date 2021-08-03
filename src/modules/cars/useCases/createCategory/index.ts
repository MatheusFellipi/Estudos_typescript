import { CategoryRepository } from "../../repositories/implementations/CategoriesRepository";
import { CreateCategoryController } from "./CreateCategoryController";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

const createCategoryRepository = CategoryRepository.getInstance();
const createCategoryUseCase = new CreateCategoryUseCase(
  createCategoryRepository
);
const createCategoryController = new CreateCategoryController(
  createCategoryUseCase
);
export { createCategoryController };
