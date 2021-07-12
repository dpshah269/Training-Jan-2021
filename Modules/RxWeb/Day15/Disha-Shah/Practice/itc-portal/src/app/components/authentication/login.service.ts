
import { Injectable } from "@angular/core";
import { http, RxHttp } from "@rxweb/http";

@http({
    hostKey: "local",
    path: "api/Authentication",
})
@Injectable({
    providedIn: 'root'
})
export class LoginService extends RxHttp  {
   
     constructor() {
        super();
       
    }
}

