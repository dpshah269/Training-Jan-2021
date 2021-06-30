import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
  selector: 'app-file-add-validator',
  templateUrl: './file-add-validator.component.html',
  styleUrls: ['./file-add-validator.component.css']
})
export class FileAddValidatorComponent implements OnInit {

  userInfoFormGroup: FormGroup

  fileTypes = ["Picture", "Document",];

  constructor(
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.userInfoFormGroup = this.formBuilder.group({
      fileType: ['',],
      totalImageFiles: ['', RxwebValidators.file({ maxFiles: 5 })],
      totalDocumentFiles: ['', RxwebValidators.file({ minFiles: 5 })],
      minimumFiles: ['', RxwebValidators.file({ minFiles: 5, conditionalExpression: 'x => x.fileType == "Picture"' })],
      maximumFile: ['', RxwebValidators.file({ maxFiles: 5, conditionalExpression: '(x,y) => x.fileType == "Document"' })],
      minMaxFiles: ['', RxwebValidators.file({ minFiles: 5, maxFiles: 10, message: 'You can upload minimum 5 and maximum 10 files.' })],
      excelFiles: ['', RxwebValidators.file({ minFiles: 2, maxFiles: 5, messageKey: 'fileMessageKey' })],
    });
  }

}
