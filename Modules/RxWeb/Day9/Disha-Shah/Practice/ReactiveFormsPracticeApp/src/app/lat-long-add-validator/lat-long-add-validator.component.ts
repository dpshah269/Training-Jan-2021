import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
  selector: 'app-lat-long-add-validator',
  templateUrl: './lat-long-add-validator.component.html',
  styleUrls: ['./lat-long-add-validator.component.css']
})
export class LatLongAddValidatorComponent implements OnInit {

  countryFormGroup: FormGroup

  constructor(
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.countryFormGroup = this.formBuilder.group({
      continent: ['',],
      secondCountry: ['', RxwebValidators.latLong({ conditionalExpression: (x, y) => x.continent == "Asia" })],
      thirdCountry: ['', RxwebValidators.latLong({ conditionalExpression: 'x => x.continent =="Asia"' })],
      firstCountry: ['', RxwebValidators.latLong({ message: '{{0}} is not a proper proper Latitude or Longitude' })],
      fourthCountry: ['', RxwebValidators.latLong({ messageKey: 'latLongMessageKey' })],
    });
  }

}
