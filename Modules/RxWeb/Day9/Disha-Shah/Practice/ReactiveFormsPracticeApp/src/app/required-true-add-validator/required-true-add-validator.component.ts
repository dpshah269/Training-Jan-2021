import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
  selector: 'app-required-true-add-validator',
  templateUrl: './required-true-add-validator.component.html',
  styleUrls: ['./required-true-add-validator.component.css']
})
export class RequiredTrueAddValidatorComponent implements OnInit {

  userFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.userFormGroup = this.formBuilder.group({
            isAgree:['', RxwebValidators.requiredTrue()], 
            isChecked:['', RxwebValidators.requiredTrue({conditionalExpression:(x,y) => x.isAgree == true })], 
            checkMeOut:['', RxwebValidators.requiredTrue({conditionalExpression:'x => x.isAgree == true' })], 
            isActive:['', RxwebValidators.requiredTrue({message:'Should be active' })], 
            isBlocked:['', RxwebValidators.requiredTrue({messageKey:'requiredTrueMessageKey' })], 
        });
    }

}
