// create this menu model, so there is a template to follow when we create or work with menus
// this model will be used in many different components, so we will export it

export class Menu {

  constructor (
    public id: string,
    public name: string,
    public description: string,
    public imageUrl: string,
  ) {}

}
