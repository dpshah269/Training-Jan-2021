import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl, AsyncValidatorFn } from "@angular/forms"
import { User } from '../Model/asyncTemplateDrivenUserInfo'
@Component({
  selector: 'app-async-add-template',
  templateUrl: './async-add-template.component.html',
  styleUrls: ['./async-add-template.component.css']
})
export class AsyncAddTemplateComponent implements OnInit {

  user: User

  constructor(
  ) { }

  ngOnInit() {
    this.user = new User()
  }
  countryNameUnique(control: FormControl) {

    const promise = new Promise((resolve, reject) => {
      if (control.value != "India")
        resolve(null)
      else
        resolve({ 'async': { message: 'Value should be Unique' } })
    });
    return promise;

  }

}
