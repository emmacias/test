import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './components/index/index.component';

import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [IndexComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    IndexComponent
  ]
})
export class TemplateModule { }
