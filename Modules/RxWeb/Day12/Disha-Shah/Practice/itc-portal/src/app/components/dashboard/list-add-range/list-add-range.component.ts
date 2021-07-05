import { Component, OnInit } from '@angular/core';
import { List } from '@rxweb/generics';
import {UserModel} from '../../../models/extended-models/ListAddRange'
@Component({
  selector: 'app-list-add-range',
  templateUrl: './list-add-range.component.html',
  styleUrls: ['./list-add-range.component.css']
})
export class ListAddRangeComponent implements OnInit {

  result:any;
  items: List<UserModel> = new List<UserModel>([{ name: 'John' }]);
  
  constructor() { }

  ngOnInit() {
    this.items.addRange([{name:"Bharat"},{name:"David"}]);
  } 

}
