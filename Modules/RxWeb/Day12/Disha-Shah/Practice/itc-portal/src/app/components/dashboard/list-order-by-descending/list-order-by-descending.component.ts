import { Component, OnInit } from '@angular/core';
import { List } from '@rxweb/generics';
import {UserModel} from '../../../models/extended-models/ListOrderByDescending'

@Component({
  selector: 'app-list-order-by-descending',
  templateUrl: './list-order-by-descending.component.html',
  styleUrls: ['./list-order-by-descending.component.css']
})
export class ListOrderByDescendingComponent implements OnInit {

  result:any;  
    items: List<UserModel> = new List<UserModel>([{ grades: 68 },{grades:89},{grades:30},{grades:90}]);

  constructor() { }

  ngOnInit() {
    this.result = this.items.orderByDescending(x=>x.grades);
  }  

}
