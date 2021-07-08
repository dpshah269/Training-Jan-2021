import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {RxReactiveDynamicFormsModule} from '@rxweb/reactive-dynamic-forms'

import { RxReactiveFormsModule } from "@rxweb/reactive-form-validators";
import { DashboardRoutingModule, ROUTING } from './dashboard.routing';
import { DashboardComponent } from './dashboard.component';
import { RxLocalizationModule } from '@rxweb/angular-localization'
import { RxRoutingModule } from "@rxweb/angular-router"
import { SharedModule } from '../shared/shared.module';
import { NestedformgroupCompleteComponent } from './nestedformgroup-complete/nestedformgroup-complete.component';
import { DynamicresetformControlsOnlyComponent } from './dynamicresetform-controls-only/dynamicresetform-controls-only.component';
import { DynamicresetformDefinedPropsOnlyComponent } from './dynamicresetform-defined-props-only/dynamicresetform-defined-props-only.component';
import { DynamicresetformValueComponent } from './dynamicresetform-value/dynamicresetform-value.component';
import { DynamicValidationComponent } from './dynamic-validation/dynamic-validation.component';
import { DynamicBasicComponent } from './dynamic-basic/dynamic-basic.component';
import { DynamicCustomSizingComponent } from './dynamic-custom-sizing/dynamic-custom-sizing.component';
import { DynamicPlainTextComponent } from './dynamic-plain-text/dynamic-plain-text.component';
import { DynamicDisabledCheckboxComponent } from './dynamic-disabled-checkbox/dynamic-disabled-checkbox.component';
import { DynamicDisabledRadioComponent } from './dynamic-disabled-radio/dynamic-disabled-radio.component';
import { DynamicAdvanceLayoutComponent } from './dynamic-advance-layout/dynamic-advance-layout.component';
import { DynamicHorizontalLayoutComponent } from './dynamic-horizontal-layout/dynamic-horizontal-layout.component';
import { DynamicInlineFormComponent } from './dynamic-inline-form/dynamic-inline-form.component';
import { DynamicPrependTextboxComponent } from './dynamic-prepend-textbox/dynamic-prepend-textbox.component';
import { AsyncvalidationCompleteComponent } from './asyncvalidation-complete/asyncvalidation-complete.component';


@NgModule({
  declarations: [DashboardComponent, NestedformgroupCompleteComponent, DynamicresetformControlsOnlyComponent, DynamicresetformDefinedPropsOnlyComponent, DynamicresetformValueComponent, DynamicValidationComponent, DynamicBasicComponent, DynamicCustomSizingComponent, DynamicPlainTextComponent, DynamicDisabledCheckboxComponent, DynamicDisabledRadioComponent, DynamicAdvanceLayoutComponent, DynamicHorizontalLayoutComponent, DynamicInlineFormComponent, DynamicPrependTextboxComponent, AsyncvalidationCompleteComponent],
  imports: [
    CommonModule,FormsModule,ReactiveFormsModule, RxReactiveFormsModule,ROUTING
    , DashboardRoutingModule, RxLocalizationModule, RxRoutingModule,SharedModule, RxReactiveDynamicFormsModule
  ]
})
export class DashboardModule { }