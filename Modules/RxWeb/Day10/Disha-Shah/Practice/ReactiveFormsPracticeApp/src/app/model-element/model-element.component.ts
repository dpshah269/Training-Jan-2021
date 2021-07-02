import { Component, OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms";
import { RxFormBuilder } from '@rxweb/reactive-form-validators';
import {User} from '../Models/ModelElementUserInfo'

@Component({
  selector: 'app-model-element',
  templateUrl: './model-element.component.html',
  styleUrls: ['./model-element.component.css']
})
export class ModelElementComponent implements OnInit {

  userFormGroup: FormGroup;
    constructor(private formBuilder: RxFormBuilder) { }
    ngOnInit() {
        let user = new User();
        this.userFormGroup = this.formBuilder.formGroup(user);
    }

}
