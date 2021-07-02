import { Component, OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms";
import { RxFormBuilder } from '@rxweb/reactive-form-validators';
import {User} from '../Models/ModelAddUserInfo'

@Component({
  selector: 'app-model-add',
  templateUrl: './model-add.component.html',
  styleUrls: ['./model-add.component.css']
})
export class ModelAddComponent implements OnInit {

  userFormGroup: FormGroup;
    constructor(private formBuilder: RxFormBuilder) { }
    ngOnInit() {
        let user = new User();
        this.userFormGroup = this.formBuilder.formGroup(user);
    }

}
