import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { RxReactiveFormsModule } from "@rxweb/reactive-form-validators";
import { DashboardRoutingModule, ROUTING } from './dashboard.routing';
import { DashboardComponent } from './dashboard.component';
import { RxLocalizationModule } from '@rxweb/angular-localization'
import { RxRoutingModule } from "@rxweb/angular-router"
import { SharedModule } from '../shared/shared.module';
import { CandidateComponent } from './candidate/candidate.component';
import { CandidateListComponent } from './candidate-list/candidate-list.component';
import { SkillAddComponent } from './skill-add/skill-add.component';


@NgModule({
  declarations: [DashboardComponent, CandidateComponent, CandidateListComponent, SkillAddComponent],
  imports: [
    CommonModule,FormsModule,ReactiveFormsModule, RxReactiveFormsModule,ROUTING
    , DashboardRoutingModule, RxLocalizationModule, RxRoutingModule,SharedModule
  ]
})
export class DashboardModule { }