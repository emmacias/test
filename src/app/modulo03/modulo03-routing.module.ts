import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './components/index/index.component';

export const modulo03Routes: Routes = [
  {
    path: 'modulo03',
    component: IndexComponent,
    loadChildren: () => import('./modulo03.module').then(m => m.Modulo03Module)
  }
];
