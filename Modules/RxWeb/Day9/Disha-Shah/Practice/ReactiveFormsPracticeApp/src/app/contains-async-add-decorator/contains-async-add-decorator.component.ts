import { Component, OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms"
import { RxFormBuilder } from '@rxweb/reactive-form-validators';
import { User } from '../Model/containsAsyncUserInfo';

@Component({
  selector: 'app-contains-async-add-decorator',
  templateUrl: './contains-async-add-decorator.component.html',
  styleUrls: ['./contains-async-add-decorator.component.css']
})
export class ContainsAsyncAddDecoratorComponent implements OnInit {

  userFormGroup: FormGroup

  constructor(
    private formBuilder: RxFormBuilder) { }

  ngOnInit() {
    let user = new User();
    this.userFormGroup = this.formBuilder.formGroup(user);
  }

}
