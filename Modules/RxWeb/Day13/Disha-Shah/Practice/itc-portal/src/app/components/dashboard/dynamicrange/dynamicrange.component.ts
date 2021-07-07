import { Component, OnInit } from '@angular/core';
import { DynamicFormBuildConfig, RxDynamicFormBuilder } from '@rxweb/reactive-dynamic-forms';

@Component({
  selector: 'app-dynamicrange',
  templateUrl: './dynamicrange.component.html',
  styleUrls: ['./dynamicrange.component.css']
})
export class DynamicrangeComponent implements OnInit {

  serverData: Array<{ [key: string]: any }> = [{
    name: "price",
    type: "range",
    ui: {
      label: 'Price'
    }
  }]
  uiBindings: string[] = ["price"];
  dynamicFormBuildConfig: DynamicFormBuildConfig;
  constructor(private formBuilder: RxDynamicFormBuilder) { }
  ngOnInit() {
    this.dynamicFormBuildConfig = this.formBuilder.formGroup(this.serverData, {});
  }

}
