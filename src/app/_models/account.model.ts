import { RoleEnum } from "../shared";
import { Role } from "./role.model";
 
export class Account {
    id: string;
    token?: string;
    account: Account;
    title?: string;
    email: string;
    password?: string;
    fullName: string;
    isVerified: boolean;
    role: RoleEnum;
    jwtToken?: string;
  

    names?: string;
    surname?: string;
    status?: string;
    roles: Role[];
 }

