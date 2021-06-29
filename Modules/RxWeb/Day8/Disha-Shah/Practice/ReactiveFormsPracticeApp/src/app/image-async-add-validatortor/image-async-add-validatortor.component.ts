import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { RxwebValidators } from '@rxweb/reactive-form-validators';
import { of } from 'rxjs';

@Component({
  selector: 'app-image-async-add-validatortor',
  templateUrl: './image-async-add-validatortor.component.html',
  styleUrls: ['./image-async-add-validatortor.component.css']
})
export class ImageAsyncAddValidatortorComponent implements OnInit {

  userInfoFormGroup: FormGroup

  ImageTypes = ["Picture", "IdentityCard",]; constructor(
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.userInfoFormGroup = this.formBuilder.group({
      imageType: ['',],
      profilePhoto: ['', [], RxwebValidators.imageAsync({ validatorConfig: of({ maxHeight: 100, maxWidth: 100 }) })],
      signature: ['', [], RxwebValidators.imageAsync({ validatorConfig: of({ maxHeight: 100, maxWidth: 100 }) })],
      voterId: ['', [], RxwebValidators.imageAsync({ validatorConfig: of({ minHeight: 10, maxHeight: 100, minWidth: 10, maxWidth: 10 }) })],
      identityCard: ['', [], RxwebValidators.imageAsync({ validatorConfig: of({ minHeight: 10, maxHeight: 100, maxWidth: 100 }) })],
      drivinglicense: ['', [], RxwebValidators.imageAsync({ validatorConfig: of({ maxHeight: 100, maxWidth: 100 }) })],
      residenceProof: ['', [], RxwebValidators.imageAsync({ validatorConfig: of({ maxHeight: 100, maxWidth: 100, message: 'File exceed maximum Height.' }) })],
      passport: ['', [], RxwebValidators.imageAsync({ validatorConfig: of({ maxHeight: 100, maxWidth: 100, messageKey: 'imageMessageKey' }) })],
    });
  }

}
