import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { RxwebValidators } from '@rxweb/reactive-form-validators';
import { of } from 'rxjs'

@Component({
  selector: 'app-max-length-async-add-validator',
  templateUrl: './max-length-async-add-validator.component.html',
  styleUrls: ['./max-length-async-add-validator.component.css']
})
export class MaxLengthAsyncAddValidatorComponent implements OnInit {

  userFormGroup: FormGroup

  constructor(
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.userFormGroup = this.formBuilder.group({
      firstName: ['', [], RxwebValidators.maxLengthAsync({ validatorConfig: of({ value: 16, message: 'Maximum 16 characters are allowed' }) })],
      userName: ['', [], RxwebValidators.maxLengthAsync({ validatorConfig: of({ value: 10, message: 'Maximum 10 characters are allowed' }) })],
      fullName: ['', [], RxwebValidators.maxLengthAsync({ validatorConfig: of({ value: 20, messageKey: 'maxLengthMessageKey', message: 'Maximum 20 characters are allowed' }) })],
    });
  }

}
