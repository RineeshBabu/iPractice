import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DkComponent } from './dk/dk.component';

export const DkRoutes: Routes = [{
  path: 'dk',
  component: DkComponent,
  pathMatch: 'full'
}];

@NgModule({
  imports: [RouterModule.forChild(DkRoutes)],
  exports: [RouterModule]
})
export class DkRoutingModule { }
