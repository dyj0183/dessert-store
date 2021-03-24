import { Injectable } from '@angular/core'; // use "ng g c" to create this new service and Angular provides the "Injectable" functionality
import { MENULIST } from './MENULIST';
import { Menu } from './menu.model';
import { Subject } from 'rxjs'; // import rxjs so that we can use Subject observable to emit the data
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

// this service will be used to pass and emit data between components
export class MenuService {
  menus: Menu[] = []; // create an empty array with type Menu
  menusUpdated = new Subject<Menu[]>(); // create a new Subject
  menuClicked = new Subject<Menu>();

  constructor(private http: HttpClient) { }

  // receive menu data from the backend
  getMenus() {
    // Angular httpClient uses observables. we will get back the object from our backend including "message" & "Menu[]"
    this.http.get<{message: string, menus: Menu[]}>('http://localhost:3000/api/menus').subscribe((menuData) => {
      this.menus = menuData.menus; // assign the data we got from backend to our service local variable
      this.menusUpdated.next(this.menus); // emit "this.menus"
    });
  }
}
