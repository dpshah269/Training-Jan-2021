import { Component, OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms";
import { RxFormBuilder } from '@rxweb/reactive-form-validators';
import { User } from '../Models/ModelExcludeUserInfo'
@Component({
  selector: 'app-model-exclude',
  templateUrl: './model-exclude.component.html',
  styleUrls: ['./model-exclude.component.css']
})
export class ModelExcludeComponent implements OnInit {

  userFormGroup: FormGroup;
  constructor(private formBuilder: RxFormBuilder) { }
  ngOnInit() {
    let user = new User();
    user.type = "Admin";
    this.userFormGroup = this.formBuilder.formGroup(user);
  }

}
