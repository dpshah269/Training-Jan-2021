import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseCanActivate } from '@rxweb/angular-router';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {
    component: UserComponent, 

        path: '', 

        canActivate: [BaseCanActivate]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
