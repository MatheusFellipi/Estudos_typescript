import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { inject } from "tsyringe";
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
    if (passwordMatch) {
      throw new Error("Email or password incorrect!");
    }
    const token = sign({}, "5221ec70259819bba5acc33bbcdac8cf", {
      subject: user.id,
      expiresIn: "1d",
    });
    return {
      user,
      token,
    };
  }
}
export { AuthenticateUserUseCase };
