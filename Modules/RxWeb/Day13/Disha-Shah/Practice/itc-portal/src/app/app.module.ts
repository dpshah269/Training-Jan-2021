import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { RxWebModule } from './rxweb.module';
import { AppComponent } from './components/start/app.component';
import { ROUTES } from './components/start/routing';
import { RxHttp } from '@rxweb/http';
import { BaseToastr } from './domain/customize-design/toastr';
import { ModalView } from './domain/customize-design/modal';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';
import {RxReactiveDynamicFormsModule} from '@rxweb/reactive-dynamic-forms';
import { MultiLingualData } from '@rxweb/localization';
import { routerModule, RxRoutingModule } from '@rxweb/angular-router';
import { SharedModule } from './components/shared/shared.module';
import { RxSelectModule } from '@rxweb/angular/select';
import { RxTranslateModule } from '@rxweb/translate';
import {LoginService} from './components/authentication/login.service';
import {TopBarService} from './components/shared/top-bar/top-bar-service';
import {SidebarComponent} from './components/shared/side-bar/side-bar.component';
import {TopBarComponent} from './components/shared/top-bar/top-bar.component';

import { AuthResolver } from './domain/security/authentication-resolver';
import { AuthorizationResolver } from './domain/security/authorization-resolver';

const route = RouterModule.forRoot(ROUTES, { preloadingStrategy: PreloadAllModules, onSameUrlNavigation: 'reload', relativeLinkResolution: 'legacy' });
MultiLingualData.addOrUpdate('global', {
  internationalization: {
    date: {
      format: 'mdy',
      separator: '/'
    }
  }
});
@routerModule({
  authentication:AuthResolver,
  authorization:AuthorizationResolver
})
@NgModule({
  declarations: [
    AppComponent,TopBarComponent,SidebarComponent
  ],

  imports: [
    BrowserModule, route, RxWebModule, FormsModule, ReactiveFormsModule, RxReactiveFormsModule, RxRoutingModule, SharedModule, RxSelectModule
    , RxTranslateModule,RxReactiveDynamicFormsModule//, HttpClientModule
  ],
  providers: [RxHttp, Title, BaseToastr, ModalView, LoginService,TopBarService],
  bootstrap: [AppComponent],
  exports: [RouterModule ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
