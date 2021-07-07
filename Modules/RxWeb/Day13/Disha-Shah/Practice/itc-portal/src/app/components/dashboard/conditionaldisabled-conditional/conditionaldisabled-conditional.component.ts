import { Component, OnInit } from '@angular/core';
import { DynamicFormBuildConfig, RxDynamicFormBuilder } from '@rxweb/reactive-dynamic-forms';
import {UserModel} from '../../../models/extended-models/ConditionaldisabledConditional'

@Component({
  selector: 'app-conditionaldisabled-conditional',
  templateUrl: './conditionaldisabled-conditional.component.html',
  styleUrls: ['./conditionaldisabled-conditional.component.css']
})
export class ConditionaldisabledConditionalComponent implements OnInit {

  serverData = [
    {
        name: 'age',
        type: 'text',
        ui: {
            label: 'Enter Your age'
        }
    },
    {
        name: 'licenseNumber',
        type: 'text',
        ui: {
            placeholder: "Enter License Number"
        },
        modelName: 'userModel'
    }

]

uiBindings: string[] = ["age","licenseNumber"];
dynamicFormBuildConfig: DynamicFormBuildConfig;

constructor(private formBuilder: RxDynamicFormBuilder) { }
ngOnInit() {
    this.dynamicFormBuildConfig = this.formBuilder.formGroup(this.serverData, {
        controlConfigModels: [{ modelName: "userModel", model: UserModel }]
    });
}

}
