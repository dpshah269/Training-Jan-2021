import { Component, OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms"
import { RxFormBuilder } from '@rxweb/reactive-form-validators';
import { User } from '../Model/minDateAsyncUserInfo';
@Component({
  selector: 'app-min-date-async-add-decorator',
  templateUrl: './min-date-async-add-decorator.component.html',
  styleUrls: ['./min-date-async-add-decorator.component.css']
})
export class MinDateAsyncAddDecoratorComponent implements OnInit {

  userFormGroup: FormGroup

  constructor(
    private formBuilder: RxFormBuilder) { }

  ngOnInit() {
    let user = new User();
    this.userFormGroup = this.formBuilder.formGroup(user);
  }

}
