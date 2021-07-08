import { Component, OnInit } from '@angular/core';
import { HttpClientConfig, HttpResponse } from '@rxweb/http';
import { Router, NavigationError, NavigationStart, NavigationEnd, ActivatedRoute } from '@angular/router';
import { ReactiveFormConfig } from '@rxweb/reactive-form-validators';

import { BaseToastr } from 'src/app/domain/customize-design/toastr';
import { CoreComponent } from '@rxweb/angular-router';
import { Title } from '@angular/platform-browser';
import { filter, map } from 'rxjs/operators';
import { GridCustomTemplate } from '@rxweb/grid';
import { GRID_CUSTOM_TEMPLATES } from 'src/app/custom-templates/grid';
import { HostUriConfig } from '@rxweb/http/interface/host-uri-config';
import { BrowserStorage } from '../../domain/services/browser-storage';
import { AuthFilter, HttpResponseCode } from '../../temp-service/auth-filter';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent extends CoreComponent implements OnInit {

  storageHelper: BrowserStorage;
  toastr: BaseToastr;
  isShowDashboard: boolean = false;
  loginClicked: boolean = false;
  currentService: string;
  lang: string;
  isHome: boolean = false;

  constructor(private browserStorage: BrowserStorage,
    private router: Router) {
    super();
    this.storageHelper = new BrowserStorage();
    this.router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        if (val.url == "/login" || val.url == "/forgot-password") {
          this.isHome = true;
        }
        else {
          this.isHome = false;
        }
      }
    });
    this.toastr = new BaseToastr();

  }
  ngOnInit(): void {

    GridCustomTemplate.register(GRID_CUSTOM_TEMPLATES);

    let currentURL = window.location.href;//this.router.url;
    var currentHostURIs: HostUriConfig[] = [];

    if (currentURL.indexOf('localhost') > -1) {

      currentHostURIs.push({
        name: 'local',
        default: true,
        uri: "https://localhost:44361"
      });
    }
    else if (currentURL.indexOf('uat') > -1) {
      currentHostURIs.push({
        name: 'uat',
        default: false,
        uri: "uat url"
      });
    }
    else {
      currentHostURIs.push({
        name: 'server',
        default: true,
        uri: "http://bonvera-test-api.live1.dev.radixweb.net"
      });
    }

    HttpClientConfig.register({
      hostURIs: currentHostURIs,

      filters: [{ model: AuthFilter }],
      onError: (response: HttpResponse) => {
        if (response.statusCode == 401) {
          this.clearStorageAndLogoutUser('Session is expired, Please login again');
        }
        else if (response.statusCode == 403) {
          this.router.navigate(["/unauthorized"]);
        }
      }


    })

    var auth = this.storageHelper.local.get("auth", false);
    if (auth) {
      this.router.navigate[location.pathname]
    }
    else {
      this.storageHelper.local.clearAll();
      this.router.navigate(["/login"])

    }


    ReactiveFormConfig.set({
      "validationMessage": {
        "required": "You can't leave this empty",
        "notEmpty": "You can't leave this empty",
        "minLength": "Minimum  characters required",
        "maxLength": "More than {{1}}  characters are not permitted",
        "pattern": "The specified input format is not recognized",
        "compare": "The specified values of {{0}} and {{1}} must be the same",
        "contains": "The specified value must ' in the input",
        "alpha": "You can use letters only",
        "alphaNumeric": "You can use letters, numbers and periods only",
        "range": "You need to enter appropriate value in this field",
        "maxNumber": "You can not enter value more than #n#",
        "numeric": "Only number required",
        "email": "Please enter valid email address",
        "latitude": "Please enter a valid latitude",
        "longitude": "Please enter a valid longitude",
        "url": "{{0}} Is not the correct url pattern.",
        "password": "Password length should be of 8 to 20 characters and should have atleast one uppercase, one lowercase letter, a number and a special character, without any whitespaces"
      }, "reactiveForm": { "errorMessageBindingStrategy": 1 }
    });
  }

  clearStorageAndLogoutUser(message: string) {
    this.browserStorage.local.clearAll();
    this.browserStorage.session.clearAll();
    this.router.navigate(['/login']);
    this.toastr.error(message);
  }
}