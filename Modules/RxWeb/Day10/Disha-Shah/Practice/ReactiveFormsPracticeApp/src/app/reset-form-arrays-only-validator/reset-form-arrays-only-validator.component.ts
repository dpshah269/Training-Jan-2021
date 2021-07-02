import { Component, OnInit } from '@angular/core';
import { RxFormGroup, RxFormBuilder, FormGroupExtension, ResetFormType } from '@rxweb/reactive-form-validators';
import { FormArray } from '@angular/forms';

@Component({
  selector: 'app-reset-form-arrays-only-validator',
  templateUrl: './reset-form-arrays-only-validator.component.html',
  styleUrls: ['./reset-form-arrays-only-validator.component.css']
})
export class ResetFormArraysOnlyValidatorComponent implements OnInit {

  userFormGroup: RxFormGroup

  constructor(
    private formBuilder: RxFormBuilder) { }

  ngOnInit() {

    this.userFormGroup = <RxFormGroup>this.formBuilder.group({

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
    this.userFormGroup.resetForm({ resetType: ResetFormType.FormArraysOnly });

  }

}
