import { Component, OnInit } from '@angular/core';
import { DynamicFormBuildConfig, DynamicFormConfiguration, RxDynamicFormBuilder } from "@rxweb/reactive-dynamic-forms";

@Component({
  selector: 'app-dynamic-custom-sizing',
  templateUrl: './dynamic-custom-sizing.component.html',
  styleUrls: ['./dynamic-custom-sizing.component.css']
})
export class DynamicCustomSizingComponent implements OnInit {

  serverData = [{
    name: "firstname",
    type: "text",
    ui: {
      class: ["form-control-lg"],
      placeholder: ".form-control-lg",
    }
  },
  {
    name: "middlename",
    type: "text",
    ui: {
      placeholder: "Default Input"
    }
  },
  {
    name: "lastname",
    type: "text",
    ui: {
      class: ["form-control-sm"],
      placeholder: ".form-control-sm"
    }
  }
  ]

  uiBindings: string[] = ["firstname", "middlename", "lastname"];
  dynamicFormBuildConfig: DynamicFormBuildConfig;

  constructor(private formBuilder: RxDynamicFormBuilder) { }
  ngOnInit() {
    this.dynamicFormBuildConfig = this.formBuilder.formGroup(this.serverData, {});
  }

}
