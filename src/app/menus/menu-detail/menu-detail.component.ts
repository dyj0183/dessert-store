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
    this.route.params.subscribe((params: Params) => {
      this.id = params['id']; // I can do params.id as well
      this.menuDetail = this.menuService.getMenu(this.id);
    });
  }

  onDelete() {
    this.menuService.deleteMenu(this.id);
    this.router.navigateByUrl('/menus');
  }
}
