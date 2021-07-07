import { Component, OnInit } from '@angular/core';
import { DynamicFormBuildConfig, RxDynamicFormBuilder } from '@rxweb/reactive-dynamic-forms';

@Component({
  selector: 'app-dynamicfile-complete',
  templateUrl: './dynamicfile-complete.component.html',
  styleUrls: ['./dynamicfile-complete.component.css']
})
export class DynamicfileCompleteComponent implements OnInit {

  serverData: Array<{ [key: string]: any }> = [{
    name: "profilePhoto",
    type: "file",
    ui: {
      label: 'Profile Photo'
    }
  }]

  uiBindings: string[] = ["profilePhoto"];

  dynamicFormBuildConfig: DynamicFormBuildConfig;

  constructor(private formBuilder: RxDynamicFormBuilder) { }

  ngOnInit() {
    this.dynamicFormBuildConfig = this.formBuilder.formGroup(this.serverData, {});
  }

}
