import type { User } from "./user.type";

export interface UserToken {
    accessToken: string;
    user: User;
}