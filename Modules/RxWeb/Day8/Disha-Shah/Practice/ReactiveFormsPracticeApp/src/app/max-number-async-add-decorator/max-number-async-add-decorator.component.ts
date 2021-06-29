import { Component, OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms"
import { RxFormBuilder } from '@rxweb/reactive-form-validators';
import { SubjectDetails } from '../Model/maxNumberAsyncUserInfo';

@Component({
  selector: 'app-max-number-async-add-decorator',
  templateUrl: './max-number-async-add-decorator.component.html',
  styleUrls: ['./max-number-async-add-decorator.component.css']
})
export class MaxNumberAsyncAddDecoratorComponent implements OnInit {

  subjectDetailsFormGroup: FormGroup

  constructor(
    private formBuilder: RxFormBuilder) { }

  ngOnInit() {
    let subjectDetails = new SubjectDetails();
    this.subjectDetailsFormGroup = this.formBuilder.formGroup(subjectDetails);
  }

}
