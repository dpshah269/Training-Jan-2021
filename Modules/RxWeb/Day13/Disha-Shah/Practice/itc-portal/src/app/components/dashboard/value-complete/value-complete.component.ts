import { Component, OnInit } from '@angular/core';
import { DynamicFormBuildConfig, RxDynamicFormBuilder } from '@rxweb/reactive-dynamic-forms';

@Component({
  selector: 'app-value-complete',
  templateUrl: './value-complete.component.html',
  styleUrls: ['./value-complete.component.css']
})
export class ValueCompleteComponent implements OnInit {

  serverData = [{
    name: "firstName",
    type: "text",
    value: "John"

  }]

  uiBindings: string[] = ["firstName"];
  dynamicFormBuildConfig: DynamicFormBuildConfig;

  constructor(private formBuilder: RxDynamicFormBuilder) { }
  ngOnInit() {
    this.dynamicFormBuildConfig = this.formBuilder.formGroup(this.serverData, {});
  }

}
