import { Component, OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms";
import { RxFormBuilder } from '@rxweb/reactive-form-validators';
import {User} from '../Models/ElementClassAddUserInfo'
@Component({
  selector: 'app-element-class-add',
  templateUrl: './element-class-add.component.html',
  styleUrls: ['./element-class-add.component.css']
})
export class ElementClassAddComponent implements OnInit {

  userFormGroup: FormGroup;
    constructor(private formBuilder: RxFormBuilder) { }
    ngOnInit() {
        let user = new User();
        this.userFormGroup = this.formBuilder.formGroup(user);
    }

}
