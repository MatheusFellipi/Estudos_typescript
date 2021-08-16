import { ICreateUsersDTO } from "../../dtos/ICreateUsersDTO";
import { User } from "../../entities/User";
import { IUsersRepository } from "../IUsersRepository";

class UsersRepositoryInMemory implements IUsersRepository {
  private users: User[] = [];

  async create({
    drive_license,
    email,
    name,
    password,
    avatar,
  }: ICreateUsersDTO): Promise<void> {
    const user = new User();

    Object.assign(user, {
      drive_license,
      email,
      name,
      password,
      avatar,
    });

    this.users.push(user);
  }
  async findByEmail(email: string): Promise<User> {
    return this.users.find((user) => user.email === email);
  }
  async findById(id: string): Promise<User> {
    return this.users.find((user) => user.id === id);
  }
}
export { UsersRepositoryInMemory };
