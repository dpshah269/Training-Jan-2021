import { OnInit } from "@angular/core";
import { Component } from "@angular/core";
import { translate } from "@rxweb/translate";

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit{
    @translate({translationName:'dashboard'}) dashboard : any;
    
    ngOnInit(){

    }
}