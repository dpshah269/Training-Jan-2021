import { Component, OnInit } from '@angular/core';
import { List } from '@rxweb/generics';
import {UserModel} from '../../../models/extended-models/ListFirst'
@Component({
  selector: 'app-list-first',
  templateUrl: './list-first.component.html',
  styleUrls: ['./list-first.component.css']
})
export class ListFirstComponent implements OnInit {

  result:any;  
    items: List<UserModel> = new List<UserModel>([{ grades: 89 },{grades:68},{grades:30},{grades:90}]);

  constructor() { }

  ngOnInit() {
    this.result = this.items.first(x=>x.grades == 68);
  } 

}
