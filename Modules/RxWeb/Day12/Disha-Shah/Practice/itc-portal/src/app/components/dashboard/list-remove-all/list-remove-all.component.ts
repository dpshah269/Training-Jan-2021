import { Component, OnInit } from '@angular/core';
import { List } from '@rxweb/generics';
import {UserModel} from '../../../models/extended-models/ListRemoveAll'
@Component({
  selector: 'app-list-remove-all',
  templateUrl: './list-remove-all.component.html',
  styleUrls: ['./list-remove-all.component.css']
})
export class ListRemoveAllComponent implements OnInit {

  result:any;  
    items: List<UserModel> = new List<UserModel>([{ grades: 68 },{grades:89},{grades:30},{grades:90}]);

  constructor() { }

  ngOnInit() {
    this.items.removeAll(x=>x.grades == 68);
  } 

}
