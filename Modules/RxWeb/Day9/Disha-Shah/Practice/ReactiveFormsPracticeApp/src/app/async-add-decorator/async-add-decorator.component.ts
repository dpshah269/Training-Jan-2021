import { Component, OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms"

import { RxFormBuilder, FormBuilderConfiguration } from '@rxweb/reactive-form-validators';
import {User} from '../Model/asyncDecoratorUserInfo'
@Component({
  selector: 'app-async-add-decorator',
  templateUrl: './async-add-decorator.component.html',
  styleUrls: ['./async-add-decorator.component.css']
})
export class AsyncAddDecoratorComponent implements OnInit {

  userFormGroup: FormGroup

    constructor(
        private formBuilder: RxFormBuilder    ) { }

    ngOnInit() {
        let user = new User();
        this.userFormGroup = this.formBuilder.formGroup(user);
    }

}
