import { Component, OnInit } from '@angular/core';
import { DynamicFormBuildConfig, RxDynamicFormBuilder } from '@rxweb/reactive-dynamic-forms';

@Component({
  selector: 'app-radio-value',
  templateUrl: './radio-value.component.html',
  styleUrls: ['./radio-value.component.css']
})
export class RadioValueComponent implements OnInit {

  serverData: Array<{ [key: string]: any }> = [{
    name: "gender",
    type: "radio",
    source: [{ genderId: 1, genderName: "Male" }, { genderId: 2, genderName: "Female" }],
    textPropName: 'genderName',
    valuePropName: 'genderId',
    ui: {
      label: 'Gender'
    }
  }]

  uiBindings: string[] = ["gender"];

  dynamicFormBuildConfig: DynamicFormBuildConfig;

  constructor(private formBuilder: RxDynamicFormBuilder) { }

  ngOnInit() {
    this.dynamicFormBuildConfig = this.formBuilder.formGroup(this.serverData, {});
  }

}
