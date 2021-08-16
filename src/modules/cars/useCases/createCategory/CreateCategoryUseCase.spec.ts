import { AppError } from "../../../../shared/errors/appError";
import { CategoriesRepositoryInMemory } from "../../repositories/in-memory/CategoriesRepositoryInMemory";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

describe("Create Category", () => {
  let createCategoryUseCase: CreateCategoryUseCase;
  let categoriesRepositoryInMemory: CategoriesRepositoryInMemory;

  beforeEach(() => {
    categoriesRepositoryInMemory = new CategoriesRepositoryInMemory();
    createCategoryUseCase = new CreateCategoryUseCase(
      categoriesRepositoryInMemory
    );
  });
  it("should be able to create a new category", async () => {
    const category = {
      name: "category test",
      description: "category description test",
    };
    await createCategoryUseCase.execute({
      description: category.description,
      name: category.name,
    });
    const categoryCreated = await categoriesRepositoryInMemory.findByName(
      category.name
    );
    expect(categoryCreated).toHaveProperty("id");
  });
  it("should not be able to create a new category with name exists", async () => {
    expect(async () => {
      const category = {
        name: "category test",
        description: "category description test",
      };

      await createCategoryUseCase.execute({
        description: category.description,
        name: category.name,
      });
      await createCategoryUseCase.execute({
        description: category.description,
        name: category.name,
      });
    }).rejects.toBeInstanceOf(AppError);
  });
});
