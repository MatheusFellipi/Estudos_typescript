import { ICreateCarsDTO } from "../dtos/ICreateaCarsDto";

interface ICarsRepository {
  create(data: ICreateCarsDTO): Promise<void>;
}

export { ICarsRepository };
