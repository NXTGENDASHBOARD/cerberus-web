import { RoleEnum } from "../shared";
 
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
  

}