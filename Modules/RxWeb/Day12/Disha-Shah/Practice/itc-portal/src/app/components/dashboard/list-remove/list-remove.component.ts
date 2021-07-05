import { Component, OnInit } from '@angular/core';
import { List } from '@rxweb/generics';
import {UserModel} from '../../../models/extended-models/ListRemove'

@Component({
  selector: 'app-list-remove',
  templateUrl: './list-remove.component.html',
  styleUrls: ['./list-remove.component.css']
})
export class ListRemoveComponent implements OnInit {

  result:any;  
  items: List<UserModel> = new List<UserModel>([{ grades: 68 },{grades:89},{grades:30},{grades:90}]);

  constructor() { }

  ngOnInit() {
    this.items.remove({ grades: 68 });
  }  

}
