import { container } from "tsyringe";
import { UsersRepository } from "@modules/accounts/infra/repositories/UsersRepository";
import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";
import { CategoryRepository } from "@modules/cars/infra/typeorm/repositories/CategoriesRepository";
import { SpecificationRepository } from "@modules/cars/infra/typeorm/repositories/SpecificationRepository";
import { ICategoriesRepository } from "@modules/cars/repositories/ICategoriesRepository";
import { ISpecificationRepository } from "@modules/cars/repositories/ISpecificationRepository";

container.registerSingleton<ICategoriesRepository>(
  "CategoryRepository",
  CategoryRepository
);

container.registerSingleton<ISpecificationRepository>(
  "SpecificationRepository",
  SpecificationRepository
);

container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  UsersRepository
);
