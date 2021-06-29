import { Component, OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms"
import { RxFormBuilder } from '@rxweb/reactive-form-validators';
import {User} from '../Model/creditCardAsyncUserInfo';
@Component({
  selector: 'app-credit-card-async-add-decorator',
  templateUrl: './credit-card-async-add-decorator.component.html',
  styleUrls: ['./credit-card-async-add-decorator.component.css']
})
export class CreditCardAsyncAddDecoratorComponent implements OnInit {

  userFormGroup: FormGroup
				creditCardTypes = [ "Visa", "AmericanExpress", "Maestro", "JCB", "Discover", "DinersClub", "MasterCard",];

    constructor(
        private formBuilder: RxFormBuilder    ) { }

    ngOnInit() {
        let user = new User();
        this.userFormGroup = this.formBuilder.formGroup(user);
    }

}
