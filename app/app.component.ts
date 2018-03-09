import {Component} from '@angular/core'

@Component({
  selector:"myapp",
  template:`<div>{{name}}</div>`
  
})

export class TitleComponent{ 
  
  name:string;
  constructor()
  {
     this.name="Hello World !!";
  }
}