import { Injectable } from '@angular/core'; // use "ng g c" to create this new service and Angular provides the "Injectable" functionality
import { MENULIST } from './MENULIST';
import { Menu } from './menu.model';

@Injectable({
  providedIn: 'root'
})

// this service will be used to pass and emit data between components
export class MenuService {

  constructor() { }
}
