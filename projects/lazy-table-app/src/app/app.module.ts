import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LazyTableModule } from '../../../lazy-table/src/lib/lazy-table.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LazyTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
