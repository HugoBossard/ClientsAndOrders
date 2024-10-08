import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TemplatesModule } from '../templates/templates.module';
import { ButtonComponent } from './components/button/button.component';
import { TableLightComponent } from './components/table-light/table-light.component';
import { ClientStateDirective } from './directives/client-state.directive';
import { StateDirective } from './directives/state.directive';
import { TotalPipe } from './pipes/total.pipe';

@NgModule({
  declarations: [
    TableLightComponent,
    TotalPipe,
    ButtonComponent,
    StateDirective,
    ClientStateDirective
  ],
  imports: [CommonModule, RouterModule],
  exports: [TemplatesModule, TableLightComponent, TotalPipe, ButtonComponent, StateDirective, ClientStateDirective, ReactiveFormsModule]
})
export class SharedModule { }