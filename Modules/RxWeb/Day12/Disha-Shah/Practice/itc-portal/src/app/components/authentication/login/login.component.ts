import { Component, OnInit, OnDestroy } from '@angular/core';
import { anonymous, middleware } from '@rxweb/angular-router'
import { CoreComponent } from '@rxweb/angular-router';
import { LoggedInMiddleware } from '../../../domain/security/middleware/logged-in.middleware';
import { Router } from '@angular/router';
import { IFormGroup, RxFormBuilder } from "@rxweb/reactive-form-validators";
import { BrowserStorage } from 'src/app/domain/services/browser-storage';
import { UserAuthenticationViewModel, UserCredentialModel } from '../domain/login.models';
import { BaseToastr } from 'src/app/domain/customize-design/toastr';
import { Subscription } from 'rxjs';
import { RxHttp } from '@rxweb/http';
import { LoginService } from '../login.service';

@middleware([LoggedInMiddleware])
@anonymous()
@Component({
    templateUrl: './login.component.html',
})

export class LoginComponent extends CoreComponent implements OnInit, OnDestroy {

    userCredentialModel: UserCredentialModel;
    userCredentialFormGroup: IFormGroup<UserCredentialModel>;
    storageHelper: BrowserStorage;
    toastr: BaseToastr;
    loginSubscription: Subscription;
    spin: boolean = false;

    constructor(
        private routers: Router,
        private http : RxHttp,
        private loginService:LoginService,
        private formBuilder: RxFormBuilder, ) {
        super();
        this.userCredentialModel = new UserCredentialModel();
        this.storageHelper = new BrowserStorage();
        this.toastr = new BaseToastr();
    }
    ngOnInit(): void {
      
        this.userCredentialFormGroup = this.formBuilder.formGroup(this.userCredentialModel) as IFormGroup<UserCredentialModel>
    }

  
    //for .net developer
    login() {
    
        this.spin = true;
        // if (this.loginSubscription)
        //     this.loginSubscription.unsubscribe();
        // this.userCredentialFormGroup.submitted = true;
        // if (this.userCredentialFormGroup.valid) {
          
        //    this.loginSubscription =  this.loginService.post<UserAuthenticationViewModel>({body:this.userCredentialFormGroup.value}).subscribe((response: UserAuthenticationViewModel) => {       
        //         if (response.failedCount) {                   
        //             this.toastr.error(response.validationMessage);
        //             this.storageHelper.local.clearAll();
        //             this.storageHelper.session.clearAll();
        //         }
        //         else{
        //             this.storageHelper.local.save('auth', response.token, false);
        //             this.storageHelper.local.save('key', response.key, false);
        //             this.routers.navigate(['/dashboard'])
        //             this.toastr.success("Login Successful.");
        //         }
               
        //     }, error => { });            
        // }
        this.routers.navigate(['/dashboard']);
        this.spin = false;
    }

   
  
    ngOnDestroy(): void {
        if (this.loginSubscription) {
            this.loginSubscription.unsubscribe();
        }
    }
}
