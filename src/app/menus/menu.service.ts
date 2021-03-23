import { Injectable } from '@angular/core'; // use "ng g c" to create this new service and Angular provides the "Injectable" functionality
import { MENULIST } from './MENULIST';
import { Menu } from './menu.model';
import { Subject } from 'rxjs'; // import rxjs so that we can use Subject observable to emit the data

@Injectable({
  providedIn: 'root'
})

// this service will be used to pass and emit data between components
export class MenuService {
  menus: Menu[] = []; // create an empty array with type Menu
  menuEmitter = new Subject<Menu>(); // create a new Subject


  constructor() { }
}
