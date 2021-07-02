import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from "@angular/forms"

import { RxFormBuilder, FormBuilderConfiguration, FormGroupExtension, RxFormGroup } from '@rxweb/reactive-form-validators';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-commit-dynamic-validator',
  templateUrl: './commit-dynamic-validator.component.html',
  styleUrls: ['./commit-dynamic-validator.component.css']
})
export class CommitDynamicValidatorComponent implements OnInit {

  editForm: RxFormGroup

  constructor(
    private formBuilder: RxFormBuilder, private http: HttpClient) { }

  ngOnInit() {
    this.editForm = <RxFormGroup>this.formBuilder.group({
      id: [1],
      name: [''],
      designation: ['']
    })
  }

  update() {
    this.http.get('assets/dynamic.json').subscribe(dynamic => {
      this.editForm.patchModelValue(dynamic);
      this.editForm.commit();
    })
  }

}
