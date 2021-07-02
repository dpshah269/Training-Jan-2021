import { Component, OnInit } from '@angular/core';
import { RxFormBuilder, FormBuilderConfiguration, RxFormGroup, RxwebValidators } from '@rxweb/reactive-form-validators';
import { ValidatorFn, AbstractControl, FormControl } from '@angular/forms';

@Component({
  selector: 'app-formbuilderconfiguration-allprops',
  templateUrl: './formbuilderconfiguration-allprops.component.html',
  styleUrls: ['./formbuilderconfiguration-allprops.component.css']
})
export class FormbuilderconfigurationAllpropsComponent implements OnInit {

  userInfoFormGroup: RxFormGroup

  constructor(
    private formBuilder: RxFormBuilder) { }

  ngOnInit() {
    var formBuilderConfig = new FormBuilderConfiguration();
    formBuilderConfig.applyAllProps = [RxwebValidators.required()]
    this.userInfoFormGroup = <RxFormGroup>this.formBuilder.group({
      firstName: ['', RxwebValidators.alpha()],
      lastName: ['', RxwebValidators.alpha()],
      birthDate: ['', RxwebValidators.minDate({value:'07/30/2018', message:'invalid date' })],
      password:['', RxwebValidators.password({validation:{maxLength: 15,minLength: 5} })]
    }, formBuilderConfig)
  }

}
