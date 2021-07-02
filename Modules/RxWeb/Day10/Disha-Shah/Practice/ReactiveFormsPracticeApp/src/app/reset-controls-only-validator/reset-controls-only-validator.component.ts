import { Component, OnInit } from '@angular/core';
import { RxFormGroup, RxFormBuilder, FormGroupExtension, ResetFormType } from '@rxweb/reactive-form-validators';

@Component({
  selector: 'app-reset-controls-only-validator',
  templateUrl: './reset-controls-only-validator.component.html',
  styleUrls: ['./reset-controls-only-validator.component.css']
})
export class ResetControlsOnlyValidatorComponent implements OnInit {

  userFormGroup: RxFormGroup

  constructor(
    private formBuilder: RxFormBuilder) { }

  ngOnInit() {

    this.userFormGroup = <RxFormGroup>this.formBuilder.group({
      firstName: [''],
    });
  }

  resetForm() {
    this.userFormGroup.resetForm({ resetType: ResetFormType.ControlsOnly });
  }

}
