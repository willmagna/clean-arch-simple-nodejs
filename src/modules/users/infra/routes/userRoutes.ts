import { Router } from "express";
import { PrismaUserRepository } from "../repositories/PrismaUserRepository.js";
import { CreateUserUseCase } from "../../application/use-cases/CreateUserUseCase.js";
import { CreateUserController } from "../../presentation/controllers/CreateUserController.js";
import { adaptExpressRoute } from "../../../../infra/http/adapters/expressRouteAdapter.js";

const userRoutes = Router();

const userRepository = new PrismaUserRepository();
const createUserUseCase = new CreateUserUseCase(userRepository);
const createUserController = new CreateUserController(createUserUseCase);

userRoutes.post("/", adaptExpressRoute(createUserController));

export { userRoutes };
