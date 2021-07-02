import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { RxwebValidators, RxFormBuilder } from '@rxweb/reactive-form-validators';

@Component({
  selector: 'app-formbuilderconfiguration-abstract-control-options',
  templateUrl: './formbuilderconfiguration-abstract-control-options.component.html',
  styleUrls: ['./formbuilderconfiguration-abstract-control-options.component.css']
})
export class FormbuilderconfigurationAbstractControlOptionsComponent implements OnInit {

  userInfoFormGroup: FormGroup

  constructor(
    private formBuilder: RxFormBuilder) { }

  ngOnInit() {
    this.userInfoFormGroup = this.formBuilder.group({
      firstName: ['', RxwebValidators.required({message: 'This field is required'})],
    }, { abstractControlOptions: { firstName: 'blur' } });

  }

}
