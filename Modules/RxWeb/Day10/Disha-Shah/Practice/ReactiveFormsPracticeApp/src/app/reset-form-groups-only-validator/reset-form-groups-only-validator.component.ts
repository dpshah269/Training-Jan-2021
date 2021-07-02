import { Component, OnInit } from '@angular/core';
import { RxFormGroup, RxFormBuilder, FormGroupExtension, ResetFormType } from '@rxweb/reactive-form-validators';

@Component({
  selector: 'app-reset-form-groups-only-validator',
  templateUrl: './reset-form-groups-only-validator.component.html',
  styleUrls: ['./reset-form-groups-only-validator.component.css']
})
export class ResetFormGroupsOnlyValidatorComponent implements OnInit {

  userFormGroup: RxFormGroup

  constructor(
    private formBuilder: RxFormBuilder) { }

  ngOnInit() {

    this.userFormGroup = <RxFormGroup>this.formBuilder.group({

      address: {
        areaName: ''
      }
    });
  }

  resetForm() {
    this.userFormGroup.resetForm({ resetType: ResetFormType.FormGroupsOnly });

  }

}
