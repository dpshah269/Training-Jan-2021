import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { RxwebValidators } from '@rxweb/reactive-form-validators';
import { of } from 'rxjs';

@Component({
  selector: 'app-iban-async-add-validator',
  templateUrl: './iban-async-add-validator.component.html',
  styleUrls: ['./iban-async-add-validator.component.css']
})
export class IBanAsyncAddValidatorComponent implements OnInit {

  userInfoFormGroup: FormGroup

  constructor(
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.userInfoFormGroup = this.formBuilder.group({
      gBBankAccountNumber: ['', [], RxwebValidators.ibanAsync({ validatorConfig: of({ validatorConfig: of({ countryCode: 'US' }) })})],
      cRBankAccountNumber: ['', [], RxwebValidators.ibanAsync({ validatorConfig: of({ validatorConfig: of({ countryCode: 'CR', message: 'You must enter a Costa Rica account number .' }) })})],
      cHBankAccountNumber: ['', [], RxwebValidators.ibanAsync({ validatorConfig: of({ validatorConfig: of({ messageKey: 'ibanMessageKey', countryCode: 'CH' }) })})],
    });
  }

}
