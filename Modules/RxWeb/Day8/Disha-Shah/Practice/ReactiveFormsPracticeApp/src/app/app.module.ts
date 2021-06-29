import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RxReactiveFormsModule} from '@rxweb/reactive-form-validators';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllOfAsyncAddValidatorComponent } from './all-of-async-add-validator/all-of-async-add-validator.component';
import { AllOfAsyncAddDecoratorComponent } from './all-of-async-add-decorator/all-of-async-add-decorator.component';
import { ChoiceAsyncAddValidatorComponent } from './choice-async-add-validator/choice-async-add-validator.component';
import { ChoiceAsyncAddDecoratorComponent } from './choice-async-add-decorator/choice-async-add-decorator.component';
import { NoneOfAsyncAddValidatorComponent } from './none-of-async-add-validator/none-of-async-add-validator.component';
import { NoneOfAsyncAddDecoratorComponent } from './none-of-async-add-decorator/none-of-async-add-decorator.component';
import { OneOfAsyncAddValidatorComponent } from './one-of-async-add-validator/one-of-async-add-validator.component';
import { OneOfAsyncAddDecoratorComponent } from './one-of-async-add-decorator/one-of-async-add-decorator.component';
import { PatternAsyncAddValidatorComponent } from './pattern-async-add-validator/pattern-async-add-validator.component';
import { PatternAsyncAddDecoratorComponent } from './pattern-async-add-decorator/pattern-async-add-decorator.component';
import { DateAsyncAddValidatorComponent } from './date-async-add-validator/date-async-add-validator.component';
import { DateAsyncAddDecoratorComponent } from './date-async-add-decorator/date-async-add-decorator.component';
import { MaxDateAsyncAddValidatorComponent } from './max-date-async-add-validator/max-date-async-add-validator.component';
import { MaxDateAsyncAddDecoratorComponent } from './max-date-async-add-decorator/max-date-async-add-decorator.component';
import { MinDateAsyncAddValidatorComponent } from './min-date-async-add-validator/min-date-async-add-validator.component';
import { MinDateAsyncAddDecoratorComponent } from './min-date-async-add-decorator/min-date-async-add-decorator.component';
import { MinTimeAsyncAddValidatorComponent } from './min-time-async-add-validator/min-time-async-add-validator.component';
import { MinTimeAsyncAddDecoratorComponent } from './min-time-async-add-decorator/min-time-async-add-decorator.component';
import { MaxTimeAsyncAddValidatorComponent } from './max-time-async-add-validator/max-time-async-add-validator.component';
import { MaxTimeAsyncAddDecoratorComponent } from './max-time-async-add-decorator/max-time-async-add-decorator.component';
import { TimeAsyncAddDecoratorComponent } from './time-async-add-decorator/time-async-add-decorator.component';
import { TimeAsyncAddValidatorComponent } from './time-async-add-validator/time-async-add-validator.component';
import { FileSizeAsyncAddValidatorComponent } from './file-size-async-add-validator/file-size-async-add-validator.component';
import { FileSizeAsyncAddDecoratorComponent } from './file-size-async-add-decorator/file-size-async-add-decorator.component';
import { ImageAsyncAddValidatortorComponent } from './image-async-add-validatortor/image-async-add-validatortor.component';
import { ImageAsyncAddDecoratorComponent } from './image-async-add-decorator/image-async-add-decorator.component';
import { CreditCardAsyncAddDecoratorComponent } from './credit-card-async-add-decorator/credit-card-async-add-decorator.component';
import { CreditCardAsyncAddValidatorComponent } from './credit-card-async-add-validator/credit-card-async-add-validator.component';
import { MaxNumberAsyncAddValidatorComponent } from './max-number-async-add-validator/max-number-async-add-validator.component';
import { MaxNumberAsyncAddDecoratorComponent } from './max-number-async-add-decorator/max-number-async-add-decorator.component';
import { MinNumberAsyncAddValidatorComponent } from './min-number-async-add-validator/min-number-async-add-validator.component';
import { MinNumberAsyncAddDecoratorComponent } from './min-number-async-add-decorator/min-number-async-add-decorator.component';
import { NumericAsyncAddValidatorComponent } from './numeric-async-add-validator/numeric-async-add-validator.component';
import { NumericAsyncAddDecoratorComponent } from './numeric-async-add-decorator/numeric-async-add-decorator.component';
import { RangeAsyncAddDecoratorComponent } from './range-async-add-decorator/range-async-add-decorator.component';
import { RangeAsyncAddValidatorComponent } from './range-async-add-validator/range-async-add-validator.component';
import { LessThanEqualToAsyncAddValidatorComponent } from './less-than-equal-to-async-add-validator/less-than-equal-to-async-add-validator.component';
import { LessThanEqualToAsyncAddDecoratorComponent } from './less-than-equal-to-async-add-decorator/less-than-equal-to-async-add-decorator.component';
import { LessThanAsyncAddValidatorComponent } from './less-than-async-add-validator/less-than-async-add-validator.component';
import { LessThanAsyncAddDecoratorComponent } from './less-than-async-add-decorator/less-than-async-add-decorator.component';
import { GreaterThanEqualToAsyncAddValidatorComponent } from './greater-than-equal-to-async-add-validator/greater-than-equal-to-async-add-validator.component';
import { GreaterThanEqualToAsyncAddDecoratorComponent } from './greater-than-equal-to-async-add-decorator/greater-than-equal-to-async-add-decorator.component';
import { GreaterThanAsyncAddValidatorComponent } from './greater-than-async-add-validator/greater-than-async-add-validator.component';
import { GreaterThanAsyncAddDecoratorComponent } from './greater-than-async-add-decorator/greater-than-async-add-decorator.component';
import { AlphaAsyncAddValidatorComponent } from './alpha-async-add-validator/alpha-async-add-validator.component';
import { AlphaAsyncAddDecoratorComponent } from './alpha-async-add-decorator/alpha-async-add-decorator.component';
import { AlphaNumericAsyncAddValidatorComponent } from './alpha-numeric-async-add-validator/alpha-numeric-async-add-validator.component';
import { AlphaNumericAsyncAddDecoratorComponent } from './alpha-numeric-async-add-decorator/alpha-numeric-async-add-decorator.component';

