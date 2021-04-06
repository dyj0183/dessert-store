import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Menu } from '../menu.model';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-menu-edit',
  templateUrl: './menu-edit.component.html',
  styleUrls: ['./menu-edit.component.css'],
})
export class MenuEditComponent implements OnInit {
  menu: Menu;
  newMenu: Menu;
  editMode = false;
  menuId: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private menuService: MenuService
  ) {}

  ngOnInit(): void {
    // we will check here to see if this is for editing an existing menu or adding a new menu
    this.route.params.subscribe((params: Params) => {
      this.menuId = params['id'];

      if (!this.menuId) {
        this.editMode = false;
        return;
      } else {
        this.editMode = true;
        this.menu = this.menuService.getMenu(this.menuId); // if we are editing the existing menu, we want to grab the menu to prepopulate the data on the form
      }
    });
  }

  onSubmit(form: NgForm) {
    const value = form.value; // get values from form's fields

    // create a new menu
    this.newMenu = new Menu(
      '1',
      value.name,
      value.description,
      value.price,
      value.imageUrl
    );

    // if the edit mode is true, then we want to call the edit function, otherwise, call the addContact function
    if (this.editMode == true) {
      this.newMenu.id = this.menuId; // update the new form with original ID
      this.menuService.updateMenu(this.newMenu);
    } else {
      this.menuService.addMenu(this.newMenu);
    }

    // after we are done, route back to the main page: '/contacts' URL
    this.router.navigateByUrl('/menus');
  }

  onCancel() {
    this.router.navigateByUrl('/menus');
  }
}
