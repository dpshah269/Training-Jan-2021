import { Component, OnInit } from '@angular/core';
import { List } from '@rxweb/generics';
import {UserModel} from '../../../models/extended-models/ListSingleOrDefault'
@Component({
  selector: 'app-list-single-or-default',
  templateUrl: './list-single-or-default.component.html',
  styleUrls: ['./list-single-or-default.component.css']
})
export class ListSingleOrDefaultComponent implements OnInit {

  result:any;  
  items: List<UserModel> = new List<UserModel>([{ grades: 68 },{grades:89},{grades:30},{grades:90}]);

  constructor() { }

  ngOnInit() {
    this.result = this.items.singleOrDefault(x=>x.grades == 68);
  }
}
