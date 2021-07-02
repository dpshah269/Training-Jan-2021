import { Component, OnInit } from '@angular/core';
import { RxFormGroup, RxFormBuilder, FormGroupExtension, ResetFormType } from '@rxweb/reactive-form-validators';

@Component({
  selector: 'app-reset-value-validator',
  templateUrl: './reset-value-validator.component.html',
  styleUrls: ['./reset-value-validator.component.css']
})
export class ResetValueValidatorComponent implements OnInit {

  userFormGroup: RxFormGroup

  constructor(
    private formBuilder: RxFormBuilder) { }

  ngOnInit() {

    this.userFormGroup = <RxFormGroup>this.formBuilder.group({
      firstName: ['']
    })
  }

  resetForm() {
    this.userFormGroup.resetForm({ value: { firstName: 'John' } });

  }

}
