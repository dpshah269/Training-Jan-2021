import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { RxwebValidators } from '@rxweb/reactive-form-validators';
@Component({
  selector: 'app-latitude-add-validator',
  templateUrl: './latitude-add-validator.component.html',
  styleUrls: ['./latitude-add-validator.component.css']
})
export class LatitudeAddValidatorComponent implements OnInit {

  countryFormGroup: FormGroup

  constructor(
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.countryFormGroup = this.formBuilder.group({
      continent: ['',],
      secondCountryLatitude: ['', RxwebValidators.latitude({ conditionalExpression: (x, y) => x.continent == "Asia" })],
      thirdCountryLatitude: ['', RxwebValidators.latitude({ conditionalExpression: 'x => x.continent =="Asia"' })],
      firstCountryLatitude: ['', RxwebValidators.latitude({ message: '{{0}} is not a latitude' })],
      fourthCountryLatitude: ['', RxwebValidators.latitude({ messageKey: 'latitudeMessageKey' })],
    });
  }

}
