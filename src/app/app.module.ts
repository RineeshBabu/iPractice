import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DkRoutes } from './dk/dk-routing.module';


import { AppComponent } from './app.component';
import { DkModule } from './dk/dk.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(DkRoutes),
    DkModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
