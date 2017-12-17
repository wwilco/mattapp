import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { MattswhackkywonderlandComponent } from './mattswhackkywonderland/mattswhackkywonderland.component'

import { appRoutes } from './app.routing';


@NgModule({
  declarations: [
    AppComponent,
	FormComponent,
	MattswhackkywonderlandComponent
  ],
  imports: [
	BrowserModule,
	RouterModule,
	appRoutes,
	FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
