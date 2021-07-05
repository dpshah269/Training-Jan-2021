import { Component, OnInit } from '@angular/core';
import { List } from '@rxweb/generics';
import {UserModel} from '../../../models/extended-models/ListPop'
@Component({
  selector: 'app-list-pop',
  templateUrl: './list-pop.component.html',
  styleUrls: ['./list-pop.component.css']
})
export class ListPopComponent implements OnInit {

  result:any;
  items: List<UserModel> = new List<UserModel>([{ grades: 68 },{grades:89},{grades:30},{grades:90}]);

  constructor() { }

  ngOnInit() {
   this.items.pop();
  }  

}
