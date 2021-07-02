import { Component, OnInit } from '@angular/core';
import { RxFormGroup, RxFormBuilder, FormGroupExtension, ResetFormType } from '@rxweb/reactive-form-validators';

@Component({
  selector: 'app-reset-controls-and-formgroups-only-validator',
  templateUrl: './reset-controls-and-formgroups-only-validator.component.html',
  styleUrls: ['./reset-controls-and-formgroups-only-validator.component.css']
})
export class ResetControlsAndFormgroupsOnlyValidatorComponent implements OnInit {

  userFormGroup: RxFormGroup

  constructor(
    private formBuilder: RxFormBuilder) { }

  ngOnInit() {

    this.userFormGroup = <RxFormGroup>this.formBuilder.group({
      firstName: [''],
      address: {
        areaName: ''
      },
    });
  }

  resetForm() {
    this.userFormGroup.resetForm({ resetType: ResetFormType.ControlsAndFormGroupsOnly });

  }

}
