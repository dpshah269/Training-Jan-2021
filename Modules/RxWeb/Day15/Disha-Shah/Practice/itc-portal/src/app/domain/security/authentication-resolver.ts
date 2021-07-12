import { Injectable } from '@angular/core';
import { IAuthResolver } from '@rxweb/angular-router'
import { RxHttp } from '@rxweb/http';
import { BrowserStorage } from '../services/browser-storage';
import { CoreComponent } from '@rxweb/angular-router';

import { vUser } from 'src/app/models/extended-models/v-user';
var Users: any = [];
@Injectable({
    providedIn: 'root',
})
export class AuthResolver extends CoreComponent implements IAuthResolver {

    constructor(private http: RxHttp,private storagedata: BrowserStorage) {
        super();
        this.storagedata = new BrowserStorage();
    }

    resolveAuth(): Promise<{ [key: string]: any; }> | { [key: string]: any; } {

        var promise = new Promise<{ [key: string]: any; }>((resolve, reject) => {
            var auth = this.storagedata.local.get("auth",false);
            if (auth) {
                if (Users.length == 0)
                this.http.get<vUser>({ path: "api/Authorize/userDetails"}).subscribe(response => {
                    resolve(response);
                    Users = response;
                })
            }
        })
        
        return promise;
    }
}
