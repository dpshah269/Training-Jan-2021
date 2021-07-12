import { Component, OnInit } from '@angular/core';
import { access } from '@rxweb/angular-router';

@Component({
  selector: 'app-skill-add',
  templateUrl: './skill-add.component.html',
  styleUrls: ['./skill-add.component.css']
})

@access({ accessLevel: 1, action: "post" })
export class SkillAddComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
