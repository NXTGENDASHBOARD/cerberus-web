import { RoleEnum } from '../shared';
import { Role } from './role.model';

export class Account {
  id: string;
  token?: string;
  account: Account;
  title?: string;
  email: string;
  password?: string;
  fullName: string;
  isVerified?: boolean;
  role?: RoleEnum;
  firstName?: string;
  names?: string;
  surname?: string;
  status?: string;
  roles: Role[];
}

export interface Register {
  firstName?: string;
  surname?: string;
  email?: string;
  phoneNumber?: string;
  password?: string;
  isThirdParty?: boolean;
  thirdPartyProvider?: any;
  roleType?: string;
  createUserId?: string;
  modifyUserId?: string;
  isActive?: boolean;
  statusId?: number;
}

export interface Login {
  staffNumber?: string;
  pin?: string;
}

export interface IdpLogin {
  email?: string;
}

export interface AccountVerificationRequest {
  email?: string;
}

export interface AccountVerificationOtp {
  otpVerification?: string;
}
