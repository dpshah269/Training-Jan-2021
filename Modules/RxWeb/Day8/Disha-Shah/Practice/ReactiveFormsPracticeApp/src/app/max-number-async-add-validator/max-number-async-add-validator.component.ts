import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { RxwebValidators } from '@rxweb/reactive-form-validators';
import { of } from 'rxjs';

@Component({
  selector: 'app-max-number-async-add-validator',
  templateUrl: './max-number-async-add-validator.component.html',
  styleUrls: ['./max-number-async-add-validator.component.css']
})
export class MaxNumberAsyncAddValidatorComponent implements OnInit {

  subjectDetailsFormGroup: FormGroup

  constructor(
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.subjectDetailsFormGroup = this.formBuilder.group({
      subjectCode: ['',],
      passingMarks: ['', [], RxwebValidators.maxNumberAsync({ validatorConfig: of({ value: 50, message: '{{0}} exceeds the Maximum marks Limit' })})],
      practicalMarks: ['', [], RxwebValidators.maxNumberAsync({ validatorConfig: of({ value: 70, message: '{{0}} exceeds the Maximum marks Limit' }) })],
      disciplineMarks: ['', [], RxwebValidators.maxNumberAsync({ validatorConfig: of({ value: 50, messageKey: 'maxNumberMessageKey', message: '{{0}} exceeds the Maximum marks Limit' })})],
    });
  }

}
