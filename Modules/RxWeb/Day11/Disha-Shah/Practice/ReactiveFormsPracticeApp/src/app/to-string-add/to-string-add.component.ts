import { Component, OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms"
import { RxFormBuilder } from '@rxweb/reactive-form-validators';
import { User } from '../Models/ToStringAddUserInfo'
@Component({
  selector: 'app-to-string-add',
  templateUrl: './to-string-add.component.html',
  styleUrls: ['./to-string-add.component.css']
})
export class ToStringAddComponent implements OnInit {

  userFormGroup: FormGroup

  constructor(
    private formBuilder: RxFormBuilder) { }

  ngOnInit() {
    let user = new User();
    this.userFormGroup = this.formBuilder.formGroup(user);
  }

}
