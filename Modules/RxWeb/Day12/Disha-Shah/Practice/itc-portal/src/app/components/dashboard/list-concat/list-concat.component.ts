import { Component, OnInit } from '@angular/core';
import { List } from '@rxweb/generics';
import {UserModel} from '../../../models/extended-models/ListConcat'
@Component({
  selector: 'app-list-concat',
  templateUrl: './list-concat.component.html',
  styleUrls: ['./list-concat.component.css']
})
export class ListConcatComponent implements OnInit {

  result:any;
    items: List<UserModel> = new List<UserModel>([{ name: 'John' },{name:"David"}]);

  constructor() { }

  ngOnInit() {
    this.result = this.items.concat([{"name":"John"},{"name":"David"}]);
  } 

}
