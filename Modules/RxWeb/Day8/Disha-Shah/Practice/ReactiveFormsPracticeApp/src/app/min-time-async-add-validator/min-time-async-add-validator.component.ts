import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { RxwebValidators } from '@rxweb/reactive-form-validators';
import { of } from 'rxjs';

@Component({
  selector: 'app-min-time-async-add-validator',
  templateUrl: './min-time-async-add-validator.component.html',
  styleUrls: ['./min-time-async-add-validator.component.css']
})
export class MinTimeAsyncAddValidatorComponent implements OnInit {

  attandanceDetailFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.attandanceDetailFormGroup = this.formBuilder.group({
            entryPlace:['',], 
            openingTime:['', RxwebValidators.minTimeAsync({validatorConfig:of({value:'08:00', message:'You can enter only time format data greater than config value'})})], 
            requiredHours:['', RxwebValidators.minTimeAsync({validatorConfig:of({operator:'>'  ,value:'08:30', message:'You can enter only time format data greater than config value'})})], 
            totalOutTime:['', RxwebValidators.minTimeAsync({validatorConfig:of({allowSeconds:true  ,value:'00:10:00', message:'You can enter only time format data greater than config value'})})], 
            exitTime:['', RxwebValidators.minTimeAsync({validatorConfig:of({message:'You can enter only time format data greater than config value' ,value:'07:00'})})], 
            netInTime:['',], 
       });
    }

}
