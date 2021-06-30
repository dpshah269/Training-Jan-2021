import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
  selector: 'app-different-add-validator',
  templateUrl: './different-add-validator.component.html',
  styleUrls: ['./different-add-validator.component.css']
})
export class DifferentAddValidatorComponent implements OnInit {

  accountInfoFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.accountInfoFormGroup = this.formBuilder.group({
            firstName:['',], 
            lastName:['', RxwebValidators.different({fieldName:'firstName' })], 
            middleName:['', RxwebValidators.different({fieldName:'firstName'  ,message:'{{0}} is same as firstName' })], 
            emailAddress:['',], 
            recoveryEmailAddress:['', RxwebValidators.different({fieldName:'emailAddress'  ,messageKey:'differentMessageKey' })], 
        });
    }

}
