import { getRepository, Repository } from "typeorm";
import {
  ICategoriesRepository,
  ICreateCategoryDTO,
} from "@modules/cars/repositories/ICategoriesRepository";
import { Category } from "../entities/Category";

class CategoryRepository implements ICategoriesRepository {
  private repository: Repository<Category>;

  constructor() {
    this.repository = getRepository(Category);
  }

  async create({ description, name }: ICreateCategoryDTO): Promise<void> {
    const category = this.repository.create({
      name,
      description,
    });
    await this.repository.save(category);
  }

  async list(): Promise<Category[]> {
    const categories = this.repository.find();
    return categories;
  }

  async findByName(name: string): Promise<Category> {
    const category = this.repository.findOne({ name });
    return category;
  }
}

export { CategoryRepository };
