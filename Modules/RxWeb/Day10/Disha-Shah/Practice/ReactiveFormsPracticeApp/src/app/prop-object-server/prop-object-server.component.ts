import { Component, OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms"

import { RxFormBuilder, FormBuilderConfiguration } from '@rxweb/reactive-form-validators';
import {User,Address} from '../Models/PropObjectServerUserInfo'
@Component({
  selector: 'app-prop-object-server',
  templateUrl: './prop-object-server.component.html',
  styleUrls: ['./prop-object-server.component.css']
})
export class PropObjectServerComponent implements OnInit {

  userFormGroup: FormGroup

    constructor(
        private formBuilder: RxFormBuilder
    ) { }

    ngOnInit() {
        let user = new User();
        user.address = new Address();
        let formBuilderConfiguration = new FormBuilderConfiguration();
        let userData = {
            City:'Ahmedabad',
            Country:'India',
            email_Address:'bharat.patel@gmail.com',
        };
        formBuilderConfiguration.dynamicValidation = JSON.parse(JSON.stringify(userData));
        this.userFormGroup = this.formBuilder.formGroup(user);
    }

}
