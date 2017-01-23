import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppFormComponent } from './components/app.form.component';


@NgModule({
  imports: [BrowserModule, ReactiveFormsModule],
  declarations: [AppFormComponent],
  bootstrap: [AppFormComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
