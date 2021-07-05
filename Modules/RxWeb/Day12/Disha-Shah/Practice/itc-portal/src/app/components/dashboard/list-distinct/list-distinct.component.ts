import { Component, OnInit } from '@angular/core';
import { List } from '@rxweb/generics';
import {UserModel} from '../../../models/extended-models/ListDistinct'
@Component({
  selector: 'app-list-distinct',
  templateUrl: './list-distinct.component.html',
  styleUrls: ['./list-distinct.component.css']
})
export class ListDistinctComponent implements OnInit {

  result:any;
    items: List<UserModel> = new List<UserModel>([{ grades: 68 },{grades:30},{grades:90},{grades:89},{grades:30},{grades:90}]);

  constructor() { }

  ngOnInit() {
    this.result = this.items.distinct();
  }  

}
