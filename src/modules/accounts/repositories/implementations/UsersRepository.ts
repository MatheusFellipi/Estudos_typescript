import { getRepository, Repository } from "typeorm";
import { User } from "../../entities/User";
import { ICreateUsersDTO } from "../../dtos/ICreateUsersDTO";
import { IUsersRepository } from "../IUsersRepository";

class CategoryRepository implements IUsersRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  async create({
    drive_license,
    email,
    name,
    password,
    username,
  }: ICreateUsersDTO): Promise<void> {
    const user = this.repository.create({
      name,
      email,
      password,
      username,
      drive_license,
    });
    await this.repository.save(user);
  }
}

export { CategoryRepository };
