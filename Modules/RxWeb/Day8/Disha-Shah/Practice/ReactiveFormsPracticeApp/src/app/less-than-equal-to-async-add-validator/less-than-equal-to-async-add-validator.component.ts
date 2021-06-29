import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { RxwebValidators } from '@rxweb/reactive-form-validators';
import { of } from 'rxjs';

@Component({
  selector: 'app-less-than-equal-to-async-add-validator',
  templateUrl: './less-than-equal-to-async-add-validator.component.html',
  styleUrls: ['./less-than-equal-to-async-add-validator.component.css']
})
export class LessThanEqualToAsyncAddValidatorComponent implements OnInit {

  userFormGroup: FormGroup

  constructor(
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.userFormGroup = this.formBuilder.group({
      totalMarks: ['',],
      passingMarks: ['', [], RxwebValidators.lessThanEqualToAsync({ validatorConfig: of({ fieldName: 'totalMarks' }) })],
      maximumAge: ['', [], RxwebValidators.lessThanEqualToAsync({ validatorConfig: of({ value: 60 }) })],
      otherMarks: ['', [], RxwebValidators.lessThanEqualToAsync({ validatorConfig: of({ fieldName: 'totalMarks', message: 'Please enter number less than 100.' }) })],
      disciplineMarks: ['', [], RxwebValidators.lessThanEqualToAsync({ validatorConfig: of({ fieldName: 'totalMarks', messageKey: 'lessThanEqualToMessageKey' }) })],
    });
  }

}
