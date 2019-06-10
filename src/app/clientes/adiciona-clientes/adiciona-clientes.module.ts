import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AdicionaClientesPage } from './adiciona-clientes.page';

const routes: Routes = [
  {
    path: '',
    component: AdicionaClientesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AdicionaClientesPage]
})
export class AdicionaClientesPageModule {}
