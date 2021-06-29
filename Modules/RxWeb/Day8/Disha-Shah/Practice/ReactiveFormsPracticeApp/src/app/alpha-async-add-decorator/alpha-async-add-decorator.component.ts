import { Component, OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms"
import { RxFormBuilder } from '@rxweb/reactive-form-validators';
import { AddressInfo } from '../Model/alphaAsyncUserInfo';
@Component({
  selector: 'app-alpha-async-add-decorator',
  templateUrl: './alpha-async-add-decorator.component.html',
  styleUrls: ['./alpha-async-add-decorator.component.css']
})
export class AlphaAsyncAddDecoratorComponent implements OnInit {

  addressInfoFormGroup: FormGroup

  constructor(
    private formBuilder: RxFormBuilder) { }

  ngOnInit() {
    let addressInfo = new AddressInfo();
    this.addressInfoFormGroup = this.formBuilder.formGroup(addressInfo);
  }

}
