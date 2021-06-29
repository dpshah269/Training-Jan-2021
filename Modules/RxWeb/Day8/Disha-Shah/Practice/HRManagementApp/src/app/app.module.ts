import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RxReactiveFormsModule} from '@rxweb/reactive-form-validators';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { routerModule } from '@rxweb/angular-router';
import { AuthResolverService } from './auth-resolver.service';
import { AuthorizationResolverService } from './authorization-resolver.service';

@routerModule({
  authentication:AuthResolverService,
  authorization:AuthorizationResolverService
})

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RxReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
