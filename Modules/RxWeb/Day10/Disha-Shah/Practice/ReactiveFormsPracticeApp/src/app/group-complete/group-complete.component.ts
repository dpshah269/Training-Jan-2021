import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from "@angular/forms"
import { RxwebValidators, RxFormBuilder } from '@rxweb/reactive-form-validators';

@Component({
  selector: 'app-group-complete',
  templateUrl: './group-complete.component.html',
  styleUrls: ['./group-complete.component.css']
})
export class GroupCompleteComponent implements OnInit {

  userInfoFormGroup: FormGroup
  studentInfoFormGroup: FormGroup

  constructor(
    private formBuilder: RxFormBuilder) { }

  ngOnInit() {
    this.userInfoFormGroup = this.formBuilder.group({
      userName: ['', RxwebValidators.required()],
      password: ['', RxwebValidators.compose({ validators: [RxwebValidators.required(), RxwebValidators.password({validation:{maxLength: 15,minLength: 5} })] })],
      confirmPassword: ['', RxwebValidators.compare({ fieldName: 'password', message: 'password does not match' })],
      address: {
        areaName: ''
      },
      hobbies: [
        {
          name: ''
        }]
    });

    this.studentInfoFormGroup = this.formBuilder.group({
      firstName:'',
      lastName:''
    },{
      dynamicValidation:{
        "firstName":{
          "required":true
        },
        "lastName":{
          "required":true
        }
      }
    });
  }

  getFormArray() {
    let formarray = this.userInfoFormGroup.controls.hobbies as FormArray;
    return formarray.controls;
  }

}
