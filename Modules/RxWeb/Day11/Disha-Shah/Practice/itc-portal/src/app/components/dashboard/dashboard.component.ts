
import { Component } from '@angular/core';
import { access } from '@rxweb/angular-router'
import { vUser } from '../../view-models/user.model';
import { AppGrid } from '../../domain/app-grid';
import { RxTranslation, translate } from '@rxweb/translate';
@access({ accessLevel: 1, action: 'get' })
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {
  @translate() global: { [key: string]: any }
  constructor(private rxTranslation: RxTranslation) {
    this.staticData();
  }

  gridConfig: AppGrid;
  userList = [];

  ngOnInit() {

    this.bindGrid();

  }

  changeLanguage(languageCode) {
    this.rxTranslation.change(languageCode);
  }
  bindGrid() {
    this.gridConfig = new AppGrid(
      this.userList, vUser);
    this.gridConfig.design(document.getElementById("grid"));

  }


  staticData() {
    this.userList = [
      { "id": 1, "journalId": 9, "name": "Case Studies", "displayOrder": 1 },
      { "id": 2, "journalId": 9, "name": "Research Paper", "displayOrder": 2 },
      { "id": 3, "journalId": 9, "name": "Short Communication", "displayOrder": 3 },
      { "id": 4, "journalId": 9, "name": "demo", "displayOrder": 4 },
      { "id": 5, "journalId": 9, "name": "demo2", "displayOrder": 5 },
      { "id": 6, "journalId": 9, "name": "Editorial", "displayOrder": 6 },
      { "id": 7, "journalId": 9, "name": "Review Article", "displayOrder": 7 },
      { "id": 8, "journalId": 9, "name": "Book Review", "displayOrder": 8 },
      { "id": 9, "journalId": 9, "name": "Technical Note", "displayOrder": 9 },
      { "id": 10, "journalId": 9, "name": "demo3", "displayOrder": 10 },
      { "id": 11, "journalId": 9, "name": "demo4", "displayOrder": 11 },
      { "id": 12, "journalId": 9, "name": "demo5", "displayOrder": 12 }]
  }
}