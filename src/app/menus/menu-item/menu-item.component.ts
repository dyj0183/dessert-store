import { Component, OnInit, Input } from '@angular/core';
import { Menu } from '../menu.model';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css'],
})
export class MenuItemComponent implements OnInit {
  @Input() menuItem: Menu; // without using @input, this will not be bindable from menu-list because it is only available in this component. @input is a "decorator"

  // inject MenuService in the constructor so we can use it
  constructor(private menuService: MenuService) {}

  ngOnInit(): void {}

  showMenuDetail() {
    this.menuService.menuClicked.next(this.menuItem); // we use "next" because we are using observable "Subject" to pass data around
  }
}
