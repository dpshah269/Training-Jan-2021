import { Component, OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms"
import { RxFormBuilder } from '@rxweb/reactive-form-validators';
import { User } from '../Model/greaterThanEqualToAsyncUserInfo';
@Component({
  selector: 'app-greater-than-equal-to-async-add-decorator',
  templateUrl: './greater-than-equal-to-async-add-decorator.component.html',
  styleUrls: ['./greater-than-equal-to-async-add-decorator.component.css']
})
export class GreaterThanEqualToAsyncAddDecoratorComponent implements OnInit {

  userFormGroup: FormGroup

  constructor(
    private formBuilder: RxFormBuilder) { }

  ngOnInit() {
    let user = new User();
    this.userFormGroup = this.formBuilder.formGroup(user);
  }

}
