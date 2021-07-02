import { Component, OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms"
import { RxFormBuilder } from '@rxweb/reactive-form-validators';
import { User } from '../Models/TrimAddUserInfo'
@Component({
  selector: 'app-trim-add',
  templateUrl: './trim-add.component.html',
  styleUrls: ['./trim-add.component.css']
})
export class TrimAddComponent implements OnInit {

  userFormGroup: FormGroup

  constructor(
    private formBuilder: RxFormBuilder) { }

  ngOnInit() {
    let user = new User();
    this.userFormGroup = this.formBuilder.formGroup(user);
  }

}
