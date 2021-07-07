import { Component, OnInit } from '@angular/core';
import { DynamicFormBuildConfig, RxDynamicFormBuilder } from '@rxweb/reactive-dynamic-forms';

@Component({
  selector: 'app-color-complete',
  templateUrl: './color-complete.component.html',
  styleUrls: ['./color-complete.component.css']
})
export class ColorCompleteComponent implements OnInit {

  serverData: Array<{ [key: string]: any }> = [
    {
        name: "colorPicker",
        type: "color",
        ui: {
            label: 'Color Picker'
        }
    }
]

uiBindings: string[] = ["colorPicker"];

dynamicFormBuildConfig: DynamicFormBuildConfig;

constructor(private formBuilder: RxDynamicFormBuilder) { }

ngOnInit() {
    this.dynamicFormBuildConfig = this.formBuilder.formGroup(this.serverData, {});
}

}
