import { CarsRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarsRepositoryInMemory";
import { CreateCarUseCase } from "./CreateCarUseCase";
import { AppError } from "@shared/errors/appError";

describe("Create Car", () => {
  let createCarUseCase: CreateCarUseCase;
  let carsRepository: CarsRepositoryInMemory;

  beforeEach(() => {
    carsRepository = new CarsRepositoryInMemory();
    createCarUseCase = new CreateCarUseCase(carsRepository);
  });
  it("should be able to create a new car", async () => {
    await createCarUseCase.execute({
      category_id: "category_id",
      name: "Name teste de criação de carro",
      description: "teste de criação de carro",
      daily_rate: 100,
      license_plate: "PLATE teste de criação de carro",
      fine_amount: 60,
      brand: "BRAND teste de criação de carro",
    });
  });
});
