import { Component, OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms"
import { RxFormBuilder } from '@rxweb/reactive-form-validators';
import { AttandanceDetail } from '../Model/maxTimeAsyncUserInfo';

@Component({
  selector: 'app-max-time-async-add-decorator',
  templateUrl: './max-time-async-add-decorator.component.html',
  styleUrls: ['./max-time-async-add-decorator.component.css']
})
export class MaxTimeAsyncAddDecoratorComponent implements OnInit {

  attandanceDetailFormGroup: FormGroup

  constructor(
    private formBuilder: RxFormBuilder) { }

  ngOnInit() {
    let attandanceDetail = new AttandanceDetail();
    this.attandanceDetailFormGroup = this.formBuilder.formGroup(attandanceDetail);
  }

}
