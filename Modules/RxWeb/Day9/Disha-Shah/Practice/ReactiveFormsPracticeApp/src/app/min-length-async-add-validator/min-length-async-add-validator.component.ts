import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { RxwebValidators } from '@rxweb/reactive-form-validators';
import { of } from 'rxjs'
@Component({
  selector: 'app-min-length-async-add-validator',
  templateUrl: './min-length-async-add-validator.component.html',
  styleUrls: ['./min-length-async-add-validator.component.css']
})
export class MinLengthAsyncAddValidatorComponent implements OnInit {

  contactFormGroup: FormGroup

  constructor(
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.contactFormGroup = this.formBuilder.group({
      countryName: ['',],
      mobileNo: ['', [], RxwebValidators.minLengthAsync({ validatorConfig: of({ value: 10, message: 'Minimum 10 characters are allowed' }) })],
      landLineNo: ['', [], RxwebValidators.minLengthAsync({ validatorConfig: of({ value: 8, message: 'Minimum 8 characters are allowed' }) })],
      stateName: ['', [], RxwebValidators.minLengthAsync({ validatorConfig: of({ value: 3, messageKey: 'minLengthMessageKey', message: 'Minimum 3 characters are allowed' }) })],
    });
  }

}
