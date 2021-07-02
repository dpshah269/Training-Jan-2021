import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RxReactiveFormsModule} from '@rxweb/reactive-form-validators';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlacklistAddComponent } from './blacklist-add/blacklist-add.component';
import { CustomAddComponent } from './custom-add/custom-add.component';
import { EscapeAddComponent } from './escape-add/escape-add.component';
import { PrefixAddComponent } from './prefix-add/prefix-add.component';
import { LtrimAddComponent } from './ltrim-add/ltrim-add.component';
import { RtrimAddComponent } from './rtrim-add/rtrim-add.component';
import { SuffixAddComponent } from './suffix-add/suffix-add.component';
import { ToBooleanCompleteComponent } from './to-boolean-complete/to-boolean-complete.component';
import { ToDateAddComponent } from './to-date-add/to-date-add.component';
import { ToDoubleAddComponent } from './to-double-add/to-double-add.component';
import { ToFloatAddComponent } from './to-float-add/to-float-add.component';
import { ToIntCompleteComponent } from './to-int-complete/to-int-complete.component';
import { ToStringAddComponent } from './to-string-add/to-string-add.component';
import { TrimAddComponent } from './trim-add/trim-add.component';
import { WhitelistAddComponent } from './whitelist-add/whitelist-add.component';
import { ErrormessageSingleValidatorComponent } from './errormessage-single-validator/errormessage-single-validator.component';
import { ErrormessageCompleteValidatorComponent } from './errormessage-complete-validator/errormessage-complete-validator.component';
import { ClassCompleteComponent } from './class-complete/class-complete.component';
import { CommitDynamicValidatorComponent } from './commit-dynamic-validator/commit-dynamic-validator.component';
import { BindCompleteValidatorComponent } from './bind-complete-validator/bind-complete-validator.component';
import { BindReturnValidatorComponent } from './bind-return-validator/bind-return-validator.component';
import { ModifiedValueCompleteValidatorComponent } from './modified-value-complete-validator/modified-value-complete-validator.component';
import { FileobjectCompleteValidatorComponent } from './fileobject-complete-validator/fileobject-complete-validator.component';
import { BackEndMessagesCompleteValidatorComponent } from './back-end-messages-complete-validator/back-end-messages-complete-validator.component';
import { BackEndMessagesAddValidatorComponent } from './back-end-messages-add-validator/back-end-messages-add-validator.component';
import { StronglyTypeAddComponent } from './strongly-type-add/strongly-type-add.component';
import { StronglyTypeDefinedComponent } from './strongly-type-defined/strongly-type-defined.component';
import { OrCompleteValidatorComponent } from './or-complete-validator/or-complete-validator.component';
import { AndAddValidatorComponent } from './and-add-validator/and-add-validator.component';
import { NotDigitValidatorComponent } from './not-digit-validator/not-digit-validator.component';
import { ConditionalControlDisableCompleteValidatorComponent } from './conditional-control-disable-complete-validator/conditional-control-disable-complete-validator.component';
import { AutoPushFormGroupCompleteComponent } from './auto-push-form-group-complete/auto-push-form-group-complete.component';
import { GreaterThanLessThanFormArrayCompleteValidatorComponent } from './greater-than-less-than-form-array-complete-validator/greater-than-less-than-form-array-complete-validator.component';
import { GreaterThanLessThanFormArrayAddValidatorComponent } from './greater-than-less-than-form-array-add-validator/greater-than-less-than-form-array-add-validator.component';

@NgModule({
  declarations: [
    AppComponent,
    BlacklistAddComponent,
    CustomAddComponent,
    EscapeAddComponent,
    PrefixAddComponent,
    LtrimAddComponent,
    RtrimAddComponent,
    SuffixAddComponent,
    ToBooleanCompleteComponent,
    ToDateAddComponent,
    ToDoubleAddComponent,
    ToFloatAddComponent,
    ToIntCompleteComponent,
    ToStringAddComponent,
    TrimAddComponent,
    WhitelistAddComponent,
    ErrormessageSingleValidatorComponent,
    ErrormessageCompleteValidatorComponent,
    ClassCompleteComponent,
    CommitDynamicValidatorComponent,
    BindCompleteValidatorComponent,
    BindReturnValidatorComponent,
    ModifiedValueCompleteValidatorComponent,
    FileobjectCompleteValidatorComponent,
    BackEndMessagesCompleteValidatorComponent,
    BackEndMessagesAddValidatorComponent,
    StronglyTypeAddComponent,
    StronglyTypeDefinedComponent,
    OrCompleteValidatorComponent,
    AndAddValidatorComponent,
    NotDigitValidatorComponent,
    ConditionalControlDisableCompleteValidatorComponent,
    AutoPushFormGroupCompleteComponent,
    GreaterThanLessThanFormArrayCompleteValidatorComponent,
    GreaterThanLessThanFormArrayAddValidatorComponent
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
