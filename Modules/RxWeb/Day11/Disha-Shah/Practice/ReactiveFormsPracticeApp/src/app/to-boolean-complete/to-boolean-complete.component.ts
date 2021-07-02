import { Component, OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms"
import { RxFormBuilder } from '@rxweb/reactive-form-validators';
import { User } from '../Models/ToBooleanCompleteUserInfo'
@Component({
  selector: 'app-to-boolean-complete',
  templateUrl: './to-boolean-complete.component.html',
  styleUrls: ['./to-boolean-complete.component.css']
})
export class ToBooleanCompleteComponent implements OnInit {

  userFormGroup: FormGroup

  constructor(
    private formBuilder: RxFormBuilder) { }

  ngOnInit() {
    let user = new User();
    this.userFormGroup = this.formBuilder.formGroup(user);
  }

}
