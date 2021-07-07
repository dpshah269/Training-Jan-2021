import { Component, OnInit } from '@angular/core';
import { DynamicFormBuildConfig, RxDynamicFormBuilder } from '@rxweb/reactive-dynamic-forms';

@Component({
  selector: 'app-hide-complete',
  templateUrl: './hide-complete.component.html',
  styleUrls: ['./hide-complete.component.css']
})
export class HideCompleteComponent implements OnInit {

  serverData = [{
    name: "firstName",
    type: "text",
    ui: {
      "hide": true
    }
  },
  {
    name: "lastName",
    type: "text",
    "ui": {
      "label": "LastName"
    }
  }]

  uiBindings: string[] = ["firstName", "lastName"];
  dynamicFormBuildConfig: DynamicFormBuildConfig;

  constructor(private formBuilder: RxDynamicFormBuilder) { }
  ngOnInit() {
    this.dynamicFormBuildConfig = this.formBuilder.formGroup(this.serverData, {});
  }

}
