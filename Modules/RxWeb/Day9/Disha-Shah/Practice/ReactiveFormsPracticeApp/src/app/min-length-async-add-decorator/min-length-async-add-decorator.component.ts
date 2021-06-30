import { Component, OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms"
import { RxFormBuilder } from '@rxweb/reactive-form-validators';
import {Contact} from '../Model/minLengthAsyncUserInfo'

@Component({
  selector: 'app-min-length-async-add-decorator',
  templateUrl: './min-length-async-add-decorator.component.html',
  styleUrls: ['./min-length-async-add-decorator.component.css']
})
export class MinLengthAsyncAddDecoratorComponent implements OnInit {

  contactFormGroup: FormGroup

    constructor(
        private formBuilder: RxFormBuilder    ) { }

    ngOnInit() {
        let contact = new Contact();
        this.contactFormGroup = this.formBuilder.formGroup(contact);
    }

}
