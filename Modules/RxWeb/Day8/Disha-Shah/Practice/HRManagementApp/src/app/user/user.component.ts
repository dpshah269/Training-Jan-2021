import { Component, OnInit } from '@angular/core';
import { access } from '@rxweb/angular-router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

@access({accessLevel:1,action:'post'})
export class UserComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
