import { NgModule } from '@angular/core';
import { LazyTableComponent } from './lazy-table.component';
import { CommonModule } from '@angular/common';
import { SortDirective } from './sort/sort.directive';


@NgModule({
  declarations: [
    LazyTableComponent,
    SortDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LazyTableComponent
  ]
})
export class LazyTableModule { }
