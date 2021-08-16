import { inject, injectable } from "tsyringe";
import { ICategoriesRepository } from "@modules/cars/repositories/ICategoriesRepository";
import { AppError } from "@shared/errors/appError";

interface IRequest {
  name: string;
  description: string;
}
// services nao precisa conhecer o request e os response
@injectable()
class CreateCategoryUseCase {
  constructor(
    @inject("CategoryRepository")
    private categoriesRepository: ICategoriesRepository
  ) {}
  async execute({ description, name }: IRequest): Promise<void> {
    const categoryAlreadyExists = await this.categoriesRepository.findByName(
      name
    );
    if (categoryAlreadyExists) {
      throw new AppError("Category already exists!");
    }

    this.categoriesRepository.create({ name, description });
  }
}
export { CreateCategoryUseCase };
