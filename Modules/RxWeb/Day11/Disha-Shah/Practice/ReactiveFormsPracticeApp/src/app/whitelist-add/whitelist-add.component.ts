import { Component, OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms"
import { RxFormBuilder } from '@rxweb/reactive-form-validators';
import { User } from '../Models/WhitelistAddUserInfo'
@Component({
  selector: 'app-whitelist-add',
  templateUrl: './whitelist-add.component.html',
  styleUrls: ['./whitelist-add.component.css']
})
export class WhitelistAddComponent implements OnInit {

  userFormGroup: FormGroup

  constructor(
    private formBuilder: RxFormBuilder) { }

  ngOnInit() {
    let user = new User();
    this.userFormGroup = this.formBuilder.formGroup(user);
  }

}
