import { Component, OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms"
import { RxFormBuilder } from '@rxweb/reactive-form-validators';
import { User } from '../Models/SuffixAddUserInfo'
@Component({
  selector: 'app-suffix-add',
  templateUrl: './suffix-add.component.html',
  styleUrls: ['./suffix-add.component.css']
})
export class SuffixAddComponent implements OnInit {

  userFormGroup: FormGroup

  constructor(
    private formBuilder: RxFormBuilder) { }

  ngOnInit() {
    let user = new User();
    this.userFormGroup = this.formBuilder.formGroup(user);
  }

}
