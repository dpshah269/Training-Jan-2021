import { Injectable } from "@angular/core";
import { IAuthorize, AuthorizeConfig } from "@rxweb/angular-router";
import { Router, ActivatedRouteSnapshot } from "@angular/router";
import { HttpClient } from "@angular/common/http";

export var dbAccessModule: any;
@Injectable({
  providedIn: 'root'
})
export class AuthorizationResolverService implements IAuthorize{

  constructor(private http: HttpClient, private router: Router) {}
  authorizeChildren(authorizeConfig: AuthorizeConfig, pageAuthorizeConfig: AuthorizeConfig): boolean | Promise<boolean> {
    throw new Error("Method not implemented.");
  }

  authorize(
    authorizeConfig: AuthorizeConfig,
    route: ActivatedRouteSnapshot
  ): Promise<boolean> | boolean {
    var promise = new Promise<boolean>((resolve, reject) => {
      var t = this;

      if (dbAccessModule == undefined || dbAccessModule == null) {
        //server side api
        this.http
          .get("assets/user-access/user-access.json")
          .subscribe(response => {
            dbAccessModule = response;
            let isAccess = this.verifyAuthorization(authorizeConfig);
            resolve(isAccess);
            if (!isAccess) this.router.navigate(["/dashboard"]);
          });
      } else {
        let isAccess = this.verifyAuthorization(authorizeConfig);
        resolve(isAccess);
        if (!isAccess) this.router.navigate(["/dashboard"]);
      }
    });
    return promise;
  }

  verifyAuthorization(authorizeConfig: AuthorizeConfig): boolean {
    return dbAccessModule[authorizeConfig.accessLevel][authorizeConfig.action];
  }
}
