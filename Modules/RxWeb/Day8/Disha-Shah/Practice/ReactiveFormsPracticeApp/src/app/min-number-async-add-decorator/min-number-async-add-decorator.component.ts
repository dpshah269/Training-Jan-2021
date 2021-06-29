import { Component, OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms"
import { RxFormBuilder } from '@rxweb/reactive-form-validators';
import { ResultInfo } from '../Model/minNumberAsyncUserInfo';

@Component({
  selector: 'app-min-number-async-add-decorator',
  templateUrl: './min-number-async-add-decorator.component.html',
  styleUrls: ['./min-number-async-add-decorator.component.css']
})
export class MinNumberAsyncAddDecoratorComponent implements OnInit {

  resultInfoFormGroup: FormGroup

  constructor(
    private formBuilder: RxFormBuilder) { }

  ngOnInit() {
    let resultInfo = new ResultInfo();
    this.resultInfoFormGroup = this.formBuilder.formGroup(resultInfo);
  }

}
