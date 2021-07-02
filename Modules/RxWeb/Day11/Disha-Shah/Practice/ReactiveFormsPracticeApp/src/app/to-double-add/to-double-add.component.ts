import { Component, OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms"
import { RxFormBuilder } from '@rxweb/reactive-form-validators';
import { User } from '../Models/ToDoubleAddUserInfo'
@Component({
  selector: 'app-to-double-add',
  templateUrl: './to-double-add.component.html',
  styleUrls: ['./to-double-add.component.css']
})
export class ToDoubleAddComponent implements OnInit {

  userFormGroup: FormGroup

  constructor(
    private formBuilder: RxFormBuilder) { }

  ngOnInit() {
    let user = new User();
    this.userFormGroup = this.formBuilder.formGroup(user);
  }

}
