import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
  selector: 'app-json-add-validator',
  templateUrl: './json-add-validator.component.html',
  styleUrls: ['./json-add-validator.component.css']
})
export class JsonAddValidatorComponent implements OnInit {

  jsonInfoFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.jsonInfoFormGroup = this.formBuilder.group({
            location:['',], 
            addressJson:['', RxwebValidators.json({conditionalExpression:(x,y)=> x.location == "{CountryName:India}"  })], 
            locationJson:['', RxwebValidators.json({conditionalExpression:'x => x.location == "{CountryName:India}"'  ,message:'Enter the text in JSON format --> {key:value}' })], 
            contactJson:['', RxwebValidators.json({message:'Enter only JSON type data' })], 
            countryJson:['', RxwebValidators.json({messageKey:'jsonMessageKey' })], 
        });
    }

}
