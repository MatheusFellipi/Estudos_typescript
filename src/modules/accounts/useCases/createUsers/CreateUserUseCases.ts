import { inject, injectable } from "tsyringe";
import { hash } from "bcrypt";
import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";
import { ICreateUsersDTO } from "@modules/accounts/dtos/ICreateUsersDTO";
import { AppError } from "@shared/errors/appError";

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
  }: ICreateUsersDTO): Promise<void> {
    const userAlreadyExits = await this.usersRepository.findByEmail(email);

    if (userAlreadyExits) {
      throw new AppError("User already exits!!");
    }

    const passwordHash = await hash(password, 8);

    await this.usersRepository.create({
      drive_license,
      email,
      name,
      password: passwordHash,
    });
  }
}
export { CreateUserUseCases };
