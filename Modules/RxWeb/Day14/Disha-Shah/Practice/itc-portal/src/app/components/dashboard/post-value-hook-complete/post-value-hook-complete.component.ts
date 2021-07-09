import { Component, OnInit } from '@angular/core';
import { DynamicFormBuildConfig, RxDynamicFormBuilder } from '@rxweb/reactive-dynamic-forms';
import {UserModel} from '../../../models/extended-models/PostValueHookComplete'

@Component({
  selector: 'app-post-value-hook-complete',
  templateUrl: './post-value-hook-complete.component.html',
  styleUrls: ['./post-value-hook-complete.component.css']
})
export class PostValueHookCompleteComponent implements OnInit {

  serverData = [
    {
      name: 'quantity',
      type: 'text',
      ui: {
        label: 'Enter Quantity'
      },
      modelName: 'quantityModel'
    },
    {
      name: 'price',
      type: 'text',
      ui: {
        label:"Enter Price"
      },
      modelName: 'userModel'
    },
    {
      name: 'totalAmount',
      type: 'text',
      ui: {
        label: "Total amount"
      }
    }
  ]

  uiBindings: string[] = ["quantity", "price", "totalAmount"];
  dynamicFormBuildConfig: DynamicFormBuildConfig;
  constructor(private formBuilder: RxDynamicFormBuilder) { }
  ngOnInit() {
    this.dynamicFormBuildConfig = this.formBuilder.formGroup(this.serverData, {
      controlConfigModels: [
        { modelName: "userModel", model: UserModel },
       ]
    });
  }

}
