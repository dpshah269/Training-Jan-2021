import { Component, OnInit } from '@angular/core';
import { List } from '@rxweb/generics';
import {UserModel} from '../../../models/extended-models/ListAdd'

@Component({
  selector: 'app-list-add',
  templateUrl: './list-add.component.html',
  styleUrls: ['./list-add.component.css']
})
export class ListAddComponent implements OnInit {

  result:any;
     items: List<UserModel> = new List<UserModel>([{ name: 'John' }]);

  constructor() { }

   ngOnInit() {
    this.items.add({name:"Bharat"});
  }
}
