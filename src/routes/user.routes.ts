import { Router } from "express";
import { db } from "../database/connection";
import { validateLoginBody } from "../middlewares/validate.middleware";
import UserService from "../services/user.service";
import UserController from "../controllers/user-controller";
import { API_BASE } from "../utils/constants";

const router = Router();

const userService = new UserService(db);
const userController = new UserController(userService);

router.post(`${API_BASE}/login`, validateLoginBody, userController.login);

export default router;