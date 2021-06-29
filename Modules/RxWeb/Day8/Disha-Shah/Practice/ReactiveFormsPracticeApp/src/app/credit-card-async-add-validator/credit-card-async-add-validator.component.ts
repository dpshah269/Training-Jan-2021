import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { RxwebValidators } from '@rxweb/reactive-form-validators';
import { of } from 'rxjs';

@Component({
  selector: 'app-credit-card-async-add-validator',
  templateUrl: './credit-card-async-add-validator.component.html',
  styleUrls: ['./credit-card-async-add-validator.component.css']
})
export class CreditCardAsyncAddValidatorComponent implements OnInit {

  userFormGroup: FormGroup

				creditCardTypes = [ "Visa", "AmericanExpress", "Maestro", "JCB", "Discover", "DinersClub", "MasterCard",];
	
	
	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.userFormGroup = this.formBuilder.group({
            cardType:['',], 
            creditCardNumber:['',[], RxwebValidators.creditCardAsync({validatorConfig:of({fieldName:'cardType'})})], 
       });
    }

}
