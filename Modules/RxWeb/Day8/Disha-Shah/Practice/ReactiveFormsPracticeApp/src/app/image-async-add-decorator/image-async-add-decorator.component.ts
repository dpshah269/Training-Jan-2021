import { Component, OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms"
import { RxFormBuilder } from '@rxweb/reactive-form-validators';
import { UserInfo } from '../Model/imageAsyncUserInfo';
@Component({
  selector: 'app-image-async-add-decorator',
  templateUrl: './image-async-add-decorator.component.html',
  styleUrls: ['./image-async-add-decorator.component.css']
})
export class ImageAsyncAddDecoratorComponent implements OnInit {

  userInfoFormGroup: FormGroup
  ImageTypes = ["Picture", "IdentityCard",];

  constructor(
    private formBuilder: RxFormBuilder) { }

  ngOnInit() {
    let userInfo = new UserInfo();
    this.userInfoFormGroup = this.formBuilder.formGroup(userInfo);
  }

}
