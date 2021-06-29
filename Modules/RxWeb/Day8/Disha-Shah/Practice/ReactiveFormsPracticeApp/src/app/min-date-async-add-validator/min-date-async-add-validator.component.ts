import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { RxwebValidators } from '@rxweb/reactive-form-validators';
import { of } from 'rxjs';

@Component({
  selector: 'app-min-date-async-add-validator',
  templateUrl: './min-date-async-add-validator.component.html',
  styleUrls: ['./min-date-async-add-validator.component.css']
})
export class MinDateAsyncAddValidatorComponent implements OnInit {

  userFormGroup: FormGroup

  constructor(
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.userFormGroup = this.formBuilder.group({
      userName: ['',],
      allocationDate: ['', [], RxwebValidators.minDateAsync({ validatorConfig: of({ value: '07/30/2018', message: '{{0}} exceeds the Minimum Date Limit' }) })],
      registrationDate: ['', [], RxwebValidators.minDateAsync({ validatorConfig: of({ value: '07/30/2018', message: '{{0}} exceeds the Minimum Date Limit' }) })],
      enrollmentDate: ['',],
      lastRegistrationDate: ['', [], RxwebValidators.minDateAsync({ validatorConfig: of({ fieldName: 'enrollmentDate', message: '{{0}} exceeds the Minimum Date Limit' }) })],
      confirmationDate: ['', [], RxwebValidators.minDateAsync({ validatorConfig: of({ value: '07/30/2018', operator: '>', message: '{{0}} exceeds the Minimum Date Limit' }) })],
      resignationDate: ['', [], RxwebValidators.minDateAsync({ validatorConfig: of({ value: '07/30/2018', messageKey: 'minDateMessageKey', message: '{{0}} exceeds the Minimum Date Limit' }) })],
    });
  }

}
