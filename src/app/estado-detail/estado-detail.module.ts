import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EstadoDetailPageRoutingModule } from './estado-detail-routing.module';

import { EstadoDetailPage } from './estado-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EstadoDetailPageRoutingModule
  ],
  declarations: [EstadoDetailPage]
})
export class EstadoDetailPageModule {}
