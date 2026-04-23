import { Request, Response } from "express";
import status from "http-status";
import TaskService from "../services/task.service";

export default class TaskController {
    constructor(private service: TaskService) {}

    getTasks = async (req: Request, res: Response) => {
        const tasks = await this.service.getAll();

        res.status(status.OK).send(tasks);
    };

    getTask = async (req: Request, res: Response) => {
        const task = await this.service.getById(Number(req.params.id));

        if (!task) {
            return res.status(status.NOT_FOUND).send({ message: "Task not found" });
        }

        res.status(status.OK).send(task);
    };

    addTask = async (req: Request, res: Response) => {
        const created = await this.service.create(req.body);
        
        res.status(status.CREATED).send(created);
    };

    updateTask = async (req: Request, res: Response) => {
        const updated = await this.service.update(Number(req.params.id), req.body);

        if (!updated) {
            return res.status(status.NOT_FOUND).send({ message: "Task not found" });
        }

        res.status(status.OK).send(updated);
    };

    deleteTask = async (req: Request, res: Response) => {
        const ok = await this.service.delete(Number(req.params.id));

        if (!ok) {
            return res.status(status.NOT_FOUND).send({ message: "Task not found" });
        }

        res.sendStatus(status.NO_CONTENT);
    };
}