import { Component, OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms"
import { RxFormBuilder } from '@rxweb/reactive-form-validators';
import { User } from '../Models/ToIntCompleteUserInfo'
@Component({
  selector: 'app-to-int-complete',
  templateUrl: './to-int-complete.component.html',
  styleUrls: ['./to-int-complete.component.css']
})
export class ToIntCompleteComponent implements OnInit {

  userFormGroup: FormGroup

  constructor(
    private formBuilder: RxFormBuilder) { }

  ngOnInit() {
    let user = new User();
    this.userFormGroup = this.formBuilder.formGroup(user);
  }

}
