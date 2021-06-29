import { Component, OnInit } from '@angular/core' ; import { of } from "rxjs"

;
import { FormBuilder, FormGroup } from "@angular/forms"
import { RxFormBuilder, RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
  selector: 'app-all-of-async-add-validator',
  templateUrl: './all-of-async-add-validator.component.html',
  styleUrls: ['./all-of-async-add-validator.component.css']
})
export class AllOfAsyncAddValidatorComponent implements OnInit {

  employeeInfoFormGroup: FormGroup;
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

  ngOnInit() {
    this.employeeInfoFormGroup = this.formBuilder.group({
      department: [''],
      projectDomains: ['',[], RxwebValidators.allOfAsync({validatorConfig:of({ matchValues: ["ECommerce", "Banking", "Educational", "Gaming"] })})],
      qualifications: ['',[], RxwebValidators.allOfAsync({validatorConfig:of({ matchValues: ["Secondary", "Senior Secondary", "B.Tech.", "M.Tech.", "B.C.A.", "M.C.A."], conditionalExpression: (x, y) => x.department == 'DotNet', message: "Please select all required qualifications" })})],
      skills: ['',[], RxwebValidators.allOfAsync({validatorConfig:of({ matchValues: ["MVC", "AngularJS", "Angular 5", "C#", "Web Api", "SQL Server"], conditionalExpression: "x => x.department =='DotNet'", message: "Please select all required skills" })})],
      hobbies: ['',[], RxwebValidators.allOfAsync({validatorConfig:of({ matchValues: ["Drawing", "Singing", "Dancing", "Travelling", "Sports"], message: "Please select all hobbies" })})],
      languages: ['',[], RxwebValidators.allOfAsync({validatorConfig:of({ matchValues: ["English", "Spanish", "French"], messageKey: 'allOfAsyncMessageKey' })})]
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
