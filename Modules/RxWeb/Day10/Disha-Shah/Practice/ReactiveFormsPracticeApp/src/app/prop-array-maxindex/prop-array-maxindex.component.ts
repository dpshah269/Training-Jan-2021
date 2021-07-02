import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray } from "@angular/forms"

import { RxFormBuilder } from '@rxweb/reactive-form-validators';
import { Address, User } from '../Models/PropArrayMaxindexUserInfo'
@Component({
  selector: 'app-prop-array-maxindex',
  templateUrl: './prop-array-maxindex.component.html',
  styleUrls: ['./prop-array-maxindex.component.css']
})
export class PropArrayMaxindexComponent implements OnInit {

  addresses: any;
  userFormGroup: FormGroup

  constructor(
    private formBuilder: RxFormBuilder
  ) { }

  ngOnInit() {
    let user = new User();
    user.addresses = new Array<Address>();
    let address = new Address();
    user.addresses.push(address);
    this.userFormGroup = this.formBuilder.formGroup(user);
  }

  addAddress() {
    this.addresses = this.userFormGroup.controls.addresses as FormArray;
    this.addresses.push(this.formBuilder.formGroup(Address));
  }
  removeAddress(index) {
    this.addresses.removeAt(index);
  }

}
