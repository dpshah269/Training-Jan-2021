import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {RxReactiveFormsModule} from '@rxweb/reactive-form-validators';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContainsAsyncAddValidatorComponent } from './contains-async-add-validator/contains-async-add-validator.component';
import { ContainsAsyncAddDecoratorComponent } from './contains-async-add-decorator/contains-async-add-decorator.component';
import { EndsWithAsyncAddValidatorComponent } from './ends-with-async-add-validator/ends-with-async-add-validator.component';
import { EndsWithAsyncAddDecoratorComponent } from './ends-with-async-add-decorator/ends-with-async-add-decorator.component';
import { FactorAsyncAddValidatorComponent } from './factor-async-add-validator/factor-async-add-validator.component';
import { FactorAsyncAddDecoratorComponent } from './factor-async-add-decorator/factor-async-add-decorator.component';
import { IBanAsyncAddValidatorComponent } from './iban-async-add-validator/iban-async-add-validator.component';
import { IPAsyncAddValidatorComponent } from './ipasync-add-validator/ipasync-add-validator.component';
import { MaxLengthAsyncAddValidatorComponent } from './max-length-async-add-validator/max-length-async-add-validator.component';
import { MaxLengthAsyncAddDecoratorComponent } from './max-length-async-add-decorator/max-length-async-add-decorator.component';
import { MinLengthAsyncAddValidatorComponent } from './min-length-async-add-validator/min-length-async-add-validator.component';
import { MinLengthAsyncAddDecoratorComponent } from './min-length-async-add-decorator/min-length-async-add-decorator.component';
import { DynamicMinLengthAsyncAddValidatorComponent } from './dynamic-min-length-async-add-validator/dynamic-min-length-async-add-validator.component';
import { HttpClientModule } from '@angular/common/http';
import { StartsWithAsyncAddValidatorComponent } from './starts-with-async-add-validator/starts-with-async-add-validator.component';
import { StartsWithAsyncAddDecoratorComponent } from './starts-with-async-add-decorator/starts-with-async-add-decorator.component';
import { UrlAsyncAddValidatorComponent } from './url-async-add-validator/url-async-add-validator.component';
import { UrlAsyncAddDecoratorComponent } from './url-async-add-decorator/url-async-add-decorator.component';
import { DynamicAllOfAsyncAddValidatorComponent } from './dynamic-all-of-add-validator/dynamic-all-of-async-add-validator.component';
import { DynamicAllOfAsyncAddDecoratorComponent } from './dynamic-all-of-add-decorator/dynamic-all-of-async-add-decorator.component';
import { UniqueAddValidatorComponent } from './unique-add-validator/unique-add-validator.component';
import { UniqueAddDecoratorComponent } from './unique-add-decorator/unique-add-decorator.component';
import { AsyncAddDecoratorComponent } from './async-add-decorator/async-add-decorator.component';
import { AsyncAddTemplateComponent } from './async-add-template/async-add-template.component';
import { ComposeAddValidatorComponent } from './compose-add-validator/compose-add-validator.component';
import { ComposeAddDecoratorComponent } from './compose-add-decorator/compose-add-decorator.component';
import { MaskAddValidatorComponent } from './mask-add-validator/mask-add-validator.component';
import { MaskAddDecoratorComponent } from './mask-add-decorator/mask-add-decorator.component';
import { FileAddValidatorComponent } from './file-add-validator/file-add-validator.component';
import { FileAddDecoratorComponent } from './file-add-decorator/file-add-decorator.component';
import { DigitAddValidatorComponent } from './digit-add-validator/digit-add-validator.component';
import { EvenAddValidatorComponent } from './even-add-validator/even-add-validator.component';
import { LatitudeAddValidatorComponent } from './latitude-add-validator/latitude-add-validator.component';
import { LatLongAddValidatorComponent } from './lat-long-add-validator/lat-long-add-validator.component';
import { LeapYearAddValidatorComponent } from './leap-year-add-validator/leap-year-add-validator.component';
import { LongitudeAddValidatorComponent } from './longitude-add-validator/longitude-add-validator.component';
import { OddAddValidatorComponent } from './odd-add-validator/odd-add-validator.component';
import { PortAddValidatorComponent } from './port-add-validator/port-add-validator.component';
import { PrimeNumberAddValidatorComponent } from './prime-number-add-validator/prime-number-add-validator.component';
import { CompareAddValidatorComponent } from './compare-add-validator/compare-add-validator.component';
import { DifferentAddValidatorComponent } from './different-add-validator/different-add-validator.component';
import { AsciiAddValidatorComponent } from './ascii-add-validator/ascii-add-validator.component';
import { EmailAddValidatorComponent } from './email-add-validator/email-add-validator.component';
import { ExtensionAddValidatorComponent } from './extension-add-validator/extension-add-validator.component';
import { JsonAddValidatorComponent } from './json-add-validator/json-add-validator.component';
import { LowercaseAddValidatorComponent } from './lowercase-add-validator/lowercase-add-validator.component';
import { PasswordAddValidatorComponent } from './password-add-validator/password-add-validator.component';
import { UppercaseAddValidatorComponent } from './uppercase-add-validator/uppercase-add-validator.component';
import { NotEmptyAddValidatorComponent } from './not-empty-add-validator/not-empty-add-validator.component';
import { RequiredAddValidatorComponent } from './required-add-validator/required-add-validator.component';
import { RequiredTrueAddValidatorComponent } from './required-true-add-validator/required-true-add-validator.component';
import { StudentAdmissionFormComponent } from './student-admission-form/student-admission-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ContainsAsyncAddValidatorComponent,
    ContainsAsyncAddDecoratorComponent,
    EndsWithAsyncAddValidatorComponent,
    EndsWithAsyncAddDecoratorComponent,
    FactorAsyncAddValidatorComponent,
    FactorAsyncAddDecoratorComponent,
    IBanAsyncAddValidatorComponent,
    IPAsyncAddValidatorComponent,
    MaxLengthAsyncAddValidatorComponent,
    MaxLengthAsyncAddDecoratorComponent,
    MinLengthAsyncAddValidatorComponent,
    MinLengthAsyncAddDecoratorComponent,
    DynamicMinLengthAsyncAddValidatorComponent,
    StartsWithAsyncAddValidatorComponent,
    StartsWithAsyncAddDecoratorComponent,
    UrlAsyncAddValidatorComponent,
    UrlAsyncAddDecoratorComponent,
    DynamicAllOfAsyncAddValidatorComponent,
    DynamicAllOfAsyncAddDecoratorComponent,
    UniqueAddValidatorComponent,
    UniqueAddDecoratorComponent,
    AsyncAddDecoratorComponent,
    AsyncAddTemplateComponent,
    ComposeAddValidatorComponent,
    ComposeAddDecoratorComponent,
    MaskAddValidatorComponent,
    MaskAddDecoratorComponent,
    FileAddValidatorComponent,
    FileAddDecoratorComponent,
    DigitAddValidatorComponent,
    EvenAddValidatorComponent,
    LatitudeAddValidatorComponent,
    LatLongAddValidatorComponent,
    LeapYearAddValidatorComponent,
    LongitudeAddValidatorComponent,
    OddAddValidatorComponent,
    PortAddValidatorComponent,
    PrimeNumberAddValidatorComponent,
    CompareAddValidatorComponent,
    DifferentAddValidatorComponent,
    AsciiAddValidatorComponent,
    EmailAddValidatorComponent,
    ExtensionAddValidatorComponent,
    JsonAddValidatorComponent,
    LowercaseAddValidatorComponent,
    PasswordAddValidatorComponent,
    UppercaseAddValidatorComponent,
    NotEmptyAddValidatorComponent,
    RequiredAddValidatorComponent,
    RequiredTrueAddValidatorComponent,
    StudentAdmissionFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RxReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
