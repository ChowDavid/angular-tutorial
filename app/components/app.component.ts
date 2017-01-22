import { Component } from '@angular/core';
import { MyComponent } from './app.myComponent'; 
import { MyBuildinDirectivesComponent } from './app.myBuildInDirectoryComponent.component'


@Component({
  selector: 'my-app',
  template: `
  <h1>Hello {{name}}</h1>
 <!-- <my-component></my-component>  -->
  <todos></todos>
  `,
})
export class AppComponent  {
  name:string;
  constructor(){
    this.name = 'Angular !';
  }
}
