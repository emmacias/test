import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { modulo01Routes } from './modulo01/modulo01-routing.module';
import { modulo02Routes } from './modulo02/modulo02-routing.module';
import { modulo03Routes } from './modulo03/modulo03-routing.module';

@NgModule({
  imports: [RouterModule.forChild([
    ...modulo01Routes,
    ...modulo02Routes,
    ...modulo03Routes
  ])],
  exports: [RouterModule]
})
export class RutasModule { }
