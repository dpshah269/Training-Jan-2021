import { NgModule} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms"
import { RouterModule} from '@angular/router';

import { RxLocalizationModule } from '@rxweb/angular-localization'
import { RxReactiveFormsModule } from "@rxweb/reactive-form-validators"
import {  RxRoutingModule} from "@rxweb/angular-router"

import { ForgotPasswordComponent } from './forgot-password.component';
import { LOGIN_ROUTES } from './forgot-password.routing';
import { CommonModule } from '@angular/common';
import { AuthenticationSharedModule } from '../authentication.shared.module';




@NgModule({
    declarations: [ForgotPasswordComponent],
    imports: [FormsModule, ReactiveFormsModule, RxReactiveFormsModule,
        RouterModule.forChild(LOGIN_ROUTES), RxRoutingModule, RxLocalizationModule, CommonModule, AuthenticationSharedModule
    ],
    exports: [RouterModule]
})
export class ForgotPasswordModule { }

