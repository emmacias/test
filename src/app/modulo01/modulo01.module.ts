import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { IndexComponent } from './components/index/index.component';
import { RouterModule } from '@angular/router';
import { Modulo01RoutingModule } from './modulo01-routing.module';



@NgModule({
  declarations: [IndexComponent],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule,
    Modulo01RoutingModule
  ]
})
export class Modulo01Module { }
