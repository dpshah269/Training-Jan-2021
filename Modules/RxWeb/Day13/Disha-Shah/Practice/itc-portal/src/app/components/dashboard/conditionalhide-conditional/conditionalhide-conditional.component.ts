import { Component, OnInit } from '@angular/core';
import { DynamicFormBuildConfig, RxDynamicFormBuilder } from '@rxweb/reactive-dynamic-forms';
import {UserModel} from '../../../models/extended-models/ConditionalhideConditional'

@Component({
  selector: 'app-conditionalhide-conditional',
  templateUrl: './conditionalhide-conditional.component.html',
  styleUrls: ['./conditionalhide-conditional.component.css']
})
export class ConditionalhideConditionalComponent implements OnInit {

  serverData = [
    {
      name: 'addexistingaddress',
      type: 'radio',
      ui: {
        label: "Select address"
      },
      value: 2,
      source: [{ text: "Use Existing Address", value: 1 }, { text: "Add new address", value: 2 }]
    },
    {
      name: 'address',
      type: 'text',
      ui: {
        placeholder: "Enter address"
      },
      modelName: 'userModel'
    }
  ]

  uiBindings: string[] = ["addexistingaddress", "address"];
  dynamicFormBuildConfig: DynamicFormBuildConfig;

  constructor(private formBuilder: RxDynamicFormBuilder) { }
  ngOnInit() {
    this.dynamicFormBuildConfig = this.formBuilder.formGroup(this.serverData, {
      controlConfigModels: [{ modelName: "userModel", model: UserModel }]
    });
  }

}
