import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { RxwebValidators } from '@rxweb/reactive-form-validators';
import { of } from 'rxjs';

@Component({
  selector: 'app-starts-with-async-add-validator',
  templateUrl: './starts-with-async-add-validator.component.html',
  styleUrls: ['./starts-with-async-add-validator.component.css']
})
export class StartsWithAsyncAddValidatorComponent implements OnInit {

  userFormGroup: FormGroup

  constructor(
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.userFormGroup = this.formBuilder.group({
      name: ['', RxwebValidators.startsWithAsync({ validatorConfig: of({ value: 'B', message: '{{0}} does not starts with `B`' }) })],
      department: ['', RxwebValidators.startsWithAsync({ validatorConfig: of({ value: 'D', isRestrict: true, message: '{{0}} should not start with `D`' }) })],
      company: ['', RxwebValidators.startsWithAsync({ validatorConfig: of({ value: 'R', message: '{{0}} does not starts with `R`' }) })],
      skill: ['', RxwebValidators.startsWithAsync({ validatorConfig: of({ value: 'A', messageKey: 'startsWithMessageKey', message: '{{0}} does not starts with `A`' }) })],
    });
  }

}
