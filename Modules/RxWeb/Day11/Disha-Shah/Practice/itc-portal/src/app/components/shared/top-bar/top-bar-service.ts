
import { Injectable } from "@angular/core";
import { http, RxHttp } from "@rxweb/http";

@http({
    hostKey: "local",
    path: "api/Authorize/logout",
})
@Injectable({
    providedIn: 'root'
})
export class TopBarService extends RxHttp  {
   
     constructor() {
        super();
       
    }
}
