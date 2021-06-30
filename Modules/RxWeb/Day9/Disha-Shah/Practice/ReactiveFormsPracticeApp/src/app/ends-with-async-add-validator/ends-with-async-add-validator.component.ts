import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { RxwebValidators } from '@rxweb/reactive-form-validators';
import { of } from 'rxjs';

@Component({
  selector: 'app-ends-with-async-add-validator',
  templateUrl: './ends-with-async-add-validator.component.html',
  styleUrls: ['./ends-with-async-add-validator.component.css']
})
export class EndsWithAsyncAddValidatorComponent implements OnInit {

  userFormGroup: FormGroup

  constructor(
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.userFormGroup = this.formBuilder.group({
      name: ['', [], RxwebValidators.endsWithAsync({ validatorConfig: of({ value: 't', message: '{{0}} does not ends with `t`' }) })],
      company: ['', [], RxwebValidators.endsWithAsync({ validatorConfig: of({ value: 'b', message: '{{0}} does not ends with `b`' }) })],
      skill: ['', [], RxwebValidators.endsWithAsync({ validatorConfig: of({ value: 'r', messageKey: 'endsWithMessageKey', message: '{{0}} does not ends with `r`' }) })],
    });
  }

}
