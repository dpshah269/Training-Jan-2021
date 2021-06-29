import { Component, OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms"
import { RxFormBuilder } from '@rxweb/reactive-form-validators';
import { UserInfo } from '../Model/fileSizeAsyncUserInfo';
@Component({
  selector: 'app-file-size-async-add-decorator',
  templateUrl: './file-size-async-add-decorator.component.html',
  styleUrls: ['./file-size-async-add-decorator.component.css']
})
export class FileSizeAsyncAddDecoratorComponent implements OnInit {

  userInfoFormGroup: FormGroup
  fileTypes = ["Picture", "Document",];

  constructor(
    private formBuilder: RxFormBuilder) { }

  ngOnInit() {
    let userInfo = new UserInfo();
    this.userInfoFormGroup = this.formBuilder.formGroup(userInfo);
  }

}
