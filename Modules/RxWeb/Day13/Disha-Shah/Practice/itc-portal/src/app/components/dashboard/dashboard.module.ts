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
import { DynamicCompleteComponent } from './dynamic-complete/dynamic-complete.component';
import {RxReactiveDynamicFormsModule} from '@rxweb/reactive-dynamic-forms';
import { CheckboxCompleteComponent } from './checkbox-complete/checkbox-complete.component';
import { CheckboxSingleComponent } from './checkbox-single/checkbox-single.component';
import { CheckboxMultiselectComponent } from './checkbox-multiselect/checkbox-multiselect.component';
import { CheckboxValueComponent } from './checkbox-value/checkbox-value.component';
import { CheckboxInlineComponent } from './checkbox-inline/checkbox-inline.component';
import { CheckboxSelectallComponent } from './checkbox-selectall/checkbox-selectall.component';
import { ColorCompleteComponent } from './color-complete/color-complete.component';
import { DynamicdateCompleteComponent } from './dynamicdate-complete/dynamicdate-complete.component';
import { DropdownStaticComponent } from './dropdown-static/dropdown-static.component';
import { DropdownSyncComponent } from './dropdown-sync/dropdown-sync.component';
import { DropdownAsyncComponent } from './dropdown-async/dropdown-async.component';
import { DropdownValueComponent } from './dropdown-value/dropdown-value.component';
import { DynamicemailCompleteComponent } from './dynamicemail-complete/dynamicemail-complete.component';
import { DynamicfileCompleteComponent } from './dynamicfile-complete/dynamicfile-complete.component';
import { DynamicfileMultipleComponent } from './dynamicfile-multiple/dynamicfile-multiple.component';
import { DynamicpasswordComponent } from './dynamicpassword/dynamicpassword.component';
import { RadioStaticComponent } from './radio-static/radio-static.component';
import { RadioValueComponent } from './radio-value/radio-value.component';
import { RadioInlineComponent } from './radio-inline/radio-inline.component';
import { DynamicrangeComponent } from './dynamicrange/dynamicrange.component';
import { DynamicrangeValueComponent } from './dynamicrange-value/dynamicrange-value.component';
import { DynamicrangeStepComponent } from './dynamicrange-step/dynamicrange-step.component';
import { TextareaCompleteComponent } from './textarea-complete/textarea-complete.component';
import { TextareaSizeComponent } from './textarea-size/textarea-size.component';
import { TextareaInputlengthComponent } from './textarea-inputlength/textarea-inputlength.component';
import { TextboxCompleteComponent } from './textbox-complete/textbox-complete.component';
import { DynamicurlCompleteComponent } from './dynamicurl-complete/dynamicurl-complete.component';
import { ClassCompleteComponent } from './class-complete/class-complete.component';
import { DescriptionCompleteComponent } from './description-complete/description-complete.component';
import { DisabledCompleteComponent } from './disabled-complete/disabled-complete.component';
import { FocusCompleteComponent } from './focus-complete/focus-complete.component';
import { HideCompleteComponent } from './hide-complete/hide-complete.component';
import { ReadonlyCompleteComponent } from './readonly-complete/readonly-complete.component';
import { ValueCompleteComponent } from './value-complete/value-complete.component';
import { ConditionalclassConditionalComponent } from './conditionalclass-conditional/conditionalclass-conditional.component';
import { ConditionaldescriptionConditionalComponent } from './conditionaldescription-conditional/conditionaldescription-conditional.component';
import { ConditionaldisabledConditionalComponent } from './conditionaldisabled-conditional/conditionaldisabled-conditional.component';
import { ConditionalhideConditionalComponent } from './conditionalhide-conditional/conditionalhide-conditional.component';
import { ConditionallabelConditionalComponent } from './conditionallabel-conditional/conditionallabel-conditional.component';
import { ConditionalplaceholderConditionalComponent } from './conditionalplaceholder-conditional/conditionalplaceholder-conditional.component';
import { ConditionalreadonlyConditionalComponent } from './conditionalreadonly-conditional/conditionalreadonly-conditional.component';
import { ConditionalvalueConditionalComponent } from './conditionalvalue-conditional/conditionalvalue-conditional.component';
import { OverridePropsCompleteComponent } from './override-props-complete/override-props-complete.component';


@NgModule({
  declarations: [DashboardComponent, GetCompleteComponent, DynamicCompleteComponent, CheckboxCompleteComponent, CheckboxSingleComponent, CheckboxMultiselectComponent, CheckboxValueComponent, CheckboxInlineComponent, CheckboxSelectallComponent, ColorCompleteComponent, DynamicdateCompleteComponent, DropdownStaticComponent, DropdownSyncComponent, DropdownAsyncComponent, DropdownValueComponent, DynamicemailCompleteComponent, DynamicfileCompleteComponent, DynamicfileMultipleComponent, DynamicpasswordComponent, RadioStaticComponent, RadioValueComponent, RadioInlineComponent, DynamicrangeComponent, DynamicrangeValueComponent, DynamicrangeStepComponent, TextareaCompleteComponent, TextareaSizeComponent, TextareaInputlengthComponent, TextboxCompleteComponent, DynamicurlCompleteComponent, ClassCompleteComponent, DescriptionCompleteComponent, DisabledCompleteComponent, FocusCompleteComponent, HideCompleteComponent, ReadonlyCompleteComponent, ValueCompleteComponent, ConditionalclassConditionalComponent, ConditionaldescriptionConditionalComponent, ConditionaldisabledConditionalComponent, ConditionalhideConditionalComponent, ConditionallabelConditionalComponent, ConditionalplaceholderConditionalComponent, ConditionalreadonlyConditionalComponent, ConditionalvalueConditionalComponent, OverridePropsCompleteComponent],
  imports: [
    CommonModule,FormsModule,ReactiveFormsModule, RxReactiveFormsModule,ROUTING
    , DashboardRoutingModule, RxLocalizationModule, RxRoutingModule,SharedModule, RxReactiveDynamicFormsModule
  ]
})
export class DashboardModule { }