import { Component, OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms"
import { RxFormBuilder } from '@rxweb/reactive-form-validators';
import { User } from '../Models/LtrimAddUserInfo'
@Component({
  selector: 'app-ltrim-add',
  templateUrl: './ltrim-add.component.html',
  styleUrls: ['./ltrim-add.component.css']
})
export class LtrimAddComponent implements OnInit {

  userFormGroup: FormGroup

  constructor(
    private formBuilder: RxFormBuilder) { }

  ngOnInit() {
    let user = new User();
    this.userFormGroup = this.formBuilder.formGroup(user);
  }

}
