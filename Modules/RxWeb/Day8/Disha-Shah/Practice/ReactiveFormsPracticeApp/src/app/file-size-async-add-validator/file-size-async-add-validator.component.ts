import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { RxwebValidators } from '@rxweb/reactive-form-validators';
import { of } from 'rxjs';

@Component({
  selector: 'app-file-size-async-add-validator',
  templateUrl: './file-size-async-add-validator.component.html',
  styleUrls: ['./file-size-async-add-validator.component.css']
})
export class FileSizeAsyncAddValidatorComponent implements OnInit {

  userInfoFormGroup: FormGroup

  fileTypes = ["Picture", "Document",];
  constructor(
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.userInfoFormGroup = this.formBuilder.group({
      fileType: ['',],
      videoFile: ['', [], RxwebValidators.fileSizeAsync({ validatorConfig: of({ maxSize: 100, message: 'File exceed maximum size.' }) })],
      audioFile: ['', [], RxwebValidators.fileSizeAsync({ validatorConfig: of({ minSize: 3, maxSize: 100, message: 'File exceed maximum size.' }) })],
      contactFile: ['', [], RxwebValidators.fileSizeAsync({ validatorConfig: of({ maxSize: 10, message: 'File exceed maximum size.' }) })],
      profilePicture: ['', [], RxwebValidators.fileSizeAsync({ validatorConfig: of({ maxSize: 50, message: 'File exceed maximum size.' }) })],
      excelFile: ['', [], RxwebValidators.fileSizeAsync({ validatorConfig: of({ maxSize: 100, messageKey: 'fileSizeMessageKey', message: 'File exceed maximum size.' }) })],
    });
  }
}
