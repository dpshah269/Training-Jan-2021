import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
  selector: 'app-ascii-add-validator',
  templateUrl: './ascii-add-validator.component.html',
  styleUrls: ['./ascii-add-validator.component.css']
})
export class AsciiAddValidatorComponent implements OnInit {

  userFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.userFormGroup = this.formBuilder.group({
            language:['',], 
            numberAsciiCode:['', RxwebValidators.ascii({conditionalExpression:(x,y) => x.language == "Java"  })], 
            alphabetAsciiCode:['', RxwebValidators.ascii({conditionalExpression:'x => x.language =="Java"' })], 
            specialCharAsciiCode:['', RxwebValidators.ascii({message:'{{0}} is not an Ascii Code' })], 
            digitalCode:['', RxwebValidators.ascii({messageKey:'asciiMessageKey' })], 
        });
    }

}
