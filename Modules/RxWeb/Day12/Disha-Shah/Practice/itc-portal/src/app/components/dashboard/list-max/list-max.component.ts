import { Component, OnInit } from '@angular/core';
import { List } from '@rxweb/generics';
import {UserModel} from '../../../models/extended-models/ListMax'
@Component({
  selector: 'app-list-max',
  templateUrl: './list-max.component.html',
  styleUrls: ['./list-max.component.css']
})
export class ListMaxComponent implements OnInit {

  result:any;  
    items: List<UserModel> = new List<UserModel>([{ grades: 68 },{grades:89},{grades:30},{grades:90}]);

  constructor() { }

  ngOnInit() {
    this.result = this.items.max();
  } 

}
