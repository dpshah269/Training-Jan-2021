import { Component, OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms"
import { RxFormBuilder } from '@rxweb/reactive-form-validators';
import { User } from '../Model/maxLengthAsyncUserInfo'
@Component({
  selector: 'app-max-length-async-add-decorator',
  templateUrl: './max-length-async-add-decorator.component.html',
  styleUrls: ['./max-length-async-add-decorator.component.css']
})
export class MaxLengthAsyncAddDecoratorComponent implements OnInit {

  userFormGroup: FormGroup

  constructor(
    private formBuilder: RxFormBuilder) { }

  ngOnInit() {
    let user = new User();
    this.userFormGroup = this.formBuilder.formGroup(user);
  }

}
