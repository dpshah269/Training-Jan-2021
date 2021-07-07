import { Component, OnInit } from '@angular/core';
import { DynamicFormBuildConfig, RxDynamicFormBuilder } from '@rxweb/reactive-dynamic-forms';

@Component({
  selector: 'app-dynamicdate-complete',
  templateUrl: './dynamicdate-complete.component.html',
  styleUrls: ['./dynamicdate-complete.component.css']
})
export class DynamicdateCompleteComponent implements OnInit {

  serverData: Array<{ [key: string]: any }> = [{
    name: "dateOfBirth",
    type: "date",
    ui: {
      label: 'Date Of Birth',
    }

  }]

  uiBindings: string[] = ["dateOfBirth"];

  dynamicFormBuildConfig: DynamicFormBuildConfig;

  constructor(private formBuilder: RxDynamicFormBuilder) { }

  ngOnInit() {
    this.dynamicFormBuildConfig = this.formBuilder.formGroup(this.serverData, {});
  }

}
