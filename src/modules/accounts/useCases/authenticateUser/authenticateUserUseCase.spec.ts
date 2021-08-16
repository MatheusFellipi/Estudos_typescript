import { AppError } from "../../../../errors/appError";
import { ICreateUsersDTO } from "../../dtos/ICreateUsersDTO";
import { UsersRepositoryInMemory } from "../../repositories/in-memory/UsersRepositoryInMemory";
import { CreateUserUseCases } from "../createUsers/CreateUserUseCases";
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";

describe("Authenticate User", () => {
  let authenticateUserUseCase: AuthenticateUserUseCase;
  let usersRepositoryInMemory: UsersRepositoryInMemory;
  let createUseCase: CreateUserUseCases;
  beforeEach(() => {
    usersRepositoryInMemory = new UsersRepositoryInMemory();
    authenticateUserUseCase = new AuthenticateUserUseCase(
      usersRepositoryInMemory
    );
    createUseCase = new CreateUserUseCases(usersRepositoryInMemory);
  });

  it("should be able to authenticate a user", async () => {
    const user: ICreateUsersDTO = {
      drive_license: "0515511555151",
      email: "user@teste.com",
      name: "teste",
      password: "1223456",
    };
    await createUseCase.execute(user);

    const result = await authenticateUserUseCase.execute({
      email: user.email,
      password: user.password,
    });
    expect(result).toHaveProperty("token");
  });

  it("should be able to authenticate an nonexistent nt user", async () => {
    expect(async () => {
      const result = await authenticateUserUseCase.execute({
        email: "user@teste.com",
        password: "1223456",
      });
    }).rejects.toBeInstanceOf(AppError);
  });

  it("should be able to authenticate an incorrect password", async () => {
    expect(async () => {
      const user: ICreateUsersDTO = {
        drive_license: "0515511555151",
        email: "user@teste.com",
        name: "teste",
        password: "1223456",
      };

      await createUseCase.execute(user);

      const result = await authenticateUserUseCase.execute({
        email: user.email,
        password: "",
      });
    }).rejects.toBeInstanceOf(AppError);
  });
});
