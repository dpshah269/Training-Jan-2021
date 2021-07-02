import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { RxwebValidators } from '@rxweb/reactive-form-validators';
@Component({
  selector: 'app-not-digit-validator',
  templateUrl: './not-digit-validator.component.html',
  styleUrls: ['./not-digit-validator.component.css']
})
export class NotDigitValidatorComponent implements OnInit {

  userFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.userFormGroup = this.formBuilder.group({
            age:['', RxwebValidators.not({validation:{maxNumber:{value:9},minNumber:{value:100}}})],
        });
    }

}
