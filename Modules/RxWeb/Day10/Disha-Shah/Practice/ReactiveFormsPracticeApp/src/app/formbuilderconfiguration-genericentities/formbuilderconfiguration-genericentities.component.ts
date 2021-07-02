import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray } from "@angular/forms"

import { RxFormBuilder, FormBuilderConfiguration } from '@rxweb/reactive-form-validators';
import { StudentCourse, Course, Subjects } from '../Models/FormbuilderconfigurationGenericentitiesUserInfo';

@Component({
  selector: 'app-formbuilderconfiguration-genericentities',
  templateUrl: './formbuilderconfiguration-genericentities.component.html',
  styleUrls: ['./formbuilderconfiguration-genericentities.component.css']
})
export class FormbuilderconfigurationGenericentitiesComponent implements OnInit {

  studentFormGroup: FormGroup

  constructor(
    private formBuilder: RxFormBuilder
  ) { }

  ngOnInit() {
    let studentCourse = new StudentCourse();
    studentCourse.SubjectDetails = new Array<Subjects>();
    studentCourse.SubjectDetails.push(new Subjects);
    var formBuilderConfig = new FormBuilderConfiguration();
    formBuilderConfig.genericEntities = { 'SubjectDetails': Subjects }
    this.studentFormGroup = this.formBuilder.formGroup(studentCourse, formBuilderConfig);
  }

  getFormArray() {
    let formarray = this.studentFormGroup.controls.SubjectDetails as FormArray;
    return formarray.controls;
  }

}
