import type { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    await knex("tasks").del();

    await knex("tasks").insert([
        {
            id: 1,
            title: "Set up project structure",
            description: "Initialize Express + Knex + TypeScript setup",
            status: "DONE",
            priority: 1,
            due_date: new Date("2026-04-10"),
        },
        {
            id: 2,
            title: "Fix database migrations",
            description: "Configure and test Knex migrations properly",
            status: "IN_PROGRESS",
            priority: 2,
            due_date: new Date("2026-04-20"),
        },
        {
            id: 3,
            title: "Build Tasks API",
            description: "Implement CRUD endpoints for tasks",
            status: "IN_PROGRESS",
            priority: 1,
            due_date: new Date("2026-04-22"),
        },
        {
            id: 4,
            title: "Connect frontend",
            description: "Integrate React application with backend API",
            status: "TODO",
            priority: 3,
            due_date: new Date("2026-04-30"),
        },
        {
            id: 5,
            title: "Implement authentication system",
            description: "Add JWT-based login and registration system",
            status: "TODO",
            priority: 1,
            due_date: new Date("2026-05-05"),
        }
    ]);
};
