import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { RxwebValidators } from '@rxweb/reactive-form-validators';
import { of } from 'rxjs';

@Component({
  selector: 'app-pattern-async-add-validator',
  templateUrl: './pattern-async-add-validator.component.html',
  styleUrls: ['./pattern-async-add-validator.component.css']
})
export class PatternAsyncAddValidatorComponent implements OnInit {

  userFormGroup: FormGroup

  constructor(
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.userFormGroup = this.formBuilder.group({
      userName: ['', [], RxwebValidators.patternAsync({ validatorConfig: of({ expression: { 'onlyAlpha': /^[A-Za-z]+$/ } }) })],
      zipCode: ['', [], RxwebValidators.patternAsync({ validatorConfig: of({ expression: { 'zipCode': /^[0-9]{5}(?:-[0-9]{4})?$/ }, message: 'Zip code should match 12345 or 12345-6789' }) })],
      pinCode: ['', [], RxwebValidators.patternAsync({ validatorConfig: of({ expression: { 'pinCode': /^[1-9][0-9]{5}$/ }, messageKey: 'patternMessageKey' }) })],
    });
  }
}
