import { Component, OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms"
import { RxFormBuilder } from '@rxweb/reactive-form-validators';
import { User } from '../Model/patternAsyncUserInfo'
@Component({
  selector: 'app-pattern-async-add-decorator',
  templateUrl: './pattern-async-add-decorator.component.html',
  styleUrls: ['./pattern-async-add-decorator.component.css']
})
export class PatternAsyncAddDecoratorComponent implements OnInit {

  userFormGroup: FormGroup

  constructor(
    private formBuilder: RxFormBuilder) { }

  ngOnInit() {
    let user = new User();
    this.userFormGroup = this.formBuilder.formGroup(user);
  }

}
