import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { NewComponentComponent } from './new-module/new-component/new-component.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: 'new', component: NewComponentComponent },
  { path: 'new/:id', component: NewComponentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
