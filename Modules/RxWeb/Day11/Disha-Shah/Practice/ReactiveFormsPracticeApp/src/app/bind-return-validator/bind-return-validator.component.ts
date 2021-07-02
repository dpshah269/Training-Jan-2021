import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { RxwebValidators, NumericValueType } from '@rxweb/reactive-form-validators';

@Component({
  selector: 'app-bind-return-validator',
  templateUrl: './bind-return-validator.component.html',
  styleUrls: ['./bind-return-validator.component.css']
})
export class BindReturnValidatorComponent implements OnInit {

  userInfoFormGroup: FormGroup

  constructor(
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.userInfoFormGroup = this.formBuilder.group({
      negativeNumber: ['', RxwebValidators.numeric({
        dynamicConfig: (x, y) => {
          if (x.typeValue == 1)
            return { acceptValue: NumericValueType.PositiveNumber }
          else
            return { acceptValue: NumericValueType.NegativeNumber }
        },
        allowDecimal: false,
        message: 'Positive Integer'
      })
      ]

    });
  }

}
