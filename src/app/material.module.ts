import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatToolbarModule, MatIconModule, MatMenuModule, MatListModule, MatGridListModule, MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule } from '@angular/material';
import { DragAndDropModule } from 'angular-draggable-droppable';
import { DragulaModule } from 'ng2-dragula';
import { FlexLayoutModule, BREAKPOINT } from '@angular/flex-layout';

const PRINT_BREAKPOINTS = [{
  alias: 'xs.print',
  suffix: 'XsPrint',
  mediaQuery: 'print and (max-width: 297px)',
  overlapping: false
}];

@NgModule({
  imports: [MatButtonModule, MatToolbarModule, MatIconModule, MatMenuModule, MatListModule, MatGridListModule, DragAndDropModule, DragulaModule, MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule, FlexLayoutModule],
  exports: [MatButtonModule, MatToolbarModule, MatIconModule, MatMenuModule, MatListModule, MatGridListModule, DragAndDropModule, DragulaModule, MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule, FlexLayoutModule],
})
export class MaterialModule { }