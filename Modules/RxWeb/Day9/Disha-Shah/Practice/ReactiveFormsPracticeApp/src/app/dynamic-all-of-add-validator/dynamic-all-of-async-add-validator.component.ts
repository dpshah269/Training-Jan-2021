import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { RxwebValidators } from '@rxweb/reactive-form-validators';
import { HttpClient } from '@angular/common/http';
import { FormBuilderConfiguration, RxFormBuilder } from '@rxweb/reactive-form-validators';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-dynamic-all-of-async-add-validator',
  templateUrl: './dynamic-all-of-async-add-validator.component.html',
  styleUrls: ['./dynamic-all-of-async-add-validator.component.css']
})
export class DynamicAllOfAsyncAddValidatorComponent implements OnInit {

  employeeInfoFormGroup: FormGroup
  hobbies: string[] = [];
  skills: string[] = [];
  projectDomains: string[] = [];
  languages: string[] = [];

  constructor(
    private formBuilder: RxFormBuilder, private http: HttpClient) { }

  skillsArray: string[] = ["MVC", "AngularJS", "Angular 5", "C#", "Web Api", "SQL Server"];
  hobbiesArray: string[] = ["Drawing", "Singing", "Dancing", "Travelling", "Sports"];
  projectDomainsArray: string[] = ["ECommerce", "Banking", "Educational", "Gaming"];
  languagesArray: string[] = ["English", "Spanish", "French", "German", "Chinese"];

  ngOnInit() {
    let formBuilderConfiguration = new FormBuilderConfiguration();
    this.http.get('assets/JSON/allOfValidator.json').subscribe(dynamic => {
      formBuilderConfiguration.dynamicValidation = JSON.parse(JSON.stringify(dynamic));
      var employeeInfo = { department: '', projectDomains: '', skills: '', hobbies: '', languages: '' }
      this.employeeInfoFormGroup = this.formBuilder.group(employeeInfo, formBuilderConfiguration);
    })
  }

  addProjectDomain(element: any, index: number) {
    var indexOf = this.projectDomains.indexOf(element.value);
    element.checked ? this.projectDomains.push(element.value) : this.projectDomains.splice(indexOf, 1);
    this.employeeInfoFormGroup.controls.projectDomains.setValue(this.projectDomains);
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
