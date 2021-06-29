import { Component, OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms"
import { RxFormBuilder } from '@rxweb/reactive-form-validators';
import { UserInfo } from '../Model/dateAsyncUserInfo';
@Component({
  selector: 'app-date-async-add-decorator',
  templateUrl: './date-async-add-decorator.component.html',
  styleUrls: ['./date-async-add-decorator.component.css']
})
export class DateAsyncAddDecoratorComponent implements OnInit {

  userInfoFormGroup: FormGroup

  constructor(
    private formBuilder: RxFormBuilder) { }

  ngOnInit() {
    let userInfo = new UserInfo();
    this.userInfoFormGroup = this.formBuilder.formGroup(userInfo);
  }

}
