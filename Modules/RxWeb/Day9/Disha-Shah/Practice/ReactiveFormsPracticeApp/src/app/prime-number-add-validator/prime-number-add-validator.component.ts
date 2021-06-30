import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
  selector: 'app-prime-number-add-validator',
  templateUrl: './prime-number-add-validator.component.html',
  styleUrls: ['./prime-number-add-validator.component.css']
})
export class PrimeNumberAddValidatorComponent implements OnInit {

  numberInfoFormGroup: FormGroup

  constructor(
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.numberInfoFormGroup = this.formBuilder.group({
      numberType: ['',],
      secondNumber: ['', RxwebValidators.primeNumber({ conditionalExpression: (x, y) => x.numberType == "Prime" })],
      thirdNumber: ['', RxwebValidators.primeNumber({ conditionalExpression: 'x => x.numberType =="Prime"' })],
      firstNumber: ['', RxwebValidators.primeNumber({ message: '{{0}} is not a prime number' })],
      fourthNumber: ['', RxwebValidators.primeNumber({ messageKey: 'primeNumberMessageKey' })],
    });
  }

}
