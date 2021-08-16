import { Router } from "express";
import multer from "multer";
import { CreateUserControllers } from "@modules/accounts/useCases/createUsers/CreateUserControllers";
import { UpdateUseAvatarController } from "@modules/accounts/useCases/updateUseAvatar/UpdateUseAvatarController";

import uploadConfig from "../../config/upload";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const usersRoutes = Router();

const uploadAvatar = multer(uploadConfig.upload("./tmp/avatar"));

const createUserControllers = new CreateUserControllers();
const updateUseAvatarController = new UpdateUseAvatarController();

usersRoutes.post("/", createUserControllers.handle);

usersRoutes.patch(
  "/avatar",
  uploadAvatar.single("avatar"),
  ensureAuthenticated,
  updateUseAvatarController.handle
);

export { usersRoutes };
