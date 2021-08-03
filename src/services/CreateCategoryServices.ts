interface IRequest {
  name: string;
  description: string;
}
// services nao precisa conhecer o request e os response
class CreateCategoryServices {
  constructor() {}
  execute({ description, name }: IRequest) {
    const categoryAlreadyExists = categoryRepository.findByName(name);
    if (categoryAlreadyExists) {
      throw new Error("Category already exists!");
    }

    categoryRepository.create({ name, description });
  }
}
export { CreateCategoryServices };
