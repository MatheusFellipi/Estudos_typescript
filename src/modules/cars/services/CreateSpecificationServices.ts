import { ISpecificationRepository } from "../repositories/ISpecificationRepository";

interface IRequest {
  name: string;
  description: string;
}
// services nao precisa conhecer o request e os response
class CreateSpecificationServices {
  constructor(private specificationRepository: ISpecificationRepository) {}

  execute({ description, name }: IRequest): void {
    const specificationAlreadyExists =
      this.specificationRepository.findByName(name);
    if (specificationAlreadyExists) {
      throw new Error("Category already exists!");
    }

    this.specificationRepository.create({ name, description });
  }
}
export { CreateSpecificationServices };
