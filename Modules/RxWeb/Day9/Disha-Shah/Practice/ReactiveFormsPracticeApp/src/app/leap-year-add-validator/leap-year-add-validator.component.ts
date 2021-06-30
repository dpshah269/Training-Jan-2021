import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
  selector: 'app-leap-year-add-validator',
  templateUrl: './leap-year-add-validator.component.html',
  styleUrls: ['./leap-year-add-validator.component.css']
})
export class LeapYearAddValidatorComponent implements OnInit {

  userFormGroup: FormGroup

  constructor(
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.userFormGroup = this.formBuilder.group({
      name: ['',],
      birthYear: ['', RxwebValidators.leapYear({ conditionalExpression: (x, y) => x.name == "Bharat" })],
      admissionYear: ['', RxwebValidators.leapYear({ conditionalExpression: 'x => x.name == "Bharat"' })],
      joiningYear: ['', RxwebValidators.leapYear({ message: '{{0}} is not a leap year' })],
      promotionYear: ['', RxwebValidators.leapYear({ messageKey: 'leapYearMessageKey' })],
    });
  }

}
