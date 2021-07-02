import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, } from "@angular/forms"
import { RxwebValidators, RxFormBuilder, RxFormGroup } from '@rxweb/reactive-form-validators';

@Component({
  selector: 'app-rx-form-group-error-message-summary',
  templateUrl: './rx-form-group-error-message-summary.component.html',
  styleUrls: ['./rx-form-group-error-message-summary.component.css']
})
export class RxFormGroupErrorMessageSummaryComponent implements OnInit {

  userFormGroup: RxFormGroup
  errorMessagesOnSubmit: {}
  constructor(
    private formBuilder: RxFormBuilder) { }

  ngOnInit() {
    this.userFormGroup = <RxFormGroup>this.formBuilder.group({
      userName: ['', RxwebValidators.alpha()],
      email: ['', RxwebValidators.required()]
    });
  }

  errorSummary() {
    this.errorMessagesOnSubmit = this.userFormGroup.getErrorSummary(true);
  }

}
