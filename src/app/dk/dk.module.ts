import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DkRoutingModule } from './dk-routing.module';
import { DkComponent } from './dk/dk.component';


@NgModule({
  imports: [
    CommonModule,
    DkRoutingModule
  ],
  declarations: [DkComponent]
})
export class DkModule { }
