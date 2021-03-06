import { getRepository, Repository } from "typeorm";

import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";
import { User } from "../typeorm/entities/User";
import { ICreateUsersDTO } from "@modules/accounts/dtos/ICreateUsersDTO";

class UsersRepository implements IUsersRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  async create({
    drive_license,
    email,
    name,
    password,
    id,
    avatar,
  }: ICreateUsersDTO): Promise<void> {
    const user = this.repository.create({
      name,
      email,
      password,
      drive_license,
      id,
      avatar,
    });
    await this.repository.save(user);
  }
  async findByEmail(email: string): Promise<User> {
    return await this.repository.findOne({ email });
  }
  async findById(id: string): Promise<User> {
    return await this.repository.findOne(id);
  }
}

export { UsersRepository };
