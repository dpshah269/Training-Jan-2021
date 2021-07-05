import { Component, OnInit } from '@angular/core';
import { List } from '@rxweb/generics';
import {UserModel} from '../../../models/extended-models/ListSingle'
@Component({
  selector: 'app-list-single',
  templateUrl: './list-single.component.html',
  styleUrls: ['./list-single.component.css']
})
export class ListSingleComponent implements OnInit {

  result:any;  
    items: List<UserModel> = new List<UserModel>([{ grades: 68 },{grades:89},{grades:30},{grades:90}]);

  constructor() { }

  ngOnInit() {
    this.result = this.items.single(x=>x.grades == 68);;
  } 

}
