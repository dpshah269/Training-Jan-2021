import { Component, OnInit } from '@angular/core';
import { List } from '@rxweb/generics';
import {UserModel} from '../../../models/extended-models/ListGroupBy'
@Component({
  selector: 'app-list-group-by',
  templateUrl: './list-group-by.component.html',
  styleUrls: ['./list-group-by.component.css']
})
export class ListGroupByComponent implements OnInit {

  result:any;  
    items: List<UserModel> = new List<UserModel>([{ grades: 68 },{grades:89},{grades:30},{grades:90}]);

  constructor() { }

  ngOnInit() {
    this.result = this.items.groupBy(x=>x.grades);
  } 

}
