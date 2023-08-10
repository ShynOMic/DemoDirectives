import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExoRoutingModule } from './exo-routing.module';
import { ExoComponent } from './exo.component';
import { Exo1Component } from './exo1/exo1.component';
import { SharedModule } from '../shared/shared.module';
import { Exo2Component } from './exo2/exo2.component';
import { ShowListComponent } from './exo2/show-list/show-list.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ExoComponent,
    Exo1Component,
    Exo2Component,
    ShowListComponent
  ],
  imports: [
    CommonModule,
    ExoRoutingModule,
    SharedModule,
    // FormsModule
  ]
})
export class ExoModule { }
