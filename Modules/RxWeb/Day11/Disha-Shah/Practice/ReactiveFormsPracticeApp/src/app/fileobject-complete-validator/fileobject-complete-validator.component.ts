import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { RxFormGroup, RxFormBuilder } from '@rxweb/reactive-form-validators';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-fileobject-complete-validator',
  templateUrl: './fileobject-complete-validator.component.html',
  styleUrls: ['./fileobject-complete-validator.component.css']
})
export class FileobjectCompleteValidatorComponent implements OnInit {

  userInfoFormGroup: RxFormGroup
  api: string = 'api/User'
  constructor(
    private formBuilder: RxFormBuilder, private http: HttpClient) { }

  ngOnInit() {
    this.userInfoFormGroup = <RxFormGroup>this.formBuilder.group({
      profilePhoto: [''],
    });
  }
  addUser() {
    let formdata = this.userInfoFormGroup.toFormData()
    this.http.post(this.api, formdata); // This is fake uri, This is just for your reference.      
  }

}
