import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms';

import { AppComponent }   from './components/app.component';
import { MyComponent }    from './components/app.myComponent'; 
import { MyBuildinDirectivesComponent } from './components/app.myBuildInDirectoryComponent.component';
import {MyPipeComponent} from './components/app.myPipe.component';
import {AppFormComponent} from './components/app.form.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule,ReactiveFormsModule],
  declarations: [ AppComponent, MyComponent,MyBuildinDirectivesComponent,MyPipeComponent,AppFormComponent],
  bootstrap:    [ AppFormComponent ]
})
export class AppModule { }
