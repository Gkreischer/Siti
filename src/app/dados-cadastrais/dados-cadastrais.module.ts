import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DadosCadastraisPage } from './dados-cadastrais.page';

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
    RouterModule.forChild(routes)
  ],
  declarations: [DadosCadastraisPage]
})
export class DadosCadastraisPageModule {}
