import { inject, injectable } from "tsyringe";
import { hash } from "bcrypt";
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
  }: ICreateUsersDTO): Promise<void> {
    const userAlreadyExits = await this.usersRepository.findByEmail(email);

    if (userAlreadyExits) {
      throw new Error("User already exits!!");
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
