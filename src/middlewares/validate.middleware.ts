import { Request, Response, NextFunction } from "express";
import status from "http-status";
import { taskSchema } from "../validators/task.schema";
import { loginSchema } from "../validators/login.schema";

const validateBody = (schema: { validate: (data: unknown) => { error?: any } }) =>
    (request: Request, response: Response, next: NextFunction) => {
        const { error } = schema.validate(request.body);

        if (error) {
            return response
                .status(status.BAD_REQUEST)
                .send({ error: error.details });
        }

        next();
    };

export const validateTaskBody = validateBody(taskSchema);

export const validateLoginBody = validateBody(loginSchema);