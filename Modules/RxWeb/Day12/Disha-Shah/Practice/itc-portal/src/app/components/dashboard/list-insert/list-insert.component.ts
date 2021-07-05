import { Component, OnInit } from '@angular/core';
import { List } from '@rxweb/generics';
import {UserModel} from '../../../models/extended-models/ListInsert'
@Component({
  selector: 'app-list-insert',
  templateUrl: './list-insert.component.html',
  styleUrls: ['./list-insert.component.css']
})
export class ListInsertComponent implements OnInit {

  result:any;  
    items: List<UserModel> = new List<UserModel>([{ grades: 68 },{grades:89},{grades:30},{grades:90}]);

  constructor() { }

  ngOnInit() {
    this.items.insert(1,{ grades: 69 });
  }  

}
