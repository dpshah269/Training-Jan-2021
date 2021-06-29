import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { RxwebValidators } from '@rxweb/reactive-form-validators';
import { of } from 'rxjs';

@Component({
  selector: 'app-time-async-add-validator',
  templateUrl: './time-async-add-validator.component.html',
  styleUrls: ['./time-async-add-validator.component.css']
})
export class TimeAsyncAddValidatorComponent implements OnInit {

  attandanceDetailFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.attandanceDetailFormGroup = this.formBuilder.group({
            entryPlace:['',], 
            totalOutTime:['',[], RxwebValidators.timeAsync({validatorConfig:of({allowSeconds:true,message:'You can enter only time format data'})})], 
            exitTime:['',[], RxwebValidators.timeAsync({validatorConfig:of({message:'You can enter only time format data'})})], 
            netInTime:['',[], RxwebValidators.timeAsync({validatorConfig:of({messageKey:'timeMessageKey',message:'You can enter only time format data'})})], 
       });
    }

}
