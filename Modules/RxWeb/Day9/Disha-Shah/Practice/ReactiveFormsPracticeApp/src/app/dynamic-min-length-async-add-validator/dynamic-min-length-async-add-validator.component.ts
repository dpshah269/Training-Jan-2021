import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { RxwebValidators } from '@rxweb/reactive-form-validators';
import { HttpClient } from '@angular/common/http';
import { FormBuilderConfiguration,RxFormBuilder} from '@rxweb/reactive-form-validators';

@Component({
  selector: 'app-dynamic-min-length-async-add-validator',
  templateUrl: './dynamic-min-length-async-add-validator.component.html',
  styleUrls: ['./dynamic-min-length-async-add-validator.component.css']
})
export class DynamicMinLengthAsyncAddValidatorComponent implements OnInit {

  contactFormGroup: FormGroup

  constructor(
    private formBuilder: RxFormBuilder, private http: HttpClient) { }

  ngOnInit() {
    let formBuilderConfiguration = new FormBuilderConfiguration();
    this.http.get('assets/JSON/dynamic.json').subscribe(dynamic => {
      formBuilderConfiguration.dynamicValidation = JSON.parse(JSON.stringify(dynamic));
      var contact = { countryName: '', mobileNo: '', landLineNo: '', stateName: '', }
      this.contactFormGroup = this.formBuilder.group(contact, formBuilderConfiguration);
    })
  }

}
