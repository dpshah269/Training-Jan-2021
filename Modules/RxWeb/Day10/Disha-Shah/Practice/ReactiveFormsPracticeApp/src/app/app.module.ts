import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RxReactiveFormsModule} from '@rxweb/reactive-form-validators';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormbuilderconfigurationObjectComponent } from './formbuilderconfiguration-object/formbuilderconfiguration-object.component';
import { FormbuilderconfigurationArrayobjectComponent } from './formbuilderconfiguration-arrayobject/formbuilderconfiguration-arrayobject.component';
import { FormbuilderconfigurationIncludepropsComponent } from './formbuilderconfiguration-includeprops/formbuilderconfiguration-includeprops.component';
import { FormbuilderconfigurationAllpropsComponent } from './formbuilderconfiguration-allprops/formbuilderconfiguration-allprops.component';
import { FormbuilderconfigurationDynamicdefaultComponent } from './formbuilderconfiguration-dynamicdefault/formbuilderconfiguration-dynamicdefault.component';
import { FormbuilderconfigurationGenericentitiesComponent } from './formbuilderconfiguration-genericentities/formbuilderconfiguration-genericentities.component';
import { FormbuilderconfigurationIgnoreundefinedComponent } from './formbuilderconfiguration-ignoreundefined/formbuilderconfiguration-ignoreundefined.component';
import { FormbuilderconfigurationAbstractControlOptionsComponent } from './formbuilderconfiguration-abstract-control-options/formbuilderconfiguration-abstract-control-options.component';
import { GroupCompleteComponent } from './group-complete/group-complete.component';
import { FormgroupAddComponent } from './formgroup-add/formgroup-add.component';
import { RxFormGroupModelInstanceComponent } from './rx-form-group-model-instance/rx-form-group-model-instance.component';
import { RxFormGroupErrorMessageSummaryComponent } from './rx-form-group-error-message-summary/rx-form-group-error-message-summary.component';
import { DirtyModifiedValidatorComponent } from './dirty-modified-validator/dirty-modified-validator.component';
import { PatchCompleteValidatorComponent } from './patch-complete-validator/patch-complete-validator.component';
import { ResetControlsOnlyValidatorComponent } from './reset-controls-only-validator/reset-controls-only-validator.component';
import { ResetFormGroupsOnlyValidatorComponent } from './reset-form-groups-only-validator/reset-form-groups-only-validator.component';
import { ResetFormArraysOnlyValidatorComponent } from './reset-form-arrays-only-validator/reset-form-arrays-only-validator.component';
import { ResetControlsAndFormgroupsOnlyValidatorComponent } from './reset-controls-and-formgroups-only-validator/reset-controls-and-formgroups-only-validator.component';
import { ResetDefinedPropsOnlyValidatorComponent } from './reset-defined-props-only-validator/reset-defined-props-only-validator.component';
import { ResetAllValidatorComponent } from './reset-all-validator/reset-all-validator.component';
import { ResetWithValidatorComponent } from './reset-with-validator/reset-with-validator.component';
import { ResetValueValidatorComponent } from './reset-value-validator/reset-value-validator.component';
import { FormadataCompleteValidatorComponent } from './formadata-complete-validator/formadata-complete-validator.component';
import { DisableAddComponent } from './disable-add/disable-add.component';
import { ElementClassAddComponent } from './element-class-add/element-class-add.component';
import { ErrorAddComponent } from './error-add/error-add.component';
import { ModelAddComponent } from './model-add/model-add.component';
import { ModelElementComponent } from './model-element/model-element.component';
import { ModelErrorComponent } from './model-error/model-error.component';
import { ModelExcludeComponent } from './model-exclude/model-exclude.component';
import { PropAddComponent } from './prop-add/prop-add.component';
import { PropServerComponent } from './prop-server/prop-server.component';
import { PropDefaultComponent } from './prop-default/prop-default.component';
import { PropExcludeComponent } from './prop-exclude/prop-exclude.component';
import { PropPrimaryComponent } from './prop-primary/prop-primary.component';
import { PropArrayAddComponent } from './prop-array-add/prop-array-add.component';
import { PropArrayEntityComponent } from './prop-array-entity/prop-array-entity.component';
import { PropArrayServerComponent } from './prop-array-server/prop-array-server.component';
import { PropArrayMaxindexComponent } from './prop-array-maxindex/prop-array-maxindex.component';
import { PropArrayCreateblankComponent } from './prop-array-createblank/prop-array-createblank.component';
import { PropObjectAddComponent } from './prop-object-add/prop-object-add.component';
import { PropObjectServerComponent } from './prop-object-server/prop-object-server.component';

@NgModule({
  declarations: [
    AppComponent,
    FormbuilderconfigurationObjectComponent,
    FormbuilderconfigurationArrayobjectComponent,
    FormbuilderconfigurationIncludepropsComponent,
    FormbuilderconfigurationAllpropsComponent,
    FormbuilderconfigurationDynamicdefaultComponent,
    FormbuilderconfigurationGenericentitiesComponent,
    FormbuilderconfigurationIgnoreundefinedComponent,
    FormbuilderconfigurationAbstractControlOptionsComponent,
    GroupCompleteComponent,
    FormgroupAddComponent,
    RxFormGroupModelInstanceComponent,
    RxFormGroupErrorMessageSummaryComponent,
    DirtyModifiedValidatorComponent,
    PatchCompleteValidatorComponent,
    ResetControlsOnlyValidatorComponent,
    ResetFormGroupsOnlyValidatorComponent,
    ResetFormArraysOnlyValidatorComponent,
    ResetControlsAndFormgroupsOnlyValidatorComponent,
    ResetDefinedPropsOnlyValidatorComponent,
    ResetAllValidatorComponent,
    ResetWithValidatorComponent,
    ResetValueValidatorComponent,
    FormadataCompleteValidatorComponent,
    DisableAddComponent,
    ElementClassAddComponent,
    ErrorAddComponent,
    ModelAddComponent,
    ModelElementComponent,
    ModelErrorComponent,
    ModelExcludeComponent,
    PropAddComponent,
    PropServerComponent,
    PropDefaultComponent,
    PropExcludeComponent,
    PropPrimaryComponent,
    PropArrayAddComponent,
    PropArrayEntityComponent,
    PropArrayServerComponent,
    PropArrayMaxindexComponent,
    PropArrayCreateblankComponent,
    PropObjectAddComponent,
    PropObjectServerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RxReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
