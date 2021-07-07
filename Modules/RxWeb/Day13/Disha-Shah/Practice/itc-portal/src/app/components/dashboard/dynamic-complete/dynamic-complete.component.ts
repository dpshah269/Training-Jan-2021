import { Component, OnInit } from '@angular/core';
import { DynamicFormBuildConfig, DynamicFormConfiguration, RxDynamicFormBuilder } from '@rxweb/reactive-dynamic-forms';

@Component({
  selector: 'app-dynamic-complete',
  templateUrl: './dynamic-complete.component.html',
  styleUrls: ['./dynamic-complete.component.css']
})
export class DynamicCompleteComponent implements OnInit {

  serverData = [{
    name: "firstName",
    type: "text"
  }]

  uiBindings: string[] = ["firstName"];
  dynamicFormBuildConfig: DynamicFormBuildConfig;
  dynamicFormBuilderConfiguration: DynamicFormConfiguration

  constructor(private formBuilder: RxDynamicFormBuilder) { }
  ngOnInit() {
    this.dynamicFormBuildConfig =
      this.formBuilder.formGroup(this.serverData, this.dynamicFormBuilderConfiguration)
  }

}
