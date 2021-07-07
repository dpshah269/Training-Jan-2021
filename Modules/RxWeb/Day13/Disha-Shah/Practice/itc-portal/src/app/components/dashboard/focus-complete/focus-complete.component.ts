import { Component, OnInit } from '@angular/core';
import { DynamicFormBuildConfig, RxDynamicFormBuilder } from '@rxweb/reactive-dynamic-forms';

@Component({
  selector: 'app-focus-complete',
  templateUrl: './focus-complete.component.html',
  styleUrls: ['./focus-complete.component.css']
})
export class FocusCompleteComponent implements OnInit {

  serverData = [{
    name: "firstName",
    type: "text",
    ui: {
      "focus": true
    }
  }]

  uiBindings: string[] = ["firstName"];
  dynamicFormBuildConfig: DynamicFormBuildConfig;

  constructor(private formBuilder: RxDynamicFormBuilder) { }
  ngOnInit() {
    this.dynamicFormBuildConfig = this.formBuilder.formGroup(this.serverData, {});
  }

}
