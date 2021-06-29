import { Component, OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms"
import { RxFormBuilder } from '@rxweb/reactive-form-validators';
import { UserInfo } from '../Model/numericAsyncUserInfo';
@Component({
  selector: 'app-numeric-async-add-decorator',
  templateUrl: './numeric-async-add-decorator.component.html',
  styleUrls: ['./numeric-async-add-decorator.component.css']
})
export class NumericAsyncAddDecoratorComponent implements OnInit {

  userInfoFormGroup: FormGroup
  dataTypes = ["Real", "Integer",];

  constructor(
    private formBuilder: RxFormBuilder) { }

  ngOnInit() {
    let userInfo = new UserInfo();
    this.userInfoFormGroup = this.formBuilder.formGroup(userInfo);
  }

}