@NgModule({
  declarations: [
    AppComponent,
    AllOfAsyncAddValidatorComponent,
    AllOfAsyncAddDecoratorComponent,
    ChoiceAsyncAddValidatorComponent,
    ChoiceAsyncAddDecoratorComponent,
    NoneOfAsyncAddValidatorComponent,
    NoneOfAsyncAddDecoratorComponent,
    OneOfAsyncAddValidatorComponent,
    OneOfAsyncAddDecoratorComponent,
    PatternAsyncAddValidatorComponent,
    PatternAsyncAddDecoratorComponent,
    DateAsyncAddValidatorComponent,
    DateAsyncAddDecoratorComponent,
    MaxDateAsyncAddValidatorComponent,
    MaxDateAsyncAddDecoratorComponent,
    MinDateAsyncAddValidatorComponent,
    MinDateAsyncAddDecoratorComponent,
    MinTimeAsyncAddValidatorComponent,
    MinTimeAsyncAddDecoratorComponent,
    MaxTimeAsyncAddValidatorComponent,
    MaxTimeAsyncAddDecoratorComponent,
    TimeAsyncAddDecoratorComponent,
    TimeAsyncAddValidatorComponent,
    FileSizeAsyncAddValidatorComponent,
    FileSizeAsyncAddDecoratorComponent,
    ImageAsyncAddValidatortorComponent,
    ImageAsyncAddDecoratorComponent,
    CreditCardAsyncAddDecoratorComponent,
    CreditCardAsyncAddValidatorComponent,
    MaxNumberAsyncAddValidatorComponent,
    MaxNumberAsyncAddDecoratorComponent,
    MinNumberAsyncAddValidatorComponent,
    MinNumberAsyncAddDecoratorComponent,
    NumericAsyncAddValidatorComponent,
    NumericAsyncAddDecoratorComponent,
    RangeAsyncAddDecoratorComponent,
    RangeAsyncAddValidatorComponent,
    LessThanEqualToAsyncAddValidatorComponent,
    LessThanEqualToAsyncAddDecoratorComponent,
    LessThanAsyncAddValidatorComponent,
    LessThanAsyncAddDecoratorComponent,
    GreaterThanEqualToAsyncAddValidatorComponent,
    GreaterThanEqualToAsyncAddDecoratorComponent,
    GreaterThanAsyncAddValidatorComponent,
    GreaterThanAsyncAddDecoratorComponent,
    AlphaAsyncAddValidatorComponent,
    AlphaAsyncAddDecoratorComponent,
    AlphaNumericAsyncAddValidatorComponent,
    AlphaNumericAsyncAddDecoratorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RxReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
