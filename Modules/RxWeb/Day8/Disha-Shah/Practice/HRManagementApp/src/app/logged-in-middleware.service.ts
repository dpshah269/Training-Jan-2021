import { Injectable } from "@angular/core";
import { IMiddleware } from "@rxweb/angular-router";
import { ActivatedRoute, Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class LoggedInMiddlewareService {

  constructor() { }
}
