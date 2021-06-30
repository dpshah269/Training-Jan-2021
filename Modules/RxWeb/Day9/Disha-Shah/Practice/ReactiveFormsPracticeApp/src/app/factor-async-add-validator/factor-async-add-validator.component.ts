import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { RxwebValidators } from '@rxweb/reactive-form-validators';
import { of } from 'rxjs';

@Component({
  selector: 'app-factor-async-add-validator',
  templateUrl: './factor-async-add-validator.component.html',
  styleUrls: ['./factor-async-add-validator.component.css']
})
export class FactorAsyncAddValidatorComponent implements OnInit {

  userFormGroup: FormGroup

  constructor(
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.userFormGroup = this.formBuilder.group({
      firstNumber: ['',],
      fifthNumber: ['', [], RxwebValidators.factorAsync({ validatorConfig: of({ fieldName: 'firstNumber' }) })],
      fourthNumber: ['', [], RxwebValidators.factorAsync({ validatorConfig: of({ dividend: 50, message: '{{0}} is not a factor of 50' }) })],
      sixthNumber: ['', [], RxwebValidators.factorAsync({ validatorConfig: of({ dividend: 30, message: '{{0}} is not a factor of 30' }) })],
      seventhNumber: ['', [], RxwebValidators.factorAsync({ validatorConfig: of({ dividend: 50, messageKey: 'factorMessageKey', message: '{{0}} is not a factor of 50' }) })],
    });
  }

}
