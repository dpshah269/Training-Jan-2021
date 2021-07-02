import { Component, OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms"
import { RxFormBuilder } from '@rxweb/reactive-form-validators';
import { User } from '../Models/RtrimAddUserInfo'
@Component({
  selector: 'app-rtrim-add',
  templateUrl: './rtrim-add.component.html',
  styleUrls: ['./rtrim-add.component.css']
})
export class RtrimAddComponent implements OnInit {

  userFormGroup: FormGroup

  constructor(
    private formBuilder: RxFormBuilder) { }

  ngOnInit() {
    let user = new User();
    this.userFormGroup = this.formBuilder.formGroup(user);
  }

}
