import { Component, OnInit, OnDestroy } from '@angular/core';
import { anonymous, middleware } from '@rxweb/angular-router'
import { CoreComponent } from '@rxweb/angular-router';
import { LoggedInMiddleware } from '../../../domain/security/middleware/logged-in.middleware';
import { IFormGroup, RxFormBuilder } from "@rxweb/reactive-form-validators";
import { UserCredentialModel } from '../domain/login.models';
import { BaseToastr } from 'src/app/domain/customize-design/toastr';

@middleware([LoggedInMiddleware])
@anonymous()
@Component({
    templateUrl: './forgot-password.component.html',
})
export class ForgotPasswordComponent extends CoreComponent implements OnInit, OnDestroy {
    
    userCredentialModel: UserCredentialModel;
    userCredentialFormGroup: IFormGroup<UserCredentialModel>;
    toastr: BaseToastr;


    constructor(
        private formBuilder: RxFormBuilder,) 
    {        
        super();
        this.userCredentialModel = new UserCredentialModel();        
    }

    

    ngOnInit(): void {          
        this.userCredentialFormGroup = this.formBuilder.formGroup(this.userCredentialModel) as IFormGroup<UserCredentialModel>
    }

    

}
