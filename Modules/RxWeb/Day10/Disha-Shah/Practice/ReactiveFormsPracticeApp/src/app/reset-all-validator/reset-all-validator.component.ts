import { Component, OnInit } from '@angular/core';
import { RxFormGroup, RxFormBuilder, FormGroupExtension, ResetFormType } from '@rxweb/reactive-form-validators';
import { FormArray } from '@angular/forms';

@Component({
  selector: 'app-reset-all-validator',
  templateUrl: './reset-all-validator.component.html',
  styleUrls: ['./reset-all-validator.component.css']
})
export class ResetAllValidatorComponent implements OnInit {

  userFormGroup: RxFormGroup

  constructor(
    private formBuilder: RxFormBuilder) { }

  ngOnInit() {

    this.userFormGroup = <RxFormGroup>this.formBuilder.group({
      firstName: [''],
      address: {
        areaName: ''
      },
      hobbies: [
        {
          name: ''
        }]
    });
  }
  getFormArray() {
    let formarray = this.userFormGroup.controls.hobbies as FormArray;
    return formarray.controls;
  }

  resetForm() {
    this.userFormGroup.resetForm({ resetType: ResetFormType.All });
  }

}
