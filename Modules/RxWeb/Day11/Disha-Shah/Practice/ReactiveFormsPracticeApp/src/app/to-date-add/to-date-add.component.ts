import { Component, OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms"
import { RxFormBuilder } from '@rxweb/reactive-form-validators';
import { User } from '../Models/ToDateAddUserInfo'
@Component({
  selector: 'app-to-date-add',
  templateUrl: './to-date-add.component.html',
  styleUrls: ['./to-date-add.component.css']
})
export class ToDateAddComponent implements OnInit {

  userFormGroup: FormGroup

  constructor(
    private formBuilder: RxFormBuilder) { }

  ngOnInit() {
    let user = new User();
    this.userFormGroup = this.formBuilder.formGroup(user);
  }

}
