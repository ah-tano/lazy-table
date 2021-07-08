import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LazyTableComponent } from './lazy-table.component';
import { PaginatorComponent } from './paginator/paginator.component';
import { NgUnsubscribe } from './shared/directives/ng-unsubscribe/ng-unsubscribe.directive';


@NgModule({
  declarations: [
    LazyTableComponent,
    PaginatorComponent,
    NgUnsubscribe
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    LazyTableComponent
  ]
})
export class LazyTableModule { }
