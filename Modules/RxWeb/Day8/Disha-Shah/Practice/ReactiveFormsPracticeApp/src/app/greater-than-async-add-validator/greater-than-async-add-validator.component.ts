import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { RxwebValidators } from '@rxweb/reactive-form-validators';
import { of } from 'rxjs';
@Component({
  selector: 'app-greater-than-async-add-validator',
  templateUrl: './greater-than-async-add-validator.component.html',
  styleUrls: ['./greater-than-async-add-validator.component.css']
})
export class GreaterThanAsyncAddValidatorComponent implements OnInit {

  userFormGroup: FormGroup

  constructor(
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.userFormGroup = this.formBuilder.group({
      age: ['',],
      retiermentAge: ['', [], RxwebValidators.greaterThanAsync({ validatorConfig: of({ fieldName: 'age' }) })],
      minimumAge: ['', [], RxwebValidators.greaterThanAsync({ validatorConfig: of({ value: 18 }) })],
      otherAge: ['', [], RxwebValidators.greaterThanAsync({ validatorConfig: of({ fieldName: 'age', message: 'Please enter number greater than 0.' }) })],
      joiningAge: ['', [], RxwebValidators.greaterThanAsync({ validatorConfig: of({ fieldName: 'age', messageKey: 'greaterThanMessageKey' }) })],
    });
  }

}
