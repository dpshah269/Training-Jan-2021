import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, } from "@angular/forms"
import { RxwebValidators, RxFormBuilder } from '@rxweb/reactive-form-validators';

@Component({
  selector: 'app-errormessage-complete-validator',
  templateUrl: './errormessage-complete-validator.component.html',
  styleUrls: ['./errormessage-complete-validator.component.css']
})
export class ErrormessageCompleteValidatorComponent implements OnInit {

  userFormGroup: FormGroup

  constructor(
    private formBuilder: RxFormBuilder) { }

  ngOnInit() {
    this.userFormGroup = this.formBuilder.group({
      userName: ['', RxwebValidators.required()],
      password: ['', [RxwebValidators.alpha(), RxwebValidators.password({ validation: { maxLength: 10, minLength: 5, digit: true, specialCharacter: true } })]],
    });

  }

}
