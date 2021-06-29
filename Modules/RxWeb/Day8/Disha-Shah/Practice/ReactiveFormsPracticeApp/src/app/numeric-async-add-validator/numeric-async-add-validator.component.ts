import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { RxwebValidators, NumericValueType } from '@rxweb/reactive-form-validators';

@Component({
  selector: 'app-numeric-async-add-validator',
  templateUrl: './numeric-async-add-validator.component.html',
  styleUrls: ['./numeric-async-add-validator.component.css']
})
export class NumericAsyncAddValidatorComponent implements OnInit {

  userInfoFormGroup: FormGroup

  dataTypes = ["Real", "Integer",];
  constructor(
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.userInfoFormGroup = this.formBuilder.group({
      dataType: ['',],
      negativeNumber: ['', [], RxwebValidators.numericAsync({ acceptValue: NumericValueType.NegativeNumber, message: '{{0}} is not a positive number' })],
      totalAmount: ['', [], RxwebValidators.numericAsync({ isFormat: true, message: '{{0}} is not a positive number' })],
      decimalNumber: ['', [], RxwebValidators.numericAsync({ allowDecimal: true, message: '{{0}} is not a positive number' })],
      positiveNumber: ['', [], RxwebValidators.numericAsync({ message: '{{0}} is not a positive number' })],
      positiveNonDecimalNumber: ['', [], RxwebValidators.numericAsync({ messageKey: 'numericMessageKey', message: '{{0}} is not a positive number' })],
    });
  }

}
