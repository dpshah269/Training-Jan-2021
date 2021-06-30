import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { RxwebValidators } from '@rxweb/reactive-form-validators';
import { of } from 'rxjs';

@Component({
  selector: 'app-url-async-add-validator',
  templateUrl: './url-async-add-validator.component.html',
  styleUrls: ['./url-async-add-validator.component.css']
})
export class UrlAsyncAddValidatorComponent implements OnInit {

  userFormGroup: FormGroup

  constructor(
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.userFormGroup = this.formBuilder.group({
      adminWebsiteUrl: ['', [], RxwebValidators.urlAsync()],
      maintenanceWebSiteUrl: ['', RxwebValidators.urlAsync({ validatorConfig: of({ message: '{{0}} Is not the correct url pattern.' }) })],
      localhostUrl: ['', [], RxwebValidators.urlAsync({ validatorConfig: of({ urlValidationType: 2, message: '{{0}} Is not the correct url pattern.' }) })],
      fqdnDomainUrl: ['', [], RxwebValidators.urlAsync({ validatorConfig: of({ urlValidationType: 1, message: '{{0}} Is not the correct url pattern.' }) })],
      intraServerUrl: ['', [], RxwebValidators.urlAsync({ validatorConfig: of({ urlValidationType: 3, message: '{{0}} Is not the correct url pattern.' }) })],
      deployedWebSiteUrl: ['', [], RxwebValidators.urlAsync({ validatorConfig: of({ messageKey: 'urlMessageKey' }) })],
    });
  }

}
