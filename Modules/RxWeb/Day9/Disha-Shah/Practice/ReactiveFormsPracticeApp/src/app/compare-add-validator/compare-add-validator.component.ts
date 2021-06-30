import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
  selector: 'app-compare-add-validator',
  templateUrl: './compare-add-validator.component.html',
  styleUrls: ['./compare-add-validator.component.css']
})
export class CompareAddValidatorComponent implements OnInit {

  userFormGroup: FormGroup

  constructor(
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.userFormGroup = this.formBuilder.group({
      email: ['',],
      confirmEmail: ['', RxwebValidators.compare({ fieldName: 'email' })],
      password: ['',],
      confirmPassword: ['', RxwebValidators.compare({ fieldName: 'password', message: 'You must enter same password' })],
      contactNumber: ['',],
      confirmContactNumber: ['', RxwebValidators.compare({ fieldName: 'contactNumber', messageKey: 'compareMessageKey' })],
    });
  }

}
