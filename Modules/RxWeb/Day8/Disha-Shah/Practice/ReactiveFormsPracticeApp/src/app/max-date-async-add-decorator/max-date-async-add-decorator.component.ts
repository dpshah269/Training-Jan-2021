import { Component, OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms"
import { RxFormBuilder } from '@rxweb/reactive-form-validators';
import { User } from '../Model/maxDateAsyncUserInfo';
@Component({
  selector: 'app-max-date-async-add-decorator',
  templateUrl: './max-date-async-add-decorator.component.html',
  styleUrls: ['./max-date-async-add-decorator.component.css']
})
export class MaxDateAsyncAddDecoratorComponent implements OnInit {

  userFormGroup: FormGroup

  constructor(
    private formBuilder: RxFormBuilder) { }

  ngOnInit() {
    let user = new User();
    this.userFormGroup = this.formBuilder.formGroup(user);
  }

}
