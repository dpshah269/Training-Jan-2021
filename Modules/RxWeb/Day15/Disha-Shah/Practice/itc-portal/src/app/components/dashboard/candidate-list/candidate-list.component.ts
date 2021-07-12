import { Component, OnInit } from '@angular/core';
import { access, CoreComponent } from '@rxweb/angular-router';
import { SkillAddComponent } from '../skill-add/skill-add.component';

@Component({
  selector: 'app-candidate-list',
  templateUrl: './candidate-list.component.html',
  styleUrls: ['./candidate-list.component.css']
})

@access({ accessLevel: 1, action: "get" })
export class CandidateListComponent extends CoreComponent implements OnInit {
  skillAdd: any = SkillAddComponent;
  private fieldArray: Array<any> = [];
  private newAttribute: any = {};
  public studentList: any = [];
  constructor() {
    super();
  }

  ngOnInit() {
    this.fieldArray.push(this.newAttribute);
    this.newAttribute = {};
    this.studentList = [
      { firstName: "John", lastName: "Doe", email: "john@gmail.com" },
      { firstName: "Mary", lastName: "Elizabeth", email: "mary@gmail.com" }
    ];
  }
}
