import { inject, injectable } from "tsyringe";
import { ICreateUsersDTO } from "../../dtos/ICreateUsersDTO";
import { IUsersRepository } from "../../repositories/IUsersRepository";

@injectable()
class CreateUserUseCases {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}

  async execute({
    drive_license,
    email,
    name,
    password,
    username,
  }: ICreateUsersDTO): Promise<void> {
    await this.usersRepository.create({
      drive_license,
      email,
      name,
      password,
      username,
    });
  }
}
export { CreateUserUseCases };
