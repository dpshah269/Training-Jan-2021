import { Component, OnInit } from '@angular/core';
import { List } from '@rxweb/generics';
import {UserModel} from '../../../models/extended-models/ListDistinctBy'
@Component({
  selector: 'app-list-distinct-by',
  templateUrl: './list-distinct-by.component.html',
  styleUrls: ['./list-distinct-by.component.css']
})
export class ListDistinctByComponent implements OnInit {

  result:any;  
    items: List<UserModel> = new List<UserModel>([{ grades: 68 },{grades:30},{grades:90},{grades:89},{grades:30},{grades:90}]);

  constructor() { }

  ngOnInit() {
    this.result = this.items.distinctBy(x=>x.grades);
  }  

}
