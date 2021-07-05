import { Component, OnInit } from '@angular/core';
import { List } from '@rxweb/generics';
import {UserModel} from '../../../models/extended-models/ListAny'
@Component({
  selector: 'app-list-any',
  templateUrl: './list-any.component.html',
  styleUrls: ['./list-any.component.css']
})
export class ListAnyComponent implements OnInit {

  result:any;
     items: List<UserModel> = new List<UserModel>([{ name: 'John' },{name:"David"}]);

  constructor() { }

  ngOnInit() {
    this.result = this.items.any(x=>x.name.startsWith("J"));
  } 

}
