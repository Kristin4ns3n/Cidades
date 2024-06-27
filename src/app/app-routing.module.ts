import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'estados',
    loadChildren: () => import('./estados/estados.module').then( m => m.EstadosPageModule)
  },
  {
    path: 'estado-detail',
    loadChildren: () => import('./estado-detail/estado-detail.module').then( m => m.EstadoDetailPageModule)
  },
  {
    path: 'cidades',
    loadChildren: () => import('./cidades/cidades.module').then( m => m.CidadesPageModule)
  },
  {
    path: 'cidade-detail',
    loadChildren: () => import('./cidade-detail/cidade-detail.module').then( m => m.CidadeDetailPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
