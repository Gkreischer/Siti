import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DadosCadastraisPage } from './dados-cadastrais.page';
import { SharedModule } from '../shared/shared.module';
import { EdicaoDadosCadastraisComponent } from '../edicao-dados-cadastrais/edicao-dados-cadastrais.component';

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
    ReactiveFormsModule,
    SharedModule
  ],
  declarations: [
  DadosCadastraisPage
  ],
  entryComponents: [
    EdicaoDadosCadastraisComponent
  ]
})
export class DadosCadastraisPageModule {}
