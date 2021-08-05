import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateUserUseCases } from "./CreateUserUseCases";

class CreateUserControllers {
  async handle(request: Request, response: Response): Promise<Response> {
    const { drive_license, email, name, password, username } = request.body;

    const createUserUseCases = container.resolve(CreateUserUseCases);

    await createUserUseCases.execute({
      drive_license,
      email,
      name,
      password,
      username,
    });

    return response.status(201).send();
  }
}

export { CreateUserControllers };
