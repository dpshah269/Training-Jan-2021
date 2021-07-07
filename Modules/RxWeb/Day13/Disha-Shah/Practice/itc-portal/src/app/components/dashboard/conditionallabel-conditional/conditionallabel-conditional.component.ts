import { Component, OnInit } from '@angular/core';
import { DynamicFormBuildConfig, RxDynamicFormBuilder } from '@rxweb/reactive-dynamic-forms';
import { UserModel } from '../../../models/extended-models/ConditionallabelConditional'
@Component({
  selector: 'app-conditionallabel-conditional',
  templateUrl: './conditionallabel-conditional.component.html',
  styleUrls: ['./conditionallabel-conditional.component.css']
})
export class ConditionallabelConditionalComponent implements OnInit {

  serverData = [
    {
      name: 'firstName',
      type: 'text',
      ui: {
        label: 'Enter Your First Name'
      }
    },
    {
      name: 'bio',
      type: 'text',
      ui: {
        placeholder: "Enter bio"
      },
      modelName: 'userModel'
    }

  ]

  uiBindings: string[] = ["firstName", "bio"];
  dynamicFormBuildConfig: DynamicFormBuildConfig;

  constructor(private formBuilder: RxDynamicFormBuilder) { }
  ngOnInit() {
    this.dynamicFormBuildConfig = this.formBuilder.formGroup(this.serverData, {
      controlConfigModels: [{ modelName: "userModel", model: UserModel }]
    });
  }


}
