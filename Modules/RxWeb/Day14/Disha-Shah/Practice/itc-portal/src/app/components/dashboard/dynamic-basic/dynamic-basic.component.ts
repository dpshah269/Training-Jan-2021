import { Component, OnInit } from '@angular/core';
import { DynamicFormBuildConfig, DynamicFormConfiguration, RxDynamicFormBuilder } from "@rxweb/reactive-dynamic-forms";

@Component({
  selector: 'app-dynamic-basic',
  templateUrl: './dynamic-basic.component.html',
  styleUrls: ['./dynamic-basic.component.css']
})
export class DynamicBasicComponent implements OnInit {

  serverData = [{
    name: "email",
    type: "text",
    ui: {
      label: "Email address",
      placeholder: "Enter email",
      description: "We'll never share your email with anyone else."
    }
  },
  {
    name: "password",
    type: "text",
    ui: {
      label: "Password",
      placeholder: "Password"
    }
  },
  {
    name: "checkmeout",
    type: "checkbox",
    source: [{ value: 1, text: "Check me out" }]
  }
  ]

  uiBindings: string[] = ["email", "password", "checkmeout"];
  dynamicFormBuildConfig: DynamicFormBuildConfig;

  constructor(private formBuilder: RxDynamicFormBuilder) { }
  ngOnInit() {
    this.dynamicFormBuildConfig = this.formBuilder.formGroup(this.serverData, {});
  }

}
