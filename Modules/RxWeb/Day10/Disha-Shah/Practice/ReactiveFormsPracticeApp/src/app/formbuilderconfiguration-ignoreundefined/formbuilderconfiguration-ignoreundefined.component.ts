import { Component, OnInit } from '@angular/core';
import { RxFormBuilder, FormBuilderConfiguration, RxFormGroup } from '@rxweb/reactive-form-validators';
import { User, Address } from '../Models/FormbuilderconfigurationIgnoreundefinedUserInfo';
@Component({
  selector: 'app-formbuilderconfiguration-ignoreundefined',
  templateUrl: './formbuilderconfiguration-ignoreundefined.component.html',
  styleUrls: ['./formbuilderconfiguration-ignoreundefined.component.css']
})
export class FormbuilderconfigurationIgnoreundefinedComponent implements OnInit {

  userInfoFormGroup: RxFormGroup

  constructor(
    private formBuilder: RxFormBuilder) { }

  ngOnInit() {
    let user = new User();
    user.address = new Address();
    var formBuilderConfig = new FormBuilderConfiguration();
    formBuilderConfig.ignoreUndefinedProps = ["address"];
    this.userInfoFormGroup = <RxFormGroup>this.formBuilder.formGroup(user, formBuilderConfig);

  }

}
