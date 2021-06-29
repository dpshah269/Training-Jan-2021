import { Component, OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms"
import { RxFormBuilder } from '@rxweb/reactive-form-validators';
import { User } from '../Model/lessThanEqualToAsyncUserInfo';
@Component({
  selector: 'app-less-than-equal-to-async-add-decorator',
  templateUrl: './less-than-equal-to-async-add-decorator.component.html',
  styleUrls: ['./less-than-equal-to-async-add-decorator.component.css']
})
export class LessThanEqualToAsyncAddDecoratorComponent implements OnInit {

  userFormGroup: FormGroup

  constructor(
    private formBuilder: RxFormBuilder) { }

  ngOnInit() {
    let user = new User();
    this.userFormGroup = this.formBuilder.formGroup(user);
  }

}
