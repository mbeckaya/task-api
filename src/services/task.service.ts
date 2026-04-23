import { Knex } from "knex";
import type { Task } from "../types/task.type";

export default class TaskService {
    constructor(protected db: Knex) {}

    private baseSelect() {
        return {
            id: "id",
            title: "title",
            description: "description",
            status: "status",
            priority: "priority",
            dueDate: "due_date",
        };
    }

    async getAll(): Promise<Task[]> {
        return this.db("tasks").select(this.baseSelect());
    }

    async getById(id: number): Promise<Task | null> {
        return (
            (await this.db("tasks")
                .select(this.baseSelect())
                .where({ id })
                .first()) ?? null
        );
    }

    async create(data: Task): Promise<Task | null> {
        const [id] = await this.db("tasks").insert({
            title: data.title,
            description: data.description ?? null,
            status: data.status ?? "TODO",
            priority: data.priority ?? 1,
            due_date: data.dueDate ? new Date(data.dueDate) : null, // 👈 DB bleibt snake_case
        });

        return this.getById(id);
    }

    async update(id: number, data: Task): Promise<Task | null> {
        const exists = await this.getById(id);
        if (!exists) return null;

        await this.db("tasks")
            .where({ id })
            .update({
                title: data.title,
                description: data.description ?? null,
                status: data.status,
                priority: data.priority,
                due_date: data.dueDate ? new Date(data.dueDate) : null,
                updated_at: this.db.fn.now(),
            });

        return this.getById(id);
    }

    async delete(id: number): Promise<boolean> {
        const deleted = await this.db("tasks")
            .where({ id })
            .del();

        return deleted > 0;
    }
}