import { Component, OnInit } from '@angular/core';
import { FormGroup,Validators } from "@angular/forms"

import { RxFormBuilder,IFormGroup } from '@rxweb/reactive-form-validators';
import {User} from '../Models/StronglyTypeDefinedUserInfo'
@Component({
  selector: 'app-strongly-type-defined',
  templateUrl: './strongly-type-defined.component.html',
  styleUrls: ['./strongly-type-defined.component.css']
})
export class StronglyTypeDefinedComponent implements OnInit {

  acceptCookies =[{"text":"Yes",value:"True"},{"text":"No",value:"false"}];
    userFormGroup: IFormGroup<User>

    constructor(
        private formBuilder: RxFormBuilder
    ) { }

    ngOnInit() {
        this.userFormGroup  = this.formBuilder.formGroup(User) as IFormGroup<User>;
    }


}
