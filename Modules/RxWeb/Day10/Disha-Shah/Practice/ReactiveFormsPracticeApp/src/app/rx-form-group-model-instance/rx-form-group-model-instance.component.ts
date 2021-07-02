import { Component, OnInit } from '@angular/core';
import { RxFormBuilder, RxFormGroup } from '@rxweb/reactive-form-validators';

import { User } from '../Models/RxFormGroupModelInstanceUserInfo'

@Component({
  selector: 'app-rx-form-group-model-instance',
  templateUrl: './rx-form-group-model-instance.component.html',
  styleUrls: ['./rx-form-group-model-instance.component.css']
})
export class RxFormGroupModelInstanceComponent implements OnInit {

  userFormGroup: RxFormGroup
  modelInstance: {};
  constructor(
    private formBuilder: RxFormBuilder) { }

  ngOnInit() {
    let user = new User();
    this.userFormGroup = <RxFormGroup>this.formBuilder.formGroup(user);
    this.modelInstance = this.userFormGroup.modelInstance;
  }

}
