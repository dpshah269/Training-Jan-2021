import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { RxReactiveFormsModule } from "@rxweb/reactive-form-validators";
import { DashboardRoutingModule, ROUTING } from './dashboard.routing';
import { DashboardComponent } from './dashboard.component';
import { RxLocalizationModule } from '@rxweb/angular-localization'
import { RxRoutingModule } from "@rxweb/angular-router"
import { SharedModule } from '../shared/shared.module';
import { GetCompleteComponent } from './get-complete/get-complete.component';


@NgModule({
  declarations: [DashboardComponent, GetCompleteComponent],
  imports: [
    CommonModule,FormsModule,ReactiveFormsModule, RxReactiveFormsModule,ROUTING
    , DashboardRoutingModule, RxLocalizationModule, RxRoutingModule,SharedModule
  ]
})
export class DashboardModule { }