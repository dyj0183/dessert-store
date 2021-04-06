import { Component, OnInit, Input } from '@angular/core';
import { Menu } from '../menu.model';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css'],
})
export class MenuItemComponent implements OnInit {
  @Input() menuItem: Menu; // without using @input, this will not be bindable from menu-list because it is only available in this component. @input is a "decorator"
  @Input() menuId: string;

  // inject MenuService in the constructor so we can use it
  constructor() {}

  ngOnInit(): void {}
}
