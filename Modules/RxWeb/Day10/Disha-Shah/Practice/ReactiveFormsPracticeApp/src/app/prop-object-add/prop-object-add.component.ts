import { Component, OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms"

import { RxFormBuilder } from '@rxweb/reactive-form-validators';
import {Address,User} from '../Models/PropObjectAddUserInfo'
@Component({
  selector: 'app-prop-object-add',
  templateUrl: './prop-object-add.component.html',
  styleUrls: ['./prop-object-add.component.css']
})
export class PropObjectAddComponent implements OnInit {

  userFormGroup: FormGroup

    constructor(
        private formBuilder: RxFormBuilder
    ) { }

    ngOnInit() {
        let user = new User();
        user.address = new Address();
        this.userFormGroup = this.formBuilder.formGroup(user);
    }

}
