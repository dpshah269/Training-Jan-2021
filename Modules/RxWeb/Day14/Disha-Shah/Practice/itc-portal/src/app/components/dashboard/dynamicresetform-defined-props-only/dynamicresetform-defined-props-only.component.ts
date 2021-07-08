import { Component, OnInit } from '@angular/core';
import { DynamicFormBuildConfig, DynamicFormConfiguration, RxDynamicFormBuilder } from "@rxweb/reactive-dynamic-forms";
import { ResetFormType } from '@rxweb/reactive-form-validators'

@Component({
  selector: 'app-dynamicresetform-defined-props-only',
  templateUrl: './dynamicresetform-defined-props-only.component.html',
  styleUrls: ['./dynamicresetform-defined-props-only.component.css']
})
export class DynamicresetformDefinedPropsOnlyComponent implements OnInit {

  serverData = [{
    name: "firstName",
    type: "text",
    ui: {
      "label": "FirstName"
    }
  }]

  uiBindings: string[] = ["firstName"];
  dynamicFormBuildConfig: DynamicFormBuildConfig;

  constructor(private formBuilder: RxDynamicFormBuilder) { }
  ngOnInit() {
    this.dynamicFormBuildConfig = this.formBuilder.formGroup(this.serverData, {});

  }
  resetForm() {
    this.dynamicFormBuildConfig.formGroup.resetForm({ resetType: ResetFormType.DefinedPropsOnly, value: { firstName: 'John' } })
  }

}
