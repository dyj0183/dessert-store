import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Menu } from '../menu.model';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.css']
})
export class MenuListComponent implements OnInit, OnDestroy {
  menuList: Menu[] = [];
  subscription: Subscription

  constructor(private menuService: MenuService) { }

  ngOnInit(): void {
    this.menuService.getMenus(); // call this function in the service to grab the menus data from our backend

    this.subscription = this.menuService.menusUpdated.subscribe((menuData: Menu[]) => {
      this.menuList = menuData; // assign the backend menu data to the local variable menus
      console.log(this.menuList);
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
