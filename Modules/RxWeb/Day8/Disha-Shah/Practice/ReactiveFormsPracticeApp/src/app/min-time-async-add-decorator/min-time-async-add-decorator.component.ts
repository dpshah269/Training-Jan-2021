import { Component, OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms"
import { RxFormBuilder } from '@rxweb/reactive-form-validators';
import { AttandanceDetail } from '../Model/minTimeAsyncUserInfo';

@Component({
  selector: 'app-min-time-async-add-decorator',
  templateUrl: './min-time-async-add-decorator.component.html',
  styleUrls: ['./min-time-async-add-decorator.component.css']
})
export class MinTimeAsyncAddDecoratorComponent implements OnInit {

  attandanceDetailFormGroup: FormGroup

  constructor(
    private formBuilder: RxFormBuilder) { }

  ngOnInit() {
    let attandanceDetail = new AttandanceDetail();
    this.attandanceDetailFormGroup = this.formBuilder.formGroup(attandanceDetail);
  }

}
