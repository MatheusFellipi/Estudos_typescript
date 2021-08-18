import { inject, injectable } from "tsyringe";
import { ICarsRepository } from "@modules/cars/repositories/ICarsRepository";
import { AppError } from "@shared/errors/appError";

interface IRequest {
  name: string;
  description: string;
  daily_rate: number;
  license_plate: string;
  fine_amount: number;
  brand: string;
  category_id: string;
}

@injectable()
class CreateCarUseCase {
  constructor(
    //@inject("CarsRepository")
    private carsRepository: ICarsRepository
  ) {}
  async execute({
    category_id,
    name,
    description,
    daily_rate,
    license_plate,
    fine_amount,
    brand,
  }: IRequest): Promise<void> {
    this.carsRepository.create({
      category_id,
      name,
      description,
      daily_rate,
      license_plate,
      fine_amount,
      brand,
    });
  }
}
export { CreateCarUseCase };
