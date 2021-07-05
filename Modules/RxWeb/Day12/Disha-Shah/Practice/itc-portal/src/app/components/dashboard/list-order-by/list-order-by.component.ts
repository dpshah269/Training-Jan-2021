import { Component, OnInit } from '@angular/core';
import { List } from '@rxweb/generics';
import {UserModel} from '../../../models/extended-models/ListOrderBy'
@Component({
  selector: 'app-list-order-by',
  templateUrl: './list-order-by.component.html',
  styleUrls: ['./list-order-by.component.css']
})
export class ListOrderByComponent implements OnInit {

  result:any;  
    items: List<UserModel> = new List<UserModel>([{ grades: 68 },{grades:89},{grades:30},{grades:90}]);

  constructor() { }

  ngOnInit() {
    this.result = this.items.orderBy(x=>x.grades);
  } 

}
