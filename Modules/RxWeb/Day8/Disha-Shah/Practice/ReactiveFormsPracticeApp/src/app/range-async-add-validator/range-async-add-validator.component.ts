import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { RxwebValidators } from '@rxweb/reactive-form-validators';
import { of } from 'rxjs';

@Component({
  selector: 'app-range-async-add-validator',
  templateUrl: './range-async-add-validator.component.html',
  styleUrls: ['./range-async-add-validator.component.css']
})
export class RangeAsyncAddValidatorComponent implements OnInit {

  employeeInfoFormGroup: FormGroup

  constructor(
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.employeeInfoFormGroup = this.formBuilder.group({
      age: ['', [], RxwebValidators.rangeAsync({ validatorConfig: of({ minimumNumber: 18, maximumNumber: 60 }) })],
      salary:['',[], RxwebValidators.rangeAsync({validatorConfig:of({minimumNumber:1000  ,maximumNumber:200000  ,message:'Your Salary should be between 1000 to 200000.'})})], 
      noOfprojects:['',[], RxwebValidators.rangeAsync({validatorConfig:of({minimumNumber:1  ,maximumNumber:10  ,messageKey:'rangeMessageKey'})})], 
    });
  }

}
