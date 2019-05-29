import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ModalEdicaoDadosPage } from './modal-edicao-dados.page';

const routes: Routes = [
  {
    path: '',
    component: ModalEdicaoDadosPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ModalEdicaoDadosPage]
})
export class ModalEdicaoDadosPageModule {}
