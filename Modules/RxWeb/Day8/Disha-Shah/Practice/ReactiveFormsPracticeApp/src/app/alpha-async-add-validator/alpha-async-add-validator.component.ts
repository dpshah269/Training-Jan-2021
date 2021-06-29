import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { RxwebValidators } from '@rxweb/reactive-form-validators';
import { of } from 'rxjs';

@Component({
  selector: 'app-alpha-async-add-validator',
  templateUrl: './alpha-async-add-validator.component.html',
  styleUrls: ['./alpha-async-add-validator.component.css']
})
export class AlphaAsyncAddValidatorComponent implements OnInit {

  addressInfoFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.addressInfoFormGroup = this.formBuilder.group({
            countryName:['',[], RxwebValidators.alphaAsync()], 
            countryCode:['',[], RxwebValidators.alphaAsync({validatorConfig:of({conditionalExpression:(x,y) => x.countryName == "India" })})], 
            cityName:['',[], RxwebValidators.alphaAsync({validatorConfig:of({conditionalExpression:'x => x.countryName =="India"' })})], 
            stateName:['',[], RxwebValidators.alphaAsync({validatorConfig:of({allowWhiteSpace:true })})], 
            stateCode:['',[], RxwebValidators.alphaAsync({validatorConfig:of({message:'You can enter only alphabets.' })})], 
            cityCode:['',[], RxwebValidators.alphaAsync({validatorConfig:of({messageKey:'alphaMessageKey' })})], 
        });
    }

}
