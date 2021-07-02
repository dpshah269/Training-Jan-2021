import { Component, OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms"
import { RxFormBuilder } from '@rxweb/reactive-form-validators';
import { User } from '../Models/EscapeAddUserInfo'
@Component({
  selector: 'app-escape-add',
  templateUrl: './escape-add.component.html',
  styleUrls: ['./escape-add.component.css']
})
export class EscapeAddComponent implements OnInit {

  userFormGroup: FormGroup

  constructor(
    private formBuilder: RxFormBuilder) { }

  ngOnInit() {
    let user = new User();
    this.userFormGroup = this.formBuilder.formGroup(user);
  }

}
