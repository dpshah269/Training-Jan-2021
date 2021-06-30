import { Component, OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms"
import { RxFormBuilder } from '@rxweb/reactive-form-validators';
import { User } from '../Model/startsWithAsyncUserInfo'
@Component({
  selector: 'app-starts-with-async-add-decorator',
  templateUrl: './starts-with-async-add-decorator.component.html',
  styleUrls: ['./starts-with-async-add-decorator.component.css']
})
export class StartsWithAsyncAddDecoratorComponent implements OnInit {

  userFormGroup: FormGroup

  constructor(
    private formBuilder: RxFormBuilder) { }

  ngOnInit() {
    let user = new User();
    this.userFormGroup = this.formBuilder.formGroup(user);
  }

}
