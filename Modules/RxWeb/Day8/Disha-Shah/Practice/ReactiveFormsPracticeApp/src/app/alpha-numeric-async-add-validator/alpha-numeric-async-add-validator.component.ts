import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { RxwebValidators, ValidationAlphabetLocale } from '@rxweb/reactive-form-validators';
import { of } from 'rxjs';

@Component({
  selector: 'app-alpha-numeric-async-add-validator',
  templateUrl: './alpha-numeric-async-add-validator.component.html',
  styleUrls: ['./alpha-numeric-async-add-validator.component.css']
})
export class AlphaNumericAsyncAddValidatorComponent implements OnInit {

  locationFormGroup: FormGroup

  constructor(
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.locationFormGroup = this.formBuilder.group({
      areaName: ['', [], RxwebValidators.alphaNumericAsync()],
      flatAddress: ['', [], RxwebValidators.alphaNumericAsync({ validatorConfig: of({ allowWhiteSpace: true }) })],
      spanishcityName: ['', [], RxwebValidators.alphaNumericAsync({ validatorConfig: of({ locale: ValidationAlphabetLocale.spanish }) })],
      postalAddress: ['', [], RxwebValidators.alphaNumericAsync({ validatorConfig: of({ message: 'Please enter only alphanumerics, special characters are not allowed.' }) })],
      colonyName: ['', [], RxwebValidators.alphaNumericAsync({ validatorConfig: of({ messageKey: 'alphaNumericMessageKey' }) })],
    });
  }

}
