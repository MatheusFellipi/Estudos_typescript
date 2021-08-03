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
    throw new Error("Method not implemented.");
  }
}

export { SpecificationRepository };
