import { Component, OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms"
import { RxFormBuilder } from '@rxweb/reactive-form-validators';
import { User } from '../Models/BlacklistAddUserInfo'
@Component({
  selector: 'app-blacklist-add',
  templateUrl: './blacklist-add.component.html',
  styleUrls: ['./blacklist-add.component.css']
})
export class BlacklistAddComponent implements OnInit {

  userFormGroup: FormGroup

  constructor(
    private formBuilder: RxFormBuilder) { }

  ngOnInit() {
    let user = new User();
    this.userFormGroup = this.formBuilder.formGroup(user);
  }

}
