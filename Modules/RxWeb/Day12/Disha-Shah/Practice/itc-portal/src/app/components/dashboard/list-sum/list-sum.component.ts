import { Component, OnInit } from '@angular/core';
import { List } from '@rxweb/generics';
import {UserModel} from '../../../models/extended-models/ListSum'
@Component({
  selector: 'app-list-sum',
  templateUrl: './list-sum.component.html',
  styleUrls: ['./list-sum.component.css']
})
export class ListSumComponent implements OnInit {

  result:any;  
    items: List<UserModel> = new List<UserModel>([{ grades: 68 },{grades:89},{grades:30},{grades:90}]);

  constructor() { }

  ngOnInit() {
    this.items.sum(x=>x.grades);
  }  

}
