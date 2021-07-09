import { Component, OnInit } from '@angular/core';
import { DynamicFormBuildConfig, RxDynamicFormBuilder } from '@rxweb/reactive-dynamic-forms';
import {QuantityModel} from '../../../models/extended-models/PreValueHookComplete';

@Component({
  selector: 'app-pre-value-hook-complete',
  templateUrl: './pre-value-hook-complete.component.html',
  styleUrls: ['./pre-value-hook-complete.component.css']
})
export class PreValueHookCompleteComponent implements OnInit {

  serverData = [
    {
      name: 'quantity',
      type: 'text',
      ui: {
        label: 'Enter Quantity'
      },
      modelName: 'quantityModel'
    }
  ]

  uiBindings: string[] = ["quantity"];
  dynamicFormBuildConfig: DynamicFormBuildConfig;
  constructor(private formBuilder: RxDynamicFormBuilder) { }

  ngOnInit() {
    this.dynamicFormBuildConfig = this.formBuilder.formGroup(this.serverData, {
      controlConfigModels: [
        { modelName: "quantityModel", model: QuantityModel }]
    });
  }

}
