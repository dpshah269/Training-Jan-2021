import { Component, OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms";
import { RxFormBuilder } from '@rxweb/reactive-form-validators';
import { User } from '../Models/ModelErrorUserInfo'
@Component({
  selector: 'app-model-error',
  templateUrl: './model-error.component.html',
  styleUrls: ['./model-error.component.css']
})
export class ModelErrorComponent implements OnInit {

  userFormGroup: FormGroup;
  constructor(private formBuilder: RxFormBuilder) { }
  ngOnInit() {
    let user = new User();
    this.userFormGroup = this.formBuilder.formGroup(user);
  }
  submit() {
    if (this.userFormGroup.invalid)
      this.userFormGroup.controls.userName.setValue("john");
  }

}
