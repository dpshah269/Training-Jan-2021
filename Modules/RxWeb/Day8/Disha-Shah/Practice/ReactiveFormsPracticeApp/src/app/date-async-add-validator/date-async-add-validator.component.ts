import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { RxwebValidators } from '@rxweb/reactive-form-validators';
import { of } from 'rxjs';

@Component({
  selector: 'app-date-async-add-validator',
  templateUrl: './date-async-add-validator.component.html',
  styleUrls: ['./date-async-add-validator.component.css']
})
export class DateAsyncAddValidatorComponent implements OnInit {

  userInfoFormGroup: FormGroup

  constructor(
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.userInfoFormGroup = this.formBuilder.group({
      birthDate: ['', [], RxwebValidators.dateAsync()],
      registrationDate: ['', [], RxwebValidators.dateAsync({ validatorConfig: of({ allowISODate: true, message: '{{0}} is not a valid date' }) })],
      admissionDate: ['', [], RxwebValidators.dateAsync({ validatorConfig: of({ conditionalExpression: (x, y) => x.birthDate == "16/04/1997", message: '{{0}} is not a valid date' }) })],
      allocationDate: ['', [], RxwebValidators.dateAsync({ validatorConfig: of({ message: '{{0}} is not a valid date' }) })],
      confirmationDate: ['', [], RxwebValidators.dateAsync({ validatorConfig: of({ messageKey: 'dateMessageKey', message: '{{0}} is not a valid date' }) })],
    });
  }

}
