import { Component, OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms"
import { RxFormBuilder } from '@rxweb/reactive-form-validators';
import { User } from '../Model/endsWithAsyncUserInfo';
@Component({
  selector: 'app-ends-with-async-add-decorator',
  templateUrl: './ends-with-async-add-decorator.component.html',
  styleUrls: ['./ends-with-async-add-decorator.component.css']
})
export class EndsWithAsyncAddDecoratorComponent implements OnInit {

  userFormGroup: FormGroup

  constructor(
    private formBuilder: RxFormBuilder) { }

  ngOnInit() {
    let user = new User();
    this.userFormGroup = this.formBuilder.formGroup(user);
  }

}
