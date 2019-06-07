import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DadosCadastraisPage } from './dados-cadastrais.page';
import { ModalEdicaoDadosPage } from '../modal-edicao-dados/modal-edicao-dados.page';

const routes: Routes = [
  {
    path: '',
    component: DadosCadastraisPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ],
  declarations: [
  DadosCadastraisPage,
  ModalEdicaoDadosPage
  ],
  entryComponents: [
    ModalEdicaoDadosPage
  ]
})
export class DadosCadastraisPageModule {}
