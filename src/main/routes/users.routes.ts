import { Router } from "express";
import { CreateUserControllers } from "../../modules/accounts/useCases/createUsers/CreateUserControllers";

const usersRoutes = Router();
const createUserControllers = new CreateUserControllers();

usersRoutes.post("/", createUserControllers.handle);

export { usersRoutes };
