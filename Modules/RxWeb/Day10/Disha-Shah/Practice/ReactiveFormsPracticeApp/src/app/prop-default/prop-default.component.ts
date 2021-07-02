import { Component, OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms"

import { RxFormBuilder } from '@rxweb/reactive-form-validators';
import { User } from '../Models/PropDefaultUserInfo'
@Component({
  selector: 'app-prop-default',
  templateUrl: './prop-default.component.html',
  styleUrls: ['./prop-default.component.css']
})
export class PropDefaultComponent implements OnInit {

  userFormGroup: FormGroup

  constructor(
    private formBuilder: RxFormBuilder
  ) { }

  ngOnInit() {
    let user = new User();
    this.userFormGroup = this.formBuilder.formGroup(user);
  }

}
