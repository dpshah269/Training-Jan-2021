import { Component, OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms"
import { RxFormBuilder } from '@rxweb/reactive-form-validators';
import { User } from '../Models/ToFloatAddUserInfo'
@Component({
  selector: 'app-to-float-add',
  templateUrl: './to-float-add.component.html',
  styleUrls: ['./to-float-add.component.css']
})
export class ToFloatAddComponent implements OnInit {

  userFormGroup: FormGroup

  constructor(
    private formBuilder: RxFormBuilder) { }

  ngOnInit() {
    let user = new User();
    this.userFormGroup = this.formBuilder.formGroup(user);
  }

}
