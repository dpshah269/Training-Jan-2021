import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { RxwebValidators } from '@rxweb/reactive-form-validators';
import { of } from 'rxjs';

@Component({
  selector: 'app-contains-async-add-validator',
  templateUrl: './contains-async-add-validator.component.html',
  styleUrls: ['./contains-async-add-validator.component.css']
})
export class ContainsAsyncAddValidatorComponent implements OnInit {

  userFormGroup: FormGroup

  constructor(
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.userFormGroup = this.formBuilder.group({
      emailAddress: ['', [], RxwebValidators.containsAsync({ validatorConfig: of({ value: '@gmail.com', message: 'Please enter valid gmailId' }) })],
      otherEmailAddress: ['', [], RxwebValidators.containsAsync({ validatorConfig: of({ value: '@gmail.com', message: 'Please enter valid gmailId' }) })],
      organizationEmailAddress: ['', [], RxwebValidators.containsAsync({ validatorConfig: of({ value: '@gmail.com', messageKey: 'containsMessageKey', message: 'Please enter valid gmailId' }) })],
    });
  }

}
