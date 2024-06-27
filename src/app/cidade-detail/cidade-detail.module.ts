import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CidadeDetailPageRoutingModule } from './cidade-detail-routing.module';

import { CidadeDetailPage } from './cidade-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CidadeDetailPageRoutingModule
  ],
  declarations: [CidadeDetailPage]
})
export class CidadeDetailPageModule {}
