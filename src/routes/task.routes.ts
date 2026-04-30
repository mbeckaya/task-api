import { Router } from "express";
import { db } from "../database/connection";
import TaskController from "../controllers/task-controller";
import TaskService from "../services/task.service";
import { requireAuth } from "../middlewares/auth.middleware";
import { validateId  } from "../middlewares/validate-id.middleware";
import { validateTaskBody } from "../middlewares/validate-body.middleware";
import { API_BASE } from "../utils/constants";

const router = Router();

const taskService = new TaskService(db);
const taskController = new TaskController(taskService);

router.get(
    `${API_BASE}/tasks`, 
    requireAuth,
    taskController.getTasks
);

router.get(
    `${API_BASE}/tasks/:id`, 
    requireAuth, 
    validateId,
    taskController.getTask
);

router.post(
    `${API_BASE}/tasks`, 
    requireAuth, 
    validateTaskBody, 
    taskController.addTask
);

router.put(
    `${API_BASE}/tasks/:id`, 
    requireAuth, 
    validateId,
    validateTaskBody, 
    taskController.updateTask
);

router.delete(
    `${API_BASE}/tasks/:id`, 
    requireAuth, 
    validateId,
    taskController.deleteTask
);

export default router;