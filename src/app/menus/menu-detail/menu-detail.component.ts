import { Component, OnDestroy, OnInit } from '@angular/core';
import { MenuService } from '../menu.service';
import { Menu } from '../menu.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-menu-detail',
  templateUrl: './menu-detail.component.html',
  styleUrls: ['./menu-detail.component.css'],
})
export class MenuDetailComponent implements OnInit, OnDestroy {
  menuDetail: Menu;
  detailSubscription: Subscription;

  // inject MenuService in the constructor so that we can use it
  constructor(private menuService: MenuService) {}

  ngOnInit(): void {
    this.detailSubscription = this.menuService.menuClicked.subscribe(
      (menuItem: Menu) => {
        this.menuDetail = menuItem;
      }
    );
  }

  ngOnDestroy() {
    this.detailSubscription.unsubscribe(); // must unsubscribe after we are done, otherwise we will havew memory leak
  }
}
