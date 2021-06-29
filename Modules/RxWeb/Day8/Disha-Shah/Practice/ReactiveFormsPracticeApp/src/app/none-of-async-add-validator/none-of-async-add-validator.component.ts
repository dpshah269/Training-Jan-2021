import { Component, OnInit } from '@angular/core' ; import { of } from "rxjs";
import { FormGroup, FormBuilder } from "@angular/forms"
import {  RxwebValidators } from '@rxweb/reactive-form-validators';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-none-of-async-add-validator',
  templateUrl: './none-of-async-add-validator.component.html',
  styleUrls: ['./none-of-async-add-validator.component.css']
})
export class NoneOfAsyncAddValidatorComponent implements OnInit {

  employeeInfoFormGroup: FormGroup
  projectDomains: string[] = [];
  qualifications: string[] = [];
  hobbies: string[] = [];
  skills: string[] = [];
  languages: string[] = [];

  constructor(
    private formBuilder: FormBuilder) { }

  qualificationsArray: string[] = ["Secondary", "Senior Secondary", "B.Tech.", "M.Tech.", "B.C.A.", "M.C.A."];
  skillsArray: string[] = ["MVC", "AngularJS", "Angular 5", "C#", "Web Api", "SQL Server"];
  hobbiesArray: string[] = ["Drawing", "Singing", "Dancing", "Travelling", "Sports"];
  projectDomainsArray: string[] = ["ECommerce", "Banking", "Educational", "Gaming"];
  languagesArray: string[] = ["English", "Spanish", "French", "German", "Chinese"];

  excludedDepartments: string[] = ["HR", "Network", "Sales"];

  ngOnInit() {
    this.employeeInfoFormGroup = this.formBuilder.group({
      department: ['',[], RxwebValidators.noneOfAsync({validatorConfig:of({ matchValues: this.excludedDepartments })})],
      projectDomains: ['',[], RxwebValidators.noneOfAsync({validatorConfig:of({ matchValues: ["ECommerce", "Banking", "Educational", "Gaming"], message: "Please do not select" })})],
      qualifications: ['',[], RxwebValidators.noneOfAsync({validatorConfig:of({ matchValues: ["Secondary", "Senior Secondary", "B.Tech", "M.Tech", "B.C.A.", "M.C.A."], conditionalExpression: (x, y) => x.department == 'DotNet', message: "Please do not select" })})],
      skills: ['',[], RxwebValidators.noneOfAsync({validatorConfig:of({ matchValues: ["MVC", "AngularJS", "Angular 5", "C#", "Web Api", "SQL Server"], conditionalExpression: "x => x.department =='DotNet'", message: "Please do not select" })})],
      hobbies: ['',[], RxwebValidators.noneOfAsync({validatorConfig:of({ matchValues: ["Drawing", "Singing", "Dancing", "Travelling", "Sports"], message: "Please do not select any hobby" })})],
      languages: ['',[], RxwebValidators.noneOfAsync({validatorConfig:of({ matchValues: ["English", "Spanish", "French"], messageKey: 'noneOfMessageKey', message: "Please do not select" })})]
    });
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

  addLanguage(element: any, index: number) {
    var indexOf = this.languages.indexOf(element.value);
    element.checked ? this.languages.push(element.value) : this.languages.splice(indexOf, 1);
    this.employeeInfoFormGroup.controls.languages.setValue(this.languages);
  }


}
