import { Component, OnInit } from '@angular/core'; 
import { of } from "rxjs";
import { FormGroup } from "@angular/forms";
import { RxFormBuilder } from '@rxweb/reactive-form-validators';
import {EmployeeInfo} from '../Model/choiceAsyncEmployeeInfo';

@Component({
  selector: 'app-choice-async-add-decorator',
  templateUrl: './choice-async-add-decorator.component.html',
  styleUrls: ['./choice-async-add-decorator.component.css']
})
export class ChoiceAsyncAddDecoratorComponent implements OnInit {

  employeeInfoFormGroup: FormGroup

  qualifications: string[] = [];
  skills: string[] = [];
  hobbies: string[] = [];
  projectDomains: string[] = [];
  languages: string[] = [];
  certifications: string[] = [];

  constructor(
    private formBuilder: RxFormBuilder) { }

  languagesArray: string[] = ["English", "Chinese", "Japanese", "Spanish", "French"];
  qualificationsArray: string[] = ["Secondary", "Senior Secondary", "B.Tech.", "M.Tech.", "B.C.A.", "M.C.A."];
  skillsArray: string[] = ["MVC", "AngularJS", "Angular 5", "C#", "Web Api", "SQL Server"];
  hobbiesArray: string[] = ["Drawing", "Singing", "Dancing", "Travelling", "Sports"];
  projectDomainsArray: string[] = ["ECommerce", "Banking", "Educational", "Gaming"];
  certificationsArray: string[] = ["Microsoft certified", "Google certified", "Oracle certified", "AWS certified", "Adobe certified", "VMware certified"];

  ngOnInit() {
    let employeeInfo = new EmployeeInfo();
    this.employeeInfoFormGroup = this.formBuilder.formGroup(employeeInfo);
  }

  addProjectDomain(element: any, index: number) {
    var indexOf = this.projectDomains.indexOf(element.value);
    element.checked ? this.projectDomains.push(element.value) : this.projectDomains.splice(indexOf, 1);
    this.employeeInfoFormGroup.controls.projectDomains.setValue(this.projectDomains);
  }

  addQualification(element: any, index: number) {
    var indexOf = this.qualifications.indexOf(element.value);
    element.checked ? this.qualifications.push(element.value) : this.qualifications.splice(indexOf, 1);
    this.employeeInfoFormGroup.controls.qualifications.setValue(this.qualifications);
  }

  addSkill(element: any, index: number) {
    var indexOf = this.skills.indexOf(element.value);
    element.checked ? this.skills.push(element.value) : this.skills.splice(indexOf, 1);
    this.employeeInfoFormGroup.controls.skills.setValue(this.skills);
  }

  addHobby(element: any, index: number) {
    var indexOf = this.hobbies.indexOf(element.value);
    element.checked ? this.hobbies.push(element.value) : this.hobbies.splice(indexOf, 1);
    this.employeeInfoFormGroup.controls.hobbies.setValue(this.hobbies);
  }

  addLanguages(element: any, index: number) {
    var indexOf = this.languages.indexOf(element.value);
    element.checked ? this.languages.push(element.value) : this.languages.splice(indexOf, 1);
    this.employeeInfoFormGroup.controls.languages.setValue(this.languages);
  }

  addCertification(element: any) {
    var indexOf = this.certifications.indexOf(element.value);
    element.checked ? this.certifications.push(element.value) : this.certifications.splice(indexOf, 1);
    this.employeeInfoFormGroup.controls.certifications.setValue(this.certifications);
  }

}
