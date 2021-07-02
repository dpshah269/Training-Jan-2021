import { Component, OnInit } from '@angular/core';
import { ReactiveFormConfig } from '@rxweb/reactive-form-validators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'ReactiveFormsPracticeApp';

  ngOnInit(){
    ReactiveFormConfig.set({"validationMessage":{"alpha":"Only alphabets are allowed.","required":"This field is required","reactiveForm":{"errorMessageBindingStrategy":1}}});
  }
}
