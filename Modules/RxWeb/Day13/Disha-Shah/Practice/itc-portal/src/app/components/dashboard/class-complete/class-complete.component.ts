import { Component, OnInit } from '@angular/core';
import { DynamicFormBuildConfig, RxDynamicFormBuilder } from '@rxweb/reactive-dynamic-forms';

@Component({
  selector: 'app-class-complete',
  templateUrl: './class-complete.component.html',
  styleUrls: ['./class-complete.component.css']
})
export class ClassCompleteComponent implements OnInit {

  serverData = [{
    name: "firstName",
    type: "text",
    ui: {
      "class": ["form-control-lg"]
    }
  }]

  uiBindings: string[] = ["firstName"];
  dynamicFormBuildConfig: DynamicFormBuildConfig;

  constructor(private formBuilder: RxDynamicFormBuilder) { }
  ngOnInit() {
    this.dynamicFormBuildConfig = this.formBuilder.formGroup(this.serverData, {});
  }

}
