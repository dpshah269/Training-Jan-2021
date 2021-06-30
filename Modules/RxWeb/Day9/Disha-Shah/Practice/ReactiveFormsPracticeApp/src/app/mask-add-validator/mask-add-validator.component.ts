import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
  selector: 'app-mask-add-validator',
  templateUrl: './mask-add-validator.component.html',
  styleUrls: ['./mask-add-validator.component.css']
})
export class MaskAddValidatorComponent implements OnInit {

  userFormGroup: FormGroup

  constructor(
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.userFormGroup = this.formBuilder.group({
      firstName: ['',],
      phoneNumber: ['', RxwebValidators.mask({ mask: '(999)-999 9999' })],
      macNumber: ['', [RxwebValidators.mask({ mask: '**:**:**:**:**:**', valueWithMask: true }), RxwebValidators.mac()]],
      postalCode: ['', RxwebValidators.mask({ mask: '999-999', conditionalExpression: (x, y) => x.firstName == "Bharat" })],
      zipcode: ['', RxwebValidators.mask({ mask: '9999', conditionalExpression: 'x => x.firstName == "Bharat"' })],
      contactNumber: ['', RxwebValidators.mask({ mask: '999-9999999', message: 'Enter a valid Contact Number' })],
      residentalContactNumber: ['', RxwebValidators.mask({ mask: '999-9999999', minLength: 10 })],
      alternateContactNumber: ['', RxwebValidators.mask({ mask: '9999999999', messageKey: 'maskMessageKey' })],
    });
  }

}
