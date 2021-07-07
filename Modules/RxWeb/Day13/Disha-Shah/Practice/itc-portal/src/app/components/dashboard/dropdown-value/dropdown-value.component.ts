import { Component, OnInit } from '@angular/core';
import { DynamicFormBuildConfig, RxDynamicFormBuilder } from '@rxweb/reactive-dynamic-forms';

@Component({
  selector: 'app-dropdown-value',
  templateUrl: './dropdown-value.component.html',
  styleUrls: ['./dropdown-value.component.css']
})
export class DropdownValueComponent implements OnInit {

  serverData: Array<{ [key: string]: any }> = [{
    name: "department",
    type: "select",
    value: 1,
    source: [{ departmentId: 1, departmentName: "Dotnet" }, { departmentId: 2, departmentName: "php" }, { departmentId: 3, departmentName: "Android" }],
    textPropName: 'departmentName',
    valuePropName: 'departmentId',
    ui: {
      label: 'Department',
      placeholder: 'Select',
    }
  }]

  uiBindings: string[] = ["department"];

  dynamicFormBuildConfig: DynamicFormBuildConfig;

  constructor(private formBuilder: RxDynamicFormBuilder) { }

  ngOnInit() {
    this.dynamicFormBuildConfig = this.formBuilder.formGroup(this.serverData, {});
  }

}
