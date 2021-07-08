import { XhrContext, AbstractRequestFilter, ResponseFilter, HttpResponse } from "@rxweb/http"
import { Router } from '@angular/router'
import { Toastr } from '@rxweb/js'
import { BaseToastr } from '../domain/customize-design/toastr'
import { BrowserStorage } from '../domain/services/browser-storage'
export class AuthFilter extends AbstractRequestFilter implements ResponseFilter {

    private baseToastr: BaseToastr
    constructor(private router: Router, private storagedata: BrowserStorage) {
        super()
        this.storagedata = new BrowserStorage();
        this.baseToastr = new BaseToastr();
    }

    onRequest = (context: XhrContext) => {
        let xSession = this.storagedata.local.get("xSession");
        
        if (this.byPassApiList.indexOf(context.request.path) != 0) {
            let authorization = this.storagedata.local.get("auth",false)
            const request_identity = this.storagedata.local.get("key", false);
            if (authorization !== null){
                context.request.headers["Authorization"] = authorization;
                context.request.headers["request_identity"] = request_identity;
            }
            
            if(xSession && authorization){
                var diff = Math.abs(new Date().getTime() - new Date(xSession).getTime());
                var diffDays = Math.ceil(diff / (1000 * 3600)); 
                if(diffDays > 3){
                    this.storagedata.local.clearAll();
                    this.baseToastr.error('Session timeout, please login again');
                    this.router.navigate['/login']
                }
            }
        }
        this.onRequestExecuting(context);
    }

    onResponse = (response: HttpResponse) => {
        let authorization = this.storagedata.local.get("auth",false)
        if (authorization !== null && authorization !== undefined){
            this.storagedata.local.save("xSession",new Date())
        }
        return response;
    }

    byPassApiList: any[] = ["api/Authentication", "api/Authorize/logout"]
}

export enum HttpResponseCode {
    InvalidStatusCode = 0,
    OK = 200,
    BadRequest = 400,
    Unauthorized = 401,
    Forbidden = 403,
    NotFound = 404,
    InternalServerError = 500,
    TokenNotFound = 600,

}
