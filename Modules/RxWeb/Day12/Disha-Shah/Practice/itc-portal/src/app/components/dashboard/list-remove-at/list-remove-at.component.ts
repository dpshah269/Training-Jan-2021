import { Component, OnInit } from '@angular/core';
import { List } from '@rxweb/generics';
import {UserModel} from '../../../models/extended-models/ListRemoveAt'
@Component({
  selector: 'app-list-remove-at',
  templateUrl: './list-remove-at.component.html',
  styleUrls: ['./list-remove-at.component.css']
})
export class ListRemoveAtComponent implements OnInit {

  result:any;
    items: List<UserModel> = new List<UserModel>([{ grades: 68 },{grades:89},{grades:30},{grades:90}]);

  constructor() { }

  ngOnInit() {
   this.result = this.items.removeAt(1);
  } 

}
