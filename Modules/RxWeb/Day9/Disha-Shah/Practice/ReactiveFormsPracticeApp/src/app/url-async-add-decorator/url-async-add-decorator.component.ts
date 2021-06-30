import { Component, OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms"
import { RxFormBuilder } from '@rxweb/reactive-form-validators';
import { User } from '../Model/urlAsyncUserInfo'
@Component({
  selector: 'app-url-async-add-decorator',
  templateUrl: './url-async-add-decorator.component.html',
  styleUrls: ['./url-async-add-decorator.component.css']
})
export class UrlAsyncAddDecoratorComponent implements OnInit {

  userFormGroup: FormGroup

  constructor(
    private formBuilder: RxFormBuilder) { }

  ngOnInit() {
    let user = new User();
    this.userFormGroup = this.formBuilder.formGroup(user);
  }

}
