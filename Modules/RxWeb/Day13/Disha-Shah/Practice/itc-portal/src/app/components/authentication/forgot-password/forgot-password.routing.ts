import { Routes } from '@angular/router';
import { BaseCanActivate } from '@rxweb/angular-router';
import { ForgotPasswordComponent } from './forgot-password.component';

export const LOGIN_ROUTES: Routes = [
    { 
        component: ForgotPasswordComponent, 
        path: '', 
        canActivate: [BaseCanActivate],  data: {title: 'Forgot Password'} 
    }
];
