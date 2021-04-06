import { Component, OnDestroy, OnInit } from '@angular/core';
import { MenuService } from '../menu.service';
import { Menu } from '../menu.model';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-menu-detail',
  templateUrl: './menu-detail.component.html',
  styleUrls: ['./menu-detail.component.css'],
})
export class MenuDetailComponent implements OnInit {
  menuDetail: Menu;
  detailSubscription: Subscription;
  id: string;

  // inject MenuService in the constructor so that we can use it
  constructor(
    private menuService: MenuService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    // this.detailSubscription = this.menuService.menuClicked.subscribe(
    //   (menuItem: Menu) => {
    //     this.menuDetail = menuItem;
    //   }
    // );
    this.route.params.subscribe((params: Params) => {
      this.id = params['id']; // I can do params.id as well
      this.menuDetail = this.menuService.getMenu(this.id);
    });
  }

  onDelete(menuId: string) {
    this.menuService.deleteMenu(menuId);
    this.router.navigateByUrl('/menus');
  }

  // ngOnDestroy() {
  //   this.detailSubscription.unsubscribe(); // must unsubscribe after we are done, otherwise we will havew memory leak
  // }
}
