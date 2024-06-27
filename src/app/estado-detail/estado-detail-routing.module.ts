import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EstadoDetailPage } from './estado-detail.page';

const routes: Routes = [
  {
    path: '',
    component: EstadoDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EstadoDetailPageRoutingModule {}
