import { Component, OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms"
import { RxFormBuilder } from '@rxweb/reactive-form-validators';
import { User } from '../Model/maskUserInfo'
@Component({
  selector: 'app-mask-add-decorator',
  templateUrl: './mask-add-decorator.component.html',
  styleUrls: ['./mask-add-decorator.component.css']
})
export class MaskAddDecoratorComponent implements OnInit {

  userFormGroup: FormGroup

  constructor(
    private formBuilder: RxFormBuilder) { }

  ngOnInit() {
    let user = new User();
    this.userFormGroup = this.formBuilder.formGroup(user);
  }

}
