import { Component, OnInit } from '@angular/core';
import { List } from '@rxweb/generics';
import {UserModel} from '../../../models/extended-models/ListLastOrDefault'
@Component({
  selector: 'app-list-last-or-default',
  templateUrl: './list-last-or-default.component.html',
  styleUrls: ['./list-last-or-default.component.css']
})
export class ListLastOrDefaultComponent implements OnInit {

  result:any;  
    items: List<UserModel> = new List<UserModel>([{name:"John"},{name:"David"}]);

  constructor() { }

  ngOnInit() {
   this.result =  this.items.lastOrDefault(x=>x.name == "John");
  }  

}
