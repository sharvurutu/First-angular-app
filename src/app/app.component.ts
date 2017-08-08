import { Component } from '@angular/core';

export class Menu {
  id: number;
  name: string;
}

const MENUS: Menu[] = [
  { id: 1, name: 'Italian' },
  { id: 2, name: 'Indian' },
  { id: 3, name: 'chinese' },
];

@Component({
  selector: 'app-root',
  template: `
    <h1>{{title}}</h1>
    <h2>Menu List</h2>
    <ul class="menus">
      <li *ngFor="let menu of menus"
        [class.selected]="menu === selectedMenu"
        (click)="onSelect(menu)">
        <span class="badge">{{menu.id}}</span> {{menu.name}}
      </li>
    </ul>
    <div *ngIf="selectedMenu">
      <h2>{{selectedMenu.name}} details!</h2>
      <div><label>id: </label>{{selectedMenu.id}}</div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="selectedMenu.name" placeholder="name"/>
      </div>
    </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular App';
  menus = MENUS;
  selectedMenu: Menu;

  onSelect(menu: Menu): void {
    this.selectedMenu = menu;
  }
}
