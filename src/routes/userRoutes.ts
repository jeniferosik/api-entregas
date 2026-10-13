import { UsersController } from "@/controllers/usersController";
import { Router } from "express";

const userRoutes = Router();
const usersController = new UsersController();

userRoutes.post("/", usersController.create);

export { userRoutes };
