import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
  selector: 'app-email-add-validator',
  templateUrl: './email-add-validator.component.html',
  styleUrls: ['./email-add-validator.component.css']
})
export class EmailAddValidatorComponent implements OnInit {

  userFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.userFormGroup = this.formBuilder.group({
            email:['', RxwebValidators.email()], 
            recoveryEmailAddress:['', RxwebValidators.email({conditionalExpression:(x,y) => x.email == "abc@gmail.com"  })], 
            businessEmailAddress:['', RxwebValidators.email({conditionalExpression:'x => x.email =="abc@gmail.com"' })], 
            otherEmailAddress:['', RxwebValidators.email({message:'Please enter valid email' })], 
            organizationEmailAddress:['', RxwebValidators.email({messageKey:'emailMessageKey' })], 
        });
    }

}
