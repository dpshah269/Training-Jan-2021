import { Component, OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms"
import { RxFormBuilder } from '@rxweb/reactive-form-validators';
import { User } from '../Model/factorAsyncUserInfo';
@Component({
  selector: 'app-factor-async-add-decorator',
  templateUrl: './factor-async-add-decorator.component.html',
  styleUrls: ['./factor-async-add-decorator.component.css']
})
export class FactorAsyncAddDecoratorComponent implements OnInit {

  userFormGroup: FormGroup

  constructor(
    private formBuilder: RxFormBuilder) { }

  ngOnInit() {
    let user = new User();
    this.userFormGroup = this.formBuilder.formGroup(user);
  }

}
