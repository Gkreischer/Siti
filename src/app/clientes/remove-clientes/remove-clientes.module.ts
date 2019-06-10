import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RemoveClientesPage } from './remove-clientes.page';

const routes: Routes = [
  {
    path: '',
    component: RemoveClientesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RemoveClientesPage]
})
export class RemoveClientesPageModule {}
