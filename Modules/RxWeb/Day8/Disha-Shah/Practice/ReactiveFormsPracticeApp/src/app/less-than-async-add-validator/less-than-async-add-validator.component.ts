import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { RxwebValidators } from '@rxweb/reactive-form-validators';
import { of } from 'rxjs';

@Component({
  selector: 'app-less-than-async-add-validator',
  templateUrl: './less-than-async-add-validator.component.html',
  styleUrls: ['./less-than-async-add-validator.component.css']
})
export class LessThanAsyncAddValidatorComponent implements OnInit {

  userFormGroup: FormGroup

  constructor(
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.userFormGroup = this.formBuilder.group({
      obtainedMarks: ['',],
      otherActivityMarks: ['', [], RxwebValidators.lessThanAsync({ validatorConfig: of({ fieldName: 'obtainedMarks' }) })],
      maximumAge: ['', [], RxwebValidators.lessThanAsync({ validatorConfig: of({ value: 60 }) })],
      otherMarks: ['', [], RxwebValidators.lessThanAsync({ validatorConfig: of({ fieldName: 'obtainedMarks', message: 'Please enter number greater than 100.' }) })],
      disciplineMarks: ['', [], RxwebValidators.lessThanAsync({ validatorConfig: of({ fieldName: 'obtainedMarks', messageKey: 'lessThanMessageKey' }) })],
    });
  }

}
