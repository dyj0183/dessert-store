import { Menu } from './menu.model'; // import the "Menu" model so that we can use if to format our data

// This is only for testing. We will put data in the MongoDB instead of locally here
// MENULIST is a type of array with lots of Menu objects inside
export const MENULIST: Menu[] = [
  // indivisual menus, in typescript, we use {key: value} to represent an object (https://www.tutorialspoint.com/typescript/typescript_objects.htm)
  // index 0
  {
    id: '0',
    name: 'Chocolate Cake',
    description: 'Super Delicious with double chocolate added!',
    price: "9.99",
    imageUrl: '../../assets/images/menus/chocolate-cake.jpg',
  },
  // index 1
  {
    id: '1',
    name: 'Egg Tart',
    description: 'Best options for party dessert!',
    price: "8.99",
    imageUrl: '../../assets/images/menus/egg-tart.jpg',
  },
  // index 2
  {
    id: '2',
    name: 'Pudding',
    description: 'Something you will not be able to stop eating!',
    price: "6.99",
    imageUrl: '../../assets/images/menus/pudding.jpg',
  },
];
