import { Component, OnInit } from '@angular/core';
import { DynamicFormBuildConfig, DynamicFormConfiguration, RxDynamicFormBuilder } from "@rxweb/reactive-dynamic-forms";
import { AsyncCustomValidation } from '../../../models/extended-models/AsyncvalidationComplete'

@Component({
  selector: 'app-asyncvalidation-complete',
  templateUrl: './asyncvalidation-complete.component.html',
  styleUrls: ['./asyncvalidation-complete.component.css']
})
export class AsyncvalidationCompleteComponent implements OnInit {

  serverData: Array<{ [key: string]: any }> = [
    {
      name: "nationality",
      type: "text",
      modelName: 'validationModel',
      ui: {
        label: 'Nationality'
      }
    }
  ]

  uiBindings: string[] = ["nationality"];

  dynamicFormBuildConfig: DynamicFormBuildConfig;

  dynamicFormConfiguration: DynamicFormConfiguration;

  constructor(private formBuilder: RxDynamicFormBuilder) { }

  ngOnInit() {
    this.dynamicFormConfiguration = {
      controlConfigModels: [{ modelName: 'validationModel', model: AsyncCustomValidation }],
    }
    this.dynamicFormBuildConfig = this.formBuilder.formGroup(this.serverData, this.dynamicFormConfiguration);
  }

}
