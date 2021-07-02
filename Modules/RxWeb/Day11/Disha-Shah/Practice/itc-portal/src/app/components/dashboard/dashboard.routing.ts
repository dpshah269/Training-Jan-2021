import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { BaseCanActivate } from '@rxweb/angular-router';


const routes: Routes = [
    {
        path: "", component: DashboardComponent, canActivate: [BaseCanActivate]
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }


export const ROUTING = RouterModule.forChild(routes);