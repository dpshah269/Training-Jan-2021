import { Component, OnInit } from '@angular/core';
import { DynamicFormBuildConfig, RxDynamicFormBuilder, DynamicFormConfiguration } from '@rxweb/reactive-dynamic-forms';

@Component({
  selector: 'app-checkbox-complete',
  templateUrl: './checkbox-complete.component.html',
  styleUrls: ['./checkbox-complete.component.css']
})
export class CheckboxCompleteComponent implements OnInit {

  serverData: Array<{ [key: string]: any }> = [
    {
        name: "confirm",
        type: "checkbox",
        source: [{ value: 1, text: "I accept the terms and conditions" }]
    }
]

uiBindings: string[] = ["confirm"];

dynamicFormBuildConfig: DynamicFormBuildConfig;
dynamicFormBuilderConfiguration: DynamicFormConfiguration


constructor(private formBuilder: RxDynamicFormBuilder) { }

ngOnInit() {
    this.dynamicFormBuildConfig = this.formBuilder.formGroup(this.serverData, this.dynamicFormBuilderConfiguration);
}

}
