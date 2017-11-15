import { Injectable } from '@angular/core';

@Injectable()
export class NavService {
  public navItems:navItem[];

  constructor() {
    this.navItems=[
      new navItem("Home",""),
      new navItem("cake",""),
      new navItem("about",""),
      new navItem("contact",""),
    ]
   }

}
  export class navItem{
    constructor(public text:string, public url: string){

    }
  }
