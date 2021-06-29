import { Component, OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms"
import { RxFormBuilder } from '@rxweb/reactive-form-validators';
import { EmployeeInfo } from '../Model/rangeAsyncUserInfo';
@Component({
  selector: 'app-range-async-add-decorator',
  templateUrl: './range-async-add-decorator.component.html',
  styleUrls: ['./range-async-add-decorator.component.css']
})
export class RangeAsyncAddDecoratorComponent implements OnInit {

  employeeInfoFormGroup: FormGroup

  constructor(
    private formBuilder: RxFormBuilder) { }

  ngOnInit() {
    let employeeInfo = new EmployeeInfo();
    this.employeeInfoFormGroup = this.formBuilder.formGroup(employeeInfo);
  }

}
