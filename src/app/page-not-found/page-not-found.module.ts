import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PagenotfoundRoutingModule } from './page-not-found-routing.module';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';


@NgModule({
  declarations: [
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    PagenotfoundRoutingModule
  ],
  exports: [
    PageNotFoundComponent
  ]
})
export class PagenotfoundModule { }
