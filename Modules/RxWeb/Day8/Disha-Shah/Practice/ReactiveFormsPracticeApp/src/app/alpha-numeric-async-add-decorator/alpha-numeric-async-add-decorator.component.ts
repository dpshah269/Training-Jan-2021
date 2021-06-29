import { Component, OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms"
import { RxFormBuilder } from '@rxweb/reactive-form-validators';
import { Location } from '../Model/alphaNumericAsyncUserInfo';

@Component({
  selector: 'app-alpha-numeric-async-add-decorator',
  templateUrl: './alpha-numeric-async-add-decorator.component.html',
  styleUrls: ['./alpha-numeric-async-add-decorator.component.css']
})
export class AlphaNumericAsyncAddDecoratorComponent implements OnInit {

  locationFormGroup: FormGroup

  constructor(
    private formBuilder: RxFormBuilder) { }

  ngOnInit() {
    let location = new Location();
    this.locationFormGroup = this.formBuilder.formGroup(location);
  }

}
