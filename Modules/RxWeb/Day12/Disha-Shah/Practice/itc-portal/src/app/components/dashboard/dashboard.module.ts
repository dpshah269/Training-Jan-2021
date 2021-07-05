import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { RxReactiveFormsModule } from "@rxweb/reactive-form-validators";
import { DashboardRoutingModule, ROUTING } from './dashboard.routing';
import { DashboardComponent } from './dashboard.component';
import { RxLocalizationModule } from '@rxweb/angular-localization'
import { RxRoutingModule } from "@rxweb/angular-router"
import { SharedModule } from '../shared/shared.module';

import {ListAddComponent} from './list-add/list-add.component'
import { ListAddRangeComponent } from './list-add-range/list-add-range.component';
import { ListAllComponent } from './list-all/list-all.component';
import { ListAnyComponent } from './list-any/list-any.component';
import { ListAverageComponent } from './list-average/list-average.component';
import { ListContainsComponent } from './list-contains/list-contains.component';
import { ListCountComponent } from './list-count/list-count.component';
import { ListConcatComponent } from './list-concat/list-concat.component';
import { ListWhereComponent } from './list-where/list-where.component';
import { ListDistinctComponent } from './list-distinct/list-distinct.component';
import { ListDistinctByComponent } from './list-distinct-by/list-distinct-by.component';
import { ListShiftComponent } from './list-shift/list-shift.component';
import { ListFirstComponent } from './list-first/list-first.component';
import { ListFirstOrDefaultComponent } from './list-first-or-default/list-first-or-default.component';
import { ListGroupByComponent } from './list-group-by/list-group-by.component';
import { ListInsertComponent } from './list-insert/list-insert.component';
import { ListPopComponent } from './list-pop/list-pop.component';
import { ListLastComponent } from './list-last/list-last.component';
import { ListLastOrDefaultComponent } from './list-last-or-default/list-last-or-default.component';
import { ListMaxComponent } from './list-max/list-max.component';
import { ListMaxByComponent } from './list-max-by/list-max-by.component';
import { ListOrderByComponent } from './list-order-by/list-order-by.component';
import { ListOrderByDescendingComponent } from './list-order-by-descending/list-order-by-descending.component';
import { ListRemoveComponent } from './list-remove/list-remove.component';
import { ListRemoveAtComponent } from './list-remove-at/list-remove-at.component';
import { ListRemoveAllComponent } from './list-remove-all/list-remove-all.component';
import { ListSingleComponent } from './list-single/list-single.component';
import { ListSingleOrDefaultComponent } from './list-single-or-default/list-single-or-default.component';
import { ListSkipComponent } from './list-skip/list-skip.component';
import { ListSumComponent } from './list-sum/list-sum.component';
import { ListTakeComponent } from './list-take/list-take.component';


@NgModule({
  declarations: [DashboardComponent, ListAddComponent, ListAddRangeComponent, ListAllComponent,
    ListAnyComponent, ListAverageComponent, ListContainsComponent, ListCountComponent, ListConcatComponent, 
    ListWhereComponent, ListDistinctComponent, ListDistinctByComponent, ListShiftComponent, ListFirstComponent,
    ListFirstOrDefaultComponent, ListGroupByComponent, ListInsertComponent, ListPopComponent, ListLastComponent,
    ListLastOrDefaultComponent, ListMaxComponent, ListMaxByComponent, ListOrderByComponent, ListOrderByDescendingComponent,
    ListRemoveComponent,
    ListRemoveAtComponent,
    ListRemoveAllComponent,
    ListSingleComponent,
    ListSingleOrDefaultComponent,
    ListSkipComponent,
    ListSumComponent,
    ListTakeComponent],
  imports: [
    CommonModule,FormsModule,ReactiveFormsModule, RxReactiveFormsModule,ROUTING
    , DashboardRoutingModule, RxLocalizationModule, RxRoutingModule,SharedModule
  ]
})
export class DashboardModule { }