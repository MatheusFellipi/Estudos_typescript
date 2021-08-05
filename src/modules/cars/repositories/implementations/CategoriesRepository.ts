import { getRepository, Repository } from "typeorm";
import { Category } from "../../entities/Category";

import {
  ICategoriesRepository,
  ICreateCategoryDTO,
} from "../ICategoriesRepository";

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
    // select * from categories
    const categories = this.repository.find();
    return categories;
  }

  async findByName(name: string): Promise<Category> {
    // select * from categories where name = "name" limit 1
    const category = this.repository.findOne({ name });
    return category;
  }
}

export { CategoryRepository };
