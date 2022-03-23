import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './components/index/index.component';

export const modulo02Routes: Routes = [
  {
    path: 'modulo02',
    component: IndexComponent,
    loadChildren: () => import('./modulo02.module').then(m => m.Modulo02Module)
  }
];
