import { Component, OnInit } from '@angular/core';
import { FormGroup,FormArray } from "@angular/forms"
import { RxFormBuilder,RxFormGroup } from '@rxweb/reactive-form-validators';

@Component({
  selector: 'app-modified-value-complete-validator',
  templateUrl: './modified-value-complete-validator.component.html',
  styleUrls: ['./modified-value-complete-validator.component.css']
})
export class ModifiedValueCompleteValidatorComponent implements OnInit {

  userInfoFormGroup: RxFormGroup

    constructor(
        private formBuilder: RxFormBuilder    ) { }

    ngOnInit() {
      this.userInfoFormGroup = <RxFormGroup>this.formBuilder.group({
          firstName:[''],
          address:{
            areaName:''
          },
          hobbies:[
          {
            name:''
          }]
        });
    }
 getFormArray(){
      let formarray = this.userInfoFormGroup.controls.hobbies as FormArray;
      return formarray.controls;
    }
    modifiedvalue()
    {
          this.userInfoFormGroup.modifiedValue
    }

}
