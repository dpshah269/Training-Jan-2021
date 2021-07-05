import { Component, OnInit } from '@angular/core';
import { List } from '@rxweb/generics';
import {UserModel} from '../../../models/extended-models/ListAll'
@Component({
  selector: 'app-list-all',
  templateUrl: './list-all.component.html',
  styleUrls: ['./list-all.component.css']
})
export class ListAllComponent implements OnInit {

  result:any;
  items: List<UserModel> = new List<UserModel>([{ name: 'John' },{name:"David"}]);

  constructor() { }

  ngOnInit() {
    this.result = this.items.all(x=>x.name.startsWith("J"));
  } 

}
