import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './components/index/index.component';

export const modulo01Routes: Routes = [
  {
    path: 'modulo01',
    component: IndexComponent,
    loadChildren: () => import('./modulo01.module').then(m => m.Modulo01Module)
  }
];
