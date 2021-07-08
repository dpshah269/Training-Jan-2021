import { Component, OnInit } from '@angular/core';
import { RxDynamicFormBuilder,DynamicFormBuildConfig } from "@rxweb/reactive-dynamic-forms"
import {SERVER_JSON} from './server-json';

@Component({
  selector: 'app-dynamic-validation',
  templateUrl: './dynamic-validation.component.html',
  styleUrls: ['./dynamic-validation.component.css']
})
export class DynamicValidationComponent implements OnInit {

  dynamicFormBuildConfig:DynamicFormBuildConfig;
    
  formData:any[] = SERVER_JSON;

  uiBindings:string[] = ["age","faxNumber","mobileNumber","zipCode"];

  constructor(private dynamicFormBuilder:RxDynamicFormBuilder){}

  ngOnInit(){
    this.dynamicFormBuildConfig = this.dynamicFormBuilder.formGroup(this.formData);          
  }
  
}
