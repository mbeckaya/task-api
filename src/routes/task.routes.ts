import { Router } from "express";
import { db } from "../database/connection";
import TaskController from "../controllers/task-controller";
import TaskService from "../services/task.service";
import { validateTaskBody } from "../middlewares/validate.middleware";
import { authMiddleware } from "../middlewares/auth.middleware";
import { API_BASE } from "../utils/constants";

const router = Router();

const taskService = new TaskService(db);
const taskController = new TaskController(taskService);

router.get(`${API_BASE}/tasks`, authMiddleware, taskController.getTasks);

router.get(`${API_BASE}/tasks/:id`, authMiddleware, taskController.getTask);

router.post(`${API_BASE}/tasks`, authMiddleware, validateTaskBody, taskController.addTask);

router.put(`${API_BASE}/tasks/:id`, authMiddleware, validateTaskBody, taskController.updateTask);

router.delete(`${API_BASE}/tasks/:id`, authMiddleware, taskController.deleteTask);

export default router;