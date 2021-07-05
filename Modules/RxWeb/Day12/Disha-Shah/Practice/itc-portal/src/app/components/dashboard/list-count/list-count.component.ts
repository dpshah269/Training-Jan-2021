import { Component, OnInit } from '@angular/core';
import { List } from '@rxweb/generics';
import {UserModel} from '../../../models/extended-models/ListCount'
@Component({
  selector: 'app-list-count',
  templateUrl: './list-count.component.html',
  styleUrls: ['./list-count.component.css']
})
export class ListCountComponent implements OnInit {

  result:any;
    items: List<UserModel> = new List<UserModel>([{ grades: 68 },{grades:89},{grades:30},{grades:90}]);

  constructor() { }

  ngOnInit() {
    this.result = this.items.count(x=>x.grades >= 60);
  }  

}
