import { AppError } from "@shared/errors/appError";
import { ISpecificationRepository } from "@modules/cars/repositories/ISpecificationRepository";
import { inject, injectable } from "tsyringe";

interface IRequest {
  name: string;
  description: string;
}
// services nao precisa conhecer o request e os response
@injectable()
class CreateSpecificationUseCase {
  constructor(
    @inject("SpecificationRepository")
    private specificationRepository: ISpecificationRepository
  ) {}

  async execute({ description, name }: IRequest): Promise<void> {
    const specificationAlreadyExists =
      await this.specificationRepository.findByName(name);
    if (specificationAlreadyExists) {
      throw new AppError("Category already exists!");
    }

    await this.specificationRepository.create({ name, description });
  }
}
export { CreateSpecificationUseCase };
