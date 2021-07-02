
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CoreComponent } from '@rxweb/angular-router';
import { BrowserStorage } from 'src/app/domain/services/browser-storage';
import { TopBarService } from './top-bar-service';

@Component({
    selector: 'app-topbar',
    templateUrl: './top-bar.component.html',
})
export class TopBarComponent extends CoreComponent {

    constructor(private topBarService: TopBarService, private router: Router,private storagedata: BrowserStorage) {super();  this.storagedata = new BrowserStorage(); }

    logout() {
        this.topBarService.post<any>({ body: { "AudienceType": "web", "LanguageCode": "en" } }).subscribe(data => {
            window.setTimeout(() => {
                this.router.navigate(["/login"])
                this.storagedata.local.clearAll();
          }, 1000);
       })
    }
}