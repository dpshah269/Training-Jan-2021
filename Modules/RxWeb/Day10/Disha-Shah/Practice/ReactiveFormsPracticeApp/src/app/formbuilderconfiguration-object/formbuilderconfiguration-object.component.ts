import { Component, OnInit } from '@angular/core';
import { RxFormBuilder, FormBuilderConfiguration, RxFormGroup } from '@rxweb/reactive-form-validators';
import { User, Address } from '../Models/FormbuilderconfigurationObjectUserInfo';

@Component({
  selector: 'app-formbuilderconfiguration-object',
  templateUrl: './formbuilderconfiguration-object.component.html',
  styleUrls: ['./formbuilderconfiguration-object.component.css']
})
export class FormbuilderconfigurationObjectComponent implements OnInit {

  userInfoFormGroup: RxFormGroup

  constructor(
    private formBuilder: RxFormBuilder) { }

  ngOnInit() {
    let user = new User();
    user.address = new Address();
    var formBuilderConfig = new FormBuilderConfiguration();
    formBuilderConfig.autoInstanceConfig = {
      objectPropInstanceConfig: [{
        propertyName: 'state',
      }]

    }
    this.userInfoFormGroup = <RxFormGroup>this.formBuilder.formGroup(user, formBuilderConfig);

  }

}
