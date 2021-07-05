import { Component, OnInit } from '@angular/core';
import { List } from '@rxweb/generics';
import {UserModel} from '../../../models/extended-models/ListFirstOrDefault'
@Component({
  selector: 'app-list-first-or-default',
  templateUrl: './list-first-or-default.component.html',
  styleUrls: ['./list-first-or-default.component.css']
})
export class ListFirstOrDefaultComponent implements OnInit {

  result:any;  
  items: List<UserModel> = new List<UserModel>([{ grades: 68 },{grades:89},{grades:30},{grades:90}]);

  constructor() { }

  ngOnInit() {
    this.result = this.items.firstOrDefault(x=>x.grades == 68);
  }

}
