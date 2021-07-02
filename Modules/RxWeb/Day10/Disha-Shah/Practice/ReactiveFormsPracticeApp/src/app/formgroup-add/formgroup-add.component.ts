import { Component, OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms"
import { RxFormBuilder, RxwebValidators } from '@rxweb/reactive-form-validators';
import {User} from '../Models/FormgroupUserInfo'
@Component({
  selector: 'app-formgroup-add',
  templateUrl: './formgroup-add.component.html',
  styleUrls: ['./formgroup-add.component.css']
})
export class FormgroupAddComponent implements OnInit {

  userInfoFormGroup: FormGroup

  constructor(
      private formBuilder: RxFormBuilder    ) { }

  ngOnInit() {
      let user = new User();
      this.userInfoFormGroup = this.formBuilder.formGroup(user);
  }

}
