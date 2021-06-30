import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
  selector: 'app-required-add-validator',
  templateUrl: './required-add-validator.component.html',
  styleUrls: ['./required-add-validator.component.css']
})
export class RequiredAddValidatorComponent implements OnInit {

  userFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.userFormGroup = this.formBuilder.group({
            firstName:['', RxwebValidators.required()], 
            middleName:['', RxwebValidators.required({conditionalExpression:(x,y) => x.firstName == "Bharat"  })], 
            lastName:['', RxwebValidators.required({conditionalExpression:'x => x.firstName == "Bharat"' })], 
            userName:['', RxwebValidators.required({message:'Username cannot be blank.' })], 
            fullName:['', RxwebValidators.required({messageKey:'requiredMessageKey' })], 
        });
    }

}
