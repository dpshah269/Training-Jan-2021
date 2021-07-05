import { Component, OnInit } from '@angular/core';
import { List } from '@rxweb/generics';
import {UserModel} from '../../../models/extended-models/ListTake'
@Component({
  selector: 'app-list-take',
  templateUrl: './list-take.component.html',
  styleUrls: ['./list-take.component.css']
})
export class ListTakeComponent implements OnInit {

  result:any;  
    items: List<UserModel> = new List<UserModel>([{ grades: 68 },{grades:89},{grades:30},{grades:90}]);

  constructor() { }

  ngOnInit() {
    this.result = this.items.take(1);
  } 

}
