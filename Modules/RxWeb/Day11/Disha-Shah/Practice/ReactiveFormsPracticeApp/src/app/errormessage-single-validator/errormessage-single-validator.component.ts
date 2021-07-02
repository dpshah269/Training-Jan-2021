import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, } from "@angular/forms"
import { RxwebValidators, RxFormBuilder } from '@rxweb/reactive-form-validators';

@Component({
  selector: 'app-errormessage-single-validator',
  templateUrl: './errormessage-single-validator.component.html',
  styleUrls: ['./errormessage-single-validator.component.css']
})
export class ErrormessageSingleValidatorComponent implements OnInit {

  userFormGroup: FormGroup

  constructor(
    private formBuilder: RxFormBuilder) { }

  ngOnInit() {
    this.userFormGroup = this.formBuilder.group({
      userName: ['', RxwebValidators.required()]
    });

  }

}
