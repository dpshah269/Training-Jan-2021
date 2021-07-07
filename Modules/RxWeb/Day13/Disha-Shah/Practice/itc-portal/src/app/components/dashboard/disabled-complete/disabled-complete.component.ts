import { Component, OnInit } from '@angular/core';
import { DynamicFormBuildConfig, RxDynamicFormBuilder } from '@rxweb/reactive-dynamic-forms';

@Component({
  selector: 'app-disabled-complete',
  templateUrl: './disabled-complete.component.html',
  styleUrls: ['./disabled-complete.component.css']
})
export class DisabledCompleteComponent implements OnInit {

  serverData = [{
    name: "firstName",
    type: "text",
    ui: {
      "disabled": true
    }
  }]

  uiBindings: string[] = ["firstName"];
  dynamicFormBuildConfig: DynamicFormBuildConfig;

  constructor(private formBuilder: RxDynamicFormBuilder) { }
  ngOnInit() {
    this.dynamicFormBuildConfig = this.formBuilder.formGroup(this.serverData, {});
  }

}
