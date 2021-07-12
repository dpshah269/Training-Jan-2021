import { required } from "@rxweb/reactive-form-validators";

export class UserCredentialModel {
  
  @required()
  userName: string = undefined;
   
    @required()
    password: string = undefined;
 
}

export class UserAuthenticationViewModel {
  key:string;
  token: string;
  modules: any;
  roleId: number;
  roleName: string;
  userFullName: string;
  emailId: string;
  failedCount: number;
  failedLogin: boolean;
  validationMessage: string;
  isTemporaryPassword: boolean;
  userId: number;
  locale: string;
  isFirstTime: boolean;
  companyId: number;
  dateFormat: string;
  dateTimeFormat: string;
  numberFormat: string;
  zipPostalCode: string;
}


