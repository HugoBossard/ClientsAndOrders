import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CoreModule } from "../core/core.module";
import { IconsModule } from "../icons/icons.module";
import { SharedModule } from "../shared/shared.module";
import { ClientsRoutingModule } from './clients-routing.module';
import { FormClientComponent } from './pages/components/form-client/form-client.component';
import { PageAddClientComponent } from './pages/page-add-client/page-add-client.component';
import { PageEditClientComponent } from './pages/page-edit-client/page-edit-client.component';
import { PageListClientsComponent } from './pages/page-list-clients/page-list-clients.component';


@NgModule({
  declarations: [
    PageListClientsComponent,
    PageAddClientComponent,
    PageEditClientComponent,
    FormClientComponent
  ],
  imports: [
    CommonModule,
    ClientsRoutingModule,
    SharedModule,
    CoreModule,
    SharedModule,
    IconsModule
  ],
  exports: [
    PageAddClientComponent,
    PageEditClientComponent,
    FormClientComponent
  ]
})
export class ClientsModule { }
