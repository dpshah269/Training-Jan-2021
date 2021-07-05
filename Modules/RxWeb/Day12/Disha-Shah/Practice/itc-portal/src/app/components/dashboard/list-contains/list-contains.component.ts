import { Component, OnInit } from '@angular/core';
import { List } from '@rxweb/generics';
import {UserModel} from '../../../models/extended-models/ListContains'
@Component({
  selector: 'app-list-contains',
  templateUrl: './list-contains.component.html',
  styleUrls: ['./list-contains.component.css']
})
export class ListContainsComponent implements OnInit {

  result:any;
    items: List<UserModel> = new List<UserModel>([{ name: 'John' },{name:"David"}]);

  constructor() { }

  ngOnInit() {
    this.result = this.items.contains(x=>x.name == "John");
  } 

}
