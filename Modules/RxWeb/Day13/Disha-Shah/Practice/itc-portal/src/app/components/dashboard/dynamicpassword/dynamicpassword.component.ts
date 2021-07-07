import { Component, OnInit } from '@angular/core';
import { DynamicFormBuildConfig, RxDynamicFormBuilder } from '@rxweb/reactive-dynamic-forms';

@Component({
  selector: 'app-dynamicpassword',
  templateUrl: './dynamicpassword.component.html',
  styleUrls: ['./dynamicpassword.component.css']
})
export class DynamicpasswordComponent implements OnInit {

  serverData: Array<{ [key: string]: any }> = [{
    name: "password",
    type: "password",
    ui: {
      label: 'Password'
    }
  }]

  uiBindings: string[] = ["password"];

  dynamicFormBuildConfig: DynamicFormBuildConfig;

  constructor(private formBuilder: RxDynamicFormBuilder) { }

  ngOnInit() {
    this.dynamicFormBuildConfig = this.formBuilder.formGroup(this.serverData, {});
  }

}
