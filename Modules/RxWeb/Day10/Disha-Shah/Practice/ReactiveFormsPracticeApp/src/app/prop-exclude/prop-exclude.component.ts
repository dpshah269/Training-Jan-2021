import { Component, OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms"

import { RxFormBuilder, FormBuilderConfiguration } from '@rxweb/reactive-form-validators';
import { User } from '../Models/PropExcludeUserInfo'
@Component({
  selector: 'app-prop-exclude',
  templateUrl: './prop-exclude.component.html',
  styleUrls: ['./prop-exclude.component.css']
})
export class PropExcludeComponent implements OnInit {

  userFormGroup: FormGroup

  constructor(
    private formBuilder: RxFormBuilder
  ) { }

  ngOnInit() {
    let user = new User();
    user.type = "Personal";
    this.userFormGroup = this.formBuilder.formGroup(user);
  }

}
