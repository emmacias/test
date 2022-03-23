import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { IndexComponent } from './components/index/index.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [IndexComponent],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule
  ]
})
export class Modulo03Module { }
