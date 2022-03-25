import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { IndexComponent } from './components/index/index.component';
import { RouterModule } from '@angular/router';
import { Modulo03RoutingModule } from './modulo03-routing.module';



@NgModule({
  declarations: [IndexComponent],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule,
    Modulo03RoutingModule
  ]
})
export class Modulo03Module { }
