import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
  selector: 'app-port-add-validator',
  templateUrl: './port-add-validator.component.html',
  styleUrls: ['./port-add-validator.component.css']
})
export class PortAddValidatorComponent implements OnInit {

  userFormGroup: FormGroup

  constructor(
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.userFormGroup = this.formBuilder.group({
      browser: ['',],
      entertainmentWebsitePort: ['', RxwebValidators.port({ conditionalExpression: (x, y) => x.browser == "Chrome" })],
      shoppingWebsitePort: ['', RxwebValidators.port({ conditionalExpression: 'x => x.browser =="Chrome"' })],
      educationalWebsitePort: ['', RxwebValidators.port({ message: '{{0}} is not a proper port number' })],
      commercialWebsitePort: ['', RxwebValidators.port({ messageKey: 'portMessageKey' })],
    });
  }

}
