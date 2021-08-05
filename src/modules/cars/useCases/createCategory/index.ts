import { CategoryRepository } from "../../repositories/implementations/CategoriesRepository";
import { CreateCategoryController } from "./CreateCategoryController";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";
export default (): CreateCategoryController => {
  const createCategoryRepository = new CategoryRepository();
  const createCategoryUseCase = new CreateCategoryUseCase(
    createCategoryRepository
  );
  const createCategoryController = new CreateCategoryController(
    createCategoryUseCase
  );
  return createCategoryController;
};
