import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { RxwebValidators } from '@rxweb/reactive-form-validators';
import { of } from 'rxjs';

@Component({
  selector: 'app-greater-than-equal-to-async-add-validator',
  templateUrl: './greater-than-equal-to-async-add-validator.component.html',
  styleUrls: ['./greater-than-equal-to-async-add-validator.component.css']
})
export class GreaterThanEqualToAsyncAddValidatorComponent implements OnInit {

  userFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.userFormGroup = this.formBuilder.group({
            admissionAge:['',], 
            retiermentAge:['',[], RxwebValidators.greaterThanEqualToAsync({validatorConfig:of({fieldName:'admissionAge'})})], 
            minimumAge:['',[], RxwebValidators.greaterThanEqualToAsync({validatorConfig:of({value:18})})], 
            otherAge:['',[], RxwebValidators.greaterThanEqualToAsync({validatorConfig:of({fieldName:'admissionAge'  ,message:'Please enter number greater than or equal to 1.'})})], 
            joiningAge:['',[], RxwebValidators.greaterThanEqualToAsync({validatorConfig:of({fieldName:'admissionAge'  ,messageKey:'greaterThanEqualToMessageKey'})})], 
       });
    }

}
