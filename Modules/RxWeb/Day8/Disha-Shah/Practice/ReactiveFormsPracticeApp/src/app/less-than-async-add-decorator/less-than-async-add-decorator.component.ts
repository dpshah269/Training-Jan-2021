import { Component, OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms"
import { RxFormBuilder } from '@rxweb/reactive-form-validators';
import { User } from '../Model/lessThanAsyncUserInfo';
@Component({
  selector: 'app-less-than-async-add-decorator',
  templateUrl: './less-than-async-add-decorator.component.html',
  styleUrls: ['./less-than-async-add-decorator.component.css']
})
export class LessThanAsyncAddDecoratorComponent implements OnInit {

  userFormGroup: FormGroup

  constructor(
    private formBuilder: RxFormBuilder) { }

  ngOnInit() {
    let user = new User();
    this.userFormGroup = this.formBuilder.formGroup(user);
  }

}
