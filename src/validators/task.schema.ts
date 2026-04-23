import Joi from "joi";

export const taskSchema = Joi.object({
    title: Joi.string().min(1).required(),
    description: Joi.string().allow("", null),
    status: Joi.string()
        .valid("TODO", "IN_PROGRESS", "DONE")
        .default("TODO"),
    priority: Joi.number().integer().min(1).default(1),
    dueDate: Joi.date().optional()
});