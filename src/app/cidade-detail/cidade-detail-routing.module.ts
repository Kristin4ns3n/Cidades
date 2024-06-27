import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CidadeDetailPage } from './cidade-detail.page';

const routes: Routes = [
  {
    path: '',
    component: CidadeDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CidadeDetailPageRoutingModule {}
