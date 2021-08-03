import { Category } from "../model/Category";

class CategoryRepository {
  private categories: Category[];
  constructor() {
    this.categories = [];
  }
  create() {
    const category = new Category();
    Object.assign(category, {
      name,
      description,
      created_at: new Date(),
    });

    this.categories.push(category);
  }
}
