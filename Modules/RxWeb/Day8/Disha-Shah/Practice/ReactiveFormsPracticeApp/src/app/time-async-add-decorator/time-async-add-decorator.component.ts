import { Component, OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms"
import { RxFormBuilder } from '@rxweb/reactive-form-validators';
import { AttandanceDetail } from '../Model/timeAsyncUserInfo';
@Component({
  selector: 'app-time-async-add-decorator',
  templateUrl: './time-async-add-decorator.component.html',
  styleUrls: ['./time-async-add-decorator.component.css']
})
export class TimeAsyncAddDecoratorComponent implements OnInit {

  attandanceDetailFormGroup: FormGroup

  constructor(
    private formBuilder: RxFormBuilder) { }

  ngOnInit() {
    let attandanceDetail = new AttandanceDetail();
    this.attandanceDetailFormGroup = this.formBuilder.formGroup(attandanceDetail);
  }

}
