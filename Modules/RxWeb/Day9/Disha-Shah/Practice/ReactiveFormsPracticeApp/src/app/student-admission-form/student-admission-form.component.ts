import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { RxwebValidators, ValidationAlphabetLocale } from '@rxweb/reactive-form-validators';

@Component({
  selector: 'app-student-admission-form',
  templateUrl: './student-admission-form.component.html',
  styleUrls: ['./student-admission-form.component.css']
})
export class StudentAdmissionFormComponent implements OnInit {

  studentInfoFormGroup: FormGroup;

  fileTypes = ["Picture", "Document",];

  qualifications: string[] = [];
  skills: string[] = [];

  qualificationsArray: string[] = ["Secondary", "Senior Secondary", "B.Tech.", "M.Tech.", "B.C.A.", "M.C.A."];
  skillsArray: string[] = ["MVC", "AngularJS", "Angular 5", "C#", "Web Api", "SQL Server"];

  constructor(
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.studentInfoFormGroup = this.formBuilder.group({
      firstName: ['', RxwebValidators.compose({ validators: [RxwebValidators.required(), RxwebValidators.alpha(), RxwebValidators.maxLength({ value: 16, message: 'max 16 characters are allowed' })] })],
      lastName: ['', RxwebValidators.compose({ validators: [RxwebValidators.required(), RxwebValidators.alpha(), RxwebValidators.maxLength({ value: 16, message: 'max 16 characters are allowed' })] })],
      age: ['', RxwebValidators.compose({ validators: [RxwebValidators.minNumber({ value: 3 }), RxwebValidators.maxNumber({ value: 20 })], conditionalExpression: (x, y) => x.firstName == "Bharat" })],
      city: ['', RxwebValidators.alpha({ conditionalExpression: 'x => x.firstName =="Bharat"', message: 'Only alphabets are allowed' })],
      zipCode: ['', RxwebValidators.pattern({ expression: { 'zipCode': /^[0-9]{5}(?:-[0-9]{4})?$/ }, message: 'Zip code should match 12345 or 12345-6789' })],
      contactNumber: ['', RxwebValidators.mask({ mask: '9999999999', message: 'Enter a valid Contact Number' })],
      confirmContactNumber: ['', RxwebValidators.compose({ validators: [RxwebValidators.mask({ mask: '9999999999', message: 'Enter a valid Contact Number' }), RxwebValidators.compare({ fieldName: 'contactNumber', messageKey: 'compareMessageKey', message: 'contact number doesnt match' })] })],
      residentalContactNumber: ['', RxwebValidators.mask({ mask: '999-9999999', minLength: 10, message: 'Enter a valid Residential Number' })],
      fileType: ['',],
      minimumFiles: ['', RxwebValidators.compose({ validators: [RxwebValidators.file({ minFiles: 2, conditionalExpression: 'x => x.fileType == "Picture"', message: 'min 2 files required' }), RxwebValidators.extension({ extensions: ['jpg', 'png'], conditionalExpression: 'x => x.fileType == "Picture"', message: 'file should be .jpg or .png' })] })],
      maximumFile: ['', RxwebValidators.compose({ validators: [RxwebValidators.file({ maxFiles: 5, conditionalExpression: 'x => x.fileType == "Document"', message: 'max 5 files required' }), RxwebValidators.extension({ extensions: ['pdf', 'doc', 'docx'], conditionalExpression: 'x => x.fileType == "Document"', message: 'file should be .pdf, .doc or .docx' })] })],
      email: ['', RxwebValidators.compose({ validators: [RxwebValidators.email({ message: 'Please enter valid email' }), RxwebValidators.contains({ value: '@gmail.com', message: 'Please enter valid gmail id' })] })],
      department: [''],
      qualifications: ['', RxwebValidators.choice({ minLength: 2, conditionalExpression: (x, y) => x.department == 'DotNet', message: 'Please choose options according to minLength and maxLength' })],
      skills: ['', RxwebValidators.choice({ maxLength: 3, conditionalExpression: "x => x.department =='DotNet'", message:'Please choose options according to minLength and maxLength' })],
      totalMarks:['',], 
      marks:['', RxwebValidators.lessThanEqualTo({fieldName:'totalMarks', message: 'marks should be less than total marks' })],
      ischecked: ['', RxwebValidators.requiredTrue({ message: 'required' })]
    });
  }


  addQualification(element: any, index: number) {
    var indexOf = this.qualifications.indexOf(element.value);
    element.checked ? this.qualifications.push(element.value) : this.qualifications.splice(indexOf, 1);
    this.studentInfoFormGroup.controls.qualifications.setValue(this.qualifications);
  }

  addSkill(element: any, index: number) {
    var indexOf = this.skills.indexOf(element.value);
    element.checked ? this.skills.push(element.value) : this.skills.splice(indexOf, 1);
    this.studentInfoFormGroup.controls.skills.setValue(this.skills);
  }
}
