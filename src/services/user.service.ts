import { Knex } from "knex";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import type { User } from "../types/user.type";
import type { UserToken } from "../types/user-token.type";

export default class UserService {
    constructor(protected db: Knex) {}

    async checkPassword(plain: string, hashed: string): Promise<boolean> {
        return bcrypt.compare(plain, hashed);
    }

    async login(email: string, plainPassword: string): Promise<UserToken | null> {
        const user: User = await this
            .db("users")
            .select({
                id: "id",
                email: "email",
                password: "password",
                firstName: "first_name",
                lastName: "last_name"
            })
            .where("email", email)
            .where("is_active", true)
            .first();

        if (!user) return null;

        if (!user.password) return null;

        const isValid = await this.checkPassword(plainPassword, user.password);

        if (!isValid) return null;

        const token = jwt.sign(
            {
                userId: user.id,
                email: user.email,
            },
            process.env.JWT_SECRET!,
            { expiresIn: "1h" }
        );

        const { password, ...safeUser } = user;

        return {
            accessToken: token,
            user: safeUser
        };
    }
}




