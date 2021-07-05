import { Component, OnInit } from '@angular/core';
import { List } from '@rxweb/generics';
import {UserModel} from '../../../models/extended-models/ListLast'
@Component({
  selector: 'app-list-last',
  templateUrl: './list-last.component.html',
  styleUrls: ['./list-last.component.css']
})
export class ListLastComponent implements OnInit {

  result:any;  
    items: List<UserModel> = new List<UserModel>([{name:"John"},{name:"David"}]);

  constructor() { }

  ngOnInit() {
   this.result =  this.items.last(x=>x.name == "John");
  } 

}
