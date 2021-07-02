import { Component, OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms"

import { RxFormBuilder } from '@rxweb/reactive-form-validators';
import { User } from '../Models/PropAddUserInfo'
@Component({
  selector: 'app-prop-add',
  templateUrl: './prop-add.component.html',
  styleUrls: ['./prop-add.component.css']
})
export class PropAddComponent implements OnInit {

  userFormGroup: FormGroup

  constructor(
    private formBuilder: RxFormBuilder
  ) { }

  ngOnInit() {
    let user = new User();
    this.userFormGroup = this.formBuilder.formGroup(user);
  }

}
