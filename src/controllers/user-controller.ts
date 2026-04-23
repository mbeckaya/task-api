import { Request, Response } from "express";
import status from "http-status";
import UserService from "../services/user.service";

export default class UserController {
    constructor(private service: UserService) {}

    login = async (request: Request, response: Response) => {
        const email = request.body.email;
        const password = request.body.password;

        const user = await this.service.login(email, password);

        if (!user) {
            response
                .status(status.UNAUTHORIZED)
                .send({
                    "message": "Invalid email or password"
                }
            );    
        }

        response.status(status.OK).send({
            "message": "Login successful",
            ...user,
        });
    }
}