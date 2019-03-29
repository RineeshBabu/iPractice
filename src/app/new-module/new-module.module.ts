import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewComponentComponent } from './new-component/new-component.component';
import { HighlightmeDirective } from '../highlightme.directive';
import { AddbothPipe } from '../addboth.pipe';
import { NewChildComponent } from './new-child/new-child.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NewComponentComponent, HighlightmeDirective, AddbothPipe, NewChildComponent],
  exports: [NewComponentComponent, NewChildComponent]
})
export class NewModuleModule { }
