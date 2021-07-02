import { Component, OnInit } from '@angular/core';
import { ErrorMessageBindingStrategy, ReactiveFormConfig } from '@rxweb/reactive-form-validators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ReactiveFormsPracticeApp';

  ngOnInit() {
    ReactiveFormConfig.set({
      "baseConfig": {
        "dateFormat": "ymd",
        "seperator": "/"
      },
      "internationalization": {
        "dateFormat": "ymd",
        "seperator": "/"
      },
      "validationMessage": {
        "required": "this field is required.",
        "alpha": "Only alphabets are allowed.",
        "password": {
          minLength: 'Minimum Character length should be 5.',
          maxLength: 'MaxLength allowed is 15',
          password: "Invalid Password"
        }
      },
      reactiveForm: {
        errorMessageBindingStrategy: ErrorMessageBindingStrategy.OnDirtyOrTouched
     }
    });
  }
}
