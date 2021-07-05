import { Component, OnInit } from '@angular/core';
import { List } from '@rxweb/generics';
import {UserModel} from '../../../models/extended-models/ListMaxBy'
@Component({
  selector: 'app-list-max-by',
  templateUrl: './list-max-by.component.html',
  styleUrls: ['./list-max-by.component.css']
})
export class ListMaxByComponent implements OnInit {

  result:any;  
    items: List<UserModel> = new List<UserModel>([{ grades: 68 },{grades:89},{grades:30},{grades:90}]);

  constructor() { }

  ngOnInit(): void {
    this.result = this.items.maxBy(x=>x.grades);
  }

}
