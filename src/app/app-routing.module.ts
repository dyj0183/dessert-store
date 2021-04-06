import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenusComponent } from './menus/menus.component';
import { MenuEditComponent } from './menus/menu-edit/menu-edit.component';
import { MenuDetailComponent } from './menus/menu-detail/menu-detail.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/menus', pathMatch: 'full' },

  {
    path: "menus",
    component: MenusComponent,
    children: [
      { path: 'new', component: MenuEditComponent },
      { path: ':id', component: MenuDetailComponent},
      { path: ':id/edit', component: MenuEditComponent},
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})

// don't forget to import this from app.module.ts in order for it to work
export class AppRoutingModule {}
