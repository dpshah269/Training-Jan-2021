import { Component, OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms"
import { RxFormBuilder } from '@rxweb/reactive-form-validators';
import { UserInfo } from '../Model/fileUserInfo'
@Component({
  selector: 'app-file-add-decorator',
  templateUrl: './file-add-decorator.component.html',
  styleUrls: ['./file-add-decorator.component.css']
})
export class FileAddDecoratorComponent implements OnInit {

  userInfoFormGroup: FormGroup
  fileTypes = ["Picture", "Document",];

  constructor(
    private formBuilder: RxFormBuilder) { }

  ngOnInit() {
    let userInfo = new UserInfo();
    this.userInfoFormGroup = this.formBuilder.formGroup(userInfo);
  }

}
