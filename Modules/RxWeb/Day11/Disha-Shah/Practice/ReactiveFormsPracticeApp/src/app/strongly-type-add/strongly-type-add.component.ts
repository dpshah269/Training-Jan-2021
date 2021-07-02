import { Component, OnInit } from '@angular/core';
import { FormGroup,Validators } from "@angular/forms"

import { RxFormBuilder,IFormGroup } from '@rxweb/reactive-form-validators';
import {User} from '../Models/StronglyTypeAddUserInfo'
@Component({
  selector: 'app-strongly-type-add',
  templateUrl: './strongly-type-add.component.html',
  styleUrls: ['./strongly-type-add.component.css']
})
export class StronglyTypeAddComponent implements OnInit {

  userFormGroup: IFormGroup<User>

    constructor(
        private formBuilder: RxFormBuilder
    ) { }

    ngOnInit() {
        this.userFormGroup  = this.formBuilder.formGroup(User) as IFormGroup<User>;
        let user:User = this.userFormGroup.modelInstance;
       }

}
