import { Component, OnInit } from '@angular/core';
import { DynamicFormBuildConfig, RxDynamicFormBuilder } from '@rxweb/reactive-dynamic-forms';
import {UserModel} from '../../../models/extended-models/ConditionalclassConditional'

@Component({
  selector: 'app-conditionalclass-conditional',
  templateUrl: './conditionalclass-conditional.component.html',
  styleUrls: ['./conditionalclass-conditional.component.css']
})
export class ConditionalclassConditionalComponent implements OnInit {

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

uiBindings: string[] = ["firstName","bio"];
dynamicFormBuildConfig: DynamicFormBuildConfig;

constructor(private formBuilder: RxDynamicFormBuilder) { }
ngOnInit() {
    this.dynamicFormBuildConfig = this.formBuilder.formGroup(this.serverData, {
        controlConfigModels: [{ modelName: "userModel", model: UserModel }]
    });
}

}
