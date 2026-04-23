import { Router } from "express";
import userRoutes from "./user.routes";
import tasksRoutes from "./task.routes";

const routes: Router[] = [
    userRoutes,
    tasksRoutes,
];

export default routes;