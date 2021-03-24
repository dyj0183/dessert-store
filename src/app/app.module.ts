import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuListComponent } from './menus/menu-list/menu-list.component';
import { MenuItemComponent } from './menus/menu-item/menu-item.component';
import { MenuDetailComponent } from './menus/menu-detail/menu-detail.component';
import { MenusComponent } from './menus/menus.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MenuListComponent,
    MenuItemComponent,
    MenuDetailComponent,
    MenusComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
