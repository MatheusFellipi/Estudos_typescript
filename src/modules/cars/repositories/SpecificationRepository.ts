import { Specification } from "../model/Specification";

import {
  ISpecificationRepository,
  ICreateSpecificationDTO,
} from "./ISpecificationRepository";

class SpecificationRepository implements ISpecificationRepository {
  private specifications: Specification[];
  constructor() {
    this.specifications = [];
  }
  create({ description, name }: ICreateSpecificationDTO): void {
    const specifications = new Specification();

    Object.assign(specifications, {
      description,
      name,
      created_at: new Date(),
    });
    this.specifications.push(specifications);
  }
}

export { SpecificationRepository };
