import type { Timestamps } from "./timestamps.type";

export interface User extends Timestamps {
    id: number;
    email: string;
    firstName: string;
    lastName: string;

    password?: string;
    isActive?: boolean;
}