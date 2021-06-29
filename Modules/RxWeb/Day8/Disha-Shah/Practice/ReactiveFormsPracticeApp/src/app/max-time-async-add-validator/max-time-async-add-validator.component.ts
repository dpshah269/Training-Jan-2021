import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { RxwebValidators } from '@rxweb/reactive-form-validators';
import { of } from 'rxjs';

@Component({
  selector: 'app-max-time-async-add-validator',
  templateUrl: './max-time-async-add-validator.component.html',
  styleUrls: ['./max-time-async-add-validator.component.css']
})
export class MaxTimeAsyncAddValidatorComponent implements OnInit {

  attandanceDetailFormGroup: FormGroup

  constructor(
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.attandanceDetailFormGroup = this.formBuilder.group({
      entryPlace: ['',],
      closingTime: ['', [], RxwebValidators.maxTimeAsync({ validatorConfig: of({ value: '23:30', message: 'You can enter only time format data' }) })],
      breakHours: ['', [], RxwebValidators.maxTimeAsync({ validatorConfig: of({ operator: '<', value: '00:10', message: 'You can enter only time format data' }) })],
      totalOutTime: ['', [], RxwebValidators.maxTimeAsync({ validatorConfig: of({ allowSeconds: true, value: '02:00:00', message: 'You can enter only time format data' }) })],
      exitTime: ['', [], RxwebValidators.maxTimeAsync({ validatorConfig: of({ message: 'You can enter only time format data', fieldName: 'closingTime' }) })],
      netInTime: ['', [], RxwebValidators.maxTimeAsync({ validatorConfig: of({ messageKey: 'maxTimeMessageKey', fieldName: 'totalInTime', message: 'You can enter only time format data' }) })],
    });
  }

}
