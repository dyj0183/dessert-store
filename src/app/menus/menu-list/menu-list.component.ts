import { Component, OnInit } from '@angular/core';
import { fromEventPattern } from 'rxjs';
import { Menu } from '../menu.model';
import { MENULIST } from '../MENULIST';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.css']
})
export class MenuListComponent implements OnInit {
  menus: Menu[] = [];

  constructor() { }

  ngOnInit(): void {
    this.menus = MENULIST;
  }

}
