import { Component, OnInit } from '@angular/core';
import { List } from '@rxweb/generics';
import {UserModel} from '../../../models/extended-models/ListAverage'

@Component({
  selector: 'app-list-average',
  templateUrl: './list-average.component.html',
  styleUrls: ['./list-average.component.css']
})
export class ListAverageComponent implements OnInit {

  result:any;
    items: List<UserModel> = new List<UserModel>([{ grades: 68 },{grades:89},{grades:30},{grades:90}]);

  constructor() { }

  ngOnInit() {
    this.result = this.items.average(x=>x.grades);
  }

}
