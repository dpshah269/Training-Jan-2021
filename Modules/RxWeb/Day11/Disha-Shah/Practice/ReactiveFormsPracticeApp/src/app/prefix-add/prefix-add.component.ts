import { Component, OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms"
import { RxFormBuilder } from '@rxweb/reactive-form-validators';
import { User } from '../Models/PrefixAddUserInfo'
@Component({
  selector: 'app-prefix-add',
  templateUrl: './prefix-add.component.html',
  styleUrls: ['./prefix-add.component.css']
})
export class PrefixAddComponent implements OnInit {

  userFormGroup: FormGroup

  constructor(
    private formBuilder: RxFormBuilder) { }

  ngOnInit() {
    let user = new User();
    this.userFormGroup = this.formBuilder.formGroup(user);
  }

}
