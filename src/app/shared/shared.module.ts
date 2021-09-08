import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SummaryPipe } from './pipes/card-info.pipe';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@NgModule({
  declarations: [
    SummaryPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatSlideToggleModule,
    DragDropModule,
    MatIconModule
  ],
  exports: [
    SummaryPipe,
    FormsModule,
    MatSlideToggleModule,
    DragDropModule,
    MatIconModule,
  ]
})
export class SharedModule {
  // static forRoot(): ModuleWithProviders<SharedModule> {
  //   return {
  //     ngModule: SharedModule
  //   };
  // }
 }
