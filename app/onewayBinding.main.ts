import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppParentComponent } from './components/app.onewayBinding.parent.component';
import { AppChildComponent } from './components/app.onewayBinding.child.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [AppParentComponent,AppChildComponent],
  bootstrap: [AppParentComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
