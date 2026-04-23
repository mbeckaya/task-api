import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable("tasks", (table) => {
        table.increments("id").primary();
        table.string("title", 100).notNullable();
        table.string("description", 255);
        table.enu("status", ["TODO", "IN_PROGRESS", "DONE"]).notNullable().defaultTo("TODO");
        table.integer("priority").defaultTo(1);
        table.date("due_date");
        table.timestamps(true, true);
    });
}

export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTableIfExists("tasks");
}

