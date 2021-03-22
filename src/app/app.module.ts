import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuListComponent } from './menus/menu-list/menu-list.component';
import { MenuItemComponent } from './menus/menu-item/menu-item.component';
import { MenuDetailComponent } from './menus/menu-detail/menu-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuListComponent,
    MenuItemComponent,
    MenuDetailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
