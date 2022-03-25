import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'modulo01',
    loadChildren: () => import('./modulo01/modulo01.module').then( m => m.Modulo01Module)
  },
  {
    path: 'modulo02',
    loadChildren: () => import('./modulo02/modulo02.module').then( m => m.Modulo02Module)
  },
  {
    path: 'modulo03',
    loadChildren: () => import('./modulo03/modulo03.module').then( m => m.Modulo03Module)
  },
  {
    path: '**',
    redirectTo: 'home'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
