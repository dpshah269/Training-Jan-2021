import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { RxwebValidators } from '@rxweb/reactive-form-validators';
import { of } from 'rxjs';

@Component({
  selector: 'app-min-number-async-add-validator',
  templateUrl: './min-number-async-add-validator.component.html',
  styleUrls: ['./min-number-async-add-validator.component.css']
})
export class MinNumberAsyncAddValidatorComponent implements OnInit {

  resultInfoFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.resultInfoFormGroup = this.formBuilder.group({
            maths:['',[], RxwebValidators.minNumberAsync({validatorConfig:of({value:35})})], 
            science:['',[], RxwebValidators.minNumberAsync({validatorConfig:of({value:35  ,message:'Number should not be less than 35'})})], 
            economics:['',[], RxwebValidators.minNumberAsync({validatorConfig:of({value:35  ,messageKey:'minNumberMessageKey'})})], 
       });
    }

}
