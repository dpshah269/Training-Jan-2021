import { Component, OnInit } from '@angular/core';
import { DynamicFormBuildConfig, DynamicFormConfiguration, RxDynamicFormBuilder } from "@rxweb/reactive-dynamic-forms";
import {ResetFormType } from '@rxweb/reactive-form-validators'

@Component({
  selector: 'app-dynamicresetform-controls-only',
  templateUrl: './dynamicresetform-controls-only.component.html',
  styleUrls: ['./dynamicresetform-controls-only.component.css']
})
export class DynamicresetformControlsOnlyComponent implements OnInit {

  serverData = [{
    name:"firstName",
    type:"text",
    ui:{
      "label":"FirstName"
    }
}]

uiBindings:string[] = ["firstName"];
dynamicFormBuildConfig: DynamicFormBuildConfig;

constructor(private formBuilder: RxDynamicFormBuilder) { }
  ngOnInit()
 {
  this.dynamicFormBuildConfig = this.formBuilder.formGroup(this.serverData,{});

  }
  resetForm(){          
    this.dynamicFormBuildConfig.formGroup.resetForm({resetType:ResetFormType.ControlsOnly})
    }

}
