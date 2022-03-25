import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { IndexComponent } from './components/index/index.component';
import { RouterModule } from '@angular/router';
import { Modulo02RoutingModule } from './modulo02-routing.module';



@NgModule({
  declarations: [IndexComponent],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule,
    Modulo02RoutingModule
  ]
})
export class Modulo02Module { }
