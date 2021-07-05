import { Component, OnInit } from '@angular/core';
import { List } from '@rxweb/generics';
import {UserModel} from '../../../models/extended-models/ListWhere'
@Component({
  selector: 'app-list-where',
  templateUrl: './list-where.component.html',
  styleUrls: ['./list-where.component.css']
})
export class ListWhereComponent implements OnInit {

  result:any;
    items: List<UserModel> = new List<UserModel>([{ name: 'John' },{name:"David"},{name:"John"}]);

  constructor() { }

  ngOnInit() {
    this.result = this.items.where(x=>x.name == "John");
  }  

}
