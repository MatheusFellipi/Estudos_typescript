import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  email: string;
  password: string;
}
interface IResponse {
  user: {
    name: string;
    email: string;
  };
  token: string;
}
@injectable()
class AuthenticateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}

  async execute({ email, password }: IRequest): Promise<IResponse> {
    const user = await this.usersRepository.findByEmail(email);

    if (!user) {
      throw new Error("Email or password incorrect!");
    }
    const passwordMatch = await compare(password, user.password);
    if (!passwordMatch) {
      throw new Error("Email or password incorrect!");
    }
    const token = sign({}, "5221ec70259819bba5acc33bbcdac8cf", {
      subject: user.id,
      expiresIn: "1d",
    });
    const tokenReturn: IResponse = {
      token,
      user: {
        email: user.email,
        name: user.name,
      },
    };
    return tokenReturn;
  }
}
export { AuthenticateUserUseCase };
