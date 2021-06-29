import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { RxwebValidators } from '@rxweb/reactive-form-validators';
import { of } from 'rxjs'

@Component({
  selector: 'app-max-date-async-add-validator',
  templateUrl: './max-date-async-add-validator.component.html',
  styleUrls: ['./max-date-async-add-validator.component.css']
})
export class MaxDateAsyncAddValidatorComponent implements OnInit {

  userFormGroup: FormGroup

  constructor(
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.userFormGroup = this.formBuilder.group({
      userName: ['',],
      allocationDate: ['', [], RxwebValidators.maxDateAsync({ validatorConfig: of({ value: '07/30/2018', message: '{{0}} exceeds the Maximum Date Limit' }) })],
      registrationDate: ['', [], RxwebValidators.maxDateAsync({ validatorConfig: of({ value: '07/30/2018', message: '{{0}} exceeds the Maximum Date Limit' }) })],
      enrollmentDate: ['',],
      lastRegistrationDate: ['', [], RxwebValidators.maxDateAsync({ validatorConfig: of({ fieldName: 'enrollmentDate', message: '{{0}} exceeds the Maximum Date Limit' }) })],
      confirmationDate: ['', [], RxwebValidators.maxDateAsync({ validatorConfig: of({ value: '07/30/2018', operator: '<', message: '{{0}} exceeds the Maximum Date Limit' }) })],
      resignationDate: ['', [], RxwebValidators.maxDateAsync({ validatorConfig: of({ value: '07/30/2018', messageKey: 'maxDateMessageKey', message: '{{0}} exceeds the Maximum Date Limit' }) })],
    });
  }

}
